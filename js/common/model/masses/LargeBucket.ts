// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import metalBucket_svg from '../../../../images/objects/metalBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 15; // In kg
const HEIGHT = 0.5; // In meters

export default class LargeBucket extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, metalBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'LargeBucket', LargeBucket );