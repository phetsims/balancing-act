// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import woodCrateTall_svg from '../../../../images/objects/woodCrateTall_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.6; // In meters

export default class Crate extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, woodCrateTall_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Crate', Crate );