// Copyright 2013-2015, University of Colorado Boulder

/**
 * Model class that represents an adult male.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  var Vector2 = require( 'DOT/Vector2' );

  // images
  var manSittingImage = require( 'mipmap!BALANCING_ACT/man-sitting.png' );
  var manStandingImage = require( 'mipmap!BALANCING_ACT/man-standing.png' );

  // constants
  var MASS = 80; // in kg
  var STANDING_HEIGHT = 1.8; // In meters.
  var SITTING_HEIGHT = 0.9; // In meters.
  var SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Man() {
    HumanMass.call( this, MASS, manStandingImage, STANDING_HEIGHT, manSittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }

  return inherit( HumanMass, Man );
} );
