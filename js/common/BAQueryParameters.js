// Copyright 2020, University of Colorado Boulder

/**
 * Query parameters for Balancing Act
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );

  const BAQueryParameters = QueryStringMachine.getAll( {

    // whether the people are visible in MassKitSelectionNode
    people: {
      type: 'boolean',
      defaultValue: true
    }
  } );

  balancingAct.register( 'BAQueryParameters', BAQueryParameters );
  return BAQueryParameters;
} );