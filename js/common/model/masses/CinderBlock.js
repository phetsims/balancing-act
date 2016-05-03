// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var cinderBlockImage = require( 'image!BALANCING_ACT/cinder-block.png' );

  // constants
  var MASS = 12; // In kg
  var HEIGHT = 0.2; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function CinderBlock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, cinderBlockImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'CinderBlock', CinderBlock );

  return inherit( ImageMass, CinderBlock );
} );