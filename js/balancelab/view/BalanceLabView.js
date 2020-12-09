// Copyright 2013-2020, University of Colorado Boulder

/**
 * Type that defines the "Balance Lab" screen.
 */

import balancingAct from '../../balancingAct.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import MassCarousel from '../../common/view/MassCarousel.js';

class BalanceLabView extends BasicBalanceScreenView {

  /**
   * @param model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    super( model, tandem );
    // Add the mass selection carousel.
    this.massCarousel = new MassCarousel( model, this.modelViewTransform, {
      centerX: this.controlPanelBounds.centerX,
      top: this.controlPanelBounds.bottom + 5,
      fill: 'rgb( 240, 240, 240 )',
      maxWidth: this.controlPanelBounds.width,
      tandem: tandem.createTandem( 'massCarousel' )
    } );
    this.nonMassLayer.addChild( this.massCarousel );
  }

  // @public
  reset() {
    this.massCarousel.reset();
    super.reset();
  }
}

balancingAct.register( 'BalanceLabView', BalanceLabView );
export default BalanceLabView;