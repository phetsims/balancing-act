// Copyright 2013-2025, University of Colorado Boulder

/**
 * a data object that couples a Mass object with a force vector
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import balancingAct from '../../balancingAct.js';
import Mass from './Mass.js';
import PositionedVector from './PositionedVector.js';

// constants
const ACCELERATION_DUE_TO_GRAVITY = -9.8; // meters per second squared.

class MassForceVector {
  public mass: Mass;
  public readonly forceVectorProperty: Property<PositionedVector>;

  /**
   * @param mass - A mass object as used in this simulation.
   */
  public constructor( mass: Mass ) {
    this.mass = mass;
    this.forceVectorProperty = new Property( this.generateVector( mass ) );
  }

  public update(): void {
    this.forceVectorProperty.set( this.generateVector( this.mass ) );
  }

  public isObfuscated(): boolean {
    return this.mass.isMystery;
  }

  private generateVector( mass: Mass ): PositionedVector {
    return {
      origin: new Vector2( mass.positionProperty.get().x, mass.positionProperty.get().y ),
      vector: new Vector2( 0, mass.massValue * ACCELERATION_DUE_TO_GRAVITY )
    };
  }
}

balancingAct.register( 'MassForceVector', MassForceVector );

export default MassForceVector;