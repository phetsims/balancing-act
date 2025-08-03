// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import rock6_svg from '../../../../images/objects/rock6_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.35; // In meters

export default class BigRock extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, rock6_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'BigRock', BigRock );