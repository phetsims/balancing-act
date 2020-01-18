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

  const PositionIndicatorChoice = Enumeration.byKeys( [ 'NONE', 'RULERS', 'MARKS' ] );
  balancingAct.register( 'PositionIndicatorChoice', PositionIndicatorChoice );

  return PositionIndicatorChoice;
} );