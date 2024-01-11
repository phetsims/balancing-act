// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import pottedPlant_png from '../../../../images/objects/pottedPlant_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.65; // In meters

class PottedPlant extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, pottedPlant_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'PottedPlant', PottedPlant );

export default PottedPlant;