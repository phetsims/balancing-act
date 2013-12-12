// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceScreen = require( 'BALANCING_ACT/common/view/BasicBalanceScreen' );
  var MassKitSelectionNode = require( 'BALANCING_ACT/common/view/MassKitSelectionNode' );
  var Panel = require( 'SUN/Panel' );
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param model
   * @constructor
   */
  function BalanceLabScreen( model ) {
    BasicBalanceScreen.call( this, model );
    var thisScreen = this;

    var KitControlNode = require( 'BALANCING_ACT/common/view/KitControlNode' );
    var Property = require( 'AXON/Property' );
    var Text = require( 'SCENERY/nodes/Text' );

    // TODO: May want different MVT so that nodes are scaled a bit differently.
    var massKitSelectionNode = new MassKitSelectionNode( model, thisScreen.mvt );
    massKitSelectionNode.centerX = 740;
    massKitSelectionNode.bottom = 450;
    this.addChild( massKitSelectionNode );
  }

  return inherit( BasicBalanceScreen, BalanceLabScreen );
} );

