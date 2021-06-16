[object Promise]


import flowerPotImage from '../../../../images/flower-pot_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.55; // In meters

class FlowerPot extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, flowerPotImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FlowerPot', FlowerPot );

export default FlowerPot;