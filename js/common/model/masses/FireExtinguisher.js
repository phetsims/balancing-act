// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var fireExtinguisherImage = require( 'image!BALANCING_ACT/fire-extinguisher.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var MASS = 5; // In kg
  var HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function FireExtinguisher( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, fireExtinguisherImage, HEIGHT, initialPosition, isMystery );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  balancingAct.register( 'FireExtinguisher', FireExtinguisher );

  return inherit( ImageMass, FireExtinguisher );
} );