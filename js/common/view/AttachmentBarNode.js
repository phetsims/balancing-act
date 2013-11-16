// Copyright 2002-2013, University of Colorado Boulder

/**
 * View representation for the attachment bar which goes from the pivot point
 * to the bottom center of the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var Circle = require( 'SCENERY/nodes/Circle' );
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelObjectNode = require( 'BALANCING_ACT/common/view/ModelObjectNode' );

  function AttachmentBarNode( mvt, attachmentBar ) {
    ModelObjectNode.call( this, mvt, attachmentBar.shapeProperty, new Color( 230, 230, 230 ) );
    // Add the pivot point, which is represented as a circle with a point in the middle.
    this.addChild( new Circle( 5,
      {
        fill: 'rgb( 220, 220, 220 )',
        stroke: 'black',
        lineWidth: 1,
        center: mvt.modelToViewPosition( attachmentBar.getPivotPoint() )
      } ) );
    this.addChild( new Circle( 1,
      {
        fill: 'black',
        center: mvt.modelToViewPosition( attachmentBar.getPivotPoint() )
      } ) );
  }

  return inherit( ModelObjectNode, AttachmentBarNode, {
    //TODO prototypes
  } );
} );
