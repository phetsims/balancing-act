// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import rock4_png from '../../../../images/objects/rock4_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.25; // In meters

class SmallRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, rock4_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'SmallRock', SmallRock );

export default SmallRock;