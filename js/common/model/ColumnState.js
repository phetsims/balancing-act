// Copyright 2020-2021, University of Colorado Boulder

/**
 * TODO: Documentation
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Enumeration from '../../../../phet-core/js/Enumeration.js';
import balancingAct from '../../balancingAct.js';

const ColumnState = Enumeration.byKeys( [ 'DOUBLE_COLUMNS', 'SINGLE_COLUMN', 'NO_COLUMNS' ] );
balancingAct.register( 'ColumnState', ColumnState );

export default ColumnState;