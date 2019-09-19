// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const blueBucketImage = require( 'image!BALANCING_ACT/blue-bucket.png' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

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