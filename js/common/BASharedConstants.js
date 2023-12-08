// Copyright 2014-2023, University of Colorado Boulder


import Bounds2 from '../../../dot/js/Bounds2.js';
import balancingAct from '../balancingAct.js';

const BASharedConstants = {
  COMPARISON_TOLERANCE: 1E-6,
  LAYOUT_BOUNDS: new Bounds2( 0, 0, 768, 504 ),
  RESET_ALL_BUTTON_SCALE: 0.96
};

balancingAct.register( 'BASharedConstants', BASharedConstants );

export default BASharedConstants;