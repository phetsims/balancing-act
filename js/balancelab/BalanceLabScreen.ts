// Copyright 2014-2025, University of Colorado Boulder

/**
 * The 'Balance Lab' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Tandem from '../../../tandem/js/Tandem.js';
import balancingAct from '../balancingAct.js';
import BalancingActImages from '../BalancingActImages.js';
import BalancingActStrings from '../BalancingActStrings.js';
import BalanceLabModel from './model/BalanceLabModel.js';
import BalanceLabScreenView from './view/BalanceLabScreenView.js';

class BalanceLabScreen extends Screen<BalanceLabModel, BalanceLabScreenView> {

  public constructor( tandem: Tandem ) {

    const options = {
      name: BalancingActStrings.balanceLabStringProperty,
      homeScreenIcon: new ScreenIcon( new Image( BalancingActImages.labScreenIconImageProperty ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( new Image( BalancingActImages.labScreenIconImageProperty ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem
    };

    super(
      () => new BalanceLabModel( tandem.createTandem( 'model' ) ),
      model => new BalanceLabScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

balancingAct.register( 'BalanceLabScreen', BalanceLabScreen );
export default BalanceLabScreen;