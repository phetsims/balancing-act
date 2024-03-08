// Copyright 2013-2024, University of Colorado Boulder

/**
 * A node that represents a stack of bricks in the view.
 *
 * @author John Blanco
 */

import Multilink from '../../../../axon/js/Multilink.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Path, Text, VBox } from '../../../../scenery/js/imports.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import MassDragHandler from './MassDragHandler.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const unknownMassLabelStringProperty = BalancingActStrings.unknownMassLabelStringProperty;

// constants
const LABEL_FONT = new PhetFont( 12 );
const LINE_WIDTH = 1;

class BrickStackNode extends VBox {

  /**
   * @param {BrickStack} brickStack
   * @param {ModelViewTransform2} modelViewTransform
   * @param {boolean} isLabeled
   * @param {Property} labelVisibleProperty
   * @param {boolean} draggable
   */
  constructor( brickStack, modelViewTransform, isLabeled, labelVisibleProperty, draggable ) {
    super( { cursor: 'pointer' } );

    this.modelViewTransform = modelViewTransform;
    this.previousAngle = 0;

    // Create and add the main shape node.
    const transformedBrickShape = modelViewTransform.modelToViewShape( brickStack.shape );
    const bricksNode = new Path( transformedBrickShape, {
      fill: 'rgb( 205, 38, 38 )',
      stroke: 'black',
      lineWidth: LINE_WIDTH,
      touchArea: transformedBrickShape.bounds.dilatedY( 10 ),
      mouseArea: transformedBrickShape.bounds.dilatedY( 10 )
    } );

    // We link to this below if massLabel exists.
    let massLabel;

    const updateMassLabelVisibility = visible => {
      massLabel.visible = visible;
    };

    // Create and add the mass label.
    let kgText;
    if ( isLabeled ) {
      const maxTextWidth = bricksNode.bounds.width;
      if ( brickStack.isMystery ) {
        massLabel = new Text( unknownMassLabelStringProperty, {
          font: LABEL_FONT,
          maxWidth: maxTextWidth
        } );
      }
      else {

        // NOTE: The MultiLineText node was tried for this, but the spacing looked bad.
        const massValueText = new Text(
          brickStack.massValue,
          {
            font: LABEL_FONT,
            maxWidth: maxTextWidth
          }
        );
        massValueText.selfBoundsProperty.link( selfBounds => {
          massValueText.localBounds = selfBounds.withOffsets( 0, 0, 0, -2 );
        } );
        kgText = new Text(
          kgStringProperty,
          {
            font: LABEL_FONT,
            maxWidth: maxTextWidth
          }
        );

        massLabel = new VBox( {
          children: [ massValueText, kgText ],
          align: 'center',
          spacing: 0
        } );
      }
      this.addChild( massLabel );

      const massLabelHeightFactorTouchArea = massLabel.height / 3;
      const massLabelHeightFactorMouseArea = massLabel.height / 8;
      bricksNode.setTouchArea( bricksNode.touchArea.dilatedY( massLabelHeightFactorTouchArea )
        .shiftedY( -massLabelHeightFactorTouchArea ) );
      bricksNode.setMouseArea( bricksNode.mouseArea.dilatedY( massLabelHeightFactorMouseArea )
        // Mouse area ends where the bricksNode ends at the bottom.
        .shiftedY( bricksNode.bottom - bricksNode.touchArea.bottom - massLabelHeightFactorMouseArea ) );

      // Control label visibility.
      labelVisibleProperty.link( updateMassLabelVisibility );
    }

    // We addChild after the isLabeled conditional so that the bricksNode is in the bottom VBox cell.
    this.addChild( bricksNode );

    // Set initial position and record so deltas can be subsequently used. This helps minimize transformation when
    // moving the items.
    let offsetToBottom = new Vector2( 0, -bricksNode.height / 2 );
    let previousRotationAngle = 0;

    // Define a function to update the position of the node based on the model's position and rotational angle.
    const updateNodePositionAndRotation = ( rotationAngle, position ) => {

      // Handle the rotation.
      this.rotateAround( bricksNode.center.plus( offsetToBottom ), previousRotationAngle - rotationAngle );
      offsetToBottom = offsetToBottom.rotated( previousRotationAngle - rotationAngle );
      previousRotationAngle = rotationAngle;

      // Handle the position.  This algorithm using a different corner to set be position depending on whether the brick
      // stack is tilting to the left or the right.  This is so that the size of the label, which can affect the width
      // of the node when tilted, doesn't factor into the positioning of the node.
      const modelShapeBounds = brickStack.shape.getBounds();
      const x = Math.cos( rotationAngle ) * modelShapeBounds.width / 2;
      const y = Math.sin( rotationAngle ) * modelShapeBounds.width / 2;
      if ( rotationAngle <= 0 ) {
        const leftBottomInModelSpace = position.plusXY( -x, y );
        const leftBottomInViewSpace = modelViewTransform.modelToViewPosition( leftBottomInModelSpace );
        this.leftBottom = leftBottomInViewSpace.plusXY( -LINE_WIDTH / 2, LINE_WIDTH / 2 );
      }
      else {
        const rightBottomInModelSpace = position.plusXY( x, -y );
        const rightBottomInViewSpace = modelViewTransform.modelToViewPosition( rightBottomInModelSpace );
        this.rightBottom = rightBottomInViewSpace.plusXY( LINE_WIDTH / 2, LINE_WIDTH / 2 );
      }
    };

    Multilink.multilink(
      [ brickStack.rotationAngleProperty, brickStack.positionProperty ],
      ( angle, position ) => {
        updateNodePositionAndRotation( angle, position );
      }
    );

    if ( massLabel ) {
      this.localBoundsProperty.link( () => {
        updateNodePositionAndRotation( brickStack.rotationAngleProperty.value, brickStack.positionProperty.value );
      } );
    }

    // Make this non-pickable when animating so that users can't grab it mid-flight.
    const updatePickabilityWhenAnimating = animating => {
      if ( !this.isDisposed ) {
        this.pickable = !animating;
      }
    };
    brickStack.animatingProperty.link( updatePickabilityWhenAnimating );

    // Add the drag handler if this is intended to be draggable.
    if ( draggable ) {

      // @public (read-only) {MassDragHandler} - drag handler, made available for use by creator nodes
      this.dragHandler = new MassDragHandler( brickStack, modelViewTransform );

      this.addInputListener( this.dragHandler );
    }

    // Unlink any listeners that could cause memory leaks.
    this.disposeBrickStackNode = () => {
      kgText && kgText.dispose();
      brickStack.animatingProperty.unlink( updatePickabilityWhenAnimating );
      if ( labelVisibleProperty.hasListener( updateMassLabelVisibility ) ) {
        labelVisibleProperty.unlink( updateMassLabelVisibility );
      }
      if ( this.dragHandler ) {
        this.removeInputListener( this.dragHandler );
      }
    };
  }

  /**
   * @public
   * @override
   */
  dispose() {
    this.disposeBrickStackNode();
    super.dispose();
  }
}

balancingAct.register( 'BrickStackNode', BrickStackNode );

export default BrickStackNode;