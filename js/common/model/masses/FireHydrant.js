// Copyright 2014-2024, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import fireHydrant_svg from '../../../../images/objects/fireHydrant_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 60; // In kg
const HEIGHT = 0.75; // In meters

class FireHydrant extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, fireHydrant_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FireHydrant', FireHydrant );

export default FireHydrant;