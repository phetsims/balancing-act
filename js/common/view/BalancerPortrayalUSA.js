// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import gameLevel3Icon_svg from '../../../images/gameLevel3Icon_svg.js';
import gameLevel4Icon_svg from '../../../images/gameLevel4Icon_svg.js';
import boySitting_svg from '../../../images/usa/boySitting_svg.js';
import boyStanding_svg from '../../../images/usa/boyStanding_svg.js';
import girlSitting_svg from '../../../images/usa/girlSitting_svg.js';
import girlStanding_svg from '../../../images/usa/girlStanding_svg.js';
import labIcon_svg from '../../../images/usa/labIcon_svg.js';
import manSitting_svg from '../../../images/usa/manSitting_svg.js';
import manStanding_svg from '../../../images/usa/manStanding_svg.js';
import womanSitting_svg from '../../../images/usa/womanSitting_svg.js';
import womanStanding_svg from '../../../images/usa/womanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

// TODO: Remove "../../../balancing-act/images/**/*", from all/tsconfig.json file once all svg files have been used. https://github.com/phetsims/balancing-act/issues/140
const BalancerPortrayalUSA = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty,
  boyStanding_svg,
  boySitting_svg,
  girlStanding_svg,
  girlSitting_svg,
  manStanding_svg,
  manSitting_svg,
  womanStanding_svg,
  womanSitting_svg,
  gameLevel3Icon_svg,
  gameLevel4Icon_svg,
  labIcon_svg,
  labIcon_svg,
  USA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalUSA;