// Copyright 2014-2019, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const televisionImage = require( 'image!BALANCING_ACT/old-television.png' );

  // constants
  const MASS = 10; // In kg
  const HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Television( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, televisionImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'Television', Television );

  return inherit( ImageMass, Television );
} );