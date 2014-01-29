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
  var BalanceMassesChallenge = require( 'BALANCING_ACT/game/model/BalanceMassesChallenge' );
  var Barrel = require( 'BALANCING_ACT/common/model/masses/Barrel' );
  var BigRock = require( 'BALANCING_ACT/common/model/masses/BigRock' );
  var Boy = require( 'BALANCING_ACT/common/model/masses/Boy' );
  var BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  var CinderBlock = require( 'BALANCING_ACT/common/model/masses/CinderBlock' );
  var FireHydrant = require( 'BALANCING_ACT/common/model/masses/FireHydrant' );
  var FlowerPot = require( 'BALANCING_ACT/common/model/masses/FlowerPot' );
  var Girl = require( 'BALANCING_ACT/common/model/masses/Girl' );
  var LargeBucket = require( 'BALANCING_ACT/common/model/masses/LargeBucket' );
  var LargeTrashCan = require( 'BALANCING_ACT/common/model/masses/LargeTrashCan' );
  var Man = require( 'BALANCING_ACT/common/model/masses/Man' );
  var MassDeductionChallenge = require( 'BALANCING_ACT/game/model/MassDeductionChallenge' );
  var MediumBucket = require( 'BALANCING_ACT/common/model/masses/MediumBucket' );
  var MediumRock = require( 'BALANCING_ACT/common/model/masses/MediumRock' );
  var MediumTrashCan = require( 'BALANCING_ACT/common/model/masses/SmallRock' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var PottedPlant = require( 'BALANCING_ACT/common/model/masses/PottedPlant' );
  var SmallBucket = require( 'BALANCING_ACT/common/model/masses/SmallBucket' );
  var SmallRock = require( 'BALANCING_ACT/common/model/masses/SmallRock' );
  var SodaBottle = require( 'BALANCING_ACT/common/model/masses/SodaBottle' );
  var Television = require( 'BALANCING_ACT/common/model/masses/Television' );
  var TiltPredictionChallenge = require( 'BALANCING_ACT/game/model/TiltPredictionChallenge' );
  var TinyRock = require( 'BALANCING_ACT/common/model/masses/TinyRock' );
  var Tire = require( 'BALANCING_ACT/common/model/masses/Tire' );
  var Woman = require( 'BALANCING_ACT/common/model/masses/Woman' );
  var Vector2 = require( 'DOT/Vector2' );

  // Tolerance value used when comparing floating-point calculations.
//  var COMPARISON_TOLERANCE = 1E-6;

  // Determine the min and max distances from the center of the plank where
  // masses may be positioned.
//  var MAX_DISTANCE_FROM_BALANCE_CENTER_TO_MASS = ( Math.round( Plank.prototype.LENGTH / Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE / 2 ) - 1 ) * Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE;

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
    new TinyRock( Vector2.ZERO, false ),
    new SmallRock( Vector2.ZERO, false ),
    new MediumRock( Vector2.ZERO, false ),
    new BigRock( Vector2.ZERO, false ),
    new Boy( Vector2.ZERO, false ),
    new Girl( Vector2.ZERO, false ),
    new Man( Vector2.ZERO, false ),
    new Woman( Vector2.ZERO, false ),
    new Barrel( Vector2.ZERO, false ),
    new CinderBlock( Vector2.ZERO, false )
  ];

  // List of masses that can be used as "mystery masses" in the mass
  // deduction challenges.  These should not appear in other tabs, lest the
  // user could already know their mass.
  var MYSTERY_MASSES = [
    new FireHydrant( Vector2.ZERO, true ),
    new Television( Vector2.ZERO, true ),
    new LargeTrashCan( Vector2.ZERO, true ),
    new MediumTrashCan( Vector2.ZERO, true ),
    new FlowerPot( Vector2.ZERO, true ),
    new SmallBucket( Vector2.ZERO, true ),
    new MediumBucket( Vector2.ZERO, true ),
    new LargeBucket( Vector2.ZERO, true ),
    new PottedPlant( Vector2.ZERO, true ),
    new SodaBottle( Vector2.ZERO, true ),
    new Tire( Vector2.ZERO, true )
  ];

  // List of masses that are "low profile", meaning that they are short.
  // This is needed for the tilt-prediction style of problem, since taller
  // masses end up going behind the tilt prediction selector.
  /*
   var LOW_PROFILE_MASSES = [
   new TinyRock( Vector2.ZERO, true ),
   new SmallRock( Vector2.ZERO, true ),
   new MediumRock( Vector2.ZERO, true ),
   new CinderBlock( Vector2.ZERO, true )
   ];
   */

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

    /**
     * Get a list of the distances at which the fixed mass could be positioned
     * that would allow the movable mass to be positioned somewhere on the
     * other side of the fulcrum and balance the fixed mass.
     */
    getPossibleDistanceList: function( massOfFixedItem, massOfMovableItem ) {
      var validFixedMassDistances = [];
      for ( var testDistance = Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE; testDistance < Plank.length / 2; testDistance += Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE ) {
        var possibleFixedMassDistance = testDistance * massOfMovableItem / massOfFixedItem;
        if ( possibleFixedMassDistance < Plank.length / 2 &&
             possibleFixedMassDistance >= Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE - 1E-6 &&
             possibleFixedMassDistance % Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE < 1E-6 ) {
          // This is a valid distance.
          validFixedMassDistances.push( possibleFixedMassDistance );
        }
      }
      return validFixedMassDistances;
    },

    createTwoBrickStackChallenge: function( numBricksInFixedStack, fixedStackDistanceFromCenter, numBricksInMovableStack ) {
      return BalanceMassesChallenge.prototype.create1Fixed1Movable( new BrickStack( numBricksInFixedStack ), fixedStackDistanceFromCenter, new BrickStack( numBricksInMovableStack ) );
    },

    /**
     * Create a mass from the list of available given an original mass value
     * and a list of ratios.  The created mass will have a mass value that
     * equals the original value multiplied by one of the given ratios.
     *
     * @param {Number} massValue - Mass needed
     * @param {Array} ratios - Array of ratios (massValue / createdMassValue) which are acceptable.
     */
    createMassByRatio: function( massValue, ratios ) {
      var indexOffset = Math.floor( Math.random() * BALANCE_CHALLENGE_MASSES.length );
      for ( var i = 0; i < BALANCE_CHALLENGE_MASSES.length; i++ ) {
        var candidateMassPrototype = BALANCE_CHALLENGE_MASSES[ ( i + indexOffset ) % BALANCE_CHALLENGE_MASSES.length ];
        for ( var j = 0; j < ratios.length; j++ ) {
          if ( candidateMassPrototype.massValue * ratios[j] === massValue ) {
            // We have found a matching mass.  Clone it and return it.
            return candidateMassPrototype.createCopy();
          }
        }
      }

      // If we made it to here, that means that there is no mass that
      // matches the specified criteria.
      return null;
    },

    // Generate a simple challenge where brick stacks of equal mass appear on each side.
    generateSimpleBalanceChallenge: function() {
      var numBricks = 1 + Math.floor( Math.random() * 4 );
      var distance = -this.generateRandomValidPlankDistance();
      return this.createTwoBrickStackChallenge( numBricks, distance, numBricks );
    },

    /**
     * Generate a challenge that consists of brick stacks in simple ratios to
     * one another.  For instance, the fixed brick stack might be 2 bricks,
     * and the movable state be one brick.
     * <p/>
     * Ratios used are 2:1 or 1:2.
     */
    generateEasyBalanceChallenge: function() {
      var numBricksInFixedStack = 1;
      var numBricksInMovableStack = 1;
      var validFixedStackDistances = [];

      while ( validFixedStackDistances.length === 0 ) {
        // Choose the number of bricks in the fixed stack.  Must be 1, 2,
        // or 4 in order to support the ratios used.
        numBricksInFixedStack = Math.pow( 2, Math.floor( Math.random() * 3 ) );

        // Choose the number of bricks in movable stack.
        if ( numBricksInFixedStack === 1 || Math.random() > 0.5 ) {
          numBricksInMovableStack = 2 * numBricksInFixedStack;
        }
        else {
          numBricksInMovableStack = numBricksInFixedStack / 2;
        }

        // Create a list of the distances at which the fixed stack may be
        // positioned to balance the movable stack.
        validFixedStackDistances = this.getPossibleDistanceList( numBricksInFixedStack * BrickStack.prototype.BRICK_MASS,
          numBricksInMovableStack * BrickStack.prototype.BRICK_MASS );
      }

      // Randomly choose a distance to use from the identified set.
      var fixedStackDistanceFromCenter = -validFixedStackDistances[ Math.floor( Math.random() * validFixedStackDistances.length ) ];

      // Create the challenge.
      return this.createTwoBrickStackChallenge( numBricksInFixedStack, fixedStackDistanceFromCenter, numBricksInMovableStack );
    },

    /**
     * Generate a simple tilt-prediction style of challenge.  This one only
     * uses bricks, and never produces perfectly balanced challenges.
     */
    generateSimpleTiltPredictionChallenge: function() {
      // Choose two different numbers between 1 and 4 (inclusive) for the
      // number of bricks in the two stacks.
      var numBricksInLeftStack = 1 + Math.floor( Math.random() * 4 );
      var numBricksInRightStack = numBricksInLeftStack;
      while ( numBricksInRightStack === numBricksInLeftStack ) {
        numBricksInRightStack = 1 + Math.floor( Math.random() * 4 );
      }

      // Choose a distance from the center, which will be used for
      // positioning both stacks.  The max and min values can be tweaked if
      // desired to limit the range of distances generated.
      var distanceFromPlankCenter = this.generateRandomValidPlankDistance( Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE,
        Plank.prototype.LENGTH / 2 - Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE * 3 );

      // Create the actual challenge from the pieces.
      return TiltPredictionChallenge.prototype.create(
        new BrickStack( numBricksInLeftStack ),
        distanceFromPlankCenter,
        new BrickStack( numBricksInRightStack ),
        -distanceFromPlankCenter );
    },

    /**
     * Generate a mass deduction style challenge where the fixed mystery mass
     * is the same value as the known mass.
     */
    generateSimpleMassDeductionChallenge: function() {
      var indexOffset = 1 + Math.floor( Math.random() * BALANCE_CHALLENGE_MASSES.length );
      var knownMass = null;
      var mysteryMassPrototype = null;

      // Select a mystery mass and create a known mass with the same mass value.
      for ( var i = 0; i < MYSTERY_MASSES.length && knownMass === null; i++ ) {
        mysteryMassPrototype = MYSTERY_MASSES[ ( i + indexOffset ) % MYSTERY_MASSES.length ];
        knownMass = this.createMassByRatio( mysteryMassPrototype.massValue, [ 1 ] );
      }

      // There must be at least one combination that works.  If not, it's a
      // major problem in the code that must be fixed.
      assert && assert( knownMass !== null );

      // Since the masses are equal, any position for the mystery mass should
      // create a solvable challenge.
      var mysteryMassDistanceFromCenter = -this.generateRandomValidPlankDistance();

      // Create the challenge.
      return MassDeductionChallenge.prototype.create( mysteryMassPrototype.createCopy(), mysteryMassDistanceFromCenter, knownMass );
    },

    /**
     * Generate a mass deduction style challenge where the fixed mystery mass
     * is either twice as heavy or half as heavy as the known mass.
     */
    generateEasyMassDeductionChallenge: function() {
      var indexOffset = Math.floor( Math.random() * BALANCE_CHALLENGE_MASSES.length );
      var knownMass = null;
      var mysteryMassPrototype = null;

      for ( var i = 0; i < MYSTERY_MASSES.length && knownMass === null; i++ ) {
        mysteryMassPrototype = MYSTERY_MASSES[ ( i + indexOffset ) % MYSTERY_MASSES.length ];
        knownMass = this.createMassByRatio( mysteryMassPrototype.massValue, [ 2, 0.5 ] );
      }

      // There must be at least one combination that works.  If not, it's a
      // major problem in the code that must be fixed.
      assert && assert( knownMass !== null, 'Failed to generate an easy mass deduction challenge' );

      // Choose a distance for the mystery mass.
      var possibleDistances = this.getPossibleDistanceList( mysteryMassPrototype.massValue, knownMass.massValue );
      var mysteryMassDistanceFromCenter = -possibleDistances[ Math.floor( Math.random() * possibleDistances.length ) ];

      // Create the challenge.
      return MassDeductionChallenge.prototype.create( mysteryMassPrototype.createCopy(), mysteryMassDistanceFromCenter, knownMass );
    },

    /**
     * Convenience function for removing the oldest half of a list.
     */
    removeOldestHalfOfList: function( list ) {
      var halfLength = Math.floor( list.length / 2 );
      for ( var i = 0; i < halfLength; i++ ) {
        list.splice( halfLength, halfLength );
      }
    },

    /**
     * Method to generate a "unique" challenge, meaning one that the user
     * either hasn't seen before or at least hasn't seen recently.  The caller
     * provides functions for generating the challenges and testing its
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
      assert && assert( challenge !== null ); // The algorithm above should always produce something, log it if not.
      previousChallenges.push( challenge );
      return challenge;
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

    /**
     * Tests a challenge against a set of challenges to see whether the test
     * challenge has unique fixed masses and distances compared to all of the
     * challenges on the comparison list.  If any of the challenge on the
     * comparison list have the same fixed masses at the same distances from
     * the center, this will return false, indicating that the test challenge
     * is not unique.
     *
     * @param testChallenge
     * @param usedChallengeList
     * @return
     */
    usesUniqueFixedMassesAndDistances: function( testChallenge, usedChallengeList ) {
      for ( var i = 0; i < usedChallengeList.length; i++ ) {
        if ( usedChallengeList[i].usesSameFixedMassesAndDistances( testChallenge ) ) {
          return false;
        }
      }
      return true;
    },

    /**
     * Tests a challenge against a set of challenges to see whether the test
     * challenge has unique fixed masses compared to all of the challenges on
     * the list.  If any of the challenge on the comparison list have the same
     * fixed masses, this will return false, indicating that the challenge is
     * not unique.
     *
     * @param testChallenge
     * @param usedChallengeList
     * @return
     */
    usesUniqueFixedMasses: function( testChallenge, usedChallengeList ) {
      for ( var i = 0; i < usedChallengeList.length; i++ ) {
        if ( usedChallengeList[i].usesSameFixedMasses( testChallenge ) ) {
          return false;
        }
      }
      return true;
    },

    simpleBalanceChallengeGenerator: function() {
      return this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges );
    },

    easyBalanceChallengeGenerator: function() {
      return this.generateUniqueChallenge( this.generateEasyBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges );
    },

    simpleMassDeductionChallengeGenerator: function() {
      return this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges );
    },

    easyMassDeductionChallengeGenerator: function() {
      return this.generateUniqueChallenge( this.generateEasyMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges );
    },

    simpleTiltPredictionChallengeGenerator: function() {
      return this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges );
    },

    generateChallengeSet: function( level ) {
      var balanceChallengeList = [];
      switch( level ) {

        case 0:
          balanceChallengeList.push( this.simpleBalanceChallengeGenerator() );
          balanceChallengeList.push( this.simpleTiltPredictionChallengeGenerator() );
          balanceChallengeList.push( this.easyBalanceChallengeGenerator() );
          balanceChallengeList.push( this.simpleMassDeductionChallengeGenerator() );
          balanceChallengeList.push( this.simpleTiltPredictionChallengeGenerator() );
          balanceChallengeList.push( this.easyMassDeductionChallengeGenerator() );
          break;

        case 1:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          break;

        case 2:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          break;

        case 3:
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleMassDeductionChallenge.bind( this ), this.usesUniqueFixedMasses, usedMassDeductionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleTiltPredictionChallenge.bind( this ), this.usesUniqueFixedMassesAndDistances, usedTiltPredictionChallenges ) );
          balanceChallengeList.push( this.generateUniqueChallenge( this.generateSimpleBalanceChallenge.bind( this ), this.usesUniqueMasses, usedBalanceChallenges ) );
          break;

        default:
          throw new Error( 'Can\'t generate challenge set for requested level: ' + level );
      }
      return balanceChallengeList;
    }
  };
} )
;