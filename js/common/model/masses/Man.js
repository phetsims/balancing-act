// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model class that represents an adult male.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var manSittingImage = require( 'image!BALANCING_ACT/man-sitting.png' );
  var manStandingImage = require( 'image!BALANCING_ACT/man-standing.png' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HumanMass = require( 'BALANCING_ACT/common/model/masses/HumanMass' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
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

  return inherit( HumanMass, Man,
    {
      createCopy: function() {
        //REVIEW: consider Man( initialPosition ) like other masses?
        var copy = new Man();
        copy.position = this.position.copy();
        return copy;
      }
    } );
} );
