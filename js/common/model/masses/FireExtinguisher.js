// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var fireExtinguisherImage = require( 'image!BALANCING_ACT/fire-extinguisher.png' );

  // Constants
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

  return inherit( ImageMass, FireExtinguisher );
} );