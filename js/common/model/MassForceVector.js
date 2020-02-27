// Copyright 2013-2019, University of Colorado Boulder


import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import balancingAct from '../../balancingAct.js';

// constants
const ACCELERATION_DUE_TO_GRAVITY = -9.8; // meters per second squared.

/**
 * @param {Object} mass - A mass object as used in this simulation.
 * @constructor
 */
function MassForceVector( mass ) {
  this.mass = mass;
  this.forceVectorProperty = new Property( this.generateVector( mass ) );
}

balancingAct.register( 'MassForceVector', MassForceVector );

export default inherit( Object, MassForceVector, {
  update: function() {
    this.forceVectorProperty.set( this.generateVector( this.mass ) );
  },
  isObfuscated: function() {
    return this.mass.isMystery;
  },
  generateVector: function( mass ) {
    return {
      origin: new Vector2( mass.positionProperty.get().x, mass.positionProperty.get().y ),
      vector: new Vector2( 0, mass.massValue * ACCELERATION_DUE_TO_GRAVITY )
    };
  }
} );