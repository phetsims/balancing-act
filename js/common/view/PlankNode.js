// Copyright 2002-2013, University of Colorado Boulder

/**
 * View representation for the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var Shape = require( 'KITE/Shape' );
  var Vector2 = require( 'DOT/Vector2' );

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
    //REVIEW: Consider using a Scenery Rectangle here, constructed from the plank's bounds?
    var plankNode = new Path( mvt.modelToViewShape( plank.unrotatedShape ), { fill: 'rgb( 243, 203, 127 )', stroke: 'black', lineThickness: 1 } );
    thisNode.addChild( plankNode );

    // Create a layer for the tick mark highlight(s).
    var tickMarkHighlightLayer = new Node();
    plankNode.addChild( tickMarkHighlightLayer );

    // Function for updating the highlights
    function updateHighlights() {
      // Update the tick mark highlights by removing and redrawing them.
      //REVIEW: Removing all of them and recreating them generally has a big performance penalty, especially with the current Scenery version.
      //REVIEW: Noticed as slow on Nexus 7, and confirmed as a hotspot on Chrome (desktop) profiling
      tickMarkHighlightLayer.removeAllChildren();
      plank.activeDropLocations.forEach( function( location ) {
        //REVIEW: Using Rectangle instead of a Shape and a Path is generally better (faster to draw, less overhead)
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
    //REVIEW: Does this cause the updateHighlights() hotspot to be called more than once per frame (usually one add and remove?)
    plank.activeDropLocations.addItemAddedListener( updateHighlights );
    plank.activeDropLocations.addItemRemovedListener( updateHighlights );

    // Create and add the tick mark layer.
    var tickMarkLayer = new Node();
    var tickMarkShape = new Shape();
    tickMarkShape.moveTo( 0, 0 );
    tickMarkShape.lineTo( 0, mvt.modelToViewDeltaY( Plank.prototype.THICKNESS ) );
    var plankLeftEdge = new Vector2( mvt.modelToViewX( plank.getPlankSurfaceCenter().x - Plank.prototype.LENGTH / 2 ),
      mvt.modelToViewY( plank.getPlankSurfaceCenter().y ) );
    var tickMarkDeltaX = mvt.modelToViewDeltaX( Plank.prototype.INTER_SNAP_TO_MARKER_DISTANCE );
    for ( var i = 0; i < Plank.prototype.NUM_SNAP_TO_LOCATIONS; i++ ) {
      var tickMarkStroke = NORMAL_TICK_MARK_LINE_WIDTH;
      if ( i % 2 === 0 ) {
        // Make some marks bold for easier placement of masses.
        // The 'if' clause can be tweaked to put marks in
        // different places.
        tickMarkStroke = BOLD_TICK_MARK_LINE_WIDTH;
      }
      tickMarkLayer.addChild( new Path( tickMarkShape,
        {
          centerX: plankLeftEdge.x + ( i + 1 ) * tickMarkDeltaX,
          top: plankLeftEdge.y,
          lineWidth: tickMarkStroke,
          stroke: 'black'
        } ) );
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
