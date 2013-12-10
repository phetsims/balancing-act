// Copyright 2002-2013, University of Colorado Boulder

/**
 * View representation for the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelObjectNode = require( 'BALANCING_ACT/common/view/ModelObjectNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );

  // Constants
  var NORMAL_TICK_MARK_LINE_WIDTH = 1;
  var BOLD_TICK_MARK_LINE_WIDTH = 3;

  /**
   * @param mvt
   * @param plank
   * @constructor
   */
  function PlankNode( mvt, plank ) {
    ModelObjectNode.call( this, mvt, plank.shapeProperty, new Color( 243, 203, 127 ) );
    var thisNode = this;

    // Create a layer for the tick marks and add the code to create and update them.
    var tickMarkLayer = new Node();
    thisNode.addChild( tickMarkLayer );
    plank.shapeProperty.link( function() {
      thisNode.updateTickMarks( tickMarkLayer, plank, mvt );
    } );
  }

  return inherit( ModelObjectNode, PlankNode, {
    updateTickMarks: function( tickMarkLayer, plank, mvt ) {
      // TODO: Initially ported only the tick marks, not the highlights.  Will need to add those later in some capacity.
      // Update the tick marks by removing them and redrawing them.
      tickMarkLayer.removeAllChildren();
      for ( var i = 0; i < plank.tickMarks.length; i++ ) {
        var tickMarkStroke = NORMAL_TICK_MARK_LINE_WIDTH;
        if ( i % 2 === 0 ) {
          // Make some marks bold for easier placement of masses.
          // The 'if' clause can be tweaked to put marks in
          // different places.
          tickMarkStroke = BOLD_TICK_MARK_LINE_WIDTH;
        }
        tickMarkLayer.addChild( new Path( mvt.modelToViewShape( plank.tickMarks[ i ] ), { lineWidth: tickMarkStroke, stroke: 'black' } ) );
      }
    }
  } );
} );
