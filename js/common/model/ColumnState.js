// Copyright 2020, University of Colorado Boulder

/**
 * TODO: Documentation
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Enumeration = require( 'PHET_CORE/Enumeration' );

  const ColumnState = Enumeration.byKeys( [ 'DOUBLE_COLUMNS', 'SINGLE_COLUMN', 'NO_COLUMNS' ] );
  balancingAct.register( 'ColumnState', ColumnState );

  return ColumnState;
} );