// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import rock1_png from '../../../../images/objects/rock1_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.3; // In meters

class MediumRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, rock1_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumRock', MediumRock );

export default MediumRock;