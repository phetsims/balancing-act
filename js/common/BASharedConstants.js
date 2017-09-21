// Copyright 2014-2016, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var Bounds2 = require( 'DOT/Bounds2' );

  var BASharedConstants = {
    COMPARISON_TOLERANCE: 1E-6,
    LAYOUT_BOUNDS: new Bounds2( 0, 0, 768, 504 )
  };

  balancingAct.register( 'BASharedConstants', BASharedConstants );

  return BASharedConstants;
} );