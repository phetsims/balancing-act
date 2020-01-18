// Copyright 2014-2020, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const bigRockImage = require( 'image!BALANCING_ACT/rock-6.png' );

  // constants
  const MASS = 45; // In kg
  const HEIGHT = 0.35; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function BigRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, bigRockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'BigRock', BigRock );

  return inherit( ImageMass, BigRock );
} );