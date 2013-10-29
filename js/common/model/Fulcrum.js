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
  var Property = require( 'AXON/Property' );
  var Shape = require( 'KITE/Shape' );

  // Constants
  var LEG_THICKNESS_FACTOR = 0.08; // Thickness of legs proportional to overall width, empirically determined.

  /**
   * @param {Dimension2} size - width and height of the fulcrum.
   * @constructor
   */
  function Fulcrum( size ) {
    var thisFulcrum = this;
    thisFulcrum.size = size;
    var legThickness = LEG_THICKNESS_FACTOR * size.width;

    // Define the basic shape of the fulcrum, which is an A-frame sort of
    // thing that is centered horizontally around x = 0.
    var fulcrumShape = new Shape();
    // Start at leftmost point.
    fulcrumShape.moveTo( -size.width / 2, 0 );
    fulcrumShape.lineTo( -legThickness / 2, size.height );
    fulcrumShape.lineTo( legThickness / 2, size.height );
    fulcrumShape.lineTo( size.width / 2, 0 );
    fulcrumShape.lineTo( size.width / 2 - legThickness, 0 );
    fulcrumShape.lineTo( 0, size.height - ( legThickness * size.height / ( size.width - legThickness ) ) );
    fulcrumShape.lineTo( -size.width / 2 + legThickness, 0 );
    fulcrumShape.close();

    // The shape property is what will define the shape in the view.
    thisFulcrum.shape = new Property( fulcrumShape );
  }

  return Fulcrum;
} );
