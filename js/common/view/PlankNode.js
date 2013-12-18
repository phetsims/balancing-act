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
  var Shape = require( 'KITE/Shape' );

  // Constants
  var NORMAL_TICK_MARK_LINE_WIDTH = 1;
  var BOLD_TICK_MARK_LINE_WIDTH = 3;
  var HIGHLIGHT_COLOR = 'white';
  var HIGHLIGHT_WIDTH = 12;

  /**
   * @param mvt
   * @param plank
   * @constructor
   */
  function PlankNode( mvt, plank ) {
    ModelObjectNode.call( this, mvt, plank.shapeProperty, new Color( 243, 203, 127 ) );
    var thisNode = this;
    thisNode.plank = plank;
    thisNode.mvt = mvt;

    // Create a layer for the tick mark highlight(s).
    thisNode.tickMarkHighlightLayer = new Node();
    thisNode.addChild( thisNode.tickMarkHighlightLayer );

    // Create a layer for the tick marks and add the code to create and update them.
    thisNode.tickMarkLayer = new Node();
    thisNode.addChild( thisNode.tickMarkLayer );
    plank.shapeProperty.link( function() {
      thisNode.updateTickMarks( thisNode.tickMarkLayer, plank, mvt );
    } );
  }

  return inherit( ModelObjectNode, PlankNode, {
    updateTickMarks: function() {

      // Update the tick mark highlights by removing and redrawing them.
      this.tickMarkLayer.removeAllChildren();
      this.tickMarkHighlightLayer.removeAllChildren();
      if ( this.plank.dropHighlightPos !== null ) {
        var highlightShape = Shape.rect(
          this.mvt.modelToViewX( this.plank.pivotPoint.x + this.plank.dropHighlightPos ) - HIGHLIGHT_WIDTH / 2,
          this.mvt.modelToViewY( this.plank.unrotatedShape.bounds.minY ),
          HIGHLIGHT_WIDTH,
          this.mvt.modelToViewDeltaY( this.plank.THICKNESS ) );
        var tickMarkHighlight = new Path( highlightShape, { fill: HIGHLIGHT_COLOR } );
        tickMarkHighlight.rotateAround( this.mvt.modelToViewPosition( this.plank.pivotPoint ), -this.plank.tiltAngle );
        this.tickMarkHighlightLayer.addChild( tickMarkHighlight );
      }

      // Update the tick marks by removing them and redrawing them.
      this.tickMarkLayer.removeAllChildren();
      for ( var i = 0; i < this.plank.tickMarks.length; i++ ) {
        var tickMarkStroke = NORMAL_TICK_MARK_LINE_WIDTH;
        if ( i % 2 === 0 ) {
          // Make some marks bold for easier placement of masses.
          // The 'if' clause can be tweaked to put marks in
          // different places.
          tickMarkStroke = BOLD_TICK_MARK_LINE_WIDTH;
        }
        this.tickMarkLayer.addChild( new Path( this.mvt.modelToViewShape( this.plank.tickMarks[ i ] ), { lineWidth: tickMarkStroke, stroke: 'black' } ) );
      }
    }
  } );
} );
