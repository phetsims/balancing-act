// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author John Blanco
 */
require( [
  'SCENERY/nodes/Text',
  'SCENERY/nodes/Rectangle',
  'JOIST/Sim',
  'JOIST/Screen',
  'BALANCING_ACT/BalancingActTempModel',
  'BALANCING_ACT/common/view/BasicBalanceView',
  'JOIST/SimLauncher',
  'SCENERY/nodes/Image',
  'string!BALANCING_ACT/balancing-act.name',
  'string!BALANCING_ACT/intro',
  'string!BALANCING_ACT/balanceLab',
  'string!BALANCING_ACT/game',
  'image!BALANCING_ACT/first-tab-icon.png',
  'image!BALANCING_ACT/second-tab-icon.png',
  'image!BALANCING_ACT/third-tab-icon.png'
], function( Text, Rectangle, Sim, Screen, BalancingActTempModel, BasicBalanceView, SimLauncher, Image, simTitleString, introString, balanceLabString, gameString, firstTabIcon, secondTabIcon, thirdTabIcon ) {
  'use strict';

  SimLauncher.launch( function() {

    var simOptions = {
      credits: '\n'
    };

    //Create and start the sim
    new Sim( simTitleString, [
      new Screen( introString, new Image( firstTabIcon ),
        function() { return new BalancingActTempModel( 768, 504 ); },
        function( model ) { return new BasicBalanceView( model ); },
        { backgroundColor: "#9ddcf8" }
      ),
      new Screen( balanceLabString, new Image( secondTabIcon ),
        function() {return new BalancingActTempModel( 768, 504 );},
        function( model ) {return new BasicBalanceView( model );},
        { backgroundColor: "#9ddcf8" }
      ),
      new Screen( gameString, new Image( thirdTabIcon ),
        function() {return new BalancingActTempModel( 768, 504 );},
        function( model ) {return new BasicBalanceView( model );},
        { backgroundColor: "#9ddcf8" }
      )
    ], simOptions ).start();
  } );
} );