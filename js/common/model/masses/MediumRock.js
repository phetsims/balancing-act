// Copyright 2014-2017, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );
  var mediumRockImage = require( 'image!BALANCING_ACT/rock-1.png' );

  // constants
  var MASS = 40; // In kg
  var HEIGHT = 0.3; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, mediumRockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'MediumRock', MediumRock );

  return inherit( ImageMass, MediumRock );
} );