// Copyright 2020-2024, University of Colorado Boulder

/**
 * Enumerates the state of the columns which hold up the plank in the simulation. The columns exist in all screens of
 * the sim so an enumeration to keep track of the number of columns (double columns, a single column, or no columns)
 * is necessary.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import EnumerationDeprecated from '../../../../phet-core/js/EnumerationDeprecated.js';
import balancingAct from '../../balancingAct.js';

const ColumnState = EnumerationDeprecated.byKeys( [ 'DOUBLE_COLUMNS', 'SINGLE_COLUMN', 'NO_COLUMNS' ] ) as unknown as {
  DOUBLE_COLUMNS: typeof ColumnState;
  SINGLE_COLUMN: typeof ColumnState;
  NO_COLUMNS: typeof ColumnState;
};
balancingAct.register( 'ColumnState', ColumnState );

export default ColumnState;