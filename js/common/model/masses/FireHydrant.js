// Copyright 2014-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import fireHydrant_png from '../../../../images/objects/fireHydrant_png.js';
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
    super( MASS, fireHydrant_png, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FireHydrant', FireHydrant );

export default FireHydrant;