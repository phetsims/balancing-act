// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import latinAmericaBoySitting_svg from '../../../images/localized/latinAmericaBoySitting_svg.js';
import latinAmericaBoyStanding_svg from '../../../images/localized/latinAmericaBoyStanding_svg.js';
import latinAmericaGirlSitting_svg from '../../../images/localized/latinAmericaGirlSitting_svg.js';
import latinAmericaGirlStanding_svg from '../../../images/localized/latinAmericaGirlStanding_svg.js';
import latinAmericaLabIcon_svg from '../../../images/localized/latinAmericaLabIcon_svg.js';
import latinAmericaManSitting_svg from '../../../images/localized/latinAmericaManSitting_svg.js';
import latinAmericaManStanding_svg from '../../../images/localized/latinAmericaManStanding_svg.js';
import latinAmericaWomanSitting_svg from '../../../images/localized/latinAmericaWomanSitting_svg.js';
import latinAmericaWomanStanding_svg from '../../../images/localized/latinAmericaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

const BalancerPortrayalLatinAmerica = new BalancerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty,
  latinAmericaBoyStanding_svg,
  latinAmericaBoySitting_svg,
  latinAmericaGirlStanding_svg,
  latinAmericaGirlSitting_svg,
  latinAmericaManStanding_svg,
  latinAmericaManSitting_svg,
  latinAmericaWomanStanding_svg,
  latinAmericaWomanSitting_svg,
  latinAmericaLabIcon_svg,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);


export default BalancerPortrayalLatinAmerica;