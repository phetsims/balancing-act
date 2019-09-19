// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main entry point for the Balancing Act simulation.
 */
define( require => {
  'use strict';

  // modules
  const BAIntroScreen = require( 'BALANCING_ACT/intro/BAIntroScreen' );
  const BalanceGameScreen = require( 'BALANCING_ACT/game/BalanceGameScreen' );
  const BalanceLabScreen = require( 'BALANCING_ACT/balancelab/BalanceLabScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const balancingActTitleString = require( 'string!BALANCING_ACT/balancing-act.title' );

  // constants
  var tandem = Tandem.rootTandem;

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        leadDesign: 'Kathy Perkins, John Blanco, Ariel Paul',
        softwareDevelopment: 'John Blanco',
        graphicArts: 'John Blanco, Mariah Hermsmeyer',
        team: 'Michael Dubson, Trish Loeblein'
      },
      supportsSound: true
    };

    // Create and start the sim
    new Sim( balancingActTitleString, [
      new BAIntroScreen( tandem.createTandem( 'introScreen' ) ),
      new BalanceLabScreen( tandem.createTandem( 'balanceLabScreen' ) ),
      new BalanceGameScreen( tandem.createTandem( 'gameScreen' ) )
    ], simOptions ).start();
  } );
} );