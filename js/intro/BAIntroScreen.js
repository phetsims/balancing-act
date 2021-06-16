// Copyright 2014-2021, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import introIconSmall from '../../images/intro-icon-small_png.js';
import introIcon from '../../images/intro-icon_png.js';
import balancingAct from '../balancingAct.js';
import balancingActStrings from '../balancingActStrings.js';
import BAIntroModel from './model/BAIntroModel.js';
import BAIntroView from './view/BAIntroView.js';

class BAIntroScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      name: balancingActStrings.intro,
      homeScreenIcon: new ScreenIcon( new Image( introIcon ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( new Image( introIconSmall ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
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