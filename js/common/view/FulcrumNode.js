// Copyright 2013-2015, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );

  function FulcrumNode( mvt, fulcrum ) {
    Node.call( this );
    this.addChild( new Path( mvt.modelToViewShape( fulcrum.shape ),
      {
        fill: 'rgb( 240, 240, 0 )',
        stroke: 'black'
      } ) );
  }

  return inherit( Node, FulcrumNode );
} );
