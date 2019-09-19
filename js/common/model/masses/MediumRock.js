// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const mediumRockImage = require( 'image!BALANCING_ACT/rock-1.png' );

  // constants
  var MASS = 40; // In kg
  var HEIGHT = 0.3; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, mediumRockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'MediumRock', MediumRock );

  return inherit( ImageMass, MediumRock );
} );