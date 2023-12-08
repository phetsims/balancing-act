// Copyright 2014-2022, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author John Blanco
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import merge from '../../../../phet-core/js/merge.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TimerToggleButton from '../../../../scenery-phet/js/buttons/TimerToggleButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Node, Text } from '../../../../scenery/js/imports.js';
import LevelSelectionButtonGroup from '../../../../vegas/js/LevelSelectionButtonGroup.js';
import ScoreDisplayStars from '../../../../vegas/js/ScoreDisplayStars.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import balancingAct from '../../balancingAct.js';
import BASharedConstants from '../../common/BASharedConstants.js';

const selectLevelString = VegasStrings.selectLevel;

class StartGameLevelNode extends Node {

  /**
   * @param {Function} startLevelFunction - Function used to initiate a game
   * level, will be called with a zero-based index value.
   * @param {Function} resetFunction - Function to reset game and scores.
   * @param {Property} timerEnabledProperty
   * @param {Array} iconNodes - Set of iconNodes to use on the buttons, sizes
   * should be the same, length of array must match number of levels.
   * @param {Array} scores - Current scores, used to decide which stars to
   * illuminate on the level start buttons, length must match number of levels.
   * @param {Object} modelViewTransform
   * @param {Object} [options] - See code below for options and default values.
   */
  constructor( startLevelFunction, resetFunction, timerEnabledProperty, iconNodes, scores, modelViewTransform, options ) {

    super();

    options = merge( {
      // Defaults
      numLevels: 4,
      titleString: selectLevelString,
      numStarsOnButtons: 5,
      perfectScore: 10,
      buttonBackgroundColor: 'rgb( 242, 255, 204 )',
      highlightedButtonBackgroundColor: 'rgb( 224, 255, 122 )',
      controlsInset: 10,
      size: new Dimension2( 768, 504 ),
      maxTitleWidth: Number.POSITIVE_INFINITY
    }, options );

    // Verify parameters
    if ( iconNodes.length !== options.numLevels || scores.length !== options.numLevels ) {
      throw new Error( 'Number of game levels doesn\'t match length of provided arrays' );
    }

    // Title
    const title = new Text( options.titleString, { font: new PhetFont( 30 ), maxWidth: options.maxTitleWidth } );
    this.addChild( title );

    // Add the buttons
    function createLevelStartFunction( level ) {
      return () => { startLevelFunction( level ); };
    }

    const buttonItems = new Array( options.numLevels );
    for ( let i = 0; i < options.numLevels; i++ ) {
      buttonItems[ i ] = {
        icon: iconNodes[ i ],
        scoreProperty: scores[ i ],
        options: {
          listener: createLevelStartFunction( i ),
          baseColor: options.buttonBackgroundColor,
          createScoreDisplay: scoreProperty => new ScoreDisplayStars( scoreProperty, {
            numberOfStars: options.numStarsOnButtons,
            perfectScore: options.perfectScore
          } ),
          soundPlayerIndex: i
        }
      };
    }
    const levelSelectionButtonGroup = new LevelSelectionButtonGroup( buttonItems, {
      flowBoxOptions: {
        spacing: 30
      }
    } );
    this.addChild( levelSelectionButtonGroup );

    // timer control
    const timerToggleButton = new TimerToggleButton( timerEnabledProperty );
    this.addChild( timerToggleButton );

    // Reset button.
    const resetButton = new ResetAllButton( {
      listener: resetFunction,
      radius: BASharedConstants.RESET_ALL_BUTTON_RADIUS
    } );
    this.addChild( resetButton );

    // Layout
    levelSelectionButtonGroup.left = 37; // empirically determined
    levelSelectionButtonGroup.centerY = options.size.height * 0.45;
    resetButton.right = options.size.width - options.controlsInset;
    resetButton.bottom = options.size.height - options.controlsInset;
    title.centerX = options.size.width / 2;
    title.centerY = levelSelectionButtonGroup.top / 2;
    timerToggleButton.left = options.controlsInset;
    timerToggleButton.bottom = options.size.height - options.controlsInset;
  }
}

balancingAct.register( 'StartGameLevelNode', StartGameLevelNode );

// Inherit from Node.
export default StartGameLevelNode;