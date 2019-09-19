// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model class that represents a woman that can be moved on and off of the
 * balance.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Vector2 = require( 'DOT/Vector2' );

  // images
  const womanSittingImage = require( 'mipmap!BALANCING_ACT/woman-sitting.png' );
  const womanStandingImage = require( 'mipmap!BALANCING_ACT/woman-standing.png' );

  // constants
  const MASS = 60; // in kg
  const STANDING_HEIGHT = 1.65; // In meters.
  const SITTING_HEIGHT = 0.825; // In meters.
  const SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

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
