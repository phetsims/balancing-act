// Copyright 2002-2013, University of Colorado Boulder

/**
 * A node that represents a stack of bricks in the view.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var MassDragHandler = require( 'BALANCING_ACT/common/view/MassDragHandler' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );
  var unknownMassString = require( 'string!BALANCING_ACT/unknownMassLabel' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {BrickStack} brickStack
   * @param {ModelViewTransform2} mvt
   * @param {boolean} isLabeled
   * @param {Property} labelVisibleProperty
   * @param {boolean} draggable
   * @constructor
   */
  function BrickStackNode( brickStack, mvt, isLabeled, labelVisibleProperty, draggable ) {
    Node.call( this, { cursor: 'pointer' } );
    var thisNode = this;
    thisNode.brickStack = brickStack;
    thisNode.mvt = mvt;
    thisNode.previousAngle = 0;

    // Create and add the main shape node.
    var shapeNode = new Path( mvt.modelToViewShape( brickStack.shape ), { fill: 'rgb( 205, 38, 38 )', stroke: 'black', lineWidth: 1 } );
    thisNode.addChild( shapeNode );

    // Create and add the mass label.
    if ( isLabeled ) {
      var massLabel;
      if ( brickStack.isMystery ) {
        massLabel = new Text( unknownMassString, { font: new PhetFont( 12 ) } );
      }
      else {
        // NOTE: The MultiLineText node was tried for this, but the spacing looked bad.
        massLabel = new Node();
        var massValueText = new Text( brickStack.massValue, { font: new PhetFont( 12 ), centerX: 0 } );
        massLabel.addChild( massValueText );
        massLabel.addChild( new Text( kgString, { font: new PhetFont( 12 ), centerX: 0, top: massValueText.bottom - 4 } ) );
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
      thisNode.center = mvt.modelToViewPosition( brickStack.position ).plus( offsetToBottom );
    } );

    // Add event listener for mouse activity.
    if ( draggable ) {
      this.addInputListener( new MassDragHandler( brickStack, mvt ) );
    }
  }

  return inherit( Node, BrickStackNode );
} );
