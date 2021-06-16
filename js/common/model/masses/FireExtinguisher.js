[object Promise]


import fireExtinguisherImage from '../../../../images/fire-extinguisher_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.5; // In meters

class FireExtinguisher extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   */
  constructor( initialPosition, isMystery, options ) {
    super( MASS, fireExtinguisherImage, HEIGHT, initialPosition, isMystery, options );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }
}

balancingAct.register( 'FireExtinguisher', FireExtinguisher );

export default FireExtinguisher;