// Copyright 2014-2025, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import gameLevel1Icon_svg from '../../../images/gameLevel1Icon_svg.js';
import gameLevel2Icon_svg from '../../../images/gameLevel2Icon_svg.js';
import gameLevel3Icon_svg from '../../../images/gameLevel3Icon_svg.js';
import gameLevel4Icon_svg from '../../../images/gameLevel4Icon_svg.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';

const levelStringProperty = BalancingActStrings.levelStringProperty;
const pattern0Label1ValueStringProperty = BalancingActStrings.pattern0Label1ValueStringProperty;

// constants
const FONT = new PhetFont( 16 );
const IMAGE_SIZE = new Dimension2( 100, 65 );

class GameIconNode extends VBox {

  /**
   * @param { number } levelNumber
   */
  constructor( levelNumber ) {
    const title = new Text( new PatternStringProperty( pattern0Label1ValueStringProperty, {
      0: levelStringProperty,
      1: levelNumber
    }, {
      formatNames: [ '0', '1' ]
    } ), {
      font: FONT,
      maxWidth: 100
    } );

    let image;
    switch( levelNumber ) {
      case 1:
        image = gameLevel1Icon_svg;
        break;
      case 2:
        image = gameLevel2Icon_svg;
        break;
      case 3:
        image = gameLevel3Icon_svg;
        break;
      case 4:
        image = gameLevel4Icon_svg;
        break;
      default:
        throw new Error( `Can't retrieve level icon image for requested level: ${levelNumber}` );
    }

    const imageNode = new Image( image );
    imageNode.scale( new Vector2( IMAGE_SIZE.width / imageNode.width, IMAGE_SIZE.height / imageNode.height ) );

    super( {
      children: [ title, imageNode ],
      spacing: 4,
      align: 'center'
    } );
  }
}

balancingAct.register( 'GameIconNode', GameIconNode );

export default GameIconNode;