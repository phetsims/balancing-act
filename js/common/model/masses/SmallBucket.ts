// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import blueBucket_svg from '../../../../images/objects/blueBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 3; // In kg
const HEIGHT = 0.3; // In meters

class SmallBucket extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, blueBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallBucket', SmallBucket );

export default SmallBucket;