// Copyright 2013-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import tinyRock_svg from '../../../../images/objects/tinyRock_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 4; // In kg
const HEIGHT = 0.09; // In meters

class TinyRock extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, tinyRock_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'TinyRock', TinyRock );

export default TinyRock;