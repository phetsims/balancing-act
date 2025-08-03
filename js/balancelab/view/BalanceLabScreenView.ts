// Copyright 2013-2024, University of Colorado Boulder

/**
 * Screen view for the "Balance Lab" screen.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import MassCarousel from '../../common/view/MassCarousel.js';
import BalanceLabModel from '../model/BalanceLabModel.js';

export default class BalanceLabScreenView extends BasicBalanceScreenView {

  private readonly massCarousel: MassCarousel;

  public constructor( model: BalanceLabModel, tandem: Tandem ) {
    super( model, tandem );

    // Add the mass selection carousel.
    this.massCarousel = new MassCarousel( model, this, {
      fill: 'rgb( 240, 240, 240 )',
      maxWidth: this.controlPanelMaxWidth,
      tandem: tandem.createTandem( 'massCarousel' )
    } );
    this.controlPanelVBox.addChild( this.massCarousel );
  }

  public override reset(): void {
    this.massCarousel.reset();
    super.reset();
  }
}

balancingAct.register( 'BalanceLabScreenView', BalanceLabScreenView );