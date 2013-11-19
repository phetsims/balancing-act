// Copyright 2002-2013, University of Colorado Boulder

/**
 * This is a column that can be used to support one of the ends of the plank
 * in a level position.  At the time of this writing, this type of column is
 * always used in conjunction with another that is holding up the other side of
 * the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var Shape = require( 'KITE/Shape' );

  // Constants
  var COLUMN_WIDTH = 0.35; // In meters

  /**
   * @param height
   * @param centerX
   * @constructor
   */
  function LevelSupportColumn( height, centerX ) {
    this.shape = new Shape.rect( centerX - COLUMN_WIDTH / 2, 0, COLUMN_WIDTH, height );
  }

  return LevelSupportColumn;
} );