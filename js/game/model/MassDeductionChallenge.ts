// Copyright 2014-2024, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user attempts to
 * deduce the mass of a "mystery mass" using another mass of a known value.
 *
 * @author John Blanco
 */

import LocalizedStringProperty from '../../../../chipper/js/browser/LocalizedStringProperty.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import ColumnState from '../../common/model/ColumnState.js';
import Mass from '../../common/model/Mass.js';
import BalanceGameChallenge, { type MassDistancePair } from './BalanceGameChallenge.js';

const whatIsTheMassStringProperty = BalancingActStrings.whatIsTheMassStringProperty;

class MassDeductionChallenge extends BalanceGameChallenge {
  public readonly viewConfig: { title: LocalizedStringProperty; showMassEntryDialog: boolean; showTiltPredictionSelector: boolean };

  public constructor( fixedMassDistancePair: MassDistancePair, movableMass: Mass, solutionToDisplay: MassDistancePair ) {
    super( ColumnState.NO_COLUMNS );

    this.fixedMassDistancePairs.push( fixedMassDistancePair );
    this.movableMasses.push( movableMass );
    this.balancedConfiguration.push( solutionToDisplay );

    // Set up the challenge view configuration, which provides information to the view about how this challenge should
    // be displayed.
    this.viewConfig = {
      title: whatIsTheMassStringProperty,
      showMassEntryDialog: true,
      showTiltPredictionSelector: false
    };
  }

  // statics

  /**
   * convenience factory method for creating a mass deduction challenge
   */
  public static create( mysteryMass: Mass, mysteryMassDistanceFromCenter: number, knownMass: Mass ): MassDeductionChallenge {

    // Create the mass-distance pair for the mystery mass.
    const mysteryMassDistancePair = { mass: mysteryMass, distance: mysteryMassDistanceFromCenter };

    // Create a valid solution for the challenge.
    const solution = {
      mass: knownMass,
      distance: -mysteryMass.massValue * mysteryMassDistanceFromCenter / knownMass.massValue
    };

    // Combine into challenge.
    return new MassDeductionChallenge( mysteryMassDistancePair, knownMass, solution );
  }
}

balancingAct.register( 'MassDeductionChallenge', MassDeductionChallenge );

export default MassDeductionChallenge;