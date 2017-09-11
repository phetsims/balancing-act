// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var fireHydrantImage = require( 'image!BALANCING_ACT/fire-hydrant.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var MASS = 60; // In kg
  var HEIGHT = 0.75; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function FireHydrant( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, fireHydrantImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'FireHydrant', FireHydrant );

  return inherit( ImageMass, FireHydrant );
} );
