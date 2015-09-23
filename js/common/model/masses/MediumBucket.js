// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var yellowBucketImage = require( 'image!BALANCING_ACT/yellow-bucket.png' );

  // constants
  var MASS = 20; // In kg
  var HEIGHT = 0.4; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumBucket( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, yellowBucketImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, MediumBucket );
} );