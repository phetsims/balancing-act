// Copyright 2014-2015, University of Colorado Boulder

/**
 * Main model class for the balance game.
 *
 * Note: Levels in this model are zero-indexed, even though they are often
 * presented to the user as starting at level 1.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var BalanceGameChallengeFactory = require( 'BALANCING_ACT/game/model/BalanceGameChallengeFactory' );
  var BalanceMassesChallenge = require( 'BALANCING_ACT/game/model/BalanceMassesChallenge' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Fulcrum = require( 'BALANCING_ACT/common/model/Fulcrum' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSupportColumn = require( 'BALANCING_ACT/common/model/LevelSupportColumn' );
  var MassDeductionChallenge = require( 'BALANCING_ACT/game/model/MassDeductionChallenge' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ObservableArray = require( 'AXON/ObservableArray' );
  var TiltedSupportColumn = require( 'BALANCING_ACT/game/model/TiltedSupportColumn' );
  var TiltPredictionChallenge = require( 'BALANCING_ACT/game/model/TiltPredictionChallenge' );
  var Timer = require( 'PHET_CORE/Timer' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var MAX_LEVELS = 4;
  var MAX_POINTS_PER_PROBLEM = 2;
  var CHALLENGES_PER_PROBLEM_SET = 6;
  var MAX_SCORE_PER_GAME = MAX_POINTS_PER_PROBLEM * CHALLENGES_PER_PROBLEM_SET;
  var FULCRUM_HEIGHT = 0.85; // In meters.
  var PLANK_HEIGHT = 0.75; // In meters.

  function BalanceGameModel() {
    var self = this;

    PropertySet.call( this, {
      soundEnabled: true,
      timerEnabled: false,
      level: 0, // Zero-based in the model, though levels appear to the user to start at 1.
      challengeIndex: 0,
      score: 0,

      // Valid values for gameState are 'choosingLevel', 'presentingInteractiveChallenge', 'showingCorrectAnswerFeedback',
      // 'showingIncorrectAnswerFeedbackTryAgain', 'showingIncorrectAnswerFeedbackMoveOn', 'displayingCorrectAnswer',
      // 'showingLevelResults'
      gameState: 'choosingLevel',
      columnState: 'singleColumns', // Valid values are 'none', 'singleColumn', 'doubleColumns'
      elapsedTime: 0
    } );

    // Best times and scores.
    self.bestTimes = [];
    self.mostRecentScores = [];
    _.times( MAX_LEVELS, function() {
      self.bestTimes.push( null );
      self.mostRecentScores.push( new Property( 0 ) );
    } );

    // Counter used to track number of incorrect answers.
    this.incorrectGuessesOnCurrentChallenge = 0;

    // Current set of challenges, which collectively comprise a single level, on
    // which the user is currently working.
    self.challengeList = null;

    // Fixed masses that sit on the plank and that the user must attempt to balance.
    self.fixedMasses = new ObservableArray();

    // Masses that the user moves on to the plank to counterbalance the fixed masses.
    self.movableMasses = new ObservableArray();

    // Masses that the user is (or users are) moving.
    self.userControlledMasses = [];

    // Add the plank.
    self.plank = new Plank( new Vector2( 0, PLANK_HEIGHT ), new Vector2( 0, FULCRUM_HEIGHT ), self.columnStateProperty, self.userControlledMasses );

    // Tilted support column.  In this model, there is only one.
    var tiltedSupportColumnXPos = 1.8; // Meters, empirically chosen to look good.
    self.tiltedSupportColumn = new TiltedSupportColumn( PLANK_HEIGHT + tiltedSupportColumnXPos * Math.tan( self.plank.maxTiltAngle ),
      tiltedSupportColumnXPos, -self.plank.maxTiltAngle );

    // Level support columns.
    self.levelSupportColumns = [
      new LevelSupportColumn( PLANK_HEIGHT, -1.625 ),
      new LevelSupportColumn( PLANK_HEIGHT, 1.625 )
    ];

    // Fulcrum on which the plank pivots
    self.fulcrum = new Fulcrum( new Dimension2( 1, FULCRUM_HEIGHT ) );
  }

  balancingAct.register( 'BalanceGameModel', BalanceGameModel );

  return inherit( PropertySet, BalanceGameModel,
    {
      step: function( dt ) {
        this.plank.step( dt );
        this.movableMasses.forEach( function( mass ) {
          mass.step( dt );
        } );
        this.fixedMasses.forEach( function( mass ) {
          mass.step( dt );
        } );
      },

      reset: function() {
        PropertySet.prototype.reset.call( this );
        this.mostRecentScores.forEach( function( mostReceentScoreProperty ) { mostReceentScoreProperty.reset(); } );
        this.bestTimes = [];
        var self = this;
        _.times( MAX_LEVELS, function() {
          self.bestTimes.push( null );
        } );
      },

      startLevel: function( level ) {
        this.level = level;
        this.score = 0;
        this.challengeIndex = 0;
        this.restartGameTimer();

        // Set up the challenges.
        this.challengeList = BalanceGameChallengeFactory.generateChallengeSet( level );

        // Set up the model for the next challenge
        this.setChallenge( this.challengeList[ 0 ], this.challengeList[ 0 ].initialColumnState );

        // Change to new game state.
        this.gameState = 'presentingInteractiveChallenge';

        // Flag set to indicate new best time, cleared each time a level is started.
        this.newBestTime = false;
      },

      setChallenge: function( balanceChallenge, columnState ) {

        var self = this;

        // Clear out the previous challenge (if there was one).  Start by
        // resetting the plank.
        self.plank.removeAllMasses();
        self.userControlledMasses.length = 0;

        // Force the plank to be level and still.  This prevents any floating
        // point inaccuracies when adding masses.
        self.columnState = 'doubleColumns';

        // Clear out the masses from the previous challenge.
        self.fixedMasses.clear();
        self.movableMasses.clear();

        // Set up the new challenge.
        balanceChallenge.fixedMassDistancePairs.forEach( function( fixedMassDistancePair ) {
          self.fixedMasses.push( fixedMassDistancePair.mass );
          self.plank.addMassToSurfaceAt( fixedMassDistancePair.mass, fixedMassDistancePair.distance );
        } );

        balanceChallenge.movableMasses.forEach( function( mass ) {
          var initialPosition = new Vector2( 3, 0 );
          mass.position = initialPosition;
          mass.userControlledProperty.link( function( userControlled ) {
            if ( userControlled ) {
              self.userControlledMasses.push( mass );
            }
            else {
              // The user has dropped this mass.
              self.userControlledMasses.splice( self.userControlledMasses.indexOf( mass ), 1 );
              if ( !self.plank.addMassToSurface( mass ) ) {
                // The attempt to add this mass to surface of plank failed,
                // probably because the mass wasn't over the plank or there
                // wasn't on open spot near where it was released.
                mass.position = initialPosition;
              }
            }
          } );
          self.movableMasses.add( mass );

        } );

        // Set the column state.
        self.columnState = columnState;
      },

      setChoosingLevelState: function() {
        this.gameState = 'choosingLevel';
      },

      getCurrentChallenge: function() {
        if ( this.challengeList === null || this.challengeList.size <= this.challengeIndex ) {
          return null;
        }
        return this.challengeList[ this.challengeIndex ];
      },

      getChallengeCurrentPointValue: function() {
        return MAX_POINTS_PER_PROBLEM - this.incorrectGuessesOnCurrentChallenge;
      },

      // Check the user's proposed answer.  Used overloaded functions in
      // the original Java sim, a little ugly when ported.
      checkAnswer: function( mass, tiltPrediction ) {
        if ( this.getCurrentChallenge() instanceof BalanceMassesChallenge ) {
          // Turn off the column(s) so that the plank can move.
          this.columnState = 'noColumns';

          this.handleProposedAnswer( this.plank.isBalanced() );
        }
        else if ( this.getCurrentChallenge() instanceof TiltPredictionChallenge ) {

          var isAnswerCorrect = ( tiltPrediction === 'tiltDownOnLeftSide' && this.plank.getTorqueDueToMasses() > 0 ) ||
                                ( tiltPrediction === 'tiltDownOnRightSide' && this.plank.getTorqueDueToMasses() < 0 ) ||
                                ( tiltPrediction === 'stayBalanced' && this.plank.getTorqueDueToMasses() === 0 );

          if ( isAnswerCorrect ) {
            // Turn off the column(s) so that the plank can move.
            this.columnState = 'noColumns';
          }

          this.handleProposedAnswer( isAnswerCorrect );
        }
        else if ( this.getCurrentChallenge() instanceof MassDeductionChallenge ) {
          this.handleProposedAnswer( mass === this.getTotalFixedMassValue() );
        }
      },

      handleProposedAnswer: function( answerIsCorrect ) {
        var pointsEarned = 0;
        if ( answerIsCorrect ) {
          // The user answered the challenge correctly.
          this.gameState = 'showingCorrectAnswerFeedback';
          if ( this.incorrectGuessesOnCurrentChallenge === 0 ) {
            // User got it right the first time.
            pointsEarned = MAX_POINTS_PER_PROBLEM;
          }
          else {
            // User got it wrong at first, but got it right now.
            pointsEarned = MAX_POINTS_PER_PROBLEM - this.incorrectGuessesOnCurrentChallenge;
          }
          this.score = this.score + pointsEarned;
        }
        else {
          // The user got it wrong.
          this.incorrectGuessesOnCurrentChallenge++;
          if ( this.incorrectGuessesOnCurrentChallenge < this.getCurrentChallenge().maxAttemptsAllowed ) {
            this.gameState = 'showingIncorrectAnswerFeedbackTryAgain';
          }
          else {
            this.gameState = 'showingIncorrectAnswerFeedbackMoveOn';
          }
        }
      },

      newGame: function() {
        this.stopGameTimer();
        this.gameState = 'choosingLevel';
        this.incorrectGuessesOnCurrentChallenge = 0;
      },

      nextChallenge: function() {
        this.challengeIndex++;
        this.incorrectGuessesOnCurrentChallenge = 0;
        if ( this.challengeIndex < this.challengeList.length ) {
          // Move to the next challenge.
          this.setChallenge( this.getCurrentChallenge(), this.getCurrentChallenge().initialColumnState );
          this.gameState = 'presentingInteractiveChallenge';
        }
        else {
          // All challenges completed for this level.  See if this is a new
          // best time and, if so, record it.
          if ( this.score === MAX_SCORE_PER_GAME ) {
            // Perfect game.  See if new best time.
            if ( this.bestTimes[ this.level ] === null || this.elapsedTime < this.bestTimes[ this.level ] ) {
              this.newBestTime = this.bestTimes[ this.level ] !== null; // Don't set this flag for the first 'best time', only when the time improves.
              this.bestTimes[ this.level ] = this.elapsedTime;
            }
          }
          this.mostRecentScores[ this.level ].value = this.score;

          // Done with this game, show the results.
          this.gameState = 'showingLevelResults';
        }
      },

      tryAgain: function() {
        // Restore the column(s) to the original state but don't move the
        // masses anywhere.  This makes it easier for the users to see why
        // their answer was incorrect.
        this.columnState = this.getCurrentChallenge().initialColumnState;
        this.gameState = 'presentingInteractiveChallenge';
      },

      displayCorrectAnswer: function() {
        var currentChallenge = this.getCurrentChallenge();

        // Put the challenge in its initial state, but with the columns turned off.
        this.setChallenge( currentChallenge, 'noColumns' );

        // Add the movable mass or masses to the plank according to the solution.
        var self = this;
        currentChallenge.balancedConfiguration.forEach( function( massDistancePair ) {
          self.plank.addMassToSurfaceAt( massDistancePair.mass, massDistancePair.distance );
        } );

        // Update the game state.
        this.gameState = 'displayingCorrectAnswer';
      },

      getTipDirection: function() {
        if ( this.plank.getTorqueDueToMasses() < 0 ) {
          return 'tiltDownOnRightSide';
        }
        else if ( this.plank.getTorqueDueToMasses() > 0 ) {
          return 'tiltDownOnLeftSide';
        }
        else {
          return 'stayBalanced';
        }
      },

      getTotalFixedMassValue: function() {
        var totalMass = 0;
        this.getCurrentChallenge().fixedMassDistancePairs.forEach( function( massDistancePair ) {
          totalMass += massDistancePair.mass.massValue;
        } );
        return totalMass;
      },

      restartGameTimer: function() {
        if ( this.gameTimerId !== null ) {
          Timer.clearInterval( this.gameTimerId );
        }
        this.elapsedTime = 0;
        var self = this;
        this.gameTimerId = Timer.setInterval( function() { self.elapsedTime += 1; }, 1000 );
      },

      stopGameTimer: function() {
        Timer.clearInterval( this.gameTimerId );
        this.gameTimerId = null;
      }
    }, {

      // statics
      PROBLEMS_PER_LEVEL: CHALLENGES_PER_PROBLEM_SET,
      MAX_POSSIBLE_SCORE: MAX_POINTS_PER_PROBLEM * CHALLENGES_PER_PROBLEM_SET

    } );
} );
