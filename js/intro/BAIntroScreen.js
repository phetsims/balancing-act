// Copyright 2014-2025, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import introIcon_svg from '../../images/introIcon_svg.js';
import balancingAct from '../balancingAct.js';
import BalancingActStrings from '../BalancingActStrings.js';
import BAIntroModel from './model/BAIntroModel.js';
import BAIntroView from './view/BAIntroView.js';

class BAIntroScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const screenIcon = new ScreenIcon( new Image( introIcon_svg ), {
      maxIconWidthProportion: 1,
      maxIconHeightProportion: 1
    } );

    const options = {
      name: BalancingActStrings.introStringProperty,
      homeScreenIcon: screenIcon,
      navigationBarIcon: screenIcon,
      tandem: tandem
    };

    super(
      () => new BAIntroModel( tandem.createTandem( 'model' ) ),
      model => new BAIntroView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

balancingAct.register( 'BAIntroScreen', BAIntroScreen );
export default BAIntroScreen;