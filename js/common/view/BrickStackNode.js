// Copyright 2002-2013, University of Colorado Boulder

/**
 * Class that represents a stack for bricks in the view.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ShapeMassNode = require( 'BALANCING_ACT/common/view/ShapeMassNode' );

  function BrickStackNode( mass, mvt, labelVisibleProperty ) {
    ShapeMassNode.call( this, mass, mvt, 'rgb( 205, 38, 38 )', labelVisibleProperty );
  }

  return inherit( ShapeMassNode, BrickStackNode );
} );
