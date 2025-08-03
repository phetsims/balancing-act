// Copyright 2014-2025, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user must attempt to
 * place a movable mass in the correct so that when the support column is
 * removed, the movable mass will balance the fixed mass that is initially on
 * the plank.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import LocalizedStringProperty from '../../../../chipper/js/browser/LocalizedStringProperty.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import ColumnState from '../../common/model/ColumnState.js';
import Mass from '../../common/model/Mass.js';
import Plank from '../../common/model/Plank.js';
import BalanceGameChallenge, { type MassDistancePair } from './BalanceGameChallenge.js';

const balanceMeStringProperty = BalancingActStrings.balanceMeStringProperty;

class BalanceMassesChallenge extends BalanceGameChallenge {
  public readonly viewConfig: { title: LocalizedStringProperty; showMassEntryDialog: boolean; showTiltPredictionSelector: boolean };

  /**
   * @param fixedMasses - Mass-distance pairs that describe the fixed masses.
   * @param movableMasses - Masses that can be moved by the user.
   * @param solutionToDisplay - Positions for the movable masses that will balance the fixed masses.
   */
  public constructor( fixedMasses: MassDistancePair[], movableMasses: Mass[], solutionToDisplay: MassDistancePair[] ) {
    super( ColumnState.SINGLE_COLUMN );
    this.fixedMassDistancePairs = this.fixedMassDistancePairs.concat( fixedMasses );
    this.movableMasses = this.movableMasses.concat( movableMasses );
    this.balancedConfiguration = this.balancedConfiguration.concat( solutionToDisplay );

    // Set up the challenge view configuration, which provides information to
    // the view about how this challenge should be displayed.
    this.viewConfig = {
      title: balanceMeStringProperty,
      showMassEntryDialog: false,
      showTiltPredictionSelector: false
    };
  }

  /**
   * Convenience method for creating this type of challenge.
   */
  public static create1Fixed1Movable( fixedMass: Mass, fixedMassDistanceFromCenter: number, movableMass: Mass ): BalanceMassesChallenge {

    // Add the fixed mass and its distance from the center of the balance.
    const fixedMassesList = [
      { mass: fixedMass, distance: fixedMassDistanceFromCenter }
    ];

    // Add the movable mass.
    const movableMassesList = [ movableMass ];

    // Create a valid solution for the challenge.
    const solution = [
      {
        mass: movableMass,
        distance: -( fixedMass.massValue * fixedMassDistanceFromCenter / movableMass.massValue )
      }
    ];

    // And we're done.
    return new BalanceMassesChallenge( fixedMassesList, movableMassesList, solution );
  }

  /**
   * Convenience method for creating this type of challenge.
   */
  public static create2Fixed1Movable( fixedMass1: Mass, fixedMass1DistanceFromCenter: number, fixedMass2: Mass, fixedMass2DistanceFromCenter: number, movableMass: Mass ): BalanceMassesChallenge {
    // Add the fixed masses and their distances from the center of the balance.
    const fixedMassesList = [];
    fixedMassesList.push( { mass: fixedMass1, distance: -fixedMass1DistanceFromCenter } );
    fixedMassesList.push( { mass: fixedMass2, distance: -fixedMass2DistanceFromCenter } );

    // Add the movable mass.
    const movableMassesList = [ movableMass ];

    // Create a valid solution for the challenge.
    const fixedMassTorque = fixedMassesList[ 0 ].mass.massValue * fixedMassesList[ 0 ].distance +
                            fixedMassesList[ 1 ].mass.massValue * fixedMassesList[ 1 ].distance;
    const solution = { mass: movableMass, distance: -fixedMassTorque / movableMass.massValue };
    assert && assert( solution.distance % Plank.INTER_SNAP_TO_MARKER_DISTANCE === 0 ); // Verify that this is really a workable solution.

    // Create the actual challenge.
    return new BalanceMassesChallenge( fixedMassesList, movableMassesList, [ solution ] );
  }
}

balancingAct.register( 'BalanceMassesChallenge', BalanceMassesChallenge );

export default BalanceMassesChallenge;