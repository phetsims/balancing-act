// Copyright 2002-2013, University of Colorado Boulder

/**
 * Node that represents a set of position markers that collectively enumerate
 * the various snap-to positions on the plank.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PositionMarkerNode = require( 'BALANCING_ACT/common/view/PositionMarkerNode' );

  function PositionMarkerSetNode( plank, mvt, visibleProperty ) {
    Node.call( this );
    var thisNode = this;

    // Add the individual position markers.
    var numTickMarks = plank.LENGTH / plank.INTER_SNAP_TO_MARKER_DISTANCE - 1;
    var interMarkerDistance = mvt.modelToViewDeltaX( plank.INTER_SNAP_TO_MARKER_DISTANCE );
    for ( var i = 0; i < numTickMarks; i++ ) {
      var label = Math.abs( i - Math.floor( numTickMarks / 2 ) );
      if ( label !== 0 ) {
        thisNode.addChild( new PositionMarkerNode( label, { centerX: i * interMarkerDistance } ) );
      }
    }

    // Observe visibility.
    visibleProperty.link( function( visible ) {
      thisNode.visible = visible;
    } );

    // Set initial position.
    var topCenter = mvt.modelToViewPosition( plank.bottomCenterLocation );
    thisNode.top = topCenter.y;
    thisNode.centerX = topCenter.x;

    // Rotate with the plank.
    var rotationAngle = 0;
    var rotationPoint = mvt.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( angle ) {
      var deltaAngle = rotationAngle - angle;
      rotationAngle = angle;
      thisNode.rotateAround( rotationPoint, deltaAngle );
    } );
  }


  return inherit( Node, PositionMarkerSetNode );
} );
