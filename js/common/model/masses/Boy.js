// Copyright 2013-2015, University of Colorado Boulder

/**
 * Model element that represents a boy who is roughly 6 years old.  The data
 * for his height and weight came from:
 * http://www.disabled-world.com/artman/publish/height-weight-teens.shtml
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Vector2 = require( 'DOT/Vector2' );

  // images
  var boySittingImage = require( 'mipmap!BALANCING_ACT/boy-sitting.png' );
  var boyStandingImage = require( 'mipmap!BALANCING_ACT/boy-standing.png' );

  // constants
  var MASS = 20; // in kg
  var STANDING_HEIGHT = 1.1; // In meters.
  var SITTING_HEIGHT = 0.65; // In meters.
  var SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

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