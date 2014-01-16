// Copyright 2002-2014, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user must attempt to
 * place a movable mass in the correct so that when the support column is
 * removed, the movable mass will balance the fixed mass that is initially on
 * the plank.
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BalanceGameChallenge = require( 'BALANCING_ACT/game/model/BalanceGameChallenge' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var balanceMeString = require( 'string!BALANCING_ACT/balanceMe' );

  /**
   * @param {Array} fixedMasses - Mass-distance pairs that describe the fixed masses.
   * @param {Array} movableMasses - Masses that can be moved by the user.
   * @param {Array} solutionToDisplay - Positions for the movable masses that will balance the fixed masses.
   * @constructor
   */
  function BalanceMassesChallenge( fixedMasses, movableMasses, solutionToDisplay ) {
    BalanceGameChallenge.call( this, 'singleColumn' );
    Array.prototype.push.apply( this.fixedMassDistancePairs, fixedMasses );
    Array.prototype.push.apply( this.movableMasses, movableMasses );
    Array.prototype.push.apply( this.balancedConfiguration, solutionToDisplay );

    // Set up the challenge view configuration, which provides information to
    // the view about how this challenge should be displayed.
    this.challengeViewConfig = {
      title: balanceMeString,
      showMassEntryDialog: false,
      showTiltPredictionSelector: false
    }
  }

  return inherit( BalanceGameChallenge, BalanceMassesChallenge, {
    // Convenience method for creating this type of challenge
    create1Fixed1Movable: function( fixedMass, fixedMassDistanceFromCenter, movableMass ) {

      // Add the fixed mass and its distance from the center of the balance.
      var fixedMassesList = [
        { mass: fixedMass, distance: fixedMassDistanceFromCenter }
      ];

      // Add the movable mass.
      var movableMassesList = [ movableMass ];

      // Create a valid solution for the challenge.
      var solution = [
        { mass: movableMass, distance: -( fixedMass.massValue * fixedMassDistanceFromCenter / movableMass.massValue ) }
      ];

      // And we're done.
      return new BalanceMassesChallenge( fixedMassesList, movableMassesList, solution );
    },

    // Convenience method for creating this type of challenge.
    create2Fixed1Movable: function( fixedMass1, fixedMass1DistanceFromCenter, fixedMass2, fixedMass2DistanceFromCenter, movableMass ) {
      // Add the fixed masses and their distances from the center of the balance.
      var fixedMassesList = [];
      fixedMassesList.push( { mass: fixedMass1, distance: -fixedMass1DistanceFromCenter } );
      fixedMassesList.push( { mass: fixedMass2, distance: -fixedMass2DistanceFromCenter } );

      // Add the movable mass.
      var movableMassesList = [ movableMass ];

      // Create a valid solution for the challenge.
      var fixedMassTorque = fixedMassesList[0].mass.massValue * fixedMassesList[0].distance +
                            fixedMassesList[1].mass.massValue * fixedMassesList[1].distance;
      var solution = { mass: movableMass, distance: -fixedMassTorque / movableMass.massValue };
      assert && assert( solution.distance % Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE === 0 ); // Verify that this is really a workable solution.

      // Create the actual challenge.
      return new BalanceMassesChallenge( fixedMassesList, movableMassesList, [ solution ] );
    }
  } );
} );