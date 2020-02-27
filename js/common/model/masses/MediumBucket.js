// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import yellowBucketImage from '../../../../images/yellow-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

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

inherit( ImageMass, MediumBucket );
export default MediumBucket;