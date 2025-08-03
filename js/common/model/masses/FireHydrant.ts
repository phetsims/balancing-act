// Copyright 2014-2025, University of Colorado Boulder

/**
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import fireHydrant_svg from '../../../../images/objects/fireHydrant_svg.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 60; // In kg
const HEIGHT = 0.75; // In meters

export default class FireHydrant extends ImageMass {

  public constructor( initialPosition: Vector2, isMystery: boolean ) {
    super( MASS, fireHydrant_svg, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'FireHydrant', FireHydrant );