// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type represents a ruler that sits on the bottom of the plank and
 * rotates as the plank rotates.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RulerNode = require( 'SCENERY_PHET/RulerNode' );
  var Vector2 = require( 'DOT/Vector2' );

  // Strings
  var metersString = require( 'string!BALANCING_ACT/meters' );

  // Constants
  var RULER_HEIGHT = 50; // Empirically determined

  /**
   * @param {Plank} plank
   * @param {ModelViewTransform2} mvt model-view transform
   * @param {Property} visibleProperty
   * @constructor
   */
  function RotatingRulerNode( plank, mvt, visibleProperty ) {
    Node.call( this );
    var thisNode = this;

    // Set up the tick mark labels.
    var rulerLengthInModel = plank.LENGTH - 0.5; // Take 1/2 meter off end of ruler so it doesn't exceed plank length.
    var numTickMarks = rulerLengthInModel * 4 + 1; // Tick marks every 1/4 meter.
    var tickMarkLabels = [];
    for ( var i = 0; i < numTickMarks; i++ ) {
      var labelValue = Math.abs( ( i - ( ( numTickMarks - 1 ) / 2 ) ) / 4 );
      if ( labelValue !== 0 ) {
        tickMarkLabels.push( labelValue );
      }
      else {
        tickMarkLabels.push( '' ); // No label at zero.
      }
    }

    // Create and add the ruler node.
    var rulerLength = mvt.modelToViewDeltaX( rulerLengthInModel );
    var majorTickMarkWidth = rulerLength / ( numTickMarks - 1 );
    var rulerNode = new RulerNode( rulerLength, RULER_HEIGHT, majorTickMarkWidth, tickMarkLabels, '',
      {
        backgroundFill: 'rgba( 236, 225, 113, 0.5)',
        majorTickFont: new PhetFont( 11 )
      } );
    this.addChild( rulerNode );

    // Add a line in the center of the ruler to make it look like two separate rulers.
    thisNode.addChild( new Line( rulerNode.centerX, 0, rulerNode.centerX, RULER_HEIGHT, { stroke: 'black' } ) );

    // Observe visibility.
    visibleProperty.link( function( visible ) {
      thisNode.visible = visible;
    } );

    // Set initial position.
    var topCenter = mvt.modelToViewPosition( plank.bottomCenterLocation );
    this.top = topCenter.y;
    this.centerX = topCenter.x;

    // Rotate with the plank.
    var rulerRotationAngle = 0;
    var rotationPoint = mvt.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( angle ) {
      var deltaAngle = rulerRotationAngle - angle;
      rulerRotationAngle = angle;
      thisNode.rotateAround( rotationPoint, deltaAngle );
    } );
  }

  return inherit( Node, RotatingRulerNode );
} );



