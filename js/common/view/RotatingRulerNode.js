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
  var Node = require( 'SCENERY/nodes/Node' );
  var RulerNode = require( 'SCENERY_PHET/RulerNode' );
  var Vector2 = require( 'DOT/Vector2' );

  // Strings
  var metersString = require( 'string!BALANCING_ACT/meters' );

  /**
   * @param {Plank} plank
   * @param {ModelViewTransform2} mvt model-view transform
   * @param {Property} visibleProperty
   * @constructor
   */
  function RotatingRulerNode( plank, mvt, visibleProperty ) {
    Node.call( this );
    var thisNode = this;
    var rulerWidth = mvt.modelToViewDeltaX( plank.LENGTH );
    var majorTickMarkWidth = rulerWidth / 18;
    this.addChild( new RulerNode( rulerWidth, 30, majorTickMarkWidth, metersString,
      {
      } ) );

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

      console.log( '----------------------------------' );
      console.log( 'rotation event, angle = ' + angle + ', or ' + angle / Math.PI + '*PI' );
      console.log( 'deltaAngle = ' + deltaAngle );
      thisNode.rotateAround( rotationPoint, deltaAngle );
    } );
  }

  return inherit( Node, RotatingRulerNode, {
    //TODO prototypes
  } );
} );



