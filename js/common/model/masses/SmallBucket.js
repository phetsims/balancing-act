// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var blueBucketImage = require( 'image!BALANCING_ACT/blue-bucket.png' );

  // constants
  var MASS = 3; // In kg
  var HEIGHT = 0.3; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function SmallBucket( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, blueBucketImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, SmallBucket );
} );