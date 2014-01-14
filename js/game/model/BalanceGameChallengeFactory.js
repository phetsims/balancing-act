// Copyright 2002-2014, University of Colorado Boulder

/**
 * This is a factory pattern type that generates sets of challenges for use in
 * the balance game.  In this type, the terminology used to distinguish
 * between the various levels of difficulty for the challenges are (in order of
 * increasing difficulty):
 * - Simple
 * - Easy
 * - Moderate
 * - Advanced
 * This is not to be confused with the numerical game levels, since there is
 * not necessarily a direct correspondence between the numerical levels and
 * all of the challenges generated for that level.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var BalanceGameModel = require( 'BALANCING_ACT/game/model/BalanceGameModel' );
  var BalanceMassesChallenge = require( 'BALANCING_ACT/game/model/BalanceMassesChallenge' );
  var BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  var Boy = require( 'BALANCING_ACT/common/model/masses/Boy' );
  var Girl = require( 'BALANCING_ACT/common/model/masses/Girl' );
  var Man = require( 'BALANCING_ACT/common/model/masses/Man' );
  var Woman = require( 'BALANCING_ACT/common/model/masses/Woman' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var Vector2 = require( 'DOT/Vector2' );

  // Tolerance value used when comparing floating-point calculations.
  var COMPARISON_TOLERANCE = 1E-6;

  // Determine the min and max distances from the center of the plank where
  // masses may be positioned.
  var MAX_DISTANCE_FROM_BALANCE_CENTER_TO_MASS = ( Math.round( Plank.getLength() / Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE / 2 ) - 1 ) * Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE;

  // Parameters that control how many attempts are made to generate a unique
  // balance challenge.
  var MAX_GEN_ATTEMPTS = 50;
  var MAX_HALVING_OF_PAST_LIST = 3;

  // List of masses that can be used on either side of the balance challenges
  // or as the fixed masses in mass deduction challenges.
  var BALANCE_CHALLENGE_MASSES = [
    new BrickStack( 1, Vector2.ZERO ),
    new BrickStack( 2, Vector2.ZERO ),
    new BrickStack( 3, Vector2.ZERO ),
    new BrickStack( 4, Vector2.ZERO ),
    new Boy(),
    new Girl(),
    new Man(),
    new Woman()
    // TODO: Add other masses once all are ported, see orig Java sim for full list.
  ];

  // List of masses that can be used as "mystery masses" in the mass
  // deduction challenges.  These should not appear in other tabs, lest the
  // user could already know their mass.
  var MYSTERY_MASSES = [
    // TODO: Add masses once all are ported, see orig Java sim for full list.
  ];

  // List of masses that are "low profile", meaning that they are short.
  // This is needed for the tilt-prediction style of problem, since taller
  // masses end up going behind the tilt prediction selector.
  var LOW_PROFILE_MASSES = [
    // TODO: Add masses once all are ported, see orig Java sim for full list.
  ];

  // Lists used to keep track of the challenges generated so far so that we
  // can avoid creating the same challenges multiple times.
  var usedBalanceChallenges = [];
  var usedMassDeductionChallenges = [];
  var usedTiltPredictionChallenges = [];

  return {

    /**
     * Convenience function that generates a valid random distance from the
     * center of the plank.  The plank only allows discrete distances (i.e. it
     * is quantized), which is why this is needed.
     */
    generateRandomValidPlankDistance: function() {
      var maxDistance = Plank.prototype.LENGTH / 2;
      var increment = Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE;
      var maxIncrements = Math.round( maxDistance / increment ) - 1;
      return ( Math.floor( Math.random() * maxIncrements ) + 1 ) * increment;
    },

    createTwoBrickStackChallenge: function( numBricksInFixedStack, fixedStackDistanceFromCenter, numBricksInMovableStack ) {
      return BalanceMassesChallenge.create1Fixed1Movable( new BrickStack( numBricksInFixedStack ), fixedStackDistanceFromCenter, new BrickStack( numBricksInMovableStack ) );
    },

    // Generate a simple challenge where brick stacks of equal mass appear on each side.
    generateSimpleBalanceChallenge: function() {
      var numBricks = 1 + Math.floor( Math.random() * 4 );
      var distance = -this.generateRandomValidPlankDistance();
      return this.createTwoBrickStackChallenge( numBricks, distance, numBricks );
    },

    /**
     * Convenience function for removing the oldest half of a list.
     */
    removeOldestHalfOfList: function( list ) {
      var halfLength = Math.floor( list.size() / 2 );
      for ( var i = 0; i < halfLength; i++ ) {
        list.splice( halfLength, halfLength );
      }
    },

    /**
     * Method to generate a "unique" challenge, meaning one that the user
     * either hasn't seen before or at least hasn't seen recently.  The caller
     * provides function objects for generating the challenges and testing its
     * uniqueness, as well as a list of previous challenges to test against.
     */
    generateUniqueChallenge: function( challengeGenerator, uniquenessTest, previousChallenges ) {
      var challenge = null;
      var uniqueChallengeGenerated = false;

      for ( var i = 0; i < MAX_HALVING_OF_PAST_LIST && !uniqueChallengeGenerated; i++ ) {
        for ( var j = 0; j < MAX_GEN_ATTEMPTS; j++ ) {

          // Create a challenge.
          challenge = challengeGenerator();

          // Check whether the challenge is unique.
          if ( uniquenessTest( challenge, previousChallenges ) ) {
            // If so, we're done.
            uniqueChallengeGenerated = true;
            break;
          }
        }
        if ( !uniqueChallengeGenerated ) {
          // Several attempts did not yield a unique challenge, so
          // reduce the number of past challenges on the list in order
          // to make it easier, and then try again.
          this.removeOldestHalfOfList( previousChallenges );
        }
      }
    },

    /**
     * Test a challenge against a list of challenges to see if the given
     * challenge uses unique mass values for the movable and fixed masses.
     * Distances are ignored, so if a challenge is tested against a set that
     * contains one with the same masses but different distances, this will
     * return false, indicating that the challenge is non-unique.
     *
     * @param testChallenge
     * @param usedChallengeList
     * @return
     */
    usesUniqueMasses: function( testChallenge, usedChallengeList ) {
      for ( var i = 0; i < usedChallengeList.length; i++ ) {
        if ( usedChallengeList[i].usesSameMasses( testChallenge ) ) {
          return false;
        }
      }
      return true;
    },

    generateChallengeSet: function( level ) {
      var balanceChallengeList = [];
      switch( level ) {
        case 0:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          break;
        case 1:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          break;
        case 2:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          break;
        case 3:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge, this.usesUniqueMasses, usedBalanceChallenges ) );
          break;
        default:
          throw new Error( 'Can\'t generate challenge set for requested level: ' + level );
      }
      return balanceChallengeList;
    },

  };
} );