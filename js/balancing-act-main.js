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
  'BALANCING_ACT/BalancingActTempModel',
  'BALANCING_ACT/BalancingActTempView',
  'JOIST/SimLauncher',
  'SCENERY/nodes/Image',
  'string!BALANCING_ACT/balancing-act.name',
  'string!BALANCING_ACT/intro',
  'string!BALANCING_ACT/balanceLab',
  'string!BALANCING_ACT/game',
  'image!BALANCING_ACT/first-tab-icon.png',
  'image!BALANCING_ACT/second-tab-icon.png',
  'image!BALANCING_ACT/third-tab-icon.png'
], function( Text, Rectangle, Sim, BalancingActTempModel, BalancingActTempView, SimLauncher, Image, simTitleString, introString, balanceLabString, gameString, firstTabIcon, secondTabIcon, thirdTabIcon  ) {
  'use strict';

  SimLauncher.launch( function() {

    var simOptions = {
      credits: '\n'
    };

    //Create and start the sim
    new Sim( simTitleString, [
      {
        name: introString,
        icon: new Image( firstTabIcon ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      },
      {
        name: balanceLabString,
        icon: new Image( secondTabIcon ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      },
      {
        name: gameString,
        icon: new Image( thirdTabIcon ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      }
    ], simOptions ).start();
  } );
} );