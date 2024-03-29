// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import sodaBottle_svg from '../../../../images/objects/sodaBottle_svg.js';
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
    super( MASS, sodaBottle_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SodaBottle', SodaBottle );

export default SodaBottle;