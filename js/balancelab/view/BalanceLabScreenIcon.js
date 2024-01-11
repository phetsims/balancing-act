// Copyright 2023, University of Colorado Boulder

/**
 * BalanceLabScreenIcon places all the screenIcons of different region and culture representations into a single Node.
 * Each icon's visibility is controlled by the regionAndCulturePortrayalProperty.
 *
 * @author Luisa Vargas
 *
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import ScreenIcon from '../../../../joist/js/ScreenIcon.js';
import { Node, Image } from '../../../../scenery/js/imports.js';
import balancingAct from '../../balancingAct.js';
import PreferencesModelSingleton from '../../common/PreferencesModelSingleton.js';

export default class BalanceLabScreenIcon extends ScreenIcon {

  /**
   * @param { Array<BalancerPortrayal> } portrayals
   */
  constructor( portrayals ) {

    const balanceLabScreenImages = portrayals.map( balancerPortrayal => {
      return new Image( balancerPortrayal.screenIcon, {
        visibleProperty: new DerivedProperty( [ PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty ],
          portrayal => {
            return portrayal === balancerPortrayal;
          } )
      } );
    } );

    const screenIconNode = new Node( {
      children: balanceLabScreenImages
    } );
    super( screenIconNode, { maxIconWidthProportion: 1, maxIconHeightProportion: 1 } );
  }
}

balancingAct.register( 'BalanceLabScreenIcon', BalanceLabScreenIcon );