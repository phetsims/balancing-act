// Copyright 2013-2020, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const fireExtinguisherImage = require( 'image!BALANCING_ACT/fire-extinguisher.png' );

  // constants
  const MASS = 5; // In kg
  const HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   * @constructor
   */
  function FireExtinguisher( initialPosition, isMystery, options ) {
    ImageMass.call( this, MASS, fireExtinguisherImage, HEIGHT, initialPosition, isMystery, options );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  balancingAct.register( 'FireExtinguisher', FireExtinguisher );

  return inherit( ImageMass, FireExtinguisher );
} );