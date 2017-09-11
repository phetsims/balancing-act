// Copyright 2013-2015, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var BasicBalanceScreenView = require( 'BALANCING_ACT/common/view/BasicBalanceScreenView' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MassKitSelectionNode = require( 'BALANCING_ACT/common/view/MassKitSelectionNode' );
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
    var self = this;

    // Add the mass selection carousel.
    this.massKitSelectionNode = new MassKitSelectionNode( model, self.modelViewTransform );
    self.nonMassLayer.addChild( new Panel( new VBox( {
      children: [
        new HStrut( self.controlPanelBounds.width - PANEL_X_MARGIN * 2 ),
        this.massKitSelectionNode ]
    } ), {
      centerX: self.controlPanelBounds.centerX,
      top: self.controlPanelBounds.bottom + 5,
      xMargin: PANEL_X_MARGIN,
      fill: 'rgb( 240, 240, 240 )',
      maxWidth: self.controlPanelBounds.width
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

