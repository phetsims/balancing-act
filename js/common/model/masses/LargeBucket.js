[object Promise]


import metalBucketImage from '../../../../images/metal-bucket_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 15; // In kg
const HEIGHT = 0.5; // In meters

class LargeBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, metalBucketImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'LargeBucket', LargeBucket );

export default LargeBucket;