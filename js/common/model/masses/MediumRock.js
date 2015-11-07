// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var mediumRockImage = require( 'image!BALANCING_ACT/rock-1.png' );

  // constants
  var MASS = 40; // In kg
  var HEIGHT = 0.4; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, mediumRockImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, MediumRock );
} );