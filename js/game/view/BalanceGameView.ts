// Copyright 2013-2025, University of Colorado Boulder

/**
 * Main screen for the balance game.
 *
 * @author John Blanco
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import EnumerationDeprecatedProperty from '../../../../axon/js/EnumerationDeprecatedProperty.js';
import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import merge from '../../../../phet-core/js/merge.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import FaceWithPointsNode from '../../../../scenery-phet/js/FaceWithPointsNode.js';
import LevelSupportColumnNode from '../../../../scenery-phet/js/LevelSupportColumnNode.js';
import OutsideBackgroundNode from '../../../../scenery-phet/js/OutsideBackgroundNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import ManualConstraint from '../../../../scenery/js/layout/constraints/ManualConstraint.js';
import AlignBox from '../../../../scenery/js/layout/nodes/AlignBox.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import Color from '../../../../scenery/js/util/Color.js';
import TextPushButton from '../../../../sun/js/buttons/TextPushButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import FiniteStatusBar from '../../../../vegas/js/FiniteStatusBar.js';
import GameAudioPlayer from '../../../../vegas/js/GameAudioPlayer.js';
import LevelCompletedNode from '../../../../vegas/js/LevelCompletedNode.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import BASharedConstants from '../../common/BASharedConstants.js';
import ColumnState from '../../common/model/ColumnState.js';
import Mass from '../../common/model/Mass.js';
import PositionIndicatorChoice from '../../common/model/PositionIndicatorChoice.js';
import AttachmentBarNode from '../../common/view/AttachmentBarNode.js';
import FulcrumNode from '../../common/view/FulcrumNode.js';
import LevelIndicatorNode from '../../common/view/LevelIndicatorNode.js';
import MassNodeFactory from '../../common/view/MassNodeFactory.js';
import PlankNode from '../../common/view/PlankNode.js';
import PositionIndicatorControlPanel from '../../common/view/PositionIndicatorControlPanel.js';
import PositionMarkerSetNode from '../../common/view/PositionMarkerSetNode.js';
import RotatingRulerNode from '../../common/view/RotatingRulerNode.js';
import TiltedSupportColumnNode from '../../common/view/TiltedSupportColumnNode.js';
import BalanceGameModel from '../model/BalanceGameModel.js';
import BalanceMassesChallenge from '../model/BalanceMassesChallenge.js';
import MassDeductionChallenge from '../model/MassDeductionChallenge.js';
import TiltPredictionChallenge from '../model/TiltPredictionChallenge.js';
import TiltPredictionState from '../model/TiltPredictionState.js';
import GameIconNode from './GameIconNode.js';
import MassValueEntryNode from './MassValueEntryNode.js';
import StartGameLevelNode from './StartGameLevelNode.js';
import TiltPredictionSelectorNode from './TiltPredictionSelectorNode.js';

const checkStringProperty = VegasStrings.checkStringProperty;
const nextStringProperty = VegasStrings.nextStringProperty;
const showAnswerStringProperty = VegasStrings.showAnswerStringProperty;
const startOverStringProperty = BalancingActStrings.startOverStringProperty;
const tryAgainStringProperty = VegasStrings.tryAgainStringProperty;

// constants
const BUTTON_FONT = new PhetFont( 24 );
const BUTTON_FILL = new Color( 0, 255, 153 );

export default class BalanceGameView extends ScreenView {

  // Model reference
  public readonly model: BalanceGameModel;

  // View nodes
  public readonly modelViewTransform: ModelViewTransform2;
  public readonly rootNode: Node;
  public readonly outsideBackgroundNode: OutsideBackgroundNode;
  public readonly controlLayer: Node;
  public readonly challengeLayer: Node;
  public readonly startGameLevelNode: StartGameLevelNode;
  public readonly scoreboard: FiniteStatusBar;
  public readonly challengeTitleNode: Node;
  public readonly massValueEntryNode: MassValueEntryNode;
  public readonly tiltPredictionSelectorNode: TiltPredictionSelectorNode;
  public readonly faceWithPointsNode: FaceWithPointsNode;
  public readonly gameAudioPlayer: GameAudioPlayer;

  // Buttons
  public readonly buttons: TextPushButton[];
  public readonly checkAnswerButton: TextPushButton;
  public readonly nextButton: TextPushButton;
  public readonly tryAgainButton: TextPushButton;
  public readonly displayCorrectAnswerButton: TextPushButton;

  // Level completed node - initialized to null
  public levelCompletedNode: LevelCompletedNode | null;

  public constructor( gameModel: BalanceGameModel, tandem: Tandem ) {
    super( { layoutBounds: BASharedConstants.LAYOUT_BOUNDS } );
    this.model = gameModel;

    // Create the model-view transform.  The primary units used in the model are meters, so significant zoom is used.
    // The multipliers for the 2nd parameter can be used to adjust where the point (0, 0) in the model, which is on the
    // ground just below the center of the balance, is positioned in the view.
    this.modelViewTransform = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( this.layoutBounds.width * 0.45, this.layoutBounds.height * 0.86 ),
      115 );

    // Create a root node and send to back so that the layout bounds box can
    // be made visible if needed.
    this.rootNode = new Node();
    this.addChild( this.rootNode );
    this.rootNode.moveToBack();

    // Add the background, which portrays the sky and ground.
    this.outsideBackgroundNode = new OutsideBackgroundNode(
      this.layoutBounds.centerX,
      this.modelViewTransform.modelToViewY( 0 ),
      this.layoutBounds.width * 2.5,
      this.layoutBounds.height * 1.5,
      this.layoutBounds.height
    );
    this.rootNode.addChild( this.outsideBackgroundNode );

    // Add layers used to control game appearance.
    this.controlLayer = new Node();
    this.rootNode.addChild( this.controlLayer );
    this.challengeLayer = new Node();
    this.rootNode.addChild( this.challengeLayer );

    // Add the fulcrum, the columns, etc.
    this.challengeLayer.addChild( new FulcrumNode( this.modelViewTransform, gameModel.fulcrum ) );
    this.challengeLayer.addChild( new TiltedSupportColumnNode(
      this.modelViewTransform,
      gameModel.tiltedSupportColumn,
      gameModel.columnStateProperty
    ) );

    const visibleProperty = DerivedProperty.valueEqualsConstant( gameModel.columnStateProperty, ColumnState.DOUBLE_COLUMNS );
    gameModel.levelSupportColumns.forEach( levelSupportColumn => {
      const transformedColumnShape = this.modelViewTransform.modelToViewShape( levelSupportColumn );
      this.challengeLayer.addChild( new LevelSupportColumnNode(
        {
          columnWidth: transformedColumnShape.bounds.width,
          columnHeight: transformedColumnShape.bounds.height,
          x: transformedColumnShape.bounds.x,
          y: transformedColumnShape.bounds.y,
          visibleProperty: visibleProperty
        }
      ) );
    } );
    this.challengeLayer.addChild( new PlankNode( this.modelViewTransform, gameModel.plank ) );
    this.challengeLayer.addChild( new AttachmentBarNode( this.modelViewTransform, gameModel.plank ) );

    // Watch the model and add/remove visual representations of masses.
    gameModel.movableMasses.addItemAddedListener( ( addedMass: Mass ) => {

      // Create and add the view representation for this mass.
      const massNode = MassNodeFactory.createMassNode(
        addedMass,
        this.modelViewTransform,
        true,
        new Property( true ),
        gameModel.columnStateProperty
      );
      this.challengeLayer.addChild( massNode );

      // Move the mass to the front when grabbed so that layering stays reasonable.
      addedMass.userControlledProperty.link( ( userControlled: boolean ) => {
        if ( userControlled ) {
          massNode.moveToFront();
        }
      } );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.movableMasses.addItemRemovedListener( function removeMovableMass( removedMass: Mass ) {
        if ( removedMass === addedMass ) {

          // @ts-expect-error
          this.challengeLayer.removeChild( massNode );
          massNode.dispose();
          gameModel.movableMasses.removeItemRemovedListener( removeMovableMass );
        }
      }.bind( this ) );
    } );
    gameModel.fixedMasses.addItemAddedListener( ( addedMass: Mass ) => {
      // Create and add the view representation for this mass.
      const massNode = MassNodeFactory.createMassNode( addedMass, this.modelViewTransform, true, new Property( true ), gameModel.columnStateProperty );
      massNode.pickable = false; // Fixed masses can't be moved by users.
      this.challengeLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.fixedMasses.addItemRemovedListener( function removeFixedMass( removedMass: Mass ) {
        if ( removedMass === addedMass ) {

          // @ts-expect-error
          this.challengeLayer.removeChild( massNode );
          massNode.dispose();
          gameModel.fixedMasses.removeItemRemovedListener( removeFixedMass );
        }
      }.bind( this ) );
    } );

    // Add the node that allows the user to choose a game level to play.
    this.startGameLevelNode = new StartGameLevelNode(
      ( level: number ) => {
        gameModel.startLevel( level );
        positionMarkerStateProperty.reset();
      },
      () => {
        gameModel.reset();
        positionMarkerStateProperty.reset();
      },
      gameModel.timerEnabledProperty,
      [
        new GameIconNode( 1 ),
        new GameIconNode( 2 ),
        new GameIconNode( 3 ),
        new GameIconNode( 4 )
      ],
      gameModel.bestScores,
      this.modelViewTransform,
      {
        numStarsOnButtons: BalanceGameModel.PROBLEMS_PER_LEVEL,
        perfectScore: BalanceGameModel.MAX_POSSIBLE_SCORE,
        maxTitleWidth: this.layoutBounds.width * 0.9
      }
    );
    this.rootNode.addChild( this.startGameLevelNode );

    // Initialize a reference to the 'level completed' node.
    this.levelCompletedNode = null;

    // Create the audio player for the game sounds.
    this.gameAudioPlayer = new GameAudioPlayer();

    // Create and add the game scoreboard.
    this.scoreboard = new FiniteStatusBar(
      this.layoutBounds,
      this.visibleBoundsProperty,
      gameModel.scoreProperty,
      {
        challengeNumberProperty: new DerivedProperty( [ gameModel.challengeIndexProperty ], ( challengeIndex: number ) => challengeIndex + 1 ),
        numberOfChallengesProperty: new Property( BalanceGameModel.PROBLEMS_PER_LEVEL ),

        // FiniteStatusBar uses 1-based level numbering, model is 0-based, see #85.
        // @ts-expect-error
        levelProperty: new DerivedProperty( [ gameModel.levelProperty ], ( level: number ) => level + 1 ),
        elapsedTimeProperty: gameModel.elapsedTimeProperty,
        timerEnabledProperty: gameModel.timerEnabledProperty,
        startOverButtonText: startOverStringProperty,
        font: new PhetFont( 14 ),
        textFill: 'white',
        xMargin: 20,
        yMargin: 5,
        barFill: 'rgb( 36, 88, 151 )',
        dynamicAlignment: false,
        startOverButtonOptions: {
          textFill: 'black',
          baseColor: '#e5f3ff',
          maxHeight: 30,
          listener: () => { gameModel.newGame(); }
        }
      }
    );
    this.addChild( this.scoreboard );

    // Add the title.  It is blank to start with for layout, and is updated later at the appropriate state change.
    this.challengeTitleNode = new Node( { children: [ new Text( '' ) ] } );
    this.challengeLayer.addChild( this.challengeTitleNode );

    // Add the dialog node that is used in the mass deduction challenges
    // to enable the user to submit specific mass values.
    this.massValueEntryNode = new MassValueEntryNode( {
      centerX: this.modelViewTransform.modelToViewX( 0 )
    } );
    this.challengeLayer.addChild( this.massValueEntryNode );

    // Add the node that allows the user to submit their prediction of which
    // way the plank will tilt.  This is used in the tilt prediction challenges.
    this.tiltPredictionSelectorNode = new TiltPredictionSelectorNode( gameModel.gameStateProperty );
    this.challengeLayer.addChild( this.tiltPredictionSelectorNode );
    this.tiltPredictionSelectorNode.centerX = this.modelViewTransform.modelToViewX( 0 );
    this.tiltPredictionSelectorNode.bottom = this.modelViewTransform.modelToViewY( BalanceGameModel.PLANK_HEIGHT + 0.8 );

    // Create the 'feedback node' that is used to visually indicate correct
    // and incorrect answers.
    this.faceWithPointsNode = new FaceWithPointsNode(
      {
        faceOpacity: 0.6,
        faceDiameter: this.layoutBounds.width * 0.31,
        pointsFill: 'yellow',
        pointsStroke: 'black',
        pointsAlignment: 'rightCenter',
        centerX: this.modelViewTransform.modelToViewX( 0 ),
        centerY: this.modelViewTransform.modelToViewY( 2.2 )
      } );
    this.addChild( this.faceWithPointsNode );

    // Add and lay out the buttons.
    this.buttons = [];
    const buttonOptions = {
      font: BUTTON_FONT,
      baseColor: BUTTON_FILL,
      cornerRadius: 4,

      maxWidth: 300 // empirically determined
    };
    this.checkAnswerButton = new TextPushButton( checkStringProperty, merge( {
      listener: () => {
        gameModel.checkAnswer(
          this.massValueEntryNode.massValueProperty.value,
          this.tiltPredictionSelectorNode.tiltPredictionProperty.value
        );
      }
    }, buttonOptions ) );
    this.rootNode.addChild( this.checkAnswerButton );
    this.buttons.push( this.checkAnswerButton );

    this.nextButton = new TextPushButton( nextStringProperty, merge( {
      listener: () => { gameModel.nextChallenge(); }
    }, buttonOptions ) );
    this.rootNode.addChild( this.nextButton );
    this.buttons.push( this.nextButton );

    this.tryAgainButton = new TextPushButton( tryAgainStringProperty, merge( {
      listener: () => { gameModel.tryAgain(); }
    }, buttonOptions ) );
    this.rootNode.addChild( this.tryAgainButton );
    this.buttons.push( this.tryAgainButton );

    this.displayCorrectAnswerButton = new TextPushButton( showAnswerStringProperty, merge( {
      listener: () => { gameModel.displayCorrectAnswer(); }
    }, buttonOptions ) );
    this.rootNode.addChild( this.displayCorrectAnswerButton );
    this.buttons.push( this.displayCorrectAnswerButton );

    const buttonCenter = this.modelViewTransform.modelToViewPosition( new Vector2( 0, -0.3 ) );

    ManualConstraint.create( this.rootNode, this.buttons, () => {
      this.buttons.forEach( ( button: TextPushButton ) => {
        button.center = buttonCenter;
      } );
    } );

    // Add listeners that control the enabled state of the check answer button.
    gameModel.plank.massesOnSurface.addItemAddedListener( this.updateCheckAnswerButtonEnabled.bind( this ) );
    gameModel.plank.massesOnSurface.addItemRemovedListener( this.updateCheckAnswerButtonEnabled.bind( this ) );
    this.tiltPredictionSelectorNode.tiltPredictionProperty.link( this.updateCheckAnswerButtonEnabled.bind( this ) );
    this.massValueEntryNode.massValueProperty.link( this.updateCheckAnswerButtonEnabled.bind( this ) );

    // Register for changes to the game state and update accordingly.
    gameModel.gameStateProperty.link( this.handleGameStateChange.bind( this ) );

    // Show the level indicator to help the user see if the plank is perfectly
    // balanced, but only show it when the support column has been removed.
    const levelIndicator = new LevelIndicatorNode( this.modelViewTransform, gameModel.plank );
    gameModel.columnStateProperty.link( ( columnState: IntentionalAny ) => {
      levelIndicator.visible = ( columnState === ColumnState.NO_COLUMNS );
    } );
    this.challengeLayer.addChild( levelIndicator );

    // Add a panel for controlling whether the ruler or marker set are visible.
    const positionMarkerStateProperty = new EnumerationDeprecatedProperty( PositionIndicatorChoice, PositionIndicatorChoice.NONE );

    // Add the ruler.
    const rulersVisibleProperty = new Property( false );
    positionMarkerStateProperty.link( ( positionMarkerState: IntentionalAny ) => {
      rulersVisibleProperty.value = positionMarkerState === PositionIndicatorChoice.RULERS;
    } );
    this.challengeLayer.addChild( new RotatingRulerNode( gameModel.plank, this.modelViewTransform, rulersVisibleProperty ) );

    // Add the position markers.
    const positionMarkersVisibleProperty = new Property( false );
    positionMarkerStateProperty.link( ( positionMarkerState: IntentionalAny ) => {
      positionMarkersVisibleProperty.value = positionMarkerState === PositionIndicatorChoice.MARKS;
    } );
    this.challengeLayer.addChild( new PositionMarkerSetNode( gameModel.plank, this.modelViewTransform, positionMarkersVisibleProperty ) );

    // Add the control panel that will allow users to select between the
    // various position markers, i.e. ruler, position markers, or nothing.
    const positionPanel = new PositionIndicatorControlPanel( positionMarkerStateProperty, this.layoutBounds.width, {

      right: this.layoutBounds.right - 10,
      top: this.scoreboard.bottom + 23,

      // specify a max width that will fit the panel between the rightmost view object and the layout bounds
      maxWidth: this.layoutBounds.width - this.tiltPredictionSelectorNode.bounds.maxX - 10,
      tandem: tandem.createTandem( 'positionPanel' )
    } );
    this.controlLayer.addChild( positionPanel );

    ManualConstraint.create( this, [ this.challengeTitleNode, this.massValueEntryNode ], ( titleNodeProxy, massValueProxy ) => {
      // Center the title above the pivot point.
      titleNodeProxy.centerX = this.modelViewTransform.modelToViewX( this.model.plank.pivotPoint.x );
      titleNodeProxy.top = this.scoreboard.bottom + 20;
      massValueProxy.top = titleNodeProxy.bounds.maxY + 4;
    } );
  }

  private updateTitle(): void {
    const balanceGameChallenge = this.model.getCurrentChallenge();
    if ( balanceGameChallenge !== null ) {
      this.challengeTitleNode.children = [
        // @ts-expect-error
        new Text( this.model.getCurrentChallenge()!.viewConfig.title, {
          font: new PhetFont( { size: 60, weight: 'bold' } ),
          fill: 'white',
          stroke: 'black',
          lineWidth: 1.5,
          maxWidth: 530 // empirically determined based on tests with long strings
        } )
      ];
    }
  }

  private updateCheckAnswerButtonEnabled(): void {

    if ( this.model.getCurrentChallenge() instanceof BalanceMassesChallenge ) {

      // The button should be enabled whenever there are masses on the
      // right side of the plank.
      let massesOnRightSide = false;
      this.model.plank.massesOnSurface.forEach( ( mass: Mass ) => {
        if ( mass.positionProperty.get().x > this.model.plank.getPlankSurfaceCenter().x ) {
          massesOnRightSide = true;
        }
      } );
      this.checkAnswerButton.enabled = massesOnRightSide;
    }
    else if ( this.model.getCurrentChallenge() instanceof TiltPredictionChallenge ) {

      // The button should be enabled once the user has made a prediction.
      this.checkAnswerButton.enabled = this.tiltPredictionSelectorNode.tiltPredictionProperty.value !== TiltPredictionState.NONE;
    }
    else if ( this.model.getCurrentChallenge() instanceof MassDeductionChallenge ) {

      // The button should be enabled for any non-zero value.
      this.checkAnswerButton.enabled = this.massValueEntryNode.massValueProperty.value !== 0;
    }
  }

  private handleGameStateChange( gameState: string ): void {

    // Hide all nodes - the appropriate ones will be shown later based on
    // the current state.
    this.hideAllGameNodes();

    let score;

    // Show the nodes appropriate to the state
    switch( gameState ) {
      case 'choosingLevel':
        this.show( [ this.startGameLevelNode ] );
        this.hideChallenge();
        break;

      case 'presentingInteractiveChallenge':
        this.updateTitle();
        this.challengeLayer.pickable = null;
        this.show( [ this.challengeTitleNode, this.scoreboard, this.checkAnswerButton ] );

        // @ts-expect-error
        if ( this.model.getCurrentChallenge()!.viewConfig.showMassEntryDialog ) {
          if ( this.model.incorrectGuessesOnCurrentChallenge === 0 ) {
            this.massValueEntryNode.clear();
          }
          this.massValueEntryNode.visible = true;
        }
        else {

          // @ts-expect-error
          if ( this.model.getCurrentChallenge()!.viewConfig.showTiltPredictionSelector ) {
            this.tiltPredictionSelectorNode.tiltPredictionProperty.reset();
            this.tiltPredictionSelectorNode.visible = true;
          }
        }

        this.showChallengeGraphics();

        break;

      case 'showingCorrectAnswerFeedback':

        // Show the appropriate nodes for this state.
        this.show( [ this.scoreboard, this.nextButton ] );

        // Give the user the appropriate audio and visual feedback
        this.gameAudioPlayer.correctAnswer();
        this.faceWithPointsNode.smile();
        this.faceWithPointsNode.setPoints( this.model.getChallengeCurrentPointValue() );
        this.faceWithPointsNode.visible = true;

        // Disable interaction with the challenge elements.
        this.challengeLayer.pickable = false;

        break;

      case 'showingIncorrectAnswerFeedbackTryAgain':

        // Show the appropriate nodes for this state.
        this.show( [ this.scoreboard, this.tryAgainButton ] );

        // Give the user the appropriate feedback
        this.gameAudioPlayer.wrongAnswer();
        this.faceWithPointsNode.frown();
        this.faceWithPointsNode.setPoints( this.model.scoreProperty.get() );
        this.faceWithPointsNode.visible = true;

        // Disable interaction with the challenge elements.
        this.challengeLayer.pickable = false;

        break;

      case 'showingIncorrectAnswerFeedbackMoveOn':

        // Show the appropriate nodes for this state.
        this.show( [ this.scoreboard, this.displayCorrectAnswerButton ] );

        // Give the user the appropriate feedback
        this.gameAudioPlayer.wrongAnswer();
        this.faceWithPointsNode.frown();
        this.faceWithPointsNode.setPoints( this.model.scoreProperty.get() );
        this.faceWithPointsNode.visible = true;

        // Disable interaction with the challenge elements.
        this.challengeLayer.pickable = false;

        break;

      case 'displayingCorrectAnswer':

        // Show the appropriate nodes for this state.
        this.show( [ this.scoreboard, this.nextButton ] );

        // Display the correct answer

        // @ts-expect-error
        if ( this.model.getCurrentChallenge().viewConfig.showMassEntryDialog ) {
          this.massValueEntryNode.showAnswer( this.model.getTotalFixedMassValue() );
          this.massValueEntryNode.visible = true;
        }

        // @ts-expect-error
        else if ( this.model.getCurrentChallenge().viewConfig.showTiltPredictionSelector ) {
          this.tiltPredictionSelectorNode.tiltPredictionProperty.value = this.model.getTipDirection();
          this.tiltPredictionSelectorNode.visible = true;
        }
        this.showChallengeGraphics();

        // Disable interaction with the challenge elements.
        this.challengeLayer.pickable = false;

        break;

      case 'showingLevelResults':
        score = this.model.scoreProperty.get();
        if ( score === BalanceGameModel.MAX_POSSIBLE_SCORE ) {
          this.gameAudioPlayer.gameOverPerfectScore();
        }
        else if ( score === 0 ) {
          this.gameAudioPlayer.gameOverZeroScore();
        }
        else {
          this.gameAudioPlayer.gameOverImperfectScore();
        }

        this.showLevelResultsNode();
        this.hideChallenge();
        break;

      default:
        throw new Error( 'Unhandled game state' );
    }
  }

  private hideAllGameNodes(): void {
    this.buttons.forEach( ( button: TextPushButton ) => { button.visible = false; } );
    this.setNodeVisibility( false, [ this.startGameLevelNode, this.challengeTitleNode, this.faceWithPointsNode, this.scoreboard,
      this.tiltPredictionSelectorNode, this.massValueEntryNode ] );
  }

  private show( nodesToShow: Node[] ): void {
    nodesToShow.forEach( ( nodeToShow: Node ) => { nodeToShow.visible = true; } );
  }

  private setNodeVisibility( isVisible: boolean, nodes: Node[] ): void {
    nodes.forEach( ( node: Node ) => { node.visible = isVisible; } );
  }

  private hideChallenge(): void {
    this.challengeLayer.visible = false;
    this.controlLayer.visible = false;
  }

  private showChallengeGraphics(): void {
    this.challengeLayer.visible = true;
    this.controlLayer.visible = true;
  }

  private showLevelResultsNode(): void {

    // Set a new "level completed" node based on the results.
    this.levelCompletedNode = new LevelCompletedNode(
      this.model.levelProperty.get() + 1,
      this.model.scoreProperty.get(),
      BalanceGameModel.MAX_POSSIBLE_SCORE,
      BalanceGameModel.PROBLEMS_PER_LEVEL,
      this.model.timerEnabledProperty.get(),
      this.model.elapsedTimeProperty.get(),
      this.model.bestTimes[ this.model.levelProperty.get() ],
      this.model.newBestTime,
      () => {
        this.model.gameStateProperty.set( 'choosingLevel' );
        this.rootNode.removeChild( levelCompletedAlignBox );
        this.levelCompletedNode = null;
      }, {
        contentMaxWidth: 600
      } );

    const levelCompletedAlignBox = new AlignBox( this.levelCompletedNode, {
      alignBounds: this.layoutBounds,
      align: 'center'
    } );

    // Add the node.
    this.rootNode.addChild( levelCompletedAlignBox );
  }
}

balancingAct.register( 'BalanceGameView', BalanceGameView );