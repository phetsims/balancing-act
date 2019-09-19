// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model class that represents a girl who is roughly 10 years old.  The height
 * and weight information came from:
 * http://www.disabled-world.com/artman/publish/height-weight-teens.shtml
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
  const girlSittingImage = require( 'mipmap!BALANCING_ACT/girl-sitting.png' );
  const girlStandingImage = require( 'mipmap!BALANCING_ACT/girl-standing.png' );

  // constants
  const MASS = 30; // in kg
  const STANDING_HEIGHT = 1.3; // In meters.
  const SITTING_HEIGHT = 0.70; // In meters.
  const SITTING_CENTER_OF_MASS_X_OFFSET = 0.11; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Girl() {
    HumanMass.call( this, MASS, girlStandingImage, STANDING_HEIGHT, girlSittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }

  balancingAct.register( 'Girl', Girl );

  return inherit( HumanMass, Girl );
} );