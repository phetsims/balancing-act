// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import tire_svg from '../../../../images/objects/tire_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 15; // In kg
const HEIGHT = 0.13; // In meters

class Tire extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, tire_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Tire', Tire );

export default Tire;