// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import flowerPot_png from '../../../../images/objects/flowerPot_png.js';
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
    super( MASS, flowerPot_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FlowerPot', FlowerPot );

export default FlowerPot;