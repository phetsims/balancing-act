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

  // @public
  reset() {
    this.massCarousel.reset();
    super.reset();
  }
}

balancingAct.register( 'BalanceLabView', BalanceLabView );
export default BalanceLabView;