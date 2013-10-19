// Copyright 2002-2013, University of Colorado Boulder

/**
 * Fulcrum (for lack of a better word) that has a pivot point that is above
 * the plank.  This shape looks sort of like a swing set, with angled legs
 * that go from the ground up to apex in a sort of A-frame arrangement.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ShapeModelElement = require( 'ShapeModelElement' );

  // Constants
  var LEG_THICKNESS_FACTOR = 0.08; // Thickness of legs proportional to overall width, empirically determined.

  /**
   * @param {Dimension2} size
   * @constructor
   */
  function Fulcrum( size ) {
    ShapeModelElement.call( this );
    var thisFulcrum = this;
    thisFulcrum.size = size;
    var legThickness = LEG_THICKNESS_FACTOR * size.width;

    // Create the shape of the fulcrum.


  }

  return inherit( ShapeModelElement, Fulcrum, {
    //TODO prototypes
  } );
} );
