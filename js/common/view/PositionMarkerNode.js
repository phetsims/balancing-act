// Copyright 2013-2017, University of Colorado Boulder

/**
 * A marker that is used to mark a position on the plank.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Circle = require( 'SCENERY/nodes/Circle' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Line = require( 'SCENERY/nodes/Line' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );

  // constants
  const color = 'rgb( 255, 153, 0 )';
  const LINE_LENGTH = 14; // empirically chosen
  const CIRCLE_RADIUS = 3; // empirically chosen

  function PositionMarkerNode( labelText, options ) {
    Node.call( this );
    const line = new Line( 0, 0, 0, LINE_LENGTH, { stroke: color, lineWidth: 2, lineDash: [ 2, 2 ] } );
    this.addChild( line );
    const circle = new Circle( CIRCLE_RADIUS, { fill: color, centerX: 0, centerY: LINE_LENGTH } );
    this.addChild( circle );
    this.addChild( new RasterizedTextNode( labelText, { font: new PhetFont( { size: 12, weight: 'bold' } ) }, { centerX: 0, top: circle.bottom } ) );
    this.mutate( options );
  }

  balancingAct.register( 'PositionMarkerNode', PositionMarkerNode );

  return inherit( Node, PositionMarkerNode );
} );

