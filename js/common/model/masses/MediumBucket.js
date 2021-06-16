[object Promise]


import yellowBucketImage from '../../../../images/yellow-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 20; // In kg
const HEIGHT = 0.4; // In meters

class MediumBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, yellowBucketImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumBucket', MediumBucket );

export default MediumBucket;