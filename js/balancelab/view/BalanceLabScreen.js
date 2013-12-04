// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceView = require( 'BALANCING_ACT/common/view/BasicBalanceView' );
  var Vector2 = require( 'DOT/Vector2' );

  var BrickStackCreatorNode = require( 'BALANCING_ACT/balancelab/view/BrickStackCreatorNode' ); // TODO: For testing, remove when not needed.

  /**
   * @param model
   * @constructor
   */
  function BalanceLabScreen( model ) {
    BasicBalanceView.call( this, model );
    var thisScreen = this;

    //TODO for testing only, remove.
    this.addChild( new BrickStackCreatorNode( 2, model, thisScreen.mvt ).mutate( { centerX: 30, centerY: 30 } ) );
  }

  return inherit( BasicBalanceView, BalanceLabScreen );
} );

