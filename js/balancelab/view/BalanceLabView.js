// Copyright 2013-2020, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BasicBalanceScreenView = require( 'BALANCING_ACT/common/view/BasicBalanceScreenView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MassCarousel = require( 'BALANCING_ACT/common/view/MassCarousel' );

  /**
   * @param model
   * @param {Tandem} tandem
   * @constructor
   */
  function BalanceLabView( model, tandem ) {
    BasicBalanceScreenView.call( this, model, tandem );
    const self = this;

    // Add the mass selection carousel.
    this.massCarousel = new MassCarousel( model, self.modelViewTransform, {
      centerX: self.controlPanelBounds.centerX,
      top: self.controlPanelBounds.bottom + 5,
      fill: 'rgb( 240, 240, 240 )',
      maxWidth: self.controlPanelBounds.width,
      tandem: tandem.createTandem( 'massCarousel' )
    } );
    self.nonMassLayer.addChild( this.massCarousel );
  }

  balancingAct.register( 'BalanceLabView', BalanceLabView );

  return inherit( BasicBalanceScreenView, BalanceLabView, {
    reset: function() {
      this.massCarousel.reset();
      BasicBalanceScreenView.prototype.reset.call( this );
    }
  } );
} );

