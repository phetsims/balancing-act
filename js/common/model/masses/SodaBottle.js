// Copyright 2014-2020, University of Colorado Boulder


import sodaBottleImage from '../../../../images/soda-bottle_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 2; // In kg
const HEIGHT = 0.4; // In meters

class SodaBottle extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, sodaBottleImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SodaBottle', SodaBottle );

export default SodaBottle;