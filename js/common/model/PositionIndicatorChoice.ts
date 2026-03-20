// Copyright 2020-2026, University of Colorado Boulder

/**
 * Enumerates the choice of position indicator. These are the valid values for which position indicator set ( rulers,
 * marks, or no set ) is visible on the ruler. These values are shared across all screens in the sim so an enumeration
 * is necessary.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import EnumerationDeprecated from '../../../../phet-core/js/EnumerationDeprecated.js';

const PositionIndicatorChoice = EnumerationDeprecated.byKeys( [ 'NONE', 'RULERS', 'MARKS' ] ) as unknown as {
  NONE: typeof PositionIndicatorChoice;
  RULERS: typeof PositionIndicatorChoice;
  MARKS: typeof PositionIndicatorChoice;
};

export default PositionIndicatorChoice;
