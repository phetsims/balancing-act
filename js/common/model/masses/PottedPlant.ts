// Copyright 2014-2026, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import pottedPlant_svg from '../../../../images/objects/pottedPlant_svg.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.65; // In meters

class PottedPlant extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, pottedPlant_svg, HEIGHT, initialPosition, isMystery );
  }
}

export default PottedPlant;
