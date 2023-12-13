// Copyright 2013-2023, University of Colorado Boulder

/**
 * Model class that represents a woman that can be moved on and off of the
 * balance.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import balancingAct from '../../../balancingAct.js';
import HumanTypeEnum from '../HumanTypeEnum.js';
import HumanMass from './HumanMass.js';

// constants
const MASS = 60; // in kg
const STANDING_HEIGHT = 1.65; // In meters.
const SITTING_HEIGHT = 0.825; // In meters.
const SITTING_CENTER_OF_MASS_X_OFFSET = 0.1; // In meters, determined visually.  Update if image changes.

class Woman extends HumanMass {
  constructor() {
    super( HumanTypeEnum.WOMAN, MASS, STANDING_HEIGHT, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }
}

balancingAct.register( 'Woman', Woman );

export default Woman;