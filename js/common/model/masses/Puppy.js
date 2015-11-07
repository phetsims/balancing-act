// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var puppyImage = require( 'image!BALANCING_ACT/puppy.png' );

  // constants
  var MASS = 6; // In kg
  var HEIGHT = 0.6; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Puppy( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, puppyImage, HEIGHT, initialPosition, isMystery );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  return inherit( ImageMass, Puppy );
} );