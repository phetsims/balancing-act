// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var pottedPlantImage = require( 'image!BALANCING_ACT/potted-plant.png' );

  // constants
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

  balancingAct.register( 'PottedPlant', PottedPlant );

  return inherit( ImageMass, PottedPlant );
} );