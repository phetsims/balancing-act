// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var bigRockImage = require( 'image!BALANCING_ACT/rock-6.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var MASS = 45; // In kg
  var HEIGHT = 0.35; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function BigRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, bigRockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'BigRock', BigRock );

  return inherit( ImageMass, BigRock );
} );