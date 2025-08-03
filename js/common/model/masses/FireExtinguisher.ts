// Copyright 2013-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import fireExtinguisher_svg from '../../../../images/objects/fireExtinguisher_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';
import { MassOptions } from '../Mass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.5; // In meters

export default class FireExtinguisher extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean, options?: MassOptions ) {
    super( MASS, fireExtinguisher_svg, HEIGHT, initialPosition, isMystery, options );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }
}

balancingAct.register( 'FireExtinguisher', FireExtinguisher );