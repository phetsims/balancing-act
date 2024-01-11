// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import cinderBlock_png from '../../../../images/objects/cinderBlock_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 12; // In kg
const HEIGHT = 0.2; // In meters

class CinderBlock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, cinderBlock_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'CinderBlock', CinderBlock );

export default CinderBlock;