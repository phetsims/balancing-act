// Copyright 2013-2026, University of Colorado Boulder

/**
 * View representation for the fulcrum.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
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

export default FulcrumNode;
