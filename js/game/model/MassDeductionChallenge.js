// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../phet-core/js/inherit.js';
import balancingActStrings from '../../balancingActStrings.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from '../../common/model/ColumnState.js';
import BalanceGameChallenge from './BalanceGameChallenge.js';

const whatIsTheMassString = balancingActStrings.whatIsTheMass;

/**
 * A challenge, used in the balance game, in which the user attempts to
 * deduce the mass of a "mystery mass" using another mass of a known value.
 *
 * @author John Blanco
 */
function MassDeductionChallenge( fixedMassDistancePair, movableMass, solutionToDisplay ) {
  BalanceGameChallenge.call( this, ColumnState.NO_COLUMNS );

  this.fixedMassDistancePairs.push( fixedMassDistancePair );
  this.movableMasses.push( movableMass );
  this.balancedConfiguration.push( solutionToDisplay );

  // Set up the challenge view configuration, which provides information to
  // the view about how this challenge should be displayed.
  this.viewConfig = {
    title: whatIsTheMassString,
    showMassEntryDialog: true,
    showTiltPredictionSelector: false
  };
}

balancingAct.register( 'MassDeductionChallenge', MassDeductionChallenge );

export default inherit( BalanceGameChallenge, MassDeductionChallenge, {}, {

  // statics

  // convenience factory method for creating a mass deduction challenge
  create: function( mysteryMass, mysteryMassDistanceFromCenter, knownMass ) {

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
} );