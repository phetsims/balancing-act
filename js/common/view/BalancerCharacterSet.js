// Copyright 2023, University of Colorado Boulder

/**
 * The BalancerCharacterSet defines what is needed for each character set in Balancing Act.
 *
 * @author Luisa Vargas
 *
 */

import RegionAndCulturePortrayal from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import balancingAct from '../../balancingAct.js';

export default class BalancerCharacterSet extends RegionAndCulturePortrayal {

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
   * @param levelThree { HTMLImageElement }
   * @param levelFour { HTMLImageElement }
   * @param screenHomeIcon { HTMLImageElement }
   * @param screenNavIcon { HTMLImageElement }
   * @param queryParameterValue { string }
   */
  constructor( label,
               boyStanding, boySitting, girlStanding,
               girlSitting, manStanding, manSitting,
               womanStanding, womanSitting, levelThree,
               levelFour, screenHomeIcon, screenNavIcon,
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
    this.levelThree = levelThree;
    this.levelFour = levelFour;
    this.screenHomeIcon = screenHomeIcon;
    this.screenNavIcon = screenNavIcon;
  }
}

balancingAct.register( 'BalancerCharacterSet', BalancerCharacterSet );