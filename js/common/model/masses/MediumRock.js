[object Promise]


import mediumRockImage from '../../../../images/rock-1_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.3; // In meters

class MediumRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, mediumRockImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumRock', MediumRock );

export default MediumRock;