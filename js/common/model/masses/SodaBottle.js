// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var sodaBottleImage = require( 'image!BALANCING_ACT/soda-bottle.png' );

  // Constants
  var MASS = 2; // In kg
  var HEIGHT = 0.4; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function SodaBottle( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, sodaBottleImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, SodaBottle );
} );