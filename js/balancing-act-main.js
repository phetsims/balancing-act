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
  'string!BALANCING_ACT/balancing-act.name'
], function( Text, Rectangle, Sim, BalancingActTempModel, BalancingActTempView, SimLauncher, simTitle ) {
  'use strict';

  SimLauncher.launch( function() {

    var simOptions = {
      credits: '\n'
    };

    //Create and start the sim
    new Sim( simTitle, [
      {
        name: simTitle,
        icon: new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      },
      {
        name: simTitle,
        icon: new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      },
      {
        name: simTitle,
        icon: new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ),
        createModel: function() {return new BalancingActTempModel( 768, 504 );},
        createView: function( model ) {return new BalancingActTempView( model );},
        backgroundColor: "#9ddcf8"
      }
    ], simOptions ).start();
  } );
} );