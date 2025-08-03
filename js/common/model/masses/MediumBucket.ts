// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import yellowBucket_svg from '../../../../images/objects/yellowBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 20; // In kg
const HEIGHT = 0.4; // In meters

export default class MediumBucket extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, yellowBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumBucket', MediumBucket );