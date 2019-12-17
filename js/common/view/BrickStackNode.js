// Copyright 2013-2019, University of Colorado Boulder

/**
 * A node that represents a stack of bricks in the view.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MassDragHandler = require( 'BALANCING_ACT/common/view/MassDragHandler' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Path = require( 'SCENERY/nodes/Path' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );
  const Vector2 = require( 'DOT/Vector2' );

  // strings
  const kgString = require( 'string!BALANCING_ACT/kg' );
  const unknownMassLabelString = require( 'string!BALANCING_ACT/unknownMassLabel' );

  /**
   * @param {BrickStack} brickStack
   * @param {ModelViewTransform2} modelViewTransform
   * @param {boolean} isLabeled
   * @param {Property} labelVisibleProperty
   * @param {boolean} draggable
   * @constructor
   */
  function BrickStackNode( brickStack, modelViewTransform, isLabeled, labelVisibleProperty, draggable ) {
    Node.call( this, { cursor: 'pointer' } );
    const self = this;
    self.brickStack = brickStack;
    self.modelViewTransform = modelViewTransform;
    self.previousAngle = 0;

    // Create and add the main shape node.
    const transformedBrickShape = modelViewTransform.modelToViewShape( brickStack.shape );
    const shapeNode = new Path( transformedBrickShape, {
      fill: 'rgb( 205, 38, 38 )',
      stroke: 'black',
      lineWidth: 1,
      touchArea: transformedBrickShape.bounds.dilatedY( 10 )
    } );
    self.addChild( shapeNode );

    // Create and add the mass label.
    if ( isLabeled ) {
      let massLabel;
      const maxTextWidth = shapeNode.bounds.width;
      if ( brickStack.isMystery ) {
        massLabel = new RasterizedTextNode(
          unknownMassLabelString,
          { font: new PhetFont( 12 ), maxWidth: maxTextWidth }
        );
      }
      else {
        // NOTE: The MultiLineText node was tried for this, but the spacing looked bad.
        massLabel = new Node();
        const massValueText = new RasterizedTextNode(
          brickStack.massValue,
          { font: new PhetFont( 12 ) },
          { centerX: 0, maxWidth: maxTextWidth, pickable: false /* set pickable to true if RasterizedTextNode is ever replaced with regular Text node */ }
        );
        massLabel.addChild( massValueText );
        massLabel.addChild( new RasterizedTextNode(
          kgString,
          { font: new PhetFont( 12 ) },
          {
            centerX: 0,
            top: massValueText.bottom - 4,
            maxWidth: maxTextWidth,
            pickable: false // set pickable to true if RasterizedTextNode is ever replaced with regular Text node
          } )
        );
      }
      massLabel.centerX = shapeNode.centerX;
      massLabel.bottom = shapeNode.top - 1;
      self.addChild( massLabel );

      // Control label visibility.
      labelVisibleProperty.link( function( visible ) {
        massLabel.visible = visible;
      } );
    }

    // Set initial position and record so deltas can be subsequently used.
    // This helps minimize transformation when moving the items.

    let offsetToBottom = new Vector2( 0, -self.height / 2 );
    let previousRotationAngle = 0;

    // Monitor the brick stack for position and angle changes.
    brickStack.rotationAngleProperty.link( function( newAngle ) {
      self.rotateAround( self.center.plus( offsetToBottom ), previousRotationAngle - newAngle );
      offsetToBottom = offsetToBottom.rotated( previousRotationAngle - newAngle );
      previousRotationAngle = newAngle;
    } );
    brickStack.positionProperty.link( function( newPosition ) {
      self.center = modelViewTransform.modelToViewPosition( newPosition ).plus( offsetToBottom );
    } );

    // Make this non-pickable when animating so that users can't grab it mid-flight.
    brickStack.animatingProperty.link( function( animating ) {
      self.pickable = !animating;
    } );

    // Add event listener for mouse activity.
    if ( draggable ) {
      this.addInputListener( new MassDragHandler( brickStack, modelViewTransform ) );
    }
  }

  balancingAct.register( 'BrickStackNode', BrickStackNode );

  return inherit( Node, BrickStackNode );
} );
