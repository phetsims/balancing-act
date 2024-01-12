// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import boySitting_svg from '../../../images/latin-america/boySitting_svg.js';
import boyStanding_svg from '../../../images/latin-america/boyStanding_svg.js';
import girlSitting_svg from '../../../images/latin-america/girlSitting_svg.js';
import girlStanding_svg from '../../../images/latin-america/girlStanding_svg.js';
import labIcon_svg from '../../../images/latin-america/labIcon_svg.js';
import manSitting_svg from '../../../images/latin-america/manSitting_svg.js';
import manStanding_svg from '../../../images/latin-america/manStanding_svg.js';
import womanSitting_svg from '../../../images/latin-america/womanSitting_svg.js';
import womanStanding_svg from '../../../images/latin-america/womanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalLatinAmerica = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty,
  boyStanding_svg,
  boySitting_svg,
  girlStanding_svg,
  girlSitting_svg,
  manStanding_svg,
  manSitting_svg,
  womanStanding_svg,
  womanSitting_svg,
  labIcon_svg,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalLatinAmerica;