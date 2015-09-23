// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var pottedPlantImage = require( 'image!BALANCING_ACT/potted-plant.png' );

  // Constants
  var MASS = 10; // In kg
  var HEIGHT = 0.65; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function PottedPlant( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, pottedPlantImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, PottedPlant );
} );