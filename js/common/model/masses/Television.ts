// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import oldTelevision_svg from '../../../../images/objects/oldTelevision_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.5; // In meters

class Television extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, oldTelevision_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Television', Television );

export default Television;