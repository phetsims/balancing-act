// Copyright 2014-2024, University of Colorado Boulder

/**
 * Main model class for the balance game.
 *
 * Note: Levels in this model are zero-indexed, even though they are often
 * presented to the user as starting at level 1.
 *
 * @author John Blanco
 */

import createObservableArray, { ObservableArray } from '../../../../axon/js/createObservableArray.js';
import EnumerationDeprecatedProperty from '../../../../axon/js/EnumerationDeprecatedProperty.js';
import Property from '../../../../axon/js/Property.js';
import stepTimer from '../../../../axon/js/stepTimer.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from '../../common/model/ColumnState.js';
import Fulcrum from '../../common/model/Fulcrum.js';
import LevelSupportColumn from '../../common/model/LevelSupportColumn.js';
import Mass from '../../common/model/Mass.js';
import Plank from '../../common/model/Plank.js';
import BalanceGameChallenge from './BalanceGameChallenge.js';
import BalanceGameChallengeFactory from './BalanceGameChallengeFactory.js';
import BalanceMassesChallenge from './BalanceMassesChallenge.js';
import MassDeductionChallenge from './MassDeductionChallenge.js';
import TiltedSupportColumn from './TiltedSupportColumn.js';
import TiltPredictionChallenge from './TiltPredictionChallenge.js';
import TiltPredictionState from './TiltPredictionState.js';

// constants
const MAX_LEVELS = 4;
const MAX_POINTS_PER_PROBLEM = 2;
const CHALLENGES_PER_PROBLEM_SET = 6;
const MAX_SCORE_PER_GAME = MAX_POINTS_PER_PROBLEM * CHALLENGES_PER_PROBLEM_SET;
const FULCRUM_HEIGHT = 0.85; // In meters.
const PLANK_HEIGHT = 0.75; // In meters.

type GameState = 'choosingLevel' | 'presentingInteractiveChallenge' | 'showingCorrectAnswerFeedback' | 'showingIncorrectAnswerFeedbackTryAgain' | 'showingIncorrectAnswerFeedbackMoveOn' | 'displayingCorrectAnswer' | 'showingLevelResults';

export default class BalanceGameModel {

  public readonly timerEnabledProperty: Property<boolean>;

  // Zero-based in the model, though levels appear to the user to start at 1
  public readonly levelProperty: Property<number>;

  public readonly challengeIndexProperty: Property<number>;
  public readonly scoreProperty: Property<number>;

  // Valid values for gameState are 'choosingLevel', 'presentingInteractiveChallenge', 'showingCorrectAnswerFeedback', 'showingIncorrectAnswerFeedbackTryAgain', 'showingIncorrectAnswerFeedbackMoveOn', 'displayingCorrectAnswer', 'showingLevelResults'
  public readonly gameStateProperty: Property<GameState>;

  public readonly columnStateProperty: Property<typeof ColumnState>;
  public readonly elapsedTimeProperty: Property<number>;

  // Best times and scores
  public bestTimes: ( number | null )[];
  public readonly bestScores: Property<number>[];

  // Counter used to track number of incorrect answers
  public incorrectGuessesOnCurrentChallenge: number;

  // Current set of challenges, which collectively comprise a single level, on which the user is currently working
  public challengeList: BalanceGameChallenge[] | null;

  // Fixed masses that sit on the plank and that the user must attempt to balance
  public readonly fixedMasses: ObservableArray<Mass>;

  // Masses that the user moves on to the plank to counterbalance the fixed masses
  public readonly movableMasses: ObservableArray<Mass>;

  // Masses that the user is (or users are) moving
  public readonly userControlledMasses: Mass[];

  // The plank
  public readonly plank: Plank;

  // Tilted support column. In this model, there is only one
  public readonly tiltedSupportColumn: TiltedSupportColumn;

  // Level support columns
  public readonly levelSupportColumns: LevelSupportColumn[];

  // Fulcrum on which the plank pivots
  public readonly fulcrum: Fulcrum;

  // Game timer ID
  private gameTimerId: number | null = null;

  // Flag set to indicate new best time, cleared each time a level is started
  public newBestTime = false;

  public constructor( tandem: Tandem ) {

    this.timerEnabledProperty = new Property( false );
    this.levelProperty = new Property( 0 );
    this.challengeIndexProperty = new Property( 0 );
    this.scoreProperty = new Property( 0 );

    this.gameStateProperty = new Property<GameState>( 'choosingLevel' );
    this.columnStateProperty = new EnumerationDeprecatedProperty( ColumnState, ColumnState.DOUBLE_COLUMNS );
    this.elapsedTimeProperty = new Property( 0 );

    // Best times and scores.
    this.bestTimes = [];
    this.bestScores = [];
    _.times( MAX_LEVELS, () => {
      this.bestTimes.push( null );
      this.bestScores.push( new Property( 0 ) );
    } );

    this.incorrectGuessesOnCurrentChallenge = 0;

    this.challengeList = null;

    this.fixedMasses = createObservableArray();

    this.movableMasses = createObservableArray();

    this.userControlledMasses = [];

    // Add the plank.
    this.plank = new Plank( new Vector2( 0, PLANK_HEIGHT ), new Vector2( 0, FULCRUM_HEIGHT ), this.columnStateProperty, this.userControlledMasses,
      tandem.createTandem( 'plank' ) );

    // Tilted support column.  In this model, there is only one.
    const tiltedSupportColumnXPos = 1.8; // Meters, empirically chosen to look good.
    this.tiltedSupportColumn = new TiltedSupportColumn( PLANK_HEIGHT + tiltedSupportColumnXPos * Math.tan( this.plank.maxTiltAngle ),
      tiltedSupportColumnXPos, -this.plank.maxTiltAngle );

    // Level support columns.
    this.levelSupportColumns = [
      new LevelSupportColumn( PLANK_HEIGHT, -1.625 ),
      new LevelSupportColumn( PLANK_HEIGHT, 1.625 )
    ];

    // Fulcrum on which the plank pivots
    this.fulcrum = new Fulcrum( new Dimension2( 1, FULCRUM_HEIGHT ) );
  }

  public step( dt: number ): void {
    this.plank.step( dt );
    this.movableMasses.forEach( mass => {
      mass.step( dt );
    } );
    this.fixedMasses.forEach( mass => {
      mass.step( dt );
    } );
  }

  public reset(): void {
    this.timerEnabledProperty.reset();
    this.levelProperty.reset();
    this.challengeIndexProperty.reset();
    this.scoreProperty.reset();
    this.gameStateProperty.reset();
    this.columnStateProperty.reset();
    this.elapsedTimeProperty.reset();
    this.bestScores.forEach( bestScoreProperty => { bestScoreProperty.reset(); } );
    this.bestTimes = [];
    _.times( MAX_LEVELS, () => {
      this.bestTimes.push( null );
    } );
  }

  public startLevel( level: number ): void {
    this.plank.removeAllMasses();
    this.levelProperty.set( level );
    this.scoreProperty.reset();
    this.challengeIndexProperty.reset();
    this.restartGameTimer();

    // Dispose of any challenges that are left over from the previous level.
    if ( this.challengeList !== null && this.challengeList.length > 0 ) {
      this.challengeList.forEach( challenge => {
        challenge.dispose();
      } );
    }

    // Set up the challenges.
    this.challengeList = BalanceGameChallengeFactory.generateChallengeSet( level );

    // Set up the model for the next challenge
    this.setChallenge( this.challengeList[ 0 ], this.challengeList[ 0 ].initialColumnState );

    // Change to new game state.
    this.gameStateProperty.set( 'presentingInteractiveChallenge' );

    // Flag set to indicate new best time, cleared each time a level is started.
    this.newBestTime = false;
  }

  private setChallenge( balanceChallenge: BalanceGameChallenge, columnState: typeof ColumnState ): void {

    // Clear out the previous challenge (if there was one).  Start by resetting the plank.
    this.plank.removeAllMasses();
    this.userControlledMasses.length = 0;

    // Force the plank to be level and still.  This prevents any floating point inaccuracies when adding masses.
    this.columnStateProperty.set( ColumnState.DOUBLE_COLUMNS );

    // Clear out the masses from the previous challenge.
    this.fixedMasses.clear();
    this.movableMasses.clear();

    // Set up the new challenge.
    balanceChallenge.fixedMassDistancePairs.forEach( fixedMassDistancePair => {
      this.fixedMasses.push( fixedMassDistancePair.mass );
      this.plank.addMassToSurfaceAt( fixedMassDistancePair.mass, fixedMassDistancePair.distance );
    } );

    balanceChallenge.movableMasses.forEach( mass => {
      const initialPosition = new Vector2( 3, 0 );
      mass.positionProperty.set( initialPosition );
      mass.userControlledProperty.link( ( userControlled: boolean ) => {
        if ( userControlled ) {
          this.userControlledMasses.push( mass );
        }
        else {
          // The user has dropped this mass.
          this.userControlledMasses.splice( this.userControlledMasses.indexOf( mass ), 1 );
          if ( !this.plank.addMassToSurface( mass ) ) {
            // The attempt to add this mass to surface of plank failed,
            // probably because the mass wasn't over the plank or there
            // wasn't on open spot near where it was released.
            mass.positionProperty.set( initialPosition );
          }
        }
      } );
      this.movableMasses.add( mass );

    } );

    // Set the column state.
    this.columnStateProperty.set( columnState );
  }

  public getCurrentChallenge(): BalanceGameChallenge | null {
    if ( this.challengeList === null || this.challengeList.length <= this.challengeIndexProperty.get() ) {
      return null;
    }
    return this.challengeList[ this.challengeIndexProperty.get() ];
  }

  public getChallengeCurrentPointValue(): number {
    return MAX_POINTS_PER_PROBLEM - this.incorrectGuessesOnCurrentChallenge;
  }

  /**
   * Check the user's proposed answer. Used overloaded functions in the original Java sim, a little ugly when ported.
   */
  public checkAnswer( mass?: number, tiltPrediction?: TiltPredictionState ): void {
    if ( this.getCurrentChallenge() instanceof BalanceMassesChallenge ) {

      // Turn off the column(s) so that the plank can move.
      this.columnStateProperty.set( ColumnState.NO_COLUMNS );

      this.handleProposedAnswer( this.plank.isBalanced() );
    }
    else if ( this.getCurrentChallenge() instanceof TiltPredictionChallenge ) {

      const isAnswerCorrect = ( tiltPrediction === TiltPredictionState.TILT_DOWN_ON_LEFT_SIDE && this.plank.getTorqueDueToMasses() > 0 ) ||
                              ( tiltPrediction === TiltPredictionState.TILT_DOWN_ON_RIGHT_SIDE && this.plank.getTorqueDueToMasses() < 0 ) ||
                              ( tiltPrediction === TiltPredictionState.STAY_BALANCED && this.plank.getTorqueDueToMasses() === 0 );

      if ( isAnswerCorrect ) {
        // Turn off the column(s) so that the plank can move.
        this.columnStateProperty.set( ColumnState.NO_COLUMNS );
      }

      this.handleProposedAnswer( isAnswerCorrect );
    }
    else if ( this.getCurrentChallenge() instanceof MassDeductionChallenge ) {
      this.handleProposedAnswer( mass === this.getTotalFixedMassValue() );
    }
  }

  private handleProposedAnswer( answerIsCorrect: boolean ): void {
    let pointsEarned = 0;
    if ( answerIsCorrect ) {
      // The user answered the challenge correctly.
      this.gameStateProperty.set( 'showingCorrectAnswerFeedback' );
      if ( this.incorrectGuessesOnCurrentChallenge === 0 ) {
        // User got it right the first time.
        pointsEarned = MAX_POINTS_PER_PROBLEM;
      }
      else {
        // User got it wrong at first, but got it right now.
        pointsEarned = MAX_POINTS_PER_PROBLEM - this.incorrectGuessesOnCurrentChallenge;
      }
      this.scoreProperty.value += pointsEarned;
    }
    else {
      // The user got it wrong.
      this.incorrectGuessesOnCurrentChallenge++;
      // @ts-expect-error
      if ( this.incorrectGuessesOnCurrentChallenge < this.getCurrentChallenge().maxAttemptsAllowed ) {
        this.gameStateProperty.set( 'showingIncorrectAnswerFeedbackTryAgain' );
      }
      else {
        this.gameStateProperty.set( 'showingIncorrectAnswerFeedbackMoveOn' );
      }
    }
  }

  public newGame(): void {
    this.stopGameTimer();
    this.gameStateProperty.set( 'choosingLevel' );
    this.incorrectGuessesOnCurrentChallenge = 0;
  }

  public nextChallenge(): void {
    this.challengeIndexProperty.value++;
    this.incorrectGuessesOnCurrentChallenge = 0;
    if ( this.challengeIndexProperty.get() < this.challengeList!.length ) {
      // Move to the next challenge.
      this.setChallenge( this.getCurrentChallenge()!, this.getCurrentChallenge()!.initialColumnState );
      this.gameStateProperty.set( 'presentingInteractiveChallenge' );
    }
    else {
      // All challenges completed for this level.

      // See if this is a new best time and, if so, record it.
      const level = this.levelProperty.get();
      if ( this.scoreProperty.get() === MAX_SCORE_PER_GAME ) {
        // Perfect game.  See if new best time.
        if ( this.bestTimes[ level ] === null || this.elapsedTimeProperty.get() < this.bestTimes[ level ] ) {
          this.newBestTime = this.bestTimes[ level ] !== null; // Don't set this flag for the first 'best time', only when the time improves.
          this.bestTimes[ level ] = this.elapsedTimeProperty.get();
        }
      }

      // Check for new best score
      if ( this.scoreProperty.get() > this.bestScores[ level ].value ) {
        this.bestScores[ level ].value = this.scoreProperty.get();
      }

      // Done with this game, show the results.
      this.gameStateProperty.set( 'showingLevelResults' );
    }
  }

  public tryAgain(): void {

    // Restore the column(s) to the original state but don't move the masses anywhere.  This makes it easier for the
    // users to see why their answer was incorrect.
    this.columnStateProperty.set( this.getCurrentChallenge()!.initialColumnState );
    this.gameStateProperty.set( 'presentingInteractiveChallenge' );
  }

  public displayCorrectAnswer(): void {
    const currentChallenge = this.getCurrentChallenge();

    // Put the challenge in its initial state, but with the columns turned off.
    this.setChallenge( currentChallenge!, ColumnState.NO_COLUMNS );

    // Add the movable mass or masses to the plank according to the solution.
    currentChallenge!.balancedConfiguration.forEach( massDistancePair => {
      this.plank.addMassToSurfaceAt( massDistancePair.mass, massDistancePair.distance );
    } );

    // Update the game state.
    this.gameStateProperty.set( 'displayingCorrectAnswer' );
  }

  public getTipDirection(): TiltPredictionState {
    if ( this.plank.getTorqueDueToMasses() < 0 ) {
      return TiltPredictionState.TILT_DOWN_ON_RIGHT_SIDE;
    }
    else if ( this.plank.getTorqueDueToMasses() > 0 ) {
      return TiltPredictionState.TILT_DOWN_ON_LEFT_SIDE;
    }
    else {
      return TiltPredictionState.STAY_BALANCED;
    }
  }

  public getTotalFixedMassValue(): number {
    let totalMass = 0;
    this.getCurrentChallenge()!.fixedMassDistancePairs.forEach( massDistancePair => {
      totalMass += massDistancePair.mass.massValue;
    } );
    return totalMass;
  }

  public restartGameTimer(): void {
    if ( this.gameTimerId !== null ) {
      // @ts-expect-error
      stepTimer.clearInterval( this.gameTimerId );
    }
    this.elapsedTimeProperty.reset();

    // @ts-expect-error
    this.gameTimerId = stepTimer.setInterval( () => { this.elapsedTimeProperty.value += 1; }, 1000 );
  }

  public stopGameTimer(): void {

    // @ts-expect-error
    stepTimer.clearInterval( this.gameTimerId );
    this.gameTimerId = null;
  }

  // statics
  public static readonly PROBLEMS_PER_LEVEL = CHALLENGES_PER_PROBLEM_SET;
  public static readonly MAX_POSSIBLE_SCORE = MAX_POINTS_PER_PROBLEM * CHALLENGES_PER_PROBLEM_SET;
  public static readonly PLANK_HEIGHT = PLANK_HEIGHT;
}

balancingAct.register( 'BalanceGameModel', BalanceGameModel );