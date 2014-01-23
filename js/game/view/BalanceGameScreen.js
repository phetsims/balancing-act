// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main screen for the balance game.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var AttachmentBarNode = require( 'BALANCING_ACT/common/view/AttachmentBarNode' );
  var BalanceGameModel = require( 'BALANCING_ACT/game/model/BalanceGameModel' );
  var BalanceMassesChallenge = require( 'BALANCING_ACT/game/model/BalanceMassesChallenge' );
  var Color = require( 'SCENERY/util/Color' );
  var FaceWithScoreNode = require( 'BALANCING_ACT/game/view/FaceWithScoreNode' );
  var FulcrumNode = require( 'BALANCING_ACT/common/view/FulcrumNode' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var GameIconNode = require( 'BALANCING_ACT/game/view/GameIconNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNode = require( 'VEGAS/LevelCompletedNode' );
  var LevelIndicatorNode = require( 'BALANCING_ACT/common/view/LevelIndicatorNode' );
  var LevelSupportColumnNode = require( 'BALANCING_ACT/common/view/LevelSupportColumnNode' );
  var MassNodeFactory = require( 'BALANCING_ACT/common/view/MassNodeFactory' );
  var MassValueAnswerNode = require( 'BALANCING_ACT/game/view/MassValueAnswerNode' );
  var MassValueEntryNode = require( 'BALANCING_ACT/game/view/MassValueEntryNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Node = require( 'SCENERY/nodes/Node' );
  var OutsideBackgroundNode = require( 'BALANCING_ACT/common/view/OutsideBackgroundNode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var PlankNode = require( 'BALANCING_ACT/common/view/PlankNode' );
  var PositionIndicatorControlPanel = require( 'BALANCING_ACT/common/view/PositionIndicatorControlPanel' );
  var PositionMarkerSetNode = require( 'BALANCING_ACT/common/view/PositionMarkerSetNode' );
  var Property = require( 'AXON/Property' );
  var RotatingRulerNode = require( 'BALANCING_ACT/common/view/RotatingRulerNode' );
  var Scoreboard = require( 'VEGAS/Scoreboard' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var StartGameLevelNode = require( 'BALANCING_ACT/game/view/StartGameLevelNode' );
  var Text = require( 'SCENERY/nodes/Text' );
  var TextPushButton = require( 'SUN/TextPushButton' );
  var TiltedSupportColumnNode = require( 'BALANCING_ACT/common/view/TiltedSupportColumnNode' );
  var TiltPredictionChallenge = require( 'BALANCING_ACT/game/model/TiltPredictionChallenge' );
  var TiltPredictionSelectorNode = require( 'BALANCING_ACT/game/view/TiltPredictionSelectorNode' );
  var Vector2 = require( 'DOT/Vector2' );

  // Images and Strings
  var checkString = require( 'string!VEGAS/check' );
  var gameLevel1Icon = require( 'image!BALANCING_ACT/game-level-1-icon.png' );
  var gameLevel2Icon = require( 'image!BALANCING_ACT/game-level-2-icon.png' );
  var gameLevel3Icon = require( 'image!BALANCING_ACT/game-level-3-icon.png' );
  var gameLevel4Icon = require( 'image!BALANCING_ACT/game-level-4-icon.png' );
  var nextString = require( 'string!VEGAS/next' );
  var showAnswerString = require( 'string!VEGAS/showAnswer' );
  var tryAgainString = require( 'string!VEGAS/tryAgain' );

  // Constants
  var BUTTON_FONT = new PhetFont( 24 );
  var BUTTON_FILL = new Color( 0, 255, 153 );

  /**
   * @param {BalanceGameModel} model
   * @constructor
   */
  function BalanceGameScreen( gameModel ) {
    ScreenView.call( this, { renderer: 'svg' } );
    var thisScreen = this;
    thisScreen.model = gameModel;

    // Create the model-view transform.  The primary units used in the model
    // are meters, so significant zoom is used.  The multipliers for the 2nd
    // parameter can be used to adjust where the point (0, 0) in the model,
    // which is on the ground just below the center of the balance, is located
    // in the view.
    var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( thisScreen.layoutBounds.width * 0.4, thisScreen.layoutBounds.height * 0.75 ),
      115 );
    thisScreen.mvt = mvt; // Make mvt available to descendant types.

    // Create a root node and send to back so that the layout bounds box can
    // be made visible if needed.
    thisScreen.rootNode = new Node();
    thisScreen.addChild( thisScreen.rootNode );
    thisScreen.rootNode.moveToBack();

    // Add the background, which portrays the sky and ground.
    thisScreen.outsideBackgroundNode = new OutsideBackgroundNode( mvt, 3, -1 );
    thisScreen.rootNode.addChild( thisScreen.outsideBackgroundNode );

    // Add layers used to control game appearance.
    // TODO: controlLayer and challengeLayer may not need to be on the object, i.e. can possibly be made local.
    thisScreen.controlLayer = new Node();
    thisScreen.rootNode.addChild( thisScreen.controlLayer );
    thisScreen.challengeLayer = new Node();
    thisScreen.rootNode.addChild( thisScreen.challengeLayer );

    // Add the fulcrum, the columns, etc.
    thisScreen.challengeLayer.addChild( new FulcrumNode( mvt, gameModel.fulcrum ) );
    thisScreen.challengeLayer.addChild( new TiltedSupportColumnNode( mvt, gameModel.tiltedSupportColumn, gameModel.columnStateProperty ) );
    gameModel.levelSupportColumns.forEach( function( levelSupportColumn ) {
      thisScreen.challengeLayer.addChild( new LevelSupportColumnNode( mvt, levelSupportColumn, gameModel.columnStateProperty, false ) );
    } );
    thisScreen.challengeLayer.addChild( new PlankNode( mvt, gameModel.plank ) );
    thisScreen.challengeLayer.addChild( new AttachmentBarNode( mvt, gameModel.attachmentBar ) );

    // Watch the model and add/remove visual representations of masses.
    gameModel.movableMasses.addItemAddedListener( function( addedMass ) {
      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, mvt, true, new Property( true ) );
      thisScreen.challengeLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.movableMasses.addItemRemovedListener( function() {
        thisScreen.challengeLayer.removeChild( massNode );
        gameModel.movableMasses.removeItemRemovedListener( this );
      } );
    } );
    gameModel.fixedMasses.addItemAddedListener( function( addedMass ) {
      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, mvt, true, new Property( true ) );
      massNode.pickable = false; // Fixed masses can't be moved by users.
      thisScreen.challengeLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      gameModel.fixedMasses.addItemRemovedListener( function() {
        thisScreen.challengeLayer.removeChild( massNode );
        gameModel.fixedMasses.removeItemRemovedListener( this );
      } );
    } );

    // Add the node that allows the user to choose a game level to play.
    thisScreen.startGameLevelNode = new StartGameLevelNode(
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
      {}
    );
    thisScreen.rootNode.addChild( thisScreen.startGameLevelNode );

    // Initialize a reference to the 'level completed' node.
    thisScreen.levelCompletedNode = null;

    // Hook up the audio player to the sound settings.
    thisScreen.gameAudioPlayer = new GameAudioPlayer( gameModel.soundEnabledProperty );

    // Create and add the game scoreboard.
    this.scoreboard = new Scoreboard(
      gameModel.challengeIndexProperty,
      new Property( gameModel.PROBLEMS_PER_LEVEL ),
      gameModel.levelProperty,
      gameModel.scoreProperty,
      gameModel.elapsedTimeProperty,
      gameModel.timerEnabledProperty,
      function() { gameModel.newGame(); },
      {
        levelVisible: false,
        centerX: this.layoutBounds.centerX,
        bottom: this.layoutBounds.maxY - 5,
        yMargin: 5
      }
    );
    thisScreen.addChild( this.scoreboard );

    // Add the title.  It is blank to start with, and is updated later at
    // the appropriate state change.
    thisScreen.challengeTitleNode = new Text( '',
      {
        font: new PhetFont( { size: 60, weight: 'bold' } ),
        fill: 'white',
        stroke: 'black',
        lineWidth: 1.5,
        top: 5 // Empirically determined based on appearance
      } );
    thisScreen.challengeLayer.addChild( thisScreen.challengeTitleNode );

    // TODO: Uncomment the various pieces below as the corresponding functionality is implemented.

    // Add the dialog node that is used in the mass deduction challenges
    // to enable the user to submit specific mass values.
    thisScreen.massValueEntryNode = new MassValueEntryNode(
      {
        centerX: mvt.modelToViewX( 0 ),
        centerY: thisScreen.challengeTitleNode.bounds.maxY + 30
      } );
    thisScreen.rootNode.addChild( thisScreen.massValueEntryNode );

    /*

     // Add the node that is used to depict the correct answer for the
     // mass deduction challenges.
     thisScreen.massValueAnswerNode = new MassValueAnswerNode( gameModel, this );
     thisScreen.rootNode.addChild( thisScreen.massValueAnswerNode );

     // Position the mass entry and mass answer nodes in the same place.
     var massEntryDialogCenter = new Vector2( mvt.modelToViewX( 0 ), thisScreen.challengeTitleNode.bounds.maxY + thisScreen.massValueEntryNode.height / 2 + 10 );
     thisScreen.massValueEntryNode.center = massEntryDialogCenter;
     thisScreen.massValueAnswerNode.center = massEntryDialogCenter;

     */

    // Add the node that allows the user to submit their prediction of which
    // way the plank will tilt.  This is used in the tilt prediction challenges.
    thisScreen.tiltPredictionSelectorNode = new TiltPredictionSelectorNode( gameModel.gameStateProperty );
    thisScreen.rootNode.addChild( thisScreen.tiltPredictionSelectorNode );
    thisScreen.tiltPredictionSelectorNode.center = new Vector2( mvt.modelToViewX( 0 ), thisScreen.challengeTitleNode.bounds.maxY + 100 );

    // Create the 'feedback node' that is used to visually indicate correct
    // and incorrect answers.
    thisScreen.faceWithScoreNode = new FaceWithScoreNode( thisScreen.layoutBounds.width * 0.31,
      {
        centerX: thisScreen.mvt.modelToViewX( 0 ),
        centerY: thisScreen.mvt.modelToViewY( 2.2 )
      } );
    thisScreen.addChild( thisScreen.faceWithScoreNode );

    // Add and lay out the buttons.
    thisScreen.buttons = [];
    thisScreen.checkAnswerButton = new TextPushButton( checkString, {
      listener: function() { gameModel.checkAnswer( null, thisScreen.tiltPredictionSelectorNode.tiltPredictionProperty.value ) },
      font: BUTTON_FONT, rectangleFillUp: BUTTON_FILL
    } );
    thisScreen.challengeLayer.addChild( thisScreen.checkAnswerButton );
    thisScreen.buttons.push( thisScreen.checkAnswerButton );

    thisScreen.nextButton = new TextPushButton( nextString, {
      listener: function() { gameModel.nextChallenge(); },
      font: BUTTON_FONT, rectangleFillUp: BUTTON_FILL
    } );
    thisScreen.challengeLayer.addChild( thisScreen.nextButton );
    thisScreen.buttons.push( thisScreen.nextButton );

    thisScreen.tryAgainButton = new TextPushButton( tryAgainString, {
      listener: function() { gameModel.tryAgain(); },
      font: BUTTON_FONT, rectangleFillUp: BUTTON_FILL
    } );
    thisScreen.challengeLayer.addChild( thisScreen.tryAgainButton );
    thisScreen.buttons.push( thisScreen.tryAgainButton );

    thisScreen.displayCorrectAnswerButton = new TextPushButton( showAnswerString, {
      listener: function() { gameModel.displayCorrectAnswer(); },
      font: BUTTON_FONT, rectangleFillUp: BUTTON_FILL
    } );
    thisScreen.challengeLayer.addChild( thisScreen.displayCorrectAnswerButton );
    thisScreen.buttons.push( thisScreen.displayCorrectAnswerButton );

    var buttonCenter = this.mvt.modelToViewPosition( new Vector2( 0, -0.3 ) );
    thisScreen.buttons.forEach( function( button ) {
      button.center = buttonCenter;
    } );

    // Add listeners that control the enabled state of the check answer button.
    gameModel.plank.massesOnSurface.addItemAddedListener( thisScreen.updateCheckAnswerButtonEnabled.bind( thisScreen ) );
    gameModel.plank.massesOnSurface.addItemRemovedListener( thisScreen.updateCheckAnswerButtonEnabled.bind( thisScreen ) );
    thisScreen.tiltPredictionSelectorNode.tiltPredictionProperty.link( thisScreen.updateCheckAnswerButtonEnabled.bind( thisScreen ) );

    /*

     // Add a key listener that will allow the user to essentially press the
     // active button by pressing the Enter key.
     // TODO: Brand new code, needs to be tested, debugged.
     window.onkeyup = function( e ) {
     var key = e.keyCode ? e.keyCode : e.which;

     if ( key === 13 ) {
     // The user pressed the Enter key.  If one of the game
     // control buttons is currently active, treat it as though
     // this button has been pressed.
     if ( thisScreen.nextButton.visible && thisScreen.nextButton.enabled ) {
     gameModel.nextChallenge();
     }
     else if ( thisScreen.tryAgainButton.visible && thisScreen.tryAgainButton.enabled ) {
     gameModel.tryAgain();
     }
     else if ( thisScreen.checkAnswerButton.visible && thisScreen.checkAnswerButton.enabled ) {
     gameModel.checkAnswer();
     }
     else if ( thisScreen.displayCorrectAnswerButton.visible && thisScreen.displayCorrectAnswerButton.enabled ) {
     gameModel.displayCorrectAnswer();
     }
     }
     };

     */

    // Register for changes to the game state and update accordingly.
    gameModel.gameStateProperty.link( thisScreen.handleGameStateChange.bind( thisScreen ) );

    // Show the level indicator to help the user see if the plank is perfectly
    // balanced, but only show it when the support column has been removed.
    var levelIndicator = new LevelIndicatorNode( mvt, gameModel.plank );
    gameModel.columnStateProperty.link( function( columnState ) {
      levelIndicator.visible = ( columnState === 'noColumns' );
    } );
    thisScreen.challengeLayer.addChild( levelIndicator );

    // Add a panel for controlling whether the ruler or marker set are visible.
    var positionMarkerState = new Property( 'none' ); // Valid values are 'none', 'rulers', and 'markers'.

    // Add the ruler.
    var rulersVisible = new Property( false );
    positionMarkerState.link( function( positionMarkerState ) {
      rulersVisible.value = positionMarkerState === 'rulers';
    } );
    thisScreen.challengeLayer.addChild( new RotatingRulerNode( gameModel.plank, mvt, rulersVisible ) );

    // Add the position markers.
    var positionMarkersVisible = new Property( false );
    positionMarkerState.link( function( positionMarkerState ) {
      positionMarkersVisible.value = positionMarkerState === 'marks';
    } );
    thisScreen.challengeLayer.addChild( new PositionMarkerSetNode( gameModel.plank, mvt, positionMarkersVisible ) );

    // Add the control panel that will allow users to select between the
    // various position markers, i.e. ruler, position markers, or nothing.
    var positionIndicatorControlPanel = new PositionIndicatorControlPanel( positionMarkerState,
      {
        right: thisScreen.layoutBounds.width - 5,
        top: 5
      } );
    thisScreen.controlLayer.addChild( positionIndicatorControlPanel );
  }

  return inherit( ScreenView, BalanceGameScreen, {

    updateTitle: function() {
      var balanceGameChallenge = this.model.getCurrentChallenge();
      if ( balanceGameChallenge !== null ) {
        this.challengeTitleNode.text = this.model.getCurrentChallenge().viewConfig.title;
      }
      else {
        // Set the value to something so that layout can be done.  This
        // string doesn't need to be translated - users should never see it.
        this.challengeTitleNode.setText( "No challenge available." );
      }

      // Center the title above the pivot point.
      this.challengeTitleNode.centerX = this.mvt.modelToViewX( this.model.plank.pivotPoint.x );
    },

    updateCheckAnswerButtonEnabled: function() {
      if ( this.model.getCurrentChallenge() instanceof BalanceMassesChallenge ) {
        // The button should be enabled whenever there are masses on the
        // right side of the plank.
        var thisScreen = this;
        var massesOnRightSide = false;
        this.model.plank.massesOnSurface.forEach( function( mass ) {
          if ( mass.position.x > thisScreen.model.plank.getPlankSurfaceCenter().x ) {
            massesOnRightSide = true;
          }
        } );
        this.checkAnswerButton.enabled = massesOnRightSide;
      }
      else if ( this.model.getCurrentChallenge() instanceof TiltPredictionChallenge ) {
        // The button should be enabled once the user has made a prediction.
        this.checkAnswerButton.enabled = this.tiltPredictionSelectorNode.tiltPredictionProperty.value != 'none';
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
          this.startGameLevelNode.visible = true;
          this.hideChallenge();
          break;

        case 'presentingInteractiveChallenge':
          this.updateTitle();
          this.show( [ this.challengeTitleNode, this.scoreboard ] );
          if ( this.model.getCurrentChallenge().viewConfig.showMassEntryDialog ) {
            this.massValueEntryNode.clear();
            this.massValueEntryNode.visible = true;
          }
          else {
            this.checkAnswerButton.visible = true;
            if ( this.model.getCurrentChallenge().viewConfig.showTiltPredictionSelector ) {
              this.tiltPredictionSelectorNode.tiltPredictionProperty.reset();
              this.tiltPredictionSelectorNode.visible = true;
            }
          }

          this.showChallengeGraphics();

          // Set the challenge layer to be interactive so that the user can
          // manipulate the masses.
          this.challengeLayer.setPickable = false;
          this.challengeLayer.setChildrenPickable = false;

          break;

        case 'showingCorrectAnswerFeedback':

          // Show the appropriate nodes for this state.
          this.scoreboard.visible = true;
          this.nextButton.visible = true;

          // Give the user the appropriate feedback
          this.gameAudioPlayer.correctAnswer();
          this.faceWithScoreNode.smile();
          this.faceWithScoreNode.setScore( this.model.getChallengeCurrentPointValue() );
          this.faceWithScoreNode.visible = true;

          break;

        case 'showingIncorrectAnswerFeedbackTryAgain':

          // Show the appropriate nodes for this state.
          this.scoreboard.visible = true;
          this.tryAgainButton.visible = true;

          // Give the user the appropriate feedback
          this.gameAudioPlayer.wrongAnswer();
          this.faceWithScoreNode.frown();
          this.faceWithScoreNode.setScore( this.model.score );
          this.faceWithScoreNode.visible = true;

          break;

        case 'showingIncorrectAnswerFeedbackMoveOn':

          // Show the appropriate nodes for this state.
          this.scoreboard.visible = true;
          this.displayCorrectAnswerButton.visible = true;

          // Give the user the appropriate feedback
          this.gameAudioPlayer.wrongAnswer();
          this.faceWithScoreNode.frown();
          this.faceWithScoreNode.setScore( this.model.score );
          this.faceWithScoreNode.visible = true;

          break;

        case 'displayingCorrectAnswer':

          // Show the appropriate nodes for this state.
          this.scoreboard.visible = true;
          this.nextButton.visible = true;

          // Display the correct answer
          if ( this.model.getCurrentChallenge().viewConfig.showMassEntryDialog ) {
            this.massValueAnswerNode.update();
            this.massValueAnswerNode.visible = true;
          }
          else if ( this.model.getCurrentChallenge().viewConfig.showTiltPredictionSelector ) {
            this.tiltPredictionSelectorNode.tiltPredictionProperty.value = this.model.getTipDirection();
            this.tiltPredictionSelectorNode.visible = true;
          }
          this.showChallengeGraphics();

          break;

        case 'showingLevelResults':
          if ( this.model.score === BalanceGameModel.prototype.MAX_POSSIBLE_SCORE ) {
            this.gameAudioPlayer.gameOverPerfectScore();
          }
          else if ( this.model.score == 0 ) {
            this.gameAudioPlayer.gameOverZeroScore();
          }
          else {
            this.gameAudioPlayer.gameOverImperfectScore();
          }

          // TODO: Following line can be removed once other states have been implemented.
          this.startGameLevelNode.visible = false;

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
      this.buttons.forEach( function( button ) { button.visible = false } );
      //TODO: More nodes to add as they come on line.
      this.setNodeVisibility( false, [ this.startGameLevelNode, this.challengeTitleNode, this.faceWithScoreNode, this.scoreboard,
        this.tiltPredictionSelectorNode, this.massValueEntryNode ] );
    },

    show: function( nodesToShow ) {
      nodesToShow.forEach( function( nodeToShow ) { nodeToShow.visible = true } );
    },

    setNodeVisibility: function( isVisible, nodes ) {
      nodes.forEach( function( node ) { node.visible = isVisible } );
    },

    hideChallenge: function() {
      this.challengeLayer.visible = false;
      this.controlLayer.visible = false;

      // TODO - Java version sets these layers to be unpickable, not sure why, have omitted for now.
    },

    // Show the graphic model elements for this challenge, i.e. the plank,
    // fulcrum, etc.
    showChallengeGraphics: function() {
      this.challengeLayer.visible = true;
      this.controlLayer.visible = true;

      // By default this is initially set up to be non-interactive.
      this.challengeLayer.setPickable = false;
      this.challengeLayer.setChildrenPickable = false;
    },

    showLevelResultsNode: function() {
      var thisScreen = this;

      // Set a new "level completed" node based on the results.
      thisScreen.levelCompletedNode = new LevelCompletedNode( this.model.level, this.model.score, BalanceGameModel.prototype.MAX_POSSIBLE_SCORE,
        BalanceGameModel.prototype.PROBLEMS_PER_LEVEL, this.model.timerEnabled, this.model.elapsedTime, this.model.bestTimes[ this.model.level ],
        thisScreen.model.newBestTime,
        function() {
          thisScreen.model.gameState = 'choosingLevel';
          thisScreen.rootNode.removeChild( thisScreen.levelCompletedNode );
          thisScreen.levelCompletedNode = null;
        },
        {
          centerX: thisScreen.layoutBounds.width / 2,
          centerY: thisScreen.layoutBounds.height / 2
        } );

      // Add the node.
      this.rootNode.addChild( thisScreen.levelCompletedNode );
    },

    createMassNode: function( visible ) {
      // TODO
    }

  } );
} );