// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import cinderBlock_svg from '../../../../images/objects/cinderBlock_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 12; // In kg
const HEIGHT = 0.2; // In meters

export default class CinderBlock extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, cinderBlock_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'CinderBlock', CinderBlock );