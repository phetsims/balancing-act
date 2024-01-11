// Copyright 2014-2022, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { Image } from '../../../scenery/js/imports.js';
import gameIcon_svg from '../../images/gameIcon_svg.js';
import balancingAct from '../balancingAct.js';
import BalancingActStrings from '../BalancingActStrings.js';
import BalanceGameModel from './model/BalanceGameModel.js';
import BalanceGameView from './view/BalanceGameView.js';

class BalanceGameScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const iconImage = new ScreenIcon( new Image( gameIcon_svg ), {
      maxIconWidthProportion: 1,
      maxIconHeightProportion: 1
    } );

    const options = {
      name: BalancingActStrings.gameStringProperty,
      homeScreenIcon: iconImage,
      navigationBarIcon: iconImage,
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