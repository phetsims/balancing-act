// Copyright 2013-2015, University of Colorado Boulder

/**
 * Model class that represents a woman that can be moved on and off of the
 * balance.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  var Vector2 = require( 'DOT/Vector2' );

  // images
  var womanSittingImage = require( 'mipmap!BALANCING_ACT/woman-sitting.png' );
  var womanStandingImage = require( 'mipmap!BALANCING_ACT/woman-standing.png' );

  // constants
  var MASS = 60; // in kg
  var STANDING_HEIGHT = 1.65; // In meters.
  var SITTING_HEIGHT = 0.825; // In meters.
  var SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Woman() {
    HumanMass.call( this, MASS, womanStandingImage, STANDING_HEIGHT, womanSittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }

  balancingAct.register( 'Woman', Woman );

  return inherit( HumanMass, Woman );
} );
