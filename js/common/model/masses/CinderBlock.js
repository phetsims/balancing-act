// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const cinderBlockImage = require( 'image!BALANCING_ACT/cinder-block.png' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

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