// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const pottedPlantImage = require( 'image!BALANCING_ACT/potted-plant.png' );

  // constants
  const MASS = 10; // In kg
  const HEIGHT = 0.65; // In meters

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