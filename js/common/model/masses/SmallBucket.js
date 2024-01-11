// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import blueBucket_svg from '../../../../images/objects/blueBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 3; // In kg
const HEIGHT = 0.3; // In meters

class SmallBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, blueBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallBucket', SmallBucket );

export default SmallBucket;