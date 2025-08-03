// Copyright 2014-2025, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author John Blanco
 */

import Property from '../../../../axon/js/Property.js';
import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import merge from '../../../../phet-core/js/merge.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TimerToggleButton from '../../../../scenery-phet/js/buttons/TimerToggleButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import LevelSelectionButtonGroup from '../../../../vegas/js/LevelSelectionButtonGroup.js';
import ScoreDisplayStars from '../../../../vegas/js/ScoreDisplayStars.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import balancingAct from '../../balancingAct.js';
import BAQueryParameters from '../../common/BAQueryParameters.js';
import BASharedConstants from '../../common/BASharedConstants.js';

const selectLevelStringProperty = VegasStrings.selectLevelStringProperty;

type StartGameLevelNodeOptions = {
  numLevels?: number;
  titleStringProperty?: TReadOnlyProperty<string>;
  numStarsOnButtons?: number;
  perfectScore?: number;
  buttonBackgroundColor?: string;
  highlightedButtonBackgroundColor?: string;
  controlsInset?: number;
  size?: Dimension2;
  maxTitleWidth?: number;
};

export default class StartGameLevelNode extends Node {

  // TODO: Use StartGameLevelNodeOptions and optionize, see https://github.com/phetsims/balancing-act/issues/168
  public constructor( startLevelFunction: ( level: number ) => void, resetFunction: () => void, timerEnabledProperty: Property<boolean>, iconNodes: Node[], scores: Property<number>[], modelViewTransform: ModelViewTransform2, options?: IntentionalAny ) {

    super();

    // eslint-disable-next-line phet/bad-typescript-text
    options = merge( {
      // Defaults
      numLevels: 4,
      titleStringProperty: selectLevelStringProperty,
      numStarsOnButtons: 5,
      perfectScore: 10,
      buttonBackgroundColor: 'rgb( 242, 255, 204 )',
      highlightedButtonBackgroundColor: 'rgb( 224, 255, 122 )',
      controlsInset: 10,
      size: new Dimension2( 768, 504 ),
      maxTitleWidth: Number.POSITIVE_INFINITY
    }, options ) as Required<StartGameLevelNodeOptions>;

    // Verify parameters
    if ( iconNodes.length !== options.numLevels || scores.length !== options.numLevels ) {
      throw new Error( 'Number of game levels doesn\'t match length of provided arrays' );
    }

    // Title
    const title = new Text( options.titleStringProperty, { font: new PhetFont( 30 ), maxWidth: options.maxTitleWidth } );
    this.addChild( title );

    // Add the buttons
    function createLevelStartFunction( level: number ): () => void {
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
          createScoreDisplay: ( scoreProperty: Property<number> ) => new ScoreDisplayStars( scoreProperty, {
            numberOfStars: options.numStarsOnButtons,
            perfectScore: options.perfectScore
          } ),
          soundPlayerIndex: i
        }
      };
    }

    // @ts-expect-error
    const levelSelectionButtonGroup = new LevelSelectionButtonGroup( buttonItems, {
      flowBoxOptions: {
        spacing: 30
      },
      gameLevels: BAQueryParameters.gameLevels
    } );
    this.addChild( levelSelectionButtonGroup );

    // timer control
    const timerToggleButton = new TimerToggleButton( timerEnabledProperty );
    this.addChild( timerToggleButton );

    // Reset button.
    const resetButton = new ResetAllButton( {
      listener: resetFunction,
      scale: BASharedConstants.RESET_ALL_BUTTON_SCALE
    } );
    this.addChild( resetButton );

    // Layout
    levelSelectionButtonGroup.centerX = options.size.width / 2;
    levelSelectionButtonGroup.centerY = options.size.height * 0.45;
    resetButton.right = options.size.width - options.controlsInset;
    resetButton.bottom = options.size.height - options.controlsInset;
    timerToggleButton.left = options.controlsInset;
    timerToggleButton.bottom = options.size.height - options.controlsInset;

    // Ensure title string is centered for dynamic locale
    options.titleStringProperty.link( () => {
      title.centerX = levelSelectionButtonGroup.centerX;
      title.centerY = levelSelectionButtonGroup.top / 2;
    } );
  }
}

balancingAct.register( 'StartGameLevelNode', StartGameLevelNode );