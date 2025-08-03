// Copyright 2013-2025, University of Colorado Boulder

/**
 * Class that depicts a vector that has an origin as well as x and y components,
 * and that monitors the vector and updates the representation when changes
 * occur.
 *
 * NOTE: This only works with downward pointing vectors, which is what was
 * needed for Balancing Act.  This would need to be generalized to support
 * vectors pointing in other directions.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import optionize from '../../../../phet-core/js/optionize.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';
import Node, { NodeOptions } from '../../../../scenery/js/nodes/Node.js';
import balancingAct from '../../balancingAct.js';
import PositionedVector from '../model/PositionedVector.js';

type SelfOptions = {
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  headHeight?: number;
  headWidth?: number;
  tailWidth?: number;
};

type PositionedVectorNodeOptions = SelfOptions & NodeOptions;

class PositionedVectorNode extends Node {
  private readonly disposePositionedVectorNode: () => void;

  public constructor( positionedVectorProperty: Property<PositionedVector>, scalingFactor: number, visibleProperty: Property<boolean>, modelViewTransform: ModelViewTransform2, providedOptions?: PositionedVectorNodeOptions ) {

    const options = optionize<PositionedVectorNodeOptions, SelfOptions, NodeOptions>()( {
      visibleProperty: visibleProperty,
      fill: 'white',
      stroke: 'black',
      lineWidth: 1,
      headHeight: 8,
      headWidth: 12,
      tailWidth: 5
    }, providedOptions );

    super( options );

    // Create the vector node and add it as a child.
    const length = positionedVectorProperty.value.vector.magnitude * scalingFactor;
    this.addChild( new ArrowNode( 0, 0, 0, length, options ) );

    const positionHandler = ( positionedVector: PositionedVector ) => {
      this.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
      this.top = modelViewTransform.modelToViewY( positionedVector.origin.y );
    };
    positionedVectorProperty.link( positionHandler );

    // Clean up any linkages that could cause memory leaks.
    this.disposePositionedVectorNode = () => {
      positionedVectorProperty.unlink( positionHandler );
    };
  }

  public override dispose(): void {
    this.disposePositionedVectorNode();
    super.dispose();
  }
}

balancingAct.register( 'PositionedVectorNode', PositionedVectorNode );

export default PositionedVectorNode;