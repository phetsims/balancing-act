// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import metalBucketImage from '../../../../images/metal-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 15; // In kg
const HEIGHT = 0.5; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function LargeBucket( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, metalBucketImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'LargeBucket', LargeBucket );

inherit( ImageMass, LargeBucket );
export default LargeBucket;