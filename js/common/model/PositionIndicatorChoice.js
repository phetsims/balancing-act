// Copyright 2020, University of Colorado Boulder

/**
 * TODO: Documentation
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Enumeration from '../../../../phet-core/js/Enumeration.js';
import balancingAct from '../../balancingAct.js';

const PositionIndicatorChoice = Enumeration.byKeys( [ 'NONE', 'RULERS', 'MARKS' ] );
balancingAct.register( 'PositionIndicatorChoice', PositionIndicatorChoice );

export default PositionIndicatorChoice;