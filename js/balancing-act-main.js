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
  var BalanceLabScreen = require( 'BALANCING_ACT/balancelab/view/BalanceLabScreen' );
  var BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  var BasicBalanceView = require( 'BALANCING_ACT/common/view/BasicBalanceView' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Screen = require( 'JOIST/Screen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Text = require( 'SCENERY/nodes/Text' );

  // Strings & Images
  var balanceLabString = require( 'string!BALANCING_ACT/balanceLab' );
  var firstTabIcon = require( 'image!BALANCING_ACT/first-tab-icon.png' );
  var gameString = require( 'string!BALANCING_ACT/game' );
  var introString = require( 'string!BALANCING_ACT/intro' );
  var secondTabIcon = require( 'image!BALANCING_ACT/second-tab-icon.png' );
  var simTitleString = require( 'string!BALANCING_ACT/balancing-act.name' );
  var thirdTabIcon = require( 'image!BALANCING_ACT/third-tab-icon.png' );

  SimLauncher.launch( function() {

    var simOptions = {
      credits: {
        //TODO
      }
    };

    //Create and start the sim
    new Sim( simTitleString, [
      new Screen( introString, new Image( firstTabIcon ),
        function() { return new BAIntroModel(); },
        function( model ) { return new BAIntroScreen( model ); }
      ),
      new Screen( balanceLabString, new Image( secondTabIcon ),
        function() {return new BalanceLabModel();},
        function( model ) {return new BalanceLabScreen( model );}
      ),
      new Screen( gameString, new Image( thirdTabIcon ),
        function() {return new BalanceModel();},
        function( model ) {return new BasicBalanceView( model );}
      )
    ], simOptions ).start();
  } );
} );