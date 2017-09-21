// Copyright 2014-2017, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var crateImage = require( 'image!BALANCING_ACT/wood-crate-tall.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var MASS = 45; // In kg
  var HEIGHT = 0.6; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Crate( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, crateImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'Crate', Crate );

  return inherit( ImageMass, Crate );
} );