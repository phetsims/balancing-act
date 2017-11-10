// Copyright 2013-2017, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );

  function FulcrumNode( modelViewTransform, fulcrum ) {
    Node.call( this );
    this.addChild( new Path( modelViewTransform.modelToViewShape( fulcrum.shape ),
      {
        fill: 'rgb( 240, 240, 0 )',
        stroke: 'black'
      } ) );
  }

  balancingAct.register( 'FulcrumNode', FulcrumNode );

  return inherit( Node, FulcrumNode );
} );
