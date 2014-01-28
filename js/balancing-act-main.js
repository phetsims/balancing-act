// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the Balancing Act simulation.
 */
define( function( require ) {
  'use strict';

  // Imports
  var BAIntroModel = require( 'BALANCING_ACT/intro/model/BAIntroModel' );
  var BAIntroScreen = require( 'BALANCING_ACT/intro/view/BAIntroScreen' );
  var BalanceLabModel = require( 'BALANCING_ACT/balancelab/model/BalanceLabModel' );
  var BalanceGameModel = require( 'BALANCING_ACT/game/model/BalanceGameModel' );
  var BalanceGameScreen = require( 'BALANCING_ACT/game/view/BalanceGameScreen' );
  var BalanceLabScreen = require( 'BALANCING_ACT/balancelab/view/BalanceLabScreen' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Screen = require( 'JOIST/Screen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // Strings & Images
  var balanceLabString = require( 'string!BALANCING_ACT/balanceLab' );
  var introIcon = require( 'image!BALANCING_ACT/intro-icon.png' );
  var gameString = require( 'string!BALANCING_ACT/game' );
  var introString = require( 'string!BALANCING_ACT/intro' );
  var labIcon = require( 'image!BALANCING_ACT/lab-icon.png' );
  var simTitleString = require( 'string!BALANCING_ACT/balancing-act.name' );
  var gameIcon = require( 'image!BALANCING_ACT/game-icon.png' );

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        //TODO
      }
    };

    //Create and start the sim
    new Sim( simTitleString, [
      new Screen( introString, new Image( introIcon ),
        function() { return new BAIntroModel(); },
        function( model ) { return new BAIntroScreen( model ); }
      ),
      new Screen( balanceLabString, new Image( labIcon ),
        function() {return new BalanceLabModel();},
        function( model ) {return new BalanceLabScreen( model );}
      ),
      new Screen( gameString, new Image( gameIcon ),
        function() {return new BalanceGameModel();},
        function( model ) {return new BalanceGameScreen( model );}
      )
    ], simOptions ).start();
  } );
} );