// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model class that represents an adult male.
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
  const manSittingImage = require( 'mipmap!BALANCING_ACT/man-sitting.png' );
  const manStandingImage = require( 'mipmap!BALANCING_ACT/man-standing.png' );

  // constants
  const MASS = 80; // in kg
  const STANDING_HEIGHT = 1.8; // In meters.
  const SITTING_HEIGHT = 0.9; // In meters.
  const SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Man() {
    HumanMass.call( this, MASS, manStandingImage, STANDING_HEIGHT, manSittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }

  balancingAct.register( 'Man', Man );

  return inherit( HumanMass, Man );
} );
