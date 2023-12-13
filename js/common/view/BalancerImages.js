// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all images for the Balancer in this sim. Collects the images to support selecting a different
 * balancer portrayal for localization.
 *
 * @author Luisa Vargas
 */

import balancingAct from '../../balancingAct.js';
import BalancerPortrayalUSA from './BalancerPortrayalUSA.js';

const BalancerImages = {
  BALANCER_PORTRAYALS: [
    BalancerPortrayalUSA
  ]
};

balancingAct.register( 'BalancerImages', BalancerImages );
export default BalancerImages;