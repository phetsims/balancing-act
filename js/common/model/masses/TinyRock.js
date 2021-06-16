[object Promise]


import tinyRockImage from '../../../../images/tiny-rock_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 4; // In kg
const HEIGHT = 0.09; // In meters

class TinyRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, tinyRockImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'TinyRock', TinyRock );

export default TinyRock;