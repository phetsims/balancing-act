// Copyright 2014-2019, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const smallRockImage = require( 'image!BALANCING_ACT/rock-4.png' );

  // constants
  const MASS = 30; // In kg
  const HEIGHT = 0.25; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function SmallRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, smallRockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'SmallRock', SmallRock );

  return inherit( ImageMass, SmallRock );
} );