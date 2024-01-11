// Copyright 2013-2023, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import fireExtinguisher_png from '../../../../images/objects/fireExtinguisher_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.5; // In meters

class FireExtinguisher extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   */
  constructor( initialPosition, isMystery, options ) {
    super( MASS, fireExtinguisher_png, HEIGHT, initialPosition, isMystery, options );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }
}

balancingAct.register( 'FireExtinguisher', FireExtinguisher );

export default FireExtinguisher;