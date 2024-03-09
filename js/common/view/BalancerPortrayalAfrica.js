// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaBoySitting_svg from '../../../images/africa/africaBoySitting_svg.js';
import africaBoyStanding_svg from '../../../images/africa/africaBoyStanding_svg.js';
import africaGirlSitting_svg from '../../../images/africa/africaGirlSitting_svg.js';
import africaGirlStanding_svg from '../../../images/africa/africaGirlStanding_svg.js';
import africaLabIcon_svg from '../../../images/africa/africaLabIcon_svg.js';
import africaManSitting_svg from '../../../images/africa/africaManSitting_svg.js';
import africaManStanding_svg from '../../../images/africa/africaManStanding_svg.js';
import africaWomanSitting_svg from '../../../images/africa/africaWomanSitting_svg.js';
import africaWomanStanding_svg from '../../../images/africa/africaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalAfrica = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty,
  africaBoyStanding_svg,
  africaBoySitting_svg,
  africaGirlStanding_svg,
  africaGirlSitting_svg,
  africaManStanding_svg,
  africaManSitting_svg,
  africaWomanStanding_svg,
  africaWomanSitting_svg,
  africaLabIcon_svg,
  AFRICA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalAfrica;