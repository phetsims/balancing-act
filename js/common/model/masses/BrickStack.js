// Copyright 2013-2017, University of Colorado Boulder

/**
 * Class that represents a stack of bricks in the model.  Note that a single
 * brick is represented as a stack of size 1.
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Mass = require( 'BALANCING_ACT/common/model/Mass' );
  var Shape = require( 'KITE/Shape' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var BRICK_WIDTH = 0.2; // In meters.
  var BRICK_HEIGHT = BRICK_WIDTH / 3;
  var BRICK_MASS = 5; // In kg.

  /**
   * @param {number} numBricks
   * @param {Vector2} initialPosition
   * @constructor
   */
  function BrickStack( numBricks, initialPosition ) {

    if ( numBricks <= 0 ) { throw new Error( 'Must have at least one brick in stack' ); }

    this.numBricks = numBricks;
    initialPosition = initialPosition || Vector2.ZERO; // Default initial position.

    // Generate the shape of the brick stack.
    var brickStackShape = new Shape();
    var brickOriginY = 0;
    for ( var i = 0; i < numBricks; i++ ) {
      brickStackShape.rect( 0, brickOriginY, BRICK_WIDTH, BRICK_HEIGHT );
      brickOriginY += BRICK_HEIGHT;
    }

    this.shape = brickStackShape;

    Mass.call( this, numBricks * BRICK_MASS, initialPosition );
  }

  balancingAct.register( 'BrickStack', BrickStack );

  return inherit( Mass, BrickStack, {

      createCopy: function() {
        return new BrickStack( this.numBricks, this.positionProperty.get() );
      },

      getMiddlePoint: function() {
        return this.shape.bounds.center.rotated( this.rotationAngleProperty.get() ).plus( this.positionProperty.get() );
      }
    },
    {
      // static constants
      BRICK_MASS: BRICK_MASS,
      BRICK_HEIGHT: BRICK_HEIGHT
    }
  );
} );


