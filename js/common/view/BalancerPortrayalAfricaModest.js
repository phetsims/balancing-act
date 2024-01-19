// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import boySitting_svg from '../../../images/africa-modest/boySitting_svg.js';
import boyStanding_svg from '../../../images/africa-modest/boyStanding_svg.js';
import girlSitting_svg from '../../../images/africa/girlSitting_svg.js';
import girlStanding_svg from '../../../images/africa/girlStanding_svg.js';
import labIcon_svg from '../../../images/africa/labIcon_svg.js';
import manSitting_svg from '../../../images/africa-modest/manSitting_svg.js';
import manStanding_svg from '../../../images/africa-modest/manStanding_svg.js';
import womanSitting_svg from '../../../images/africa/womanSitting_svg.js';
import womanStanding_svg from '../../../images/africa/womanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalAfricaModest = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty,
  boyStanding_svg,
  boySitting_svg,
  girlStanding_svg,
  girlSitting_svg,
  manStanding_svg,
  manSitting_svg,
  womanStanding_svg,
  womanSitting_svg,
  labIcon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalAfricaModest;