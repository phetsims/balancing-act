// Copyright 2013-2015, University of Colorado Boulder
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var ACCELERATION_DUE_TO_GRAVITY = -9.8; // meters per second squared.

  /**
   * @param {Object} mass - A mass object as used in this simulation.
   * @constructor
   */
  function MassForceVector( mass ) {
    this.mass = mass;
    this.forceVectorProperty = new Property( this.generateVector( mass ) );
  }

  balancingAct.register( 'MassForceVector', MassForceVector );

  return inherit( Object, MassForceVector, {
    update: function() {
      this.forceVectorProperty.set( this.generateVector( this.mass ) );
    },
    isObfuscated: function() {
      return this.mass.isMystery;
    },
    generateVector: function( mass ) {
      return {
        origin: new Vector2( mass.position.x, mass.position.y ),
        vector: new Vector2( 0, mass.massValue * ACCELERATION_DUE_TO_GRAVITY )
      };
    }
  } );
} );
