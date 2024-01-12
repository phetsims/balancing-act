// Copyright 2014-2024, University of Colorado Boulder

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

    const screenIcon = new BalanceLabScreenIcon( BalancerImages.BALANCER_PORTRAYALS );

    const options = {
      name: BalancingActStrings.balanceLabStringProperty,
      homeScreenIcon: screenIcon,
      navigationBarIcon: screenIcon,
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