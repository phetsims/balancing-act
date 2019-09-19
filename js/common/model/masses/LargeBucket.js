// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const metalBucketImage = require( 'image!BALANCING_ACT/metal-bucket.png' );

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

  balancingAct.register( 'LargeBucket', LargeBucket );

  return inherit( ImageMass, LargeBucket );
} );