// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BalanceGameChallenge = require( 'BALANCING_ACT/game/model/BalanceGameChallenge' );
  var whatIsTheMassString = require( 'string!BALANCING_ACT/whatIsTheMass' );

  /**
   * A challenge, used in the balance game, in which the user attempts to
   * deduce the mass of a "mystery mass" using another mass of a known value.
   *
   * @author John Blanco
   */
  function MassDeductionChallenge( fixedMassDistancePair, movableMass, solutionToDisplay ) {
    BalanceGameChallenge.call( this, 'noColumns' );

    this.fixedMassDistancePairs.push( fixedMassDistancePair );
    this.movableMasses.push( movableMass );
    this.balancedConfiguration.push( solutionToDisplay );

    // Set up the challenge view configuration, which provides information to
    // the view about how this challenge should be displayed.
    this.viewConfig = {
      title: whatIsTheMassString,
      showMassEntryDialog: true,
      showTiltPredictionSelector: false
    }
  }

  return inherit( BalanceGameChallenge, MassDeductionChallenge, {
    // Convenience function for create a mass deduction challenge.
    create: function( mysteryMass, mysteryMassDistanceFromCenter, knownMass ) {

      // Create the mass-distance pair for the mystery mass.
      var mysteryMassDistancePair = { mass: mysteryMass, distance: mysteryMassDistanceFromCenter };

      // Create a valid solution for the challenge.
      var solution = { mass: knownMass, distance: -mysteryMass.massValue * mysteryMassDistanceFromCenter / knownMass.massValue };

      // Combine into challenge.
      return new MassDeductionChallenge( mysteryMassDistancePair, knownMass, solution );
    }
  } );
} );