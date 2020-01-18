// Copyright 2014-2019, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const sodaBottleImage = require( 'image!BALANCING_ACT/soda-bottle.png' );

  // constants
  const MASS = 2; // In kg
  const HEIGHT = 0.4; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function SodaBottle( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, sodaBottleImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'SodaBottle', SodaBottle );

  return inherit( ImageMass, SodaBottle );
} );