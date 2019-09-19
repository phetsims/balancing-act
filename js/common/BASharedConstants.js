// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Bounds2 = require( 'DOT/Bounds2' );

  const BASharedConstants = {
    COMPARISON_TOLERANCE: 1E-6,
    LAYOUT_BOUNDS: new Bounds2( 0, 0, 768, 504 )
  };

  balancingAct.register( 'BASharedConstants', BASharedConstants );

  return BASharedConstants;
} );