// Copyright 2014-2017, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );
  var televisionImage = require( 'image!BALANCING_ACT/old-television.png' );

  // constants
  var MASS = 10; // In kg
  var HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Television( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, televisionImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'Television', Television );

  return inherit( ImageMass, Television );
} );