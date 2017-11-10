// Copyright 2013-2017, University of Colorado Boulder

/**
 * A marker that is used to mark a position on the plank.
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var Circle = require( 'SCENERY/nodes/Circle' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );

  // constants
  var color = 'rgb( 255, 153, 0 )';
  var LINE_LENGTH = 14; // empirically chosen
  var CIRCLE_RADIUS = 3; // empirically chosen

  function PositionMarkerNode( labelText, options ) {
    Node.call( this );
    var line = new Line( 0, 0, 0, LINE_LENGTH, { stroke: color, lineWidth: 2, lineDash: [ 2, 2 ] } );
    this.addChild( line );
    var circle = new Circle( CIRCLE_RADIUS, { fill: color, centerX: 0, centerY: LINE_LENGTH } );
    this.addChild( circle );
    this.addChild( new RasterizedTextNode( labelText, { font: new PhetFont( { size: 12, weight: 'bold' } ) }, { centerX: 0, top: circle.bottom } ) );
    this.mutate( options );
  }

  balancingAct.register( 'PositionMarkerNode', PositionMarkerNode );

  return inherit( Node, PositionMarkerNode );
} );

