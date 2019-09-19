// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const tireImage = require( 'image!BALANCING_ACT/tire.png' );

  // constants
  var MASS = 15; // In kg
  var HEIGHT = 0.13; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Tire( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, tireImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'Tire', Tire );

  return inherit( ImageMass, Tire );
} );