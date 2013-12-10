// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceScreen = require( 'BALANCING_ACT/common/view/BasicBalanceScreen' );
  var Vector2 = require( 'DOT/Vector2' );

  var BrickStackCreatorNode = require( 'BALANCING_ACT/balancelab/view/BrickStackCreatorNode' ); // TODO: For testing, remove when not needed.
  var BoyCreatorNode = require( 'BALANCING_ACT/balancelab/view/BoyCreatorNode' ); // TODO: For testing, remove when not needed.

  /**
   * @param model
   * @constructor
   */
  function BalanceLabScreen( model ) {
    BasicBalanceScreen.call( this, model );
    var thisScreen = this;

    //TODO for testing only, remove.
    this.addChild( new BrickStackCreatorNode( 2, model, thisScreen.mvt ).mutate( { centerX: 650, bottom: 400 } ) );
    this.addChild( new BoyCreatorNode( model, thisScreen.mvt ).mutate( { centerX: 700, bottom: 400 } ) );


    var KitControlNode = require( 'BALANCING_ACT/common/view/KitControlNode' );
    var Property = require( 'AXON/Property' );
    this.addChild( new KitControlNode( 5, new Property( 0 ), { centerX: 50, centerY: 50 } ) );
  }

  return inherit( BasicBalanceScreen, BalanceLabScreen );
} );

