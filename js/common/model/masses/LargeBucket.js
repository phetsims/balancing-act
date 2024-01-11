// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import metalBucket_svg from '../../../../images/objects/metalBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 15; // In kg
const HEIGHT = 0.5; // In meters

class LargeBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, metalBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'LargeBucket', LargeBucket );

export default LargeBucket;