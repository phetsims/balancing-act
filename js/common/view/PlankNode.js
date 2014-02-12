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

    // Create and position the plank.
    var plankNode = new Path( mvt.modelToViewShape( plank.unrotatedShape ), { fill: 'rgb( 243, 203, 127 )', stroke: 'black', lineThickness: 1 } );
    thisNode.addChild( plankNode );

    // Create a layer for the tick mark highlight(s).
    var tickMarkHighlightLayer = new Node();
    plankNode.addChild( tickMarkHighlightLayer );

    // Function for updating the highlights
    function updateHighlights() {
      // Update the tick mark highlights by removing and redrawing them.
      tickMarkHighlightLayer.removeAllChildren();
      plank.activeDropLocations.forEach( function( location ) {
        var highlightShape = Shape.rect(
          mvt.modelToViewX( location ) - HIGHLIGHT_WIDTH / 2,
          mvt.modelToViewY( plank.unrotatedShape.bounds.minY ),
          HIGHLIGHT_WIDTH,
          mvt.modelToViewDeltaY( plank.THICKNESS ) );
        var tickMarkHighlight = new Path( highlightShape, { fill: HIGHLIGHT_COLOR } );
        tickMarkHighlightLayer.addChild( tickMarkHighlight );
      } );
    }

    // Update the tick mark highlights as the active drop locations change.
    plank.activeDropLocations.addItemAddedListener( updateHighlights );
    plank.activeDropLocations.addItemRemovedListener( updateHighlights );

    // Create and add the tick mark layer.
    var tickMarkLayer = new Node();
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
    plankNode.addChild( tickMarkLayer );

    // Track the rotational angle of the plank and update this node accordingly.
    var nodeRotation = 0;
    var rotationPoint = mvt.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( tiltAngle ) {
      plankNode.rotateAround( rotationPoint, nodeRotation - tiltAngle );
      nodeRotation = tiltAngle;
    } );
  }

  return inherit( Node, PlankNode );
} );
