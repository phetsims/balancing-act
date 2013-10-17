// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );

  /**
   * @constructor
   */
  function BalancingActTempView() {
    ScreenView.call( this, { renderer: 'svg' } ); // Call super constructor.
  }

  return inherit( ScreenView, BalancingActTempView );
} );
