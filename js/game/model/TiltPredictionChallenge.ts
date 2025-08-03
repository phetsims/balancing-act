// Copyright 2014-2024, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user must predict which
 * way the plank will tilt when the supports are removed.
 *
 * @author John Blanco
 */

import LocalizedStringProperty from '../../../../chipper/js/browser/LocalizedStringProperty.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import ColumnState from '../../common/model/ColumnState.js';
import Mass from '../../common/model/Mass.js';
import BalanceGameChallenge, { type MassDistancePair } from './BalanceGameChallenge.js';

const whatWillHappenStringProperty = BalancingActStrings.whatWillHappenStringProperty;

class TiltPredictionChallenge extends BalanceGameChallenge {
  private viewConfig: { title: LocalizedStringProperty; showMassEntryDialog: boolean; showTiltPredictionSelector: boolean };

  public constructor( fixedMasses: MassDistancePair[] ) {
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
  public static create( fixedMass1: Mass, fixedMass1DistanceFromCenter: number, fixedMass2: Mass, fixedMass2DistanceFromCenter: number ): TiltPredictionChallenge {

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