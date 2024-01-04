// Copyright 2013-2024, University of Colorado Boulder

/**
 * Screen view for the "Balance Lab" screen.
 */

import balancingAct from '../../balancingAct.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import MassCarousel from '../../common/view/MassCarousel.js';

class BalanceLabScreenView extends BasicBalanceScreenView {

  /**
   * @param {BalanceLabModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    super( model, tandem );

    // Add the mass selection carousel.
    this.massCarousel = new MassCarousel( model, this, {
      fill: 'rgb( 240, 240, 240 )',
      maxWidth: this.controlPanelMaxWidth,
      tandem: tandem.createTandem( 'massCarousel' )
    } );
    this.controlPanelVBox.addChild( this.massCarousel );
  }

  // @public
  reset() {
    this.massCarousel.reset();
    super.reset();
  }
}

balancingAct.register( 'BalanceLabScreenView', BalanceLabScreenView );
export default BalanceLabScreenView;