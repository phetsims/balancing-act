// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const crateImage = require( 'image!BALANCING_ACT/wood-crate-tall.png' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // constants
  const MASS = 45; // In kg
  const HEIGHT = 0.6; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Crate( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, crateImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'Crate', Crate );

  return inherit( ImageMass, Crate );
} );