// Copyright 2013-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import trashCan_svg from '../../../../images/objects/trashCan_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.55; // In meters

class SmallTrashCan extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   */
  constructor( initialPosition, isMystery, options ) {
    super( MASS, trashCan_svg, HEIGHT, initialPosition, isMystery, options );
  }
}

balancingAct.register( 'SmallTrashCan', SmallTrashCan );

export default SmallTrashCan;