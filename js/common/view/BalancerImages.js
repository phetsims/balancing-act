// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all images for the Balancer in this sim. Collects the images to support selecting a different
 * balancer portrayal for localization.
 *
 * @author Luisa Vargas
 */

import balancingAct from '../../balancingAct.js';
import BalancerPortrayalAfrica from './BalancerPortrayalAfrica.js';
import BalancerPortrayalAfricaModest from './BalancerPortrayalAfricaModest.js';
import BalancerPortrayalAsia from './BalancerPortrayalAsia.js';
import BalancerPortrayalLatinAmerica from './BalancerPortrayalLatinAmerica.js';
import BalancerPortrayalOceania from './BalancerPortrayalOceania.js';
import BalancerPortrayalUSA from './BalancerPortrayalUSA.js';

const BalancerImages = {
  BALANCER_PORTRAYALS: [
    BalancerPortrayalAfrica,
    BalancerPortrayalAfricaModest,
    BalancerPortrayalAsia,
    BalancerPortrayalLatinAmerica,
    BalancerPortrayalOceania,
    BalancerPortrayalUSA
  ]
};

balancingAct.register( 'BalancerImages', BalancerImages );
export default BalancerImages;