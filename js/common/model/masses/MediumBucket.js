// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import yellowBucket_svg from '../../../../images/objects/yellowBucket_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 20; // In kg
const HEIGHT = 0.4; // In meters

class MediumBucket extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, yellowBucket_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumBucket', MediumBucket );

export default MediumBucket;