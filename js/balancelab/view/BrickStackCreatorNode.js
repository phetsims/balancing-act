// Copyright 2013-2015, University of Colorado Boulder

/**
 * This object type represents a stack of bricks in a tool box.  When the user
 * clicks on this node, the corresponding model element is added to the model
 * at the user's mouse location.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  var BrickStackNode = require( 'BALANCING_ACT/common/view/BrickStackNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MassCreatorNode = require( 'BALANCING_ACT/balancelab/view/MassCreatorNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Property = require( 'AXON/Property' );
  var Shape = require( 'KITE/Shape' );
  var Vector2 = require( 'DOT/Vector2' );

  // Model-view transform for scaling the node used in the tool box.  This
  // may scale the node differently than what is used in the model so that
  // items in the tool box can be sized differently (generally smaller).
  var SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 150 );

  /**
   * @param {number} numBricks
   * @param {BalanceLabModel} model
   * @param {ModelViewTransform2} modelViewTransform
   * @param {Object} [options]
   * @constructor
   */
  function BrickStackCreatorNode( numBricks, model, modelViewTransform, options ) {
    MassCreatorNode.call( this, modelViewTransform, numBricks * BrickStack.BRICK_MASS, true, options );
    this.numBricks = numBricks;
    this.model = model;
    var selectionNode = new BrickStackNode(
      new BrickStack( numBricks, Vector2.ZERO, false ),
      SCALING_MVT,
      false,
      new Property( false ),
      false
    );

    // Make a larger touch area.  The diameter of the circle was determined empirically.
    selectionNode.touchArea = Shape.circle(
      selectionNode.bounds.width / 2,
      selectionNode.bounds.height / 2,
      selectionNode.bounds.width * 0.8
    );

    this.setSelectionNode( selectionNode );
    this.positioningOffset = new Vector2( 0, -modelViewTransform.modelToViewDeltaY( BrickStack.BRICK_HEIGHT * numBricks / 2 ) );
  }

  return inherit( MassCreatorNode, BrickStackCreatorNode, {
    addElementToModel: function( position ) {
      var brickStack = new BrickStack( this.numBricks, position );
      brickStack.userControlled = true;
      brickStack.animationDestination = position;
      this.model.addMass( brickStack );
      return brickStack;
    }
  } );
} );