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

  function BrickStackNode( mass, mvt, isLabeled, labelVisibleProperty, draggable ) {
    ShapeMassNode.call( this, mass, mvt, 'rgb( 205, 38, 38 )', isLabeled, labelVisibleProperty, draggable );
  }

  return inherit( ShapeMassNode, BrickStackNode );
} );
