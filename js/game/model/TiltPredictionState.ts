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

  public static readonly TILT_DOWN_ON_LEFT_SIDE = new TiltPredictionState();
  public static readonly STAY_BALANCED = new TiltPredictionState();
  public static readonly TILT_DOWN_ON_RIGHT_SIDE = new TiltPredictionState();
  public static readonly NONE = new TiltPredictionState();

  public static readonly enumeration = new Enumeration( TiltPredictionState );

  public constructor() {
    super();
  }
}

balancingAct.register( 'TiltPredictionState', TiltPredictionState );
export default TiltPredictionState;