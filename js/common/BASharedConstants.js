// Copyright 2014-2024, University of Colorado Boulder

/**
 * constants shared within the Balancing Act simulation
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Bounds2 from '../../../dot/js/Bounds2.js';
import { LinearGradient } from '../../../scenery/js/imports.js';
import balancingAct from '../balancingAct.js';

const BASharedConstants = {
  COMPARISON_TOLERANCE: 1E-6,

  // A PhET wide decision was made to not update custom layout bounds even if they do not match the
  // default layout bounds in ScreenView. Do not change these bounds as changes could break or disturb
  // any phet-io instrumention. https://github.com/phetsims/phet-io/issues/1939
  LAYOUT_BOUNDS: new Bounds2( 0, 0, 768, 504 ),
  RESET_ALL_BUTTON_SCALE: 0.96,

  // Helper functions to create the Linear Gradient for the support columns.
  GET_COLUMN_BODY_GRADIENT: transformedColumnShape =>
    new LinearGradient(
      transformedColumnShape.bounds.minX, 0,
      transformedColumnShape.bounds.maxX, 0
    )
      .addColorStop( 0, '#BFBEBF' )
      .addColorStop( 0.15, '#BFBEBF' )
      .addColorStop( 0.16, '#CECECE' )
      .addColorStop( 0.3, '#CECECE' )
      .addColorStop( 0.31, '#ADAFAD' )
      .addColorStop( 0.8, '#ADAFAD' )
      .addColorStop( 0.81, '#979696' )
      .addColorStop( 1, '#979696' ),
  GET_COLUMN_SUPPORT_GRADIENT: ( transformedColumnShape, supportWidth ) =>
    new LinearGradient(
      transformedColumnShape.bounds.centerX - supportWidth / 2, 0,
      transformedColumnShape.bounds.centerX + supportWidth / 2, 0
    )
      .addColorStop( 0, '#BFBEBF' )
      .addColorStop( 0.15, '#BFBEBF' )
      .addColorStop( 0.16, '#CECECE' )
      .addColorStop( 0.22, '#CECECE' )
      .addColorStop( 0.23, '#ADAFAD' )
      .addColorStop( 0.84, '#ADAFAD' )
      .addColorStop( 0.85, '#979696' )
      .addColorStop( 1, '#979696' )

};

balancingAct.register( 'BASharedConstants', BASharedConstants );

export default BASharedConstants;