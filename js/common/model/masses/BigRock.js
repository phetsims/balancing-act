// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import rock6_svg from '../../../../images/objects/rock6_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.35; // In meters

class BigRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, rock6_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'BigRock', BigRock );

export default BigRock;