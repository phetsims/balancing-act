// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import flowerPot_svg from '../../../../images/objects/flowerPot_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.55; // In meters

export default class FlowerPot extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, flowerPot_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FlowerPot', FlowerPot );