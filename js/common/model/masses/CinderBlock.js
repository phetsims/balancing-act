// Copyright 2014-2019, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const cinderBlockImage = require( 'image!BALANCING_ACT/cinder-block.png' );

  // constants
  const MASS = 12; // In kg
  const HEIGHT = 0.2; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function CinderBlock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, cinderBlockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'CinderBlock', CinderBlock );

  return inherit( ImageMass, CinderBlock );
} );