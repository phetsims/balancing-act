// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const yellowBucketImage = require( 'image!BALANCING_ACT/yellow-bucket.png' );

  // constants
  const MASS = 20; // In kg
  const HEIGHT = 0.4; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumBucket( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, yellowBucketImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'MediumBucket', MediumBucket );

  return inherit( ImageMass, MediumBucket );
} );