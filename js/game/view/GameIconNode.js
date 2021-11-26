// Copyright 2014-2021, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Image } from '../../../../scenery/js/imports.js';
import { Node } from '../../../../scenery/js/imports.js';
import { Text } from '../../../../scenery/js/imports.js';
import balancingAct from '../../balancingAct.js';
import balancingActStrings from '../../balancingActStrings.js';

const levelString = balancingActStrings.level;
const pattern0Label1ValueString = balancingActStrings.pattern0Label1Value;

// constants
const FONT = new PhetFont( 16 );
const IMAGE_SIZE = new Dimension2( 100, 65 );

class GameIconNode extends Node {

  /**
   * @param image
   * @param levelNumber
   */
  constructor( image, levelNumber ) {
    super();
    const title = new Text( StringUtils.format( pattern0Label1ValueString, levelString, levelNumber ), { font: FONT } );
    this.addChild( title );
    const imageNode = new Image( image );
    imageNode.scale( new Vector2( IMAGE_SIZE.width / imageNode.width, IMAGE_SIZE.height / imageNode.height ) );
    imageNode.top = title.bottom + 4;
    this.addChild( imageNode );
    imageNode.centerX = title.centerX;
  }
}

balancingAct.register( 'GameIconNode', GameIconNode );

export default GameIconNode;