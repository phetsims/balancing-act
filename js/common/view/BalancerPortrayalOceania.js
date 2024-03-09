// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import oceaniaBoySitting_svg from '../../../images/oceania/oceaniaBoySitting_svg.js';
import oceaniaBoyStanding_svg from '../../../images/oceania/oceaniaBoyStanding_svg.js';
import oceaniaGirlSitting_svg from '../../../images/oceania/oceaniaGirlSitting_svg.js';
import oceaniaGirlStanding_svg from '../../../images/oceania/oceaniaGirlStanding_svg.js';
import oceaniaLabIcon_svg from '../../../images/oceania/oceaniaLabIcon_svg.js';
import oceaniaManSitting_svg from '../../../images/oceania/oceaniaManSitting_svg.js';
import oceaniaManStanding_svg from '../../../images/oceania/oceaniaManStanding_svg.js';
import oceaniaWomanSitting_svg from '../../../images/oceania/oceaniaWomanSitting_svg.js';
import oceaniaWomanStanding_svg from '../../../images/oceania/oceaniaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalOceania = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  oceaniaBoyStanding_svg,
  oceaniaBoySitting_svg,
  oceaniaGirlStanding_svg,
  oceaniaGirlSitting_svg,
  oceaniaManStanding_svg,
  oceaniaManSitting_svg,
  oceaniaWomanStanding_svg,
  oceaniaWomanSitting_svg,
  oceaniaLabIcon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalOceania;