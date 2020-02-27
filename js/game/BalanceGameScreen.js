// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import Image from '../../../scenery/js/nodes/Image.js';
import gameIconSmall from '../../images/game-icon-small_png.js';
import gameIcon from '../../images/game-icon_png.js';
import balancingActStrings from '../balancing-act-strings.js';
import balancingAct from '../balancingAct.js';
import BalanceGameModel from './model/BalanceGameModel.js';
import BalanceGameView from './view/BalanceGameView.js';

const gameString = balancingActStrings.game;


function BalanceGameScreen( tandem ) {

  const options = {
    name: gameString,
    homeScreenIcon: new Image( gameIcon ),
    navigationBarIcon: new Image( gameIconSmall ),
    tandem: tandem
  };

  Screen.call( this,
    function() { return new BalanceGameModel( tandem.createTandem( 'model' ) ); },
    function( model ) { return new BalanceGameView( model, tandem.createTandem( 'view' ) ); },
    options );
}

balancingAct.register( 'BalanceGameScreen', BalanceGameScreen );

inherit( Screen, BalanceGameScreen );
export default BalanceGameScreen;