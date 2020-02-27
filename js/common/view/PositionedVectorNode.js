// Copyright 2013-2019, University of Colorado Boulder

/**
 * Class that depicts a vector that has an origin as well as x and y components,
 * and that monitors the vector and updates the representation when changes
 * occur.
 *
 * NOTE: This only works with downward pointing vectors, which is what was
 * needed for Balancing Act.  This would need to be generalized to support
 * vectors pointing in other directions.
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import merge from '../../../../phet-core/js/merge.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import balancingAct from '../../balancingAct.js';

/**
 * @param positionedVectorProperty
 * @param visibilityProperty
 * @param scalingFactor
 * @param modelViewTransform
 * @param {Object} [options]
 * @constructor
 */
function PositionedVectorNode( positionedVectorProperty, scalingFactor, visibilityProperty, modelViewTransform, options ) {
  Node.call( this );
  const self = this;

  options = merge(
    {
      fill: 'white',
      stroke: 'black',
      lineWidth: 1,
      headHeight: 8,
      headWidth: 12,
      tailWidth: 5
    }, options );

  // Create the vector node and add it as a child.
  const length = positionedVectorProperty.value.vector.magnitude * scalingFactor;
  self.addChild( new ArrowNode( 0, 0, 0, length, options ) );

  positionedVectorProperty.link( function( positionedVector ) {
    self.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
    self.top = modelViewTransform.modelToViewY( positionedVector.origin.y );
  } );

  visibilityProperty.link( function( visible ) {
    self.visible = visible;
  } );
}

balancingAct.register( 'PositionedVectorNode', PositionedVectorNode );

inherit( Node, PositionedVectorNode );
export default PositionedVectorNode;