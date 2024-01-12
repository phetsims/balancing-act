// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import boySitting_svg from '../../../images/asia/boySitting_svg.js';
import boyStanding_svg from '../../../images/asia/boyStanding_svg.js';
import girlSitting_svg from '../../../images/asia/girlSitting_svg.js';
import girlStanding_svg from '../../../images/asia/girlStanding_svg.js';
import labIcon_svg from '../../../images/asia/labIcon_svg.js';
import manSitting_svg from '../../../images/asia/manSitting_svg.js';
import manStanding_svg from '../../../images/asia/manStanding_svg.js';
import womanSitting_svg from '../../../images/asia/womanSitting_svg.js';
import womanStanding_svg from '../../../images/asia/womanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalAsia = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty,
  boyStanding_svg,
  boySitting_svg,
  girlStanding_svg,
  girlSitting_svg,
  manStanding_svg,
  manSitting_svg,
  womanStanding_svg,
  womanSitting_svg,
  labIcon_svg,
  ASIA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalAsia;