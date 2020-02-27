// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import blueBucketImage from '../../../../images/blue-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

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

inherit( ImageMass, SmallBucket );
export default SmallBucket;