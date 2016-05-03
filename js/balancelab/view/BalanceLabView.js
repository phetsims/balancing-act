// Copyright 2013-2015, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceScreenView = require( 'BALANCING_ACT/common/view/BasicBalanceScreenView' );
  var MassKitSelectionNode = require( 'BALANCING_ACT/common/view/MassKitSelectionNode' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var Panel = require( 'SUN/Panel' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var PANEL_X_MARGIN = 5;

  /**
   * @param model
   * @constructor
   */
  function BalanceLabView( model ) {
    BasicBalanceScreenView.call( this, model );
    var thisScreen = this;

    // Add the mass selection carousel.
    this.massKitSelectionNode = new MassKitSelectionNode( model, thisScreen.modelViewTransform );
    thisScreen.nonMassLayer.addChild( new Panel( new VBox(
        {
          children: [
            new HStrut( thisScreen.controlPanelBounds.width - PANEL_X_MARGIN * 2 ),
            this.massKitSelectionNode ]
        } ),
      {
        centerX: thisScreen.controlPanelBounds.centerX,
        top: thisScreen.controlPanelBounds.bottom + 5,
        xMargin: PANEL_X_MARGIN,
        fill: 'rgb( 240, 240, 240 )',
        maxWidth: thisScreen.controlPanelBounds.width
      } ) );
  }

  balancingAct.register( 'BalanceLabView', BalanceLabView );

  return inherit( BasicBalanceScreenView, BalanceLabView, {
    reset: function() {
      this.massKitSelectionNode.reset();
      BasicBalanceScreenView.prototype.reset.call( this );
    }
  } );
} );

