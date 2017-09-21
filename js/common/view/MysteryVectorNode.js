// Copyright 2013-2017, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate location but that has a fixed size and is labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );
  var unknownMassLabelString = require( 'string!BALANCING_ACT/unknownMassLabel' );

  // constants
  var FONT = new PhetFont( { size: 36 } );
  var Y_DIST_FROM_POSITION = 3; // In screen units.

  /**
   * @param positionedVectorProperty
   * @param visibilityProperty
   * @param modelViewTransform Model-view transform
   * @constructor
   */
  function MysteryVectorNode( positionedVectorProperty, visibilityProperty, modelViewTransform ) {
    Node.call( this );
    var self = this;

    // Create the 'mystery vector' node and add it as a child.
    self.addChild( new Text( unknownMassLabelString, { font: FONT, fill: 'white', stroke: 'black', lineWidth: 1 } ) );

    // Follow the position as it changes
    positionedVectorProperty.link( function( positionedVector ) {
      self.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
      self.top = modelViewTransform.modelToViewY( positionedVector.origin.y ) + Y_DIST_FROM_POSITION;
    } );

    // Control visibility
    visibilityProperty.link( function( visible ) {
      self.visible = visible;
    } );
  }

  balancingAct.register( 'MysteryVectorNode', MysteryVectorNode );

  return inherit( Node, MysteryVectorNode );
} );
