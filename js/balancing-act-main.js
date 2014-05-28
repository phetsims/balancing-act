// Copyright 2002-2013, University of Colorado Boulder

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

  // strings
  var simTitleString = require( 'string!BALANCING_ACT/balancing-act.name' );

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        leadDesign: 'Kathy Perkins, John Blanco, Ariel Paul',
        softwareDevelopment: 'John Blanco',
        designTeam: 'Micheal Dubson, Trish Loeblein'
      }
    };

    // Create and start the sim
    new Sim( simTitleString, [ new BAIntroScreen(), new BalanceLabScreen(), new BalanceGameScreen() ], simOptions ).start();
  } );
} );