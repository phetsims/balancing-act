// Copyright 2013-2025, University of Colorado Boulder

/**
 * A node that represents a stack of bricks in the view.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Multilink from '../../../../axon/js/Multilink.js';
import { TReadOnlyProperty } from '../../../../axon/js/TReadOnlyProperty.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import BrickStack from '../model/masses/BrickStack.js';
import MassDragHandler from './MassDragHandler.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const unknownMassLabelStringProperty = BalancingActStrings.unknownMassLabelStringProperty;

// constants
const LABEL_FONT = new PhetFont( 12 );
const LINE_WIDTH = 1;

export default class BrickStackNode extends VBox {

  public readonly modelViewTransform: ModelViewTransform2;
  public readonly previousAngle: number;
  public readonly dragHandler?: MassDragHandler;
  private readonly disposeBrickStackNode: () => void;

  public constructor( brickStack: BrickStack, modelViewTransform: ModelViewTransform2, isLabeled: boolean, labelVisibleProperty: TReadOnlyProperty<boolean>, draggable: boolean ) {
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

    // Create and add the mass label.
    let massLabel: VBox | Text | null = null;

    // We link to this below if massLabel exists.
    const updateMassLabelVisibility = ( visible: boolean ): void => {
      massLabel!.visible = visible;
    };

    let kgText: Text;
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

      bricksNode.setTouchArea( ( bricksNode.touchArea as Bounds2 ).dilatedY( massLabelHeightFactorTouchArea )
        .shiftedY( -massLabelHeightFactorTouchArea ) );

      bricksNode.setMouseArea( ( bricksNode.mouseArea as Bounds2 ).dilatedY( massLabelHeightFactorMouseArea )
        // Mouse area ends where the bricksNode ends at the bottom.
        .shiftedY( bricksNode.bottom - ( bricksNode.touchArea as Bounds2 ).bottom - massLabelHeightFactorMouseArea ) );

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
    const updateNodePositionAndRotation = ( rotationAngle: number, position: Vector2 ): void => {

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
      ( angle: number, position: Vector2 ) => {
        updateNodePositionAndRotation( angle, position );
      }
    );

    if ( massLabel ) {
      this.localBoundsProperty.link( () => {
        updateNodePositionAndRotation( brickStack.rotationAngleProperty.value, brickStack.positionProperty.value );
      } );
    }

    // Make this non-pickable when animating so that users can't grab it mid-flight.
    const updatePickabilityWhenAnimating = ( animating: boolean ): void => {
      if ( !this.isDisposed ) {
        this.pickable = !animating;
      }
    };
    brickStack.animatingProperty.link( updatePickabilityWhenAnimating );

    // Add the drag handler if this is intended to be draggable.
    if ( draggable ) {

      // drag handler, made available for use by creator nodes
      this.dragHandler = new MassDragHandler( brickStack, modelViewTransform );

      this.addInputListener( this.dragHandler );
    }

    // Unlink any listeners that could cause memory leaks.
    this.disposeBrickStackNode = () => {
      kgText && kgText.dispose();
      massLabel && massLabel.dispose();
      brickStack.animatingProperty.unlink( updatePickabilityWhenAnimating );
      if ( labelVisibleProperty.hasListener( updateMassLabelVisibility ) ) {
        labelVisibleProperty.unlink( updateMassLabelVisibility );
      }
      if ( this.dragHandler ) {
        this.removeInputListener( this.dragHandler );
      }
    };
  }

  public override dispose(): void {
    this.disposeBrickStackNode();
    super.dispose();
  }
}

balancingAct.register( 'BrickStackNode', BrickStackNode );