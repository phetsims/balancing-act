[object Promise]


import smallRockImage from '../../../../images/rock-4_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.25; // In meters

class SmallRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, smallRockImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallRock', SmallRock );

export default SmallRock;