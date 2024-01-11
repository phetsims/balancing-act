// Copyright 2013-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import tinyRock_svg from '../../../../images/objects/tinyRock_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 4; // In kg
const HEIGHT = 0.09; // In meters

class TinyRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, tinyRock_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'TinyRock', TinyRock );

export default TinyRock;