// Copyright 2013-2025, University of Colorado Boulder

/**
 * Class that represents a stack of bricks in the model.  Note that a single brick is represented as a stack of size 1.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import Shape from '../../../../../kite/js/Shape.js';
import balancingAct from '../../../balancingAct.js';
import Mass, { MassOptions } from '../Mass.js';

// constants
const BRICK_WIDTH = 0.2; // In meters.
const BRICK_HEIGHT = BRICK_WIDTH / 3;
const BRICK_MASS = 5; // In kg.

export default class BrickStack extends Mass {

  public readonly numBricks: number;
  public readonly shape: Shape;

  // static constants
  public static readonly BRICK_MASS = BRICK_MASS;
  public static readonly BRICK_HEIGHT = BRICK_HEIGHT;

  public constructor( numBricks: number, initialPosition?: Vector2, options?: MassOptions ) {

    if ( numBricks <= 0 ) { throw new Error( 'Must have at least one brick in stack' ); }

    initialPosition = initialPosition || Vector2.ZERO; // Default initial position.
    super( numBricks * BRICK_MASS, initialPosition, false, options );

    this.numBricks = numBricks;

    // Generate the shape of the brick stack.
    const brickStackShape = new Shape();
    let brickOriginY = 0;
    for ( let i = 0; i < numBricks; i++ ) {
      brickStackShape.rect( 0, brickOriginY, BRICK_WIDTH, BRICK_HEIGHT );
      brickOriginY += BRICK_HEIGHT;
    }

    this.shape = brickStackShape;
  }

  public override createCopy(): BrickStack {
    return new BrickStack( this.numBricks, this.positionProperty.get() );
  }

  public override getMiddlePoint(): Vector2 {
    return this.shape.bounds.center.rotated( this.rotationAngleProperty.get() ).plus( this.positionProperty.get() );
  }
}

balancingAct.register( 'BrickStack', BrickStack );