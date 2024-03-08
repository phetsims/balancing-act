// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaModestBoySitting_svg from '../../../images/localized/africaModestBoySitting_svg.js';
import africaModestBoyStanding_svg from '../../../images/localized/africaModestBoyStanding_svg.js';
import africaGirlSitting_svg from '../../../images/localized/africaGirlSitting_svg.js';
import africaGirlStanding_svg from '../../../images/localized/africaGirlStanding_svg.js';
import africaLabIcon_svg from '../../../images/localized/africaLabIcon_svg.js';
import africaModestManSitting_svg from '../../../images/localized/africaModestManSitting_svg.js';
import africaModestManStanding_svg from '../../../images/localized/africaModestManStanding_svg.js';
import africaWomanSitting_svg from '../../../images/localized/africaWomanSitting_svg.js';
import africaWomanStanding_svg from '../../../images/localized/africaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalAfricaModest = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty,
  africaModestBoyStanding_svg,
  africaModestBoySitting_svg,
  africaGirlStanding_svg,
  africaGirlSitting_svg,
  africaModestManStanding_svg,
  africaModestManSitting_svg,
  africaWomanStanding_svg,
  africaWomanSitting_svg,
  africaLabIcon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalAfricaModest;