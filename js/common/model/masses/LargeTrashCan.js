// Copyright 2013-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import trashCan_png from '../../../../images/objects/trashCan_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.8; // In meters

class LargeTrashCan extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, trashCan_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'LargeTrashCan', LargeTrashCan );

export default LargeTrashCan;