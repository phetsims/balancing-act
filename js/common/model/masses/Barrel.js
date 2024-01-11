// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import barrel_svg from '../../../../images/objects/barrel_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 90; // In kg
const HEIGHT = 0.75; // In meters

class Barrel extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, barrel_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Barrel', Barrel );

export default Barrel;