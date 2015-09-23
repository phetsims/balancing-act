// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var bigRockImage = require( 'image!BALANCING_ACT/rock-6.png' );

  // Constants
  var MASS = 45; // In kg
  var HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function BigRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, bigRockImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, BigRock );
} );