// Copyright 2013-2015, University of Colorado Boulder

/**
 * Main screen for the balance game.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var AttachmentBarNode = require( 'BALANCING_ACT/common/view/AttachmentBarNode' );
  var BalanceGameModel = require( 'BALANCING_ACT/game/model/BalanceGameModel' );
  var BalanceMassesChallenge = require( 'BALANCING_ACT/game/model/BalanceMassesChallenge' );
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var BASharedConstants = require( 'BALANCING_ACT/common/BASharedConstants' );
  var Color = require( 'SCENERY/util/Color' );
  var FaceWithPointsNode = require( 'SCENERY_PHET/FaceWithPointsNode' );
  var FulcrumNode = require( 'BALANCING_ACT/common/view/FulcrumNode' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var GameIconNode = require( 'BALANCING_ACT/game/view/GameIconNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNode = require( 'VEGAS/LevelCompletedNode' );
  var LevelIndicatorNode = require( 'BALANCING_ACT/common/view/LevelIndicatorNode' );
  var LevelSupportColumnNode = require( 'BALANCING_ACT/common/view/LevelSupportColumnNode' );
  var MassDeductionChallenge = require( 'BALANCING_ACT/game/model/MassDeductionChallenge' );
  var MassNodeFactory = require( 'BALANCING_ACT/common/view/MassNodeFactory' );
  var MassValueEntryNode = require( 'BALANCING_ACT/game/view/MassValueEntryNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Node = require( 'SCENERY/nodes/Node' );
  var OutsideBackgroundNode = require( 'SCENERY_PHET/OutsideBackgroundNode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var PlankNode = require( 'BALANCING_ACT/common/view/PlankNode' );
  var PositionIndicatorControlPanel = require( 'BALANCING_ACT/common/view/PositionIndicatorControlPanel' );
  var PositionMarkerSetNode = require( 'BALANCING_ACT/common/view/PositionMarkerSetNode' );
  var Property = require( 'AXON/Property' );
  var RotatingRulerNode = require( 'BALANCING_ACT/common/view/RotatingRulerNode' );
  var ScoreboardBar = require( 'VEGAS/ScoreboardBar' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var StartGameLevelNode = require( 'BALANCING_ACT/game/view/StartGameLevelNode' );
  var Text = require( 'SCENERY/nodes/Text' );
  var TextPushButton = require( 'SUN/buttons/TextPushButton' );
  var TiltedSupportColumnNode = require( 'BALANCING_ACT/common/view/TiltedSupportColumnNode' );
  var TiltPredictionChallenge = require( 'BALANCING_ACT/game/model/TiltPredictionChallenge' );
  var TiltPredictionSelectorNode = require( 'BALANCING_ACT/game/view/TiltPredictionSelectorNode' );
  var Vector2 = require( 'DOT/Vector2' );

  // Images and Strings
  var checkString = require( 'string!VEGAS/check' );
  var gameLevel1Icon = require( 'mipmap!BALANCING_ACT/game-level-1-icon.png' );
  var gameLevel2Icon = require( 'mipmap!BALANCING_ACT/game-level-2-icon.png' );
  var gameLevel3Icon = require( 'mipmap!BALANCING_ACT/game-level-3-icon.png' );
  var gameLevel4Icon = require( 'mipmap!BALANCING_ACT/game-level-4-icon.png' );
  var nextString = require( 'string!VEGAS/next' );
  var showAnswerString = require( 'string!VEGAS/showAnswer' );
  var startOverString = require( 'string!BALANCING_ACT/startOver' );
  var tryAgainString = require( 'string!VEGAS/tryAgain' );

  // constants
  var BUTTON_FONT = new PhetFont( 24 );
  var BUTTON_FILL = new Color( 0, 255, 153 );

  /**
   * @param {BalanceGameModel} gameModel
   * @constructor
   */
  function BalanceGameView( gameModel ) {
    ScreenView.call( this, { layoutBounds: BASharedConstants.LAYOUT_BOUNDS } );
    var self = this;
    self.model = gameModel;

    // Create the model-view transform.  The primary units used in the model are meters, so significant zoom is used.
    // The multipliers for the 2nd parameter can be used to adjust where the point (0, 0) in the model, which is on the
    // ground just below the center of the balance, is located in the view.
    var modelViewTransform = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( self.layoutBounds.width * 0.45, self.layoutBounds.height * 0.86 ),
      115 );
    self.modelViewTransform = modelViewTransform; // Make modelViewTransform available to descendant types.

    // Create a root node and send to back so that the layout bounds box can
    // be made visible if needed.
    self.rootNode = new Node();
    self.addChild( self.rootNode );
    self.rootNode.moveToBack();

    // Add the background, which portrays the sky and ground.
    self.outsideBackgroundNode = new OutsideBackgroundNode(
      this.layoutBounds.centerX,
      modelViewTransform.modelToViewY( 0 ),
      this.layoutBounds.width * 2.5,
      this.layoutBounds.height * 1.5,
      this.layoutBounds.height
    );
    self.rootNode.addChild( self.outsideBackgroundNode );

    // Add layers used to control game appearance.
    self.controlLayer = new Node();
    self.rootNode.addChild( self.controlLayer );
    self.challengeLayer = new Node();
    self.rootNode.addChild( self.challengeLayer );

    // Add the fulcrum, the columns, etc.
    self.challengeLayer.addChild( new FulcrumNode( modelViewTransform, gameModel.fulcrum ) );
    self.challengeLayer.addChild( new TiltedSupportColumnNode(
      modelViewTransform,
      gameModel.tiltedSupportColumn,
      gameModel.columnStateProperty
    ) );
    gameModel.levelSupportColumns.forEach( function( levelSupportColumn ) {
      self.challengeLayer.addChild( new LevelSupportColumnNode(
        modelViewTransform,
        levelSupportColumn,
        gameModel.columnStateProperty,
        false
      ) );
    } );
    self.challengeLayer.addChild( new PlankNode( modelViewTransform, gameModel.plank ) );
    self.challengeLayer.addChild( new AttachmentBarNode( modelViewTransform, gameModel.plank ) );

    // Watch the model and add/remove visual representations of masses.
    gameModel.movableMasses.addItemAddedListener( function( addedMass ) {

      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, modelViewTransform, true, new Property( true ) );
      self.challengeLayer.addChild( massNode );

      // Move the mass to the front when grabbed so that layering stays reasonable.
      addedMass.userControlledProperty.link( function( userControlled ) {
        if ( userControlled ) {
          massNode.moveToFront();
        }
      } );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.movableMasses.addItemRemovedListener( function removeMovableMass() {
        self.challengeLayer.removeChild( massNode );
        gameModel.movableMasses.removeItemRemovedListener( removeMovableMass );
      } );
    } );
    gameModel.fixedMasses.addItemAddedListener( function( addedMass ) {
      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, modelViewTransform, true, new Property( true ) );
      massNode.pickable = false; // Fixed masses can't be moved by users.
      self.challengeLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.fixedMasses.addItemRemovedListener( function removeFixedMass() {
        self.challengeLayer.removeChild( massNode );
        gameModel.fixedMasses.removeItemRemovedListener( removeFixedMass );
      } );
    } );

    // Add the node that allows the user to choose a game level to play.
    self.startGameLevelNode = new StartGameLevelNode(
      function( level ) { gameModel.startLevel( level ); },
      function() { gameModel.reset(); },
      gameModel.timerEnabledProperty,
      gameModel.soundEnabledProperty,
      [
        new GameIconNode( gameLevel1Icon, 1 ),
        new GameIconNode( gameLevel2Icon, 2 ),
        new GameIconNode( gameLevel3Icon, 3 ),
        new GameIconNode( gameLevel4Icon, 4 )
      ],
      gameModel.bestScores,
      {
        numStarsOnButtons: BalanceGameModel.PROBLEMS_PER_LEVEL,
        perfectScore: BalanceGameModel.MAX_POSSIBLE_SCORE,
        maxTitleWidth: this.layoutBounds.width
      }
    );
    self.rootNode.addChild( self.startGameLevelNode );

    // Initialize a reference to the 'level completed' node.
    self.levelCompletedNode = null;

    // Hook up the audio player to the sound settings.
    self.gameAudioPlayer = new GameAudioPlayer( gameModel.soundEnabledProperty );

    // Create and add the game scoreboard.
    this.scoreboard = new ScoreboardBar(
      this.layoutBounds.width,
      gameModel.challengeIndexProperty,
      new Property( BalanceGameModel.PROBLEMS_PER_LEVEL ),
      gameModel.levelProperty,
      gameModel.scoreProperty,
      gameModel.elapsedTimeProperty,
      gameModel.timerEnabledProperty,
      function() { gameModel.newGame(); },
      {
        levelVisible: true,
        startOverButtonText: startOverString,
        font: new PhetFont( 14 ),
        centerX: this.layoutBounds.centerX,
        top: this.layoutBounds.top,
        leftMargin: 40,
        rightMargin: 10, // to right align 'Start Over' button with positionIndicatorControlPanel
        yMargin: 5
      }
    );
    self.addChild( this.scoreboard );

    // Add the title.  It is blank to start with, and is updated later at the appropriate state change.
    self.challengeTitleNode = new Text( '', {
      font: new PhetFont( { size: 60, weight: 'bold' } ),
      fill: 'white',
      stroke: 'black',
      lineWidth: 1.5,
      top: this.scoreboard.bottom + 20,
      maxWidth: 530 // empirically determined based on tests with long strings
    } );
    self.challengeLayer.addChild( self.challengeTitleNode );

    // Add the dialog node that is used in the mass deduction challenges
    // to enable the user to submit specific mass values.
    self.massValueEntryNode = new MassValueEntryNode( {
      centerX: modelViewTransform.modelToViewX( 0 ),
      top: self.challengeTitleNode.bounds.maxY + 4
    } );
    self.challengeLayer.addChild( self.massValueEntryNode );

    // Add the node that allows the user to submit their prediction of which
    // way the plank will tilt.  This is used in the tilt prediction challenges.
    self.tiltPredictionSelectorNode = new TiltPredictionSelectorNode( gameModel.gameStateProperty );
    self.challengeLayer.addChild( self.tiltPredictionSelectorNode );
    self.tiltPredictionSelectorNode.center = new Vector2(
      modelViewTransform.modelToViewX( 0 ),
      self.challengeTitleNode.bounds.maxY + 100
    );

    // Create the 'feedback node' that is used to visually indicate correct
    // and incorrect answers.
    self.faceWithPointsNode = new FaceWithPointsNode(
      {
        faceOpacity: 0.6,
        faceDiameter: self.layoutBounds.width * 0.31,
        pointsFill: 'yellow',
        pointsStroke: 'black',
        pointsAlignment: 'rightCenter',
        centerX: self.modelViewTransform.modelToViewX( 0 ),
        centerY: self.modelViewTransform.modelToViewY( 2.2 )
      } );
    self.addChild( self.faceWithPointsNode );

    // Add and lay out the buttons.
    self.buttons = [];
    var buttonOptions = {
      font: BUTTON_FONT,
      baseColor: BUTTON_FILL,
      cornerRadius: 4,
      maxWidth: 300 // empirically determined
    };
    self.checkAnswerButton = new TextPushButton( checkString, _.extend( {
      listener: function() {
        gameModel.checkAnswer(
          self.massValueEntryNode.massValueProperty.value,
          self.tiltPredictionSelectorNode.tiltPredictionProperty.value
        );
      }
    }, buttonOptions ) );
    self.rootNode.addChild( self.checkAnswerButton );
    self.buttons.push( self.checkAnswerButton );

    self.nextButton = new TextPushButton( nextString, _.extend( {
      listener: function() { gameModel.nextChallenge(); }
    }, buttonOptions ) );
    self.rootNode.addChild( self.nextButton );
    self.buttons.push( self.nextButton );

    self.tryAgainButton = new TextPushButton( tryAgainString, _.extend( {
      listener: function() { gameModel.tryAgain(); }
    }, buttonOptions ) );
    self.rootNode.addChild( self.tryAgainButton );
    self.buttons.push( self.tryAgainButton );

    self.displayCorrectAnswerButton = new TextPushButton( showAnswerString, _.extend( {
      listener: function() { gameModel.displayCorrectAnswer(); }
    }, buttonOptions ) );
    self.rootNode.addChild( self.displayCorrectAnswerButton );
    self.buttons.push( self.displayCorrectAnswerButton );

    var buttonCenter = this.modelViewTransform.modelToViewPosition( new Vector2( 0, -0.3 ) );
    self.buttons.forEach( function( button ) {
      button.center = buttonCenter;
    } );

    // Add listeners that control the enabled state of the check answer button.
    gameModel.plank.massesOnSurface.addItemAddedListener( self.updateCheckAnswerButtonEnabled.bind( self ) );
    gameModel.plank.massesOnSurface.addItemRemovedListener( self.updateCheckAnswerButtonEnabled.bind( self ) );
    self.tiltPredictionSelectorNode.tiltPredictionProperty.link( self.updateCheckAnswerButtonEnabled.bind( self ) );
    self.massValueEntryNode.massValueProperty.link( self.updateCheckAnswerButtonEnabled.bind( self ) );

    // Register for changes to the game state and update accordingly.
    gameModel.gameStateProperty.link( self.handleGameStateChange.bind( self ) );

    // Show the level indicator to help the user see if the plank is perfectly
    // balanced, but only show it when the support column has been removed.
    var levelIndicator = new LevelIndicatorNode( modelViewTransform, gameModel.plank );
    gameModel.columnStateProperty.link( function( columnState ) {
      levelIndicator.visible = ( columnState === 'noColumns' );
    } );
    self.challengeLayer.addChild( levelIndicator );

    // Add a panel for controlling whether the ruler or marker set are visible.
    var positionMarkerStateProperty = new Property( 'none' ); // Valid values are 'none', 'rulers', and 'markers'.

    // Add the ruler.
    var rulersVisibleProperty = new Property( false );
    positionMarkerStateProperty.link( function( positionMarkerState ) {
      rulersVisibleProperty.value = positionMarkerState === 'rulers';
    } );
    self.challengeLayer.addChild( new RotatingRulerNode( gameModel.plank, modelViewTransform, rulersVisibleProperty ) );

    // Add the position markers.
    var positionMarkersVisibleProperty = new Property( false );
    positionMarkerStateProperty.link( function( positionMarkerState ) {
      positionMarkersVisibleProperty.value = positionMarkerState === 'marks';
    } );
    self.challengeLayer.addChild( new PositionMarkerSetNode( gameModel.plank, modelViewTransform, positionMarkersVisibleProperty ) );

    // Add the control panel that will allow users to select between the
    // various position markers, i.e. ruler, position markers, or nothing.
    var positionIndicatorControlPanel = new PositionIndicatorControlPanel( positionMarkerStateProperty, {
      right: self.layoutBounds.right - 10,
      top: self.scoreboard.bottom + 23,

      // specify a max width that will fit the panel between the rightmost view object and the layout bounds
      maxWidth: self.layoutBounds.width - this.tiltPredictionSelectorNode.bounds.maxX - 10
    } );
    self.controlLayer.addChild( positionIndicatorControlPanel );
  }

  balancingAct.register( 'BalanceGameView', BalanceGameView );

  return inherit( ScreenView, BalanceGameView, {

    updateTitle: function() {
      var balanceGameChallenge = this.model.getCurrentChallenge();
      if ( balanceGameChallenge !== null ) {
        this.challengeTitleNode.text = this.model.getCurrentChallenge().viewConfig.title;
      }
      else {
        // Set the value to something so that layout can be done.  This
        // string doesn't need to be translated - users should never see it.
        this.challengeTitleNode.setText( 'No challenge available.' );
      }

      // Center the title above the pivot point.
      this.challengeTitleNode.centerX = this.modelViewTransform.modelToViewX( this.model.plank.pivotPoint.x );
    },

    updateCheckAnswerButtonEnabled: function() {
      if ( this.model.getCurrentChallenge() instanceof BalanceMassesChallenge ) {
        // The button should be enabled whenever there are masses on the
        // right side of the plank.
        var self = this;
        var massesOnRightSide = false;
        this.model.plank.massesOnSurface.forEach( function( mass ) {
          if ( mass.position.x > self.model.plank.getPlankSurfaceCenter().x ) {
            massesOnRightSide = true;
          }
        } );
        this.checkAnswerButton.enabled = massesOnRightSide;
      }
      else if ( this.model.getCurrentChallenge() instanceof TiltPredictionChallenge ) {
        // The button should be enabled once the user has made a prediction.
        this.checkAnswerButton.enabled = this.tiltPredictionSelectorNode.tiltPredictionProperty.value !== 'none';
      }
      else if ( this.model.getCurrentChallenge() instanceof MassDeductionChallenge ) {
        // The button should be enabled for any non-zero value.
        this.checkAnswerButton.enabled = this.massValueEntryNode.massValueProperty.value !== 0;
      }
    },

    // When the game state changes, update the view with the appropriate
    // buttons and readouts.
    handleGameStateChange: function( gameState ) {

      // Hide all nodes - the appropriate ones will be shown later based on
      // the current state.
      this.hideAllGameNodes();

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
          if ( this.model.getCurrentChallenge().viewConfig.showMassEntryDialog ) {
            if ( this.model.incorrectGuessesOnCurrentChallenge === 0 ) {
              this.massValueEntryNode.clear();
            }
            this.massValueEntryNode.visible = true;
          }
          else {
            if ( this.model.getCurrentChallenge().viewConfig.showTiltPredictionSelector ) {
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
          this.faceWithPointsNode.setPoints( this.model.score );
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
          this.faceWithPointsNode.setPoints( this.model.score );
          this.faceWithPointsNode.visible = true;

          // Disable interaction with the challenge elements.
          this.challengeLayer.pickable = false;

          break;

        case 'displayingCorrectAnswer':

          // Show the appropriate nodes for this state.
          this.show( [ this.scoreboard, this.nextButton ] );

          // Display the correct answer
          if ( this.model.getCurrentChallenge().viewConfig.showMassEntryDialog ) {
            this.massValueEntryNode.showAnswer( this.model.getTotalFixedMassValue() );
            this.massValueEntryNode.visible = true;
          }
          else if ( this.model.getCurrentChallenge().viewConfig.showTiltPredictionSelector ) {
            this.tiltPredictionSelectorNode.tiltPredictionProperty.value = this.model.getTipDirection();
            this.tiltPredictionSelectorNode.visible = true;
          }
          this.showChallengeGraphics();

          // Disable interaction with the challenge elements.
          this.challengeLayer.pickable = false;

          break;

        case 'showingLevelResults':
          if ( this.model.score === BalanceGameModel.MAX_POSSIBLE_SCORE ) {
            this.gameAudioPlayer.gameOverPerfectScore();
          }
          else if ( this.model.score === 0 ) {
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
    },

    // Utility method for hiding all of the game nodes whose visibility changes
    // during the course of a challenge.
    hideAllGameNodes: function() {
      this.buttons.forEach( function( button ) { button.visible = false; } );
      this.setNodeVisibility( false, [ this.startGameLevelNode, this.challengeTitleNode, this.faceWithPointsNode, this.scoreboard,
        this.tiltPredictionSelectorNode, this.massValueEntryNode ] );
    },

    show: function( nodesToShow ) {
      nodesToShow.forEach( function( nodeToShow ) { nodeToShow.visible = true; } );
    },

    setNodeVisibility: function( isVisible, nodes ) {
      nodes.forEach( function( node ) { node.visible = isVisible; } );
    },

    hideChallenge: function() {
      this.challengeLayer.visible = false;
      this.controlLayer.visible = false;
    },

    // Show the graphic model elements for this challenge, i.e. the plank,
    // fulcrum, etc.
    showChallengeGraphics: function() {
      this.challengeLayer.visible = true;
      this.controlLayer.visible = true;
    },

    showLevelResultsNode: function() {
      var self = this;

      // Set a new "level completed" node based on the results.
      self.levelCompletedNode = new LevelCompletedNode( this.model.level, this.model.score, BalanceGameModel.MAX_POSSIBLE_SCORE,
        BalanceGameModel.PROBLEMS_PER_LEVEL, this.model.timerEnabled, this.model.elapsedTime, this.model.bestTimes[ this.model.level ],
        self.model.newBestTime,
        function() {
          self.model.gameState = 'choosingLevel';
          self.rootNode.removeChild( self.levelCompletedNode );
          self.levelCompletedNode = null;
        },
        {
          center: self.layoutBounds.center
        } );

      // Add the node.
      this.rootNode.addChild( self.levelCompletedNode );
    }
  } );
} );
