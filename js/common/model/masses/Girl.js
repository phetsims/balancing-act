// Copyright 2013-2024, University of Colorado Boulder

/**
 * Model class that represents a girl who is roughly 10 years old.  The height
 * and weight information came from:
 * http://www.disabled-world.com/artman/publish/height-weight-teens.shtml
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import balancingAct from '../../../balancingAct.js';
import HumanTypeEnum from '../HumanTypeEnum.js';
import HumanMass from './HumanMass.js';

// constants
const MASS = 30; // in kg
const STANDING_HEIGHT = 1.3; // In meters.
const SITTING_HEIGHT = 0.70; // In meters.
const SITTING_CENTER_OF_MASS_X_OFFSET = 0.11; // In meters, determined visually.  Update if image changes.

class Girl extends HumanMass {

  constructor() {
    super( HumanTypeEnum.GIRL, MASS, STANDING_HEIGHT, SITTING_HEIGHT,
      Vector2.ZERO, SITTING_CENTER_OF_MASS_X_OFFSET, false );
  }
}

balancingAct.register( 'Girl', Girl );

export default Girl;