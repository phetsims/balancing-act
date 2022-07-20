// Copyright 2014-2021, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { Image } from '../../../scenery/js/imports.js';
import gameIcon_png from '../../images/gameIcon_png.js';
import gameIconSmall_png from '../../images/gameIconSmall_png.js';
import balancingAct from '../balancingAct.js';
import balancingActStrings from '../balancingActStrings.js';
import BalanceGameModel from './model/BalanceGameModel.js';
import BalanceGameView from './view/BalanceGameView.js';

class BalanceGameScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      name: balancingActStrings.game,
      homeScreenIcon: new ScreenIcon( new Image( gameIcon_png ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( new Image( gameIconSmall_png ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem
    };

    super(
      () => new BalanceGameModel( tandem.createTandem( 'model' ) ),
      model => new BalanceGameView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

balancingAct.register( 'BalanceGameScreen', BalanceGameScreen );
export default BalanceGameScreen;