// Copyright 2014-2019, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const fireHydrantImage = require( 'image!BALANCING_ACT/fire-hydrant.png' );

  // constants
  const MASS = 60; // In kg
  const HEIGHT = 0.75; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function FireHydrant( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, fireHydrantImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'FireHydrant', FireHydrant );

  return inherit( ImageMass, FireHydrant );
} );
