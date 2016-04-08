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

  // strings
  var balancingActTitleString = require( 'string!BALANCING_ACT/balancing-act.title' );

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        leadDesign: 'Kathy Perkins, John Blanco, Ariel Paul',
        softwareDevelopment: 'John Blanco',
        graphicArts: 'John Blanco, Mariah Hermsmeyer',
        team: 'Michael Dubson, Trish Loeblein'
      }
    };

    // Create and start the sim
    new Sim( balancingActTitleString, [ new BAIntroScreen(), new BalanceLabScreen(), new BalanceGameScreen() ], simOptions ).start();
  } );
} );