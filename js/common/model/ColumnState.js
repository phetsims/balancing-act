// Copyright 2020-2022, University of Colorado Boulder

/**
 * TODO: Documentation https://github.com/phetsims/tasks/issues/1129
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import EnumerationDeprecated from '../../../../phet-core/js/EnumerationDeprecated.js';
import balancingAct from '../../balancingAct.js';

const ColumnState = EnumerationDeprecated.byKeys( [ 'DOUBLE_COLUMNS', 'SINGLE_COLUMN', 'NO_COLUMNS' ] );
balancingAct.register( 'ColumnState', ColumnState );

export default ColumnState;