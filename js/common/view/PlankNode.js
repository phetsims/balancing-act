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
    Node.call( this );
    var thisNode = this;
    thisNode.plank = plank;
    thisNode.mvt = mvt;

    // Create and position the plank.
    thisNode.plankNode = new Path( mvt.modelToViewShape( plank.unrotatedShape ), { fill: 'rgb( 243, 203, 127 )', stroke: 'black', lineThickness: 1 } );
    thisNode.addChild( thisNode.plankNode );

    // Create a layer for the tick mark highlight(s).
    thisNode.tickMarkHighlightLayer = new Node();
    thisNode.addChild( thisNode.tickMarkHighlightLayer );

    // Create and add the tick mark layer.
    var tickMarkLayer = new Node();
    for ( var i = 0; i < this.plank.tickMarks.length; i++ ) {
      var tickMarkStroke = NORMAL_TICK_MARK_LINE_WIDTH;
      if ( i % 2 === 0 ) {
        // Make some marks bold for easier placement of masses.
        // The 'if' clause can be tweaked to put marks in
        // different places.
        tickMarkStroke = BOLD_TICK_MARK_LINE_WIDTH;
      }
      tickMarkLayer.addChild( new Path( this.mvt.modelToViewShape( this.plank.tickMarks[ i ] ), { lineWidth: tickMarkStroke, stroke: 'black' } ) );
    }
    thisNode.plankNode.addChild( tickMarkLayer );

    // Track the rotational angle of the plank and update the node accordingly.
    var nodeRotation = 0;
    var rotationPoint = mvt.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( tiltAngle ) {
      thisNode.plankNode.rotateAround( rotationPoint, nodeRotation - tiltAngle );
      nodeRotation = tiltAngle;
      thisNode.updateHighlights();
    } );
  }

  return inherit( Node, PlankNode, {

    updateHighlights: function() {
      // Update the tick mark highlights by removing and redrawing them.
      var thisNode = this;
      thisNode.tickMarkHighlightLayer.removeAllChildren();
      thisNode.plank.activeDropLocations.forEach( function( location ) {
        var highlightShape = Shape.rect(
          thisNode.mvt.modelToViewX( thisNode.plank.pivotPoint.x + location ) - HIGHLIGHT_WIDTH / 2,
          thisNode.mvt.modelToViewY( thisNode.plank.unrotatedShape.bounds.minY ),
          HIGHLIGHT_WIDTH,
          thisNode.mvt.modelToViewDeltaY( thisNode.plank.THICKNESS ) );
        var tickMarkHighlight = new Path( highlightShape, { fill: HIGHLIGHT_COLOR } );
        tickMarkHighlight.rotateAround( thisNode.mvt.modelToViewPosition( thisNode.plank.pivotPoint ), -thisNode.plank.tiltAngle );
        thisNode.tickMarkHighlightLayer.addChild( tickMarkHighlight );
      } );
    }
  } );
} );
