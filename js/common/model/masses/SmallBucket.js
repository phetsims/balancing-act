// Copyright 2014-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var blueBucketImage = require( 'image!BALANCING_ACT/blue-bucket.png' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );

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

  balancingAct.register( 'SmallBucket', SmallBucket );

  return inherit( ImageMass, SmallBucket );
} );