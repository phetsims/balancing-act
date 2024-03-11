// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import usaBoySitting_svg from '../../../images/usa/usaBoySitting_svg.js';
import usaBoyStanding_svg from '../../../images/usa/usaBoyStanding_svg.js';
import usaGirlSitting_svg from '../../../images/usa/usaGirlSitting_svg.js';
import usaGirlStanding_svg from '../../../images/usa/usaGirlStanding_svg.js';
import usaLabIcon_svg from '../../../images/usa/usaLabIcon_svg.js';
import usaManSitting_svg from '../../../images/usa/usaManSitting_svg.js';
import usaManStanding_svg from '../../../images/usa/usaManStanding_svg.js';
import usaWomanSitting_svg from '../../../images/usa/usaWomanSitting_svg.js';
import usaWomanStanding_svg from '../../../images/usa/usaWomanStanding_svg.js';
import BalancerPortrayal from './BalancerPortrayal.js';

// TODO: Remove "../../../balancing-act/images/**/*", from all/tsconfig.json file once all svg files have been used. https://github.com/phetsims/balancing-act/issues/140
const BalancerPortrayalUSA = new BalancerPortrayal(
  'usa',
  usaBoyStanding_svg,
  usaBoySitting_svg,
  usaGirlStanding_svg,
  usaGirlSitting_svg,
  usaManStanding_svg,
  usaManSitting_svg,
  usaWomanStanding_svg,
  usaWomanSitting_svg,
  usaLabIcon_svg
);


export default BalancerPortrayalUSA;