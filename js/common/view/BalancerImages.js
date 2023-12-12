// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all images for the Balancer in this sim. Collects the images to support selecting a different
 * explorer character for localization.
 *
 * @author Luisa Vargas
 */

import balancingAct from '../../balancingAct.js';
import BalancerCharacterSetUSA from './BalancerCharacterSetUSA.js';

const BalancerImages = {
  BALANCER_CHARACTER_SETS: [
    BalancerCharacterSetUSA
  ]
};

balancingAct.register( 'BalancerImages', BalancerImages );
export default BalancerImages;