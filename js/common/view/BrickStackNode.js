// Copyright 2013-2015, University of Colorado Boulder

/**
 * A node that represents a stack of bricks in the view.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MassDragHandler = require( 'BALANCING_ACT/common/view/MassDragHandler' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );
  var Vector2 = require( 'DOT/Vector2' );

  // strings
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var unknownMassLabelString = require( 'string!BALANCING_ACT/unknownMassLabel' );

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
    var thisNode = this;
    thisNode.brickStack = brickStack;
    thisNode.modelViewTransform = modelViewTransform;
    thisNode.previousAngle = 0;

    // Create and add the main shape node.
    var transformedBrickShape = modelViewTransform.modelToViewShape( brickStack.shape );
    var shapeNode = new Path( transformedBrickShape, {
      fill: 'rgb( 205, 38, 38 )',
      stroke: 'black',
      lineWidth: 1,
      touchArea: transformedBrickShape.bounds.dilatedY( 10 )
    } );
    thisNode.addChild( shapeNode );

    // Create and add the mass label.
    if ( isLabeled ) {
      var massLabel;
      var maxTextWidth = shapeNode.bounds.width;
      if ( brickStack.isMystery ) {
        massLabel = new RasterizedTextNode(
          unknownMassLabelString,
          { font: new PhetFont( 12 ), maxWidth: maxTextWidth }
        );
      }
      else {
        // NOTE: The MultiLineText node was tried for this, but the spacing looked bad.
        massLabel = new Node();
        var massValueText = new RasterizedTextNode(
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
      thisNode.addChild( massLabel );

      // Control label visibility.
      labelVisibleProperty.link( function( visible ) {
        massLabel.visible = visible;
      } );
    }

    // Set initial position and record so deltas can be subsequently used.
    // This helps minimize transformation when moving the items.

    var offsetToBottom = new Vector2( 0, -thisNode.height / 2 );
    var previousRotationAngle = 0;

    // Monitor the brick stack for position and angle changes.
    brickStack.rotationAngleProperty.link( function( newAngle ) {
      thisNode.rotateAround( thisNode.center.plus( offsetToBottom ), previousRotationAngle - brickStack.rotationAngle );
      offsetToBottom = offsetToBottom.rotated( previousRotationAngle - brickStack.rotationAngle );
      previousRotationAngle = brickStack.rotationAngle;
    } );
    brickStack.positionProperty.link( function( newPosition ) {
      thisNode.center = modelViewTransform.modelToViewPosition( brickStack.position ).plus( offsetToBottom );
    } );

    // Add event listener for mouse activity.
    if ( draggable ) {
      this.addInputListener( new MassDragHandler( brickStack, modelViewTransform ) );
    }
  }

  balancingAct.register( 'BrickStackNode', BrickStackNode );

  return inherit( Node, BrickStackNode );
} );
