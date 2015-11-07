// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var metalBucketImage = require( 'image!BALANCING_ACT/metal-bucket.png' );

  // constants
  var MASS = 15; // In kg
  var HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function LargeBucket( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, metalBucketImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, LargeBucket );
} );