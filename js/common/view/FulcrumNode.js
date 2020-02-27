// Copyright 2013-2020, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import balancingAct from '../../balancingAct.js';

function FulcrumNode( modelViewTransform, fulcrum ) {
  Node.call( this );
  this.addChild( new Path( modelViewTransform.modelToViewShape( fulcrum.shape ),
    {
      fill: 'rgb( 240, 240, 0 )',
      stroke: 'black'
    } ) );
}

balancingAct.register( 'FulcrumNode', FulcrumNode );

inherit( Node, FulcrumNode );
export default FulcrumNode;