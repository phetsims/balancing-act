// Copyright 2014-2025, University of Colorado Boulder

/**
 * constants shared within the Balancing Act simulation
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Bounds2 from '../../../dot/js/Bounds2.js';
import balancingAct from '../balancingAct.js';

const BASharedConstants = {
  COMPARISON_TOLERANCE: 1E-6,

  // A PhET wide decision was made to not update custom layout bounds even if they do not match the
  // default layout bounds in ScreenView. Do not change these bounds as changes could break or disturb
  // any phet-io instrumentation. https://github.com/phetsims/phet-io/issues/1939
  LAYOUT_BOUNDS: new Bounds2( 0, 0, 768, 504 ),
  RESET_ALL_BUTTON_SCALE: 0.96
};

balancingAct.register( 'BASharedConstants', BASharedConstants );

export default BASharedConstants;