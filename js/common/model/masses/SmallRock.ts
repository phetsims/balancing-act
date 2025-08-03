// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import rock4_svg from '../../../../images/objects/rock4_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.25; // In meters

class SmallRock extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, rock4_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallRock', SmallRock );

export default SmallRock;