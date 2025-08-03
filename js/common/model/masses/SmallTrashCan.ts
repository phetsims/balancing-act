// Copyright 2013-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import trashCan_svg from '../../../../images/objects/trashCan_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';
import { MassOptions } from '../Mass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.55; // In meters

class SmallTrashCan extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean, options?: MassOptions ) {
    super( MASS, trashCan_svg, HEIGHT, initialPosition, isMystery, options );
  }
}

balancingAct.register( 'SmallTrashCan', SmallTrashCan );

export default SmallTrashCan;