// Copyright 2013-2015, University of Colorado Boulder

/**
 * Main entry point for the Balancing Act simulation.
 */
define( function( require ) {
  'use strict';

  // modules
  var BAIntroScreen = require( 'BALANCING_ACT/intro/BAIntroScreen' );
  var BalanceLabScreen = require( 'BALANCING_ACT/balancelab/BalanceLabScreen' );
  var BalanceGameScreen = require( 'BALANCING_ACT/game/BalanceGameScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var balancingActTitleString = require( 'string!BALANCING_ACT/balancing-act.title' );

  // constants
  var tandem = Tandem.createRootTandem();

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        leadDesign: 'Kathy Perkins, John Blanco, Ariel Paul',
        softwareDevelopment: 'John Blanco',
        team: 'Michael Dubson, Trish Loeblein'
      },
      tandem: tandem
    };

    // Create and start the sim
    new Sim( balancingActTitleString, [
      new BAIntroScreen( tandem.createTandem( 'introScreen' ) ),
      new BalanceLabScreen( tandem.createTandem( 'balanceLabScreen' ) ),
      new BalanceGameScreen( tandem.createTandem( 'gameScreen' ) )
    ], simOptions ).start();
  } );
} );