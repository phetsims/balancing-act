// Copyright 2020-2026, University of Colorado Boulder

/**
 * Query parameters for Balancing Act
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import getGameLevelsSchema from '../../../vegas/js/getGameLevelsSchema.js';

const BAQueryParameters = QueryStringMachine.getAll( {

  // The levels to show in the Line Game screen.
  gameLevels: getGameLevelsSchema( 4 ),

  // whether the Stanford University customizations are enabled
  stanford: { type: 'flag' }
} );

export default BAQueryParameters;
