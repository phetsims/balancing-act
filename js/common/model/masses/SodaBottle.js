// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import sodaBottle_png from '../../../../images/objects/sodaBottle_png.js';
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
    super( MASS, sodaBottle_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SodaBottle', SodaBottle );

export default SodaBottle;