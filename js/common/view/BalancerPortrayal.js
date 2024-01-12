// Copyright 2023-2024, University of Colorado Boulder

/**
 * The BalancerPortrayal defines what is needed for each portrayal set in Balancing Act.
 *
 * @author Luisa Vargas
 *
 */

import RegionAndCulturePortrayal from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import balancingAct from '../../balancingAct.js';

export default class BalancerPortrayal extends RegionAndCulturePortrayal {

  /**
   * @param label { LocalizedStringProperty }
   * @param boyStanding { HTMLImageElement }
   * @param boySitting { HTMLImageElement }
   * @param girlStanding { HTMLImageElement }
   * @param girlSitting { HTMLImageElement }
   * @param manStanding { HTMLImageElement }
   * @param manSitting { HTMLImageElement }
   * @param womanStanding { HTMLImageElement }
   * @param womanSitting { HTMLImageElement }
   * @param screenIcon { HTMLImageElement }
   * @param queryParameterValue { string }
   */
  constructor( label,
               boyStanding, boySitting, girlStanding,
               girlSitting, manStanding, manSitting,
               womanStanding, womanSitting, screenIcon,
               queryParameterValue ) {

    super( label, queryParameterValue, {} );

    this.boyStanding = boyStanding;
    this.boySitting = boySitting;
    this.girlStanding = girlStanding;
    this.girlSitting = girlSitting;
    this.manStanding = manStanding;
    this.manSitting = manSitting;
    this.womanStanding = womanStanding;
    this.womanSitting = womanSitting;
    this.screenIcon = screenIcon;
  }
}

balancingAct.register( 'BalancerPortrayal', BalancerPortrayal );