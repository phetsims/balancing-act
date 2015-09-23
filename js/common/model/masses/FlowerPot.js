// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var flowerPotImage = require( 'image!BALANCING_ACT/flower-pot.png' );

  // constants
  var MASS = 5; // In kg
  var HEIGHT = 0.55; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function FlowerPot( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, flowerPotImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, FlowerPot );
} );