// Copyright 2014-2023, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Image, Node, Text } from '../../../../scenery/js/imports.js';
import gameLevel1Icon_png from '../../../mipmaps/gameLevel1Icon_png.js';
import gameLevel2Icon_png from '../../../mipmaps/gameLevel2Icon_png.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import PreferencesModelSingleton from '../../common/PreferencesModelSingleton.js';

const levelString = BalancingActStrings.level;
const pattern0Label1ValueString = BalancingActStrings.pattern0Label1Value;

// constants
const FONT = new PhetFont( 16 );
const IMAGE_SIZE = new Dimension2( 100, 65 );

class GameIconNode extends Node {

  /**
   * @param { number } levelNumber
   */
  constructor( levelNumber ) {
    super();
    const title = new Text( StringUtils.format( pattern0Label1ValueString, levelString, levelNumber ), {
      font: FONT,
      maxWidth: 100
    } );
    this.addChild( title );

    let image;
    switch( levelNumber ) {
      case 1:
        image = gameLevel1Icon_png;
        break;
      case 2:
        image = gameLevel2Icon_png;
        break;
      case 3:
        image = PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty.value.levelThree;
        break;
      case 4:
        image = PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty.value.levelFour;
        break;
      default:
        throw new Error( `Can't retrieve level icon image for requested level: ${levelNumber}` );
    }

    const imageNode = new Image( image );
    imageNode.scale( new Vector2( IMAGE_SIZE.width / imageNode.width, IMAGE_SIZE.height / imageNode.height ) );
    imageNode.top = title.bottom + 4;
    this.addChild( imageNode );
    imageNode.centerX = title.centerX;
  }
}

balancingAct.register( 'GameIconNode', GameIconNode );

export default GameIconNode;