// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var barrelImage = require( 'image!BALANCING_ACT/barrel.png' );

  // Constants
  var MASS = 90; // In kg
  var HEIGHT = 0.75; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Barrel( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, barrelImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, Barrel );
} );