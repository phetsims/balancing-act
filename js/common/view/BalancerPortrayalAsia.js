// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaBoySitting_svg from '../../../images/localized/asiaBoySitting_svg.js';
import asiaBoyStanding_svg from '../../../images/localized/asiaBoyStanding_svg.js';
import asiaGirlSitting_svg from '../../../images/localized/asiaGirlSitting_svg.js';
import asiaGirlStanding_svg from '../../../images/localized/asiaGirlStanding_svg.js';
import asiaLabIcon_svg from '../../../images/localized/asiaLabIcon_svg.js';
import asiaManSitting_svg from '../../../images/localized/asiaManSitting_svg.js';
import asiaManStanding_svg from '../../../images/localized/asiaManStanding_svg.js';
import asiaWomanSitting_svg from '../../../images/localized/asiaWomanSitting_svg.js';
import asiaWomanStanding_svg from '../../../images/localized/asiaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalAsia = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty,
  asiaBoyStanding_svg,
  asiaBoySitting_svg,
  asiaGirlStanding_svg,
  asiaGirlSitting_svg,
  asiaManStanding_svg,
  asiaManSitting_svg,
  asiaWomanStanding_svg,
  asiaWomanSitting_svg,
  asiaLabIcon_svg,
  ASIA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalAsia;