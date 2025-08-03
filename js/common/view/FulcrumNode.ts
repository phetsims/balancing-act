// Copyright 2013-2025, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import balancingAct from '../../balancingAct.js';
import Fulcrum from '../model/Fulcrum.js';

class FulcrumNode extends Node {

  public constructor( modelViewTransform: ModelViewTransform2, fulcrum: Fulcrum ) {
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