// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import oldTelevision_svg from '../../../../images/objects/oldTelevision_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.5; // In meters

class Television extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, oldTelevision_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Television', Television );

export default Television;