// Copyright 2002-2013, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate location but that has a fixed size and is labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Text = require( 'SCENERY/nodes/Text' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var unknownMassLabelString = require( 'string!BALANCING_ACT/unknownMassLabel' );

  // Constants
  var FONT = new PhetFont( { size: 36 } );
  var Y_DIST_FROM_POSITION = 3; // In screen units.

  /**
   * @param positionedVectorProperty
   * @param visibilityProperty
   * @param mvt Model-view transform
   * @constructor
   */
  function MysteryVectorNode( positionedVectorProperty, visibilityProperty, mvt ) {
    Node.call( this );
    var thisNode = this;

    // Create the 'mystery vector' node and add it as a child.
    thisNode.addChild( new Text( unknownMassLabelString, { font: FONT, fill: 'white', stroke: 'black', lineWidth: 1} ) );

    // Follow the position as it changes
    positionedVectorProperty.link( function( positionedVector ) {
      thisNode.centerX = mvt.modelToViewX( positionedVector.origin.x );
      thisNode.top = mvt.modelToViewY( positionedVector.origin.y ) + Y_DIST_FROM_POSITION;
    } );

    // Control visibility
    visibilityProperty.link( function( visible ) {
      thisNode.visible = visible;
    } );
  }

  return inherit( Node, MysteryVectorNode );
} );
