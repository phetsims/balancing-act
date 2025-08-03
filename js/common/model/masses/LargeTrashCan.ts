// Copyright 2013-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import trashCan_svg from '../../../../images/objects/trashCan_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.8; // In meters

class LargeTrashCan extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, trashCan_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'LargeTrashCan', LargeTrashCan );

export default LargeTrashCan;