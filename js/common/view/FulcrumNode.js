// Copyright 2013-2019, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // imports
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Path = require( 'SCENERY/nodes/Path' );

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
