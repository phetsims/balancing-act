// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import labIcon_png from '../../../images/labIcon_png.js';
import labIconSmall_png from '../../../images/labIconSmall_png.js';
import boySitting_png from '../../../mipmaps/usa/boySitting_png.js';
import boyStanding_png from '../../../mipmaps/usa/boyStanding_png.js';
import gameLevel3Icon_png from '../../../mipmaps/usa/gameLevel3Icon_png.js';
import gameLevel4Icon_png from '../../../mipmaps/usa/gameLevel4Icon_png.js';
import girlSitting_png from '../../../mipmaps/usa/girlSitting_png.js';
import girlStanding_png from '../../../mipmaps/usa/girlStanding_png.js';
import manSitting_png from '../../../mipmaps/usa/manSitting_png.js';
import manStanding_png from '../../../mipmaps/usa/manStanding_png.js';
import womanSitting_png from '../../../mipmaps/usa/womanSitting_png.js';
import womanStanding_png from '../../../mipmaps/usa/womanStanding_png.js';
import BalancerCharacterSet from './BalancerCharacterSet.js';


const BalancerCharacterSetUSA = new BalancerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty,
  boyStanding_png,
  boySitting_png,
  girlStanding_png,
  girlSitting_png,
  manStanding_png,
  manSitting_png,
  womanStanding_png,
  womanSitting_png,
  gameLevel3Icon_png,
  gameLevel4Icon_png,
  labIcon_png,
  labIconSmall_png,
  USA_REGION_AND_CULTURE_ID
);


export default BalancerCharacterSetUSA;