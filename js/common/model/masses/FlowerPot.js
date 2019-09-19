// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const flowerPotImage = require( 'image!BALANCING_ACT/flower-pot.png' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // constants
  const MASS = 5; // In kg
  const HEIGHT = 0.55; // In meters

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