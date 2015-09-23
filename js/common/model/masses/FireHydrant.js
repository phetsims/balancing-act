// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var fireHydrantImage = require( 'image!BALANCING_ACT/fire-hydrant.png' );

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

  return inherit( ImageMass, FireHydrant );
} );
