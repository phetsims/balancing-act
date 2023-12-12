// Copyright 2014-2022, University of Colorado Boulder

/**
 * The 'Balance Lab' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import balancingAct from '../balancingAct.js';
import BalancingActStrings from '../BalancingActStrings.js';
import BalancerImages from '../common/view/BalancerImages.js';
import BalanceLabModel from './model/BalanceLabModel.js';
import BalanceLabScreenIcon from './view/BalanceLabScreenIcon.js';
import BalanceLabScreenView from './view/BalanceLabScreenView.js';

class BalanceLabScreen extends Screen {

  /**
   * @param { Tandem } tandem
   * @public
   */
  constructor( tandem ) {

    const options = {
      name: BalancingActStrings.balanceLabStringProperty,
      homeScreenIcon: new BalanceLabScreenIcon( BalancerImages.BALANCER_CHARACTER_SETS, 'home' ),
      navigationBarIcon: new BalanceLabScreenIcon( BalancerImages.BALANCER_CHARACTER_SETS, 'nav' ),
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