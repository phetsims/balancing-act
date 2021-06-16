// Copyright 2013-2021, University of Colorado Boulder

/**
 * Model class that represents an adult male.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import manSittingImage from '../../../../mipmaps/man-sitting_png.js';
import manStandingImage from '../../../../mipmaps/man-standing_png.js';
import balancingAct from '../../../balancingAct.js';
import HumanMass from './HumanMass.js';

// constants
const MASS = 80; // in kg
const STANDING_HEIGHT = 1.8; // In meters.
const SITTING_HEIGHT = 0.9; // In meters.
const SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

class Man extends HumanMass {

  constructor() {
    super( MASS, manStandingImage, STANDING_HEIGHT, manSittingImage, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }
}

balancingAct.register( 'Man', Man );

export default Man;