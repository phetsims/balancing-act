// Copyright 2002-2013, University of Colorado Boulder

/**
 * The level indicator shows triangles to the left and right of the plank to
 * help indicate whether the plank is at exactly 0 degrees.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Plank = require( 'BALANCING_ACT/common/model/Plank' );
  var Shape = require( 'KITE/Shape' );
  var Transform3 = require( 'DOT/Transform3' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var PLANK_TO_INDICATOR_SPACING = 5;
  var LEVEL_FILL_COLOR = 'rgb( 173, 255, 47 )';
  var NON_LEVEL_FILL_COLOR = 'rgb( 230, 230, 230 )';

  function LevelIndicatorNode( mvt, plank ) {
    Node.call( this );
    var thisNode = this;

    // Locations for left and right edge
    var leftEdgeOfPlank = mvt.modelToViewPosition( new Vector2( plank.pivotPoint.x - Plank.LENGTH / 2, plank.getPlankSurfaceCenter().y ) );
    var rightEdgeOfPlank = mvt.modelToViewPosition( new Vector2( plank.pivotPoint.x + Plank.LENGTH / 2, plank.getPlankSurfaceCenter().y ) );

    // Draw a sort of arrow head shape.
    var leftIndicatorShape = new Shape().
      moveTo( 0, 0 ).
      lineTo( -25, -10 ).
      lineTo( -20, 0 ).
      lineTo( -25, 10 ).
      close();

    //Create paths for left and right side
    var leftLevelIndicatorNode = new Path( leftIndicatorShape,
      {
        stroke: 'black',
        right: leftEdgeOfPlank.x - PLANK_TO_INDICATOR_SPACING,
        centerY: leftEdgeOfPlank.y
      } );
    thisNode.addChild( leftLevelIndicatorNode );

    var reflectTransform = new Transform3( Matrix3.scaling( -1, 1 ) );
    var rightIndicatorShape = reflectTransform.transformShape( leftIndicatorShape );
    var rightLevelIndicatorNode = new Path( rightIndicatorShape,
      {
        stroke: 'black',
        left: rightEdgeOfPlank.x + PLANK_TO_INDICATOR_SPACING,
        centerY: rightEdgeOfPlank.y
      } );
    thisNode.addChild( rightLevelIndicatorNode );

    //Highlight if the plank is level
    plank.tiltAngleProperty.link( function( tiltAngle ) {
      if ( Math.abs( tiltAngle ) < Math.PI / 1000 ) {
        leftLevelIndicatorNode.fill = LEVEL_FILL_COLOR;
        rightLevelIndicatorNode.fill = LEVEL_FILL_COLOR;
      }
      else {
        leftLevelIndicatorNode.fill = NON_LEVEL_FILL_COLOR;
        rightLevelIndicatorNode.fill = NON_LEVEL_FILL_COLOR;
      }
    } );
  }

  return inherit( Node, LevelIndicatorNode );
} );


