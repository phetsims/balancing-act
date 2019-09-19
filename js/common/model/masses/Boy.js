// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model element that represents a boy who is roughly 6 years old.  The data
 * for his height and weight came from:
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
  const boySittingImage = require( 'mipmap!BALANCING_ACT/boy-sitting.png' );
  const boyStandingImage = require( 'mipmap!BALANCING_ACT/boy-standing.png' );

  // constants
  const MASS = 20; // in kg
  const STANDING_HEIGHT = 1.1; // In meters.
  const SITTING_HEIGHT = 0.65; // In meters.
  const SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Boy() {
    HumanMass.call( this, MASS, boyStandingImage, STANDING_HEIGHT, boySittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  balancingAct.register( 'Boy', Boy );

  return inherit( HumanMass, Boy );
} );