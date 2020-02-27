// Copyright 2013-2020, University of Colorado Boulder

/**
 * Class that represents a stack of bricks in the model.  Note that a single
 * brick is represented as a stack of size 1.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import Shape from '../../../../../kite/js/Shape.js';
import inherit from '../../../../../phet-core/js/inherit.js';
import balancingAct from '../../../balancingAct.js';
import Mass from '../Mass.js';

// constants
const BRICK_WIDTH = 0.2; // In meters.
const BRICK_HEIGHT = BRICK_WIDTH / 3;
const BRICK_MASS = 5; // In kg.

/**
 * @param {number} numBricks
 * @param {Vector2} initialPosition
 * @param {Object} [options]
 * @constructor
 */
function BrickStack( numBricks, initialPosition, options ) {

  if ( numBricks <= 0 ) { throw new Error( 'Must have at least one brick in stack' ); }

  this.numBricks = numBricks;
  initialPosition = initialPosition || Vector2.ZERO; // Default initial position.

  // Generate the shape of the brick stack.
  const brickStackShape = new Shape();
  let brickOriginY = 0;
  for ( let i = 0; i < numBricks; i++ ) {
    brickStackShape.rect( 0, brickOriginY, BRICK_WIDTH, BRICK_HEIGHT );
    brickOriginY += BRICK_HEIGHT;
  }

  this.shape = brickStackShape;

  Mass.call( this, numBricks * BRICK_MASS, initialPosition, false, options );
}

balancingAct.register( 'BrickStack', BrickStack );

export default inherit( Mass, BrickStack, {

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