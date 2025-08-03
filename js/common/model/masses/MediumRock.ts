// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import rock1_svg from '../../../../images/objects/rock1_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.3; // In meters

class MediumRock extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, rock1_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumRock', MediumRock );

export default MediumRock;