// Copyright 2013-2017, University of Colorado Boulder

/**
 * Node that represents a set of position markers that collectively enumerate
 * the various snap-to positions on the plank.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Plank = require( 'BALANCING_ACT/common/model/Plank' );
  const PositionMarkerNode = require( 'BALANCING_ACT/common/view/PositionMarkerNode' );

  function PositionMarkerSetNode( plank, modelViewTransform, visibleProperty ) {
    Node.call( this );
    var self = this;

    // Add the individual position markers.
    var numTickMarks = Plank.LENGTH / Plank.INTER_SNAP_TO_MARKER_DISTANCE - 1;
    var interMarkerDistance = modelViewTransform.modelToViewDeltaX( Plank.INTER_SNAP_TO_MARKER_DISTANCE );
    for ( var i = 0; i < numTickMarks; i++ ) {
      var label = Math.abs( i - Math.floor( numTickMarks / 2 ) );
      if ( label !== 0 ) {
        self.addChild( new PositionMarkerNode( label, { centerX: i * interMarkerDistance } ) );
      }
    }

    // Observe visibility.
    visibleProperty.link( function( visible ) {
      self.visible = visible;
    } );

    // Set initial position.
    var topCenter = modelViewTransform.modelToViewPosition( plank.bottomCenterLocationProperty.get() );
    self.top = topCenter.y;
    self.centerX = topCenter.x;

    // Rotate with the plank.
    var rotationAngle = 0;
    var rotationPoint = modelViewTransform.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( angle ) {
      var deltaAngle = rotationAngle - angle;
      rotationAngle = angle;
      self.rotateAround( rotationPoint, deltaAngle );
    } );
  }

  balancingAct.register( 'PositionMarkerSetNode', PositionMarkerSetNode );

  return inherit( Node, PositionMarkerSetNode );
} );
