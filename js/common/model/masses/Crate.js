// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import woodCrateTall_png from '../../../../images/objects/woodCrateTall_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.6; // In meters

class Crate extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, woodCrateTall_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Crate', Crate );

export default Crate;