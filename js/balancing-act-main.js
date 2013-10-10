// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author John Blanco
 */
require( [
  'SCENERY/nodes/Text',
  'SCENERY/nodes/Rectangle',
  'BALLOONS_AND_STATIC_ELECTRICITY/Strings',
  'JOIST/Sim',
  'BALANCING_ACT/tempModel',
  'BALANCING_ACT/view/tempView',
  'JOIST/SimLauncher'
], function( Text, Rectangle, Strings, Sim, BalancingActTempModel, BalancingActTempView, SimLauncher ) {
  'use strict';

  SimLauncher.launch( function() {

    var simOptions = {
      credits: '\n'
    };

    //Create and start the sim
    new Sim( Strings['balloons.name'], [
      {
        name: Strings['balloons.name'],
        icon: new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ),
        createModel: function() {return new BalloonsAndStaticElectricityModel( 768, 504 );},
        createView: function( model ) {return new BalloonsAndStaticElectricityView( model );},
        backgroundColor: "#9ddcf8"
      }
    ], simOptions ).start();
  } );
} );