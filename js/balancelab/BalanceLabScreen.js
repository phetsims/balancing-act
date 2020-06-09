// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Balance Lab' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import inherit from '../../../phet-core/js/inherit.js';
import Image from '../../../scenery/js/nodes/Image.js';
import labIconSmall from '../../images/lab-icon-small_png.js';
import labIcon from '../../images/lab-icon_png.js';
import balancingAct from '../balancingAct.js';
import balancingActStrings from '../balancingActStrings.js';
import BalanceLabModel from './model/BalanceLabModel.js';
import BalanceLabView from './view/BalanceLabView.js';

const balanceLabString = balancingActStrings.balanceLab;


function BalanceLabScreen( tandem ) {

  const options = {
    name: balanceLabString,
    homeScreenIcon: new ScreenIcon( new Image( labIcon ), {
      maxIconWidthProportion: 1,
      maxIconHeightProportion: 1
    } ),
    navigationBarIcon: new ScreenIcon( new Image( labIconSmall ), {
      maxIconWidthProportion: 1,
      maxIconHeightProportion: 1
    } ),
    tandem: tandem
  };

  Screen.call( this,
    function() { return new BalanceLabModel( tandem.createTandem( 'model' ) ); },
    function( model ) {return new BalanceLabView( model, tandem.createTandem( 'view' ) ); },
    options );
}

balancingAct.register( 'BalanceLabScreen', BalanceLabScreen );

inherit( Screen, BalanceLabScreen );
export default BalanceLabScreen;