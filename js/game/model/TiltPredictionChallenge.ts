// Copyright 2014-2024, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user must predict which
 * way the plank will tilt when the supports are removed.
 *
 * @author John Blanco
 */

import LocalizedStringProperty from '../../../../chipper/js/browser/LocalizedStringProperty.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import ColumnState from '../../common/model/ColumnState.js';
import BalanceGameChallenge from './BalanceGameChallenge.js';

const whatWillHappenStringProperty = BalancingActStrings.whatWillHappenStringProperty;

class TiltPredictionChallenge extends BalanceGameChallenge {
  private viewConfig: { title: LocalizedStringProperty; showMassEntryDialog: boolean; showTiltPredictionSelector: boolean };

  public constructor( fixedMasses: IntentionalAny ) {
    super( ColumnState.DOUBLE_COLUMNS );
    Array.prototype.push.apply( this.fixedMassDistancePairs, fixedMasses );

    // Set up the challenge view configuration, which provides information to
    // the view about how this challenge should be displayed.
    this.viewConfig = {
      title: whatWillHappenStringProperty,
      showMassEntryDialog: false,
      showTiltPredictionSelector: true
    };
  }

  // statics

  /**
   * convenience factory method for creating a mass deduction challenge
   */
  public static create( fixedMass1: IntentionalAny, fixedMass1DistanceFromCenter: IntentionalAny, fixedMass2: IntentionalAny, fixedMass2DistanceFromCenter: IntentionalAny ): TiltPredictionChallenge {

    // Add the fixed masses and their distances from the center of the balance.
    const fixedMassesList = [];
    fixedMassesList.push( { mass: fixedMass1, distance: fixedMass1DistanceFromCenter } );
    fixedMassesList.push( { mass: fixedMass2, distance: fixedMass2DistanceFromCenter } );

    // Create the actual challenge.
    return new TiltPredictionChallenge( fixedMassesList );
  }
}

balancingAct.register( 'TiltPredictionChallenge', TiltPredictionChallenge );

export default TiltPredictionChallenge;