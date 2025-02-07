// Copyright 2013-2022, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */

import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import balancingAct from '../../balancingAct.js';

class FulcrumNode extends Node {

  constructor( modelViewTransform, fulcrum ) {
    super();
    this.addChild( new Path( modelViewTransform.modelToViewShape( fulcrum.shape ),
      {
        fill: 'rgb( 240, 240, 0 )',
        stroke: 'black'
      } ) );
  }
}

balancingAct.register( 'FulcrumNode', FulcrumNode );

export default FulcrumNode;