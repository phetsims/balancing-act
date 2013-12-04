// Copyright 2002-2013, University of Colorado Boulder

/**
 * Class that represents a stack of bricks in the model.  Note that a single
 * brick is represented as a stack of size 1.
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Shape = require( 'KITE/Shape' );
  var ShapeMass = require( 'BALANCING_ACT/common/model/ShapeMass' );
  var BASharedConstants = require( 'BALANCING_ACT/common/BASharedConstants' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var BRICK_WIDTH = 0.2; // In meters.
  var BRICK_HEIGHT = BRICK_WIDTH / 3;
  var BRICK_MASS = 5; // In kg.

  /**
   * @param {number} numBricks
   * @param {Vector2} initialPosition
   * @constructor
   */
  function BrickStack( numBricks, initialPosition ) {

    // Generate the shape of the brick stack.
    var brickStackShape = new Shape();
    var brickOrigin = Vector2.ZERO;
    for ( var i = 0; i < numBricks; i++ ) {
      brickStackShape.moveTo( brickOrigin.x, brickOrigin.y );
      brickStackShape.lineTo( brickOrigin.x + BRICK_WIDTH / 2, brickOrigin.y );
      brickStackShape.lineTo( brickOrigin.x + BRICK_WIDTH / 2, brickOrigin.y + BRICK_HEIGHT );
      brickStackShape.lineTo( brickOrigin.x - BRICK_WIDTH / 2, brickOrigin.y + BRICK_HEIGHT );
      brickStackShape.lineTo( brickOrigin.x - BRICK_WIDTH / 2, brickOrigin.y );
      brickStackShape.lineTo( brickOrigin.x, brickOrigin.y );
      brickStackShape.close();
      // Move origin to the next brick.
      brickOrigin = new Vector2( brickOrigin.x, brickOrigin.y + BRICK_HEIGHT );
    }

    // Invoke superconstructor.
    ShapeMass.call( this, numBricks * BRICK_MASS, brickStackShape, initialPosition );
  }

  return inherit( ShapeMass, BrickStack,
    {
      initiateAnimation: function() {
        // Calculate velocity.  A higher velocity is used if the model element
        // has a long way to travel, otherwise it takes too long.
        var velocity = Math.max( this.position.distance( this.animationDestination ) / BASharedConstants.MAX_REMOVAL_ANIMATION_DURATION, BASharedConstants.MIN_ANIMATION_VELOCITY );
        this.expectedAnimationTime = getPosition().distance( this.animationDestination ) / velocity; // In seconds.
        // Calculate the animation motion vector.
        this.animationMotionVector = new Vector2( velocity, 0 );
        var animationAngle = Math.atan2( this.animationDestination.y - this.position.y, this.animationDestination.x - this.position.x );
        this.animationMotionVector.rotate( animationAngle );
        // Update the property that tracks the animation state.
        this.animating = true;
      },

      step: function( dt ) {
        if ( this.animating ) {
          // Do a step of the linear animation towards the destination.
          if ( this.position.distance( this.animationDestination ) >= this.animationMotionVector.magnitude() * dt ) {
            // Perform next step of animation.
            this.translate( animationMotionVector.times( dt ) );
            this.animationScale = Math.max( this.animationScale - ( dt / this.expectedAnimationTime ) * 0.9, 0.1 );
          }
          else {
            // Close enough - animation is complete.
            this.position = animationDestination;
            this.animating = false;
            this.animationScale = 1;
          }
        }
      },
      // Public constants
      BRICK_MASS: BRICK_MASS,
      BRICK_HEIGHT: BRICK_HEIGHT
    } );
} );


