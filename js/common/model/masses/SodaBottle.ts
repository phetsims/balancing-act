// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import sodaBottle_svg from '../../../../images/objects/sodaBottle_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 2; // In kg
const HEIGHT = 0.4; // In meters

class SodaBottle extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, sodaBottle_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SodaBottle', SodaBottle );

export default SodaBottle;