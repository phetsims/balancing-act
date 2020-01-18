// Copyright 2014-2020, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const blueBucketImage = require( 'image!BALANCING_ACT/blue-bucket.png' );

  // constants
  const MASS = 3; // In kg
  const HEIGHT = 0.3; // In meters

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