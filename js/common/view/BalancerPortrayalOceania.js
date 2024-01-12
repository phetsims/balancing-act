// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import boySitting_svg from '../../../images/oceania/boySitting_svg.js';
import boyStanding_svg from '../../../images/oceania/boyStanding_svg.js';
import girlSitting_svg from '../../../images/oceania/girlSitting_svg.js';
import girlStanding_svg from '../../../images/oceania/girlStanding_svg.js';
import labIcon_svg from '../../../images/oceania/labIcon_svg.js';
import manSitting_svg from '../../../images/oceania/manSitting_svg.js';
import manStanding_svg from '../../../images/oceania/manStanding_svg.js';
import womanSitting_svg from '../../../images/oceania/womanSitting_svg.js';
import womanStanding_svg from '../../../images/oceania/womanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalOceania = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  boyStanding_svg,
  boySitting_svg,
  girlStanding_svg,
  girlSitting_svg,
  manStanding_svg,
  manSitting_svg,
  womanStanding_svg,
  womanSitting_svg,
  labIcon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalOceania;