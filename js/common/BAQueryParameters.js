// Copyright 2020-2021, University of Colorado Boulder

/**
 * Query parameters for Balancing Act
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import getGameLevelsSchema from '../../../vegas/js/getGameLevelsSchema.js';
import balancingAct from '../balancingAct.js';

const BAQueryParameters = QueryStringMachine.getAll( {

  // The levels to show in the Line Game screen.
  gameLevels: getGameLevelsSchema( 4 ),

  // whether the Stanford University customizations are enabled
  stanford: { type: 'flag' }
} );

balancingAct.register( 'BAQueryParameters', BAQueryParameters );
export default BAQueryParameters;