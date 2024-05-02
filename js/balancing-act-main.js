// Copyright 2013-2024, University of Colorado Boulder

/**
 * Main entry point for the Balancing Act simulation.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import BalanceLabScreen from './balancelab/BalanceLabScreen.js';
import BalancingActStrings from './BalancingActStrings.js';
import BalanceGameScreen from './game/BalanceGameScreen.js';
import BAIntroScreen from './intro/BAIntroScreen.js';

const balancingActTitleStringProperty = BalancingActStrings[ 'balancing-act' ].titleStringProperty;

// constants
const tandem = Tandem.ROOT;

simLauncher.launch( () => {

  const simOptions = {
    credits: {
      leadDesign: 'Kathy Perkins, John Blanco, Ariel Paul',
      softwareDevelopment: 'John Blanco, Luisa Vargas',
      graphicArts: 'John Blanco, Mariah Hermsmeyer, Amanda McGarry',
      team: 'Michael Dubson, Trish Loeblein'
    }
  };

  // Create and start the sim
  const screens = [
    new BAIntroScreen( tandem.createTandem( 'introScreen' ) ),
    new BalanceLabScreen( tandem.createTandem( 'balanceLabScreen' ) ),

    // Game screen not available in phet-io
    ...( Tandem.PHET_IO_ENABLED ? [] : [ new BalanceGameScreen( tandem.createTandem( 'gameScreen' ) ) ] )
  ];

  new Sim( balancingActTitleStringProperty, screens, simOptions ).start();

  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );