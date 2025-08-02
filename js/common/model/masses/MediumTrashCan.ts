// Copyright 2013-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import trashCan_svg from '../../../../images/objects/trashCan_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.65; // In meters

class MediumTrashCan extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, trashCan_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumTrashCan', MediumTrashCan );

export default MediumTrashCan;