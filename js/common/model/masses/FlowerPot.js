// Copyright 2014-2017, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var flowerPotImage = require( 'image!BALANCING_ACT/flower-pot.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

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

  balancingAct.register( 'FlowerPot', FlowerPot );

  return inherit( ImageMass, FlowerPot );
} );