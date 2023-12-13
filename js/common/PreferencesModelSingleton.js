// Copyright 2023, University of Colorado Boulder

import PreferencesModel from '../../../joist/js/preferences/PreferencesModel.js';
import balancingAct from '../balancingAct.js';
import BalancerImages from './view/BalancerImages.js';

const PreferencesModelSingleton = new PreferencesModel( {
  localizationOptions: {
    portrayals: BalancerImages.BALANCER_CHARACTER_SETS
  }
} );

balancingAct.register( 'PreferencesModelSingleton', PreferencesModelSingleton );
export default PreferencesModelSingleton;