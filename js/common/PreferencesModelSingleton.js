// Copyright 2023-2024, University of Colorado Boulder

/**
 * Preferences model as a singleton, so it can be accessed by the HumanTypeEnum.
 *
 * @author Luisa Vargas
 */

import PreferencesModel from '../../../joist/js/preferences/PreferencesModel.js';
import balancingAct from '../balancingAct.js';
import BalancerImages from './view/BalancerImages.js';

const PreferencesModelSingleton = new PreferencesModel( {
  localizationOptions: {
    portrayals: BalancerImages.BALANCER_PORTRAYALS
  }
} );

balancingAct.register( 'PreferencesModelSingleton', PreferencesModelSingleton );
export default PreferencesModelSingleton;