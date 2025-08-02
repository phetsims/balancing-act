// Copyright 2024, University of Colorado Boulder

/**
 * Enumerates the state of the tilt prediction of the plank in the game. Valid values are 'none', 'tiltDownOnLeftSide',
 * 'stayBalanced', and 'tiltDownOnRightSide'.
 *
 * @author Luisa Vargas
 */

import Enumeration from '../../../../phet-core/js/Enumeration.js';
import EnumerationValue from '../../../../phet-core/js/EnumerationValue.js';
import balancingAct from '../../balancingAct.js';

class TiltPredictionState extends EnumerationValue {

  static TILT_DOWN_ON_LEFT_SIDE = new TiltPredictionState();
  static STAY_BALANCED = new TiltPredictionState();
  static TILT_DOWN_ON_RIGHT_SIDE = new TiltPredictionState();
  static NONE = new TiltPredictionState();

  static enumeration = new Enumeration( TiltPredictionState );

  constructor() {
    super();
  }
}

balancingAct.register( 'TiltPredictionState', TiltPredictionState );
export default TiltPredictionState;