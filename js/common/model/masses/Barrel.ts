// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import barrel_svg from '../../../../images/objects/barrel_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 90; // In kg
const HEIGHT = 0.75; // In meters

export default class Barrel extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, barrel_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Barrel', Barrel );