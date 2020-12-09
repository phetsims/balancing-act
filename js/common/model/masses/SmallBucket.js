// Copyright 2014-2020, University of Colorado Boulder


import blueBucketImage from '../../../../images/blue-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 3; // In kg
const HEIGHT = 0.3; // In meters

class SmallBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, blueBucketImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallBucket', SmallBucket );

export default SmallBucket;