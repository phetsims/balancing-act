// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Intro" screen.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceView = require( 'BALANCING_ACT/common/view/BasicBalanceView' );

  function IntroScreen( model ) {
    BasicBalanceView.call( this, model );
  }

  return inherit( BasicBalanceView, IntroScreen, {

  } );
} );

