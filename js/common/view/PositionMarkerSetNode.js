// Copyright 2013-2020, University of Colorado Boulder

/**
 * Node that represents a set of position markers that collectively enumerate
 * the various snap-to positions on the plank.
 */

import inherit from '../../../../phet-core/js/inherit.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import balancingAct from '../../balancingAct.js';
import Plank from '../model/Plank.js';
import PositionMarkerNode from './PositionMarkerNode.js';

function PositionMarkerSetNode( plank, modelViewTransform, visibleProperty ) {
  Node.call( this );
  const self = this;

  // Add the individual position markers.
  const numTickMarks = Plank.LENGTH / Plank.INTER_SNAP_TO_MARKER_DISTANCE - 1;
  const interMarkerDistance = modelViewTransform.modelToViewDeltaX( Plank.INTER_SNAP_TO_MARKER_DISTANCE );
  for ( let i = 0; i < numTickMarks; i++ ) {
    const label = Math.abs( i - Math.floor( numTickMarks / 2 ) );
    if ( label !== 0 ) {
      self.addChild( new PositionMarkerNode( label, { centerX: i * interMarkerDistance } ) );
    }
  }

  // Observe visibility.
  visibleProperty.link( function( visible ) {
    self.visible = visible;
  } );

  // Set initial position.
  const topCenter = modelViewTransform.modelToViewPosition( plank.bottomCenterLocationProperty.get() );
  self.top = topCenter.y;
  self.centerX = topCenter.x;

  // Rotate with the plank.
  let rotationAngle = 0;
  const rotationPoint = modelViewTransform.modelToViewPosition( plank.pivotPoint );
  plank.tiltAngleProperty.link( function( angle ) {
    const deltaAngle = rotationAngle - angle;
    rotationAngle = angle;
    self.rotateAround( rotationPoint, deltaAngle );
  } );
}

balancingAct.register( 'PositionMarkerSetNode', PositionMarkerSetNode );

inherit( Node, PositionMarkerSetNode );
export default PositionMarkerSetNode;