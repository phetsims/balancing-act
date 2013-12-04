// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model element that represents a boy who is roughly 6 years old.  The data
 * for his height and weight came from:
 * http://www.disabled-world.com/artman/publish/height-weight-teens.shtml
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // Imports
  var boySittingImage = require( 'image!BALANCING_ACT/boy-sitting.png' );
  var boyStandingImage = require( 'image!BALANCING_ACT/boy-standing.png' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var MASS = 20; // in kg
  var STANDING_HEIGHT = 1.1; // In meters.
  var SITTING_HEIGHT = 0.7; // In meters.
  var SITTING_CENTER_OF_MASS_X_OFFSET = 0.07; // In meters, determined visually.  Update if image changes.

  /**
   * @constructor
   */
  function Boy() {
    HumanMass.call( this, MASS, boyStandingImage, STANDING_HEIGHT, boySittingImage, SITTING_HEIGHT,
      SITTING_CENTER_OF_MASS_X_OFFSET, Vector2.ZERO, false );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  return inherit( HumanMass, Boy,
    {
      createCopy: function() {
        var copy = new Boy();
        copy.position = this.position.copy;
        return copy;
      }
    } );
} );