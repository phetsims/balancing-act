// Copyright 2013-2025, University of Colorado Boulder

/**
 * A marker that is used to mark a position on the plank.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Circle from '../../../../scenery/js/nodes/Circle.js';
import Line from '../../../../scenery/js/nodes/Line.js';
import Node, { NodeOptions } from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';

// constants
const color = 'rgb( 255, 153, 0 )';
const LINE_LENGTH = 14; // empirically chosen
const CIRCLE_RADIUS = 3;

class PositionMarkerNode extends Node {

  public constructor( labelText: string, options?: NodeOptions ) {
    super();
    const line = new Line( 0, 0, 0, LINE_LENGTH, { stroke: color, lineWidth: 2, lineDash: [ 2, 2 ] } );
    this.addChild( line );
    const circle = new Circle( CIRCLE_RADIUS, { fill: color, centerX: 0, centerY: LINE_LENGTH } );
    this.addChild( circle );
    this.addChild( new Text( labelText, {
      font: new PhetFont( {
        size: 12,
        weight: 'bold'
      } ),
      centerX: 0,
      top: circle.bottom
    } ) );
    this.mutate( options );
  }
}

balancingAct.register( 'PositionMarkerNode', PositionMarkerNode );

export default PositionMarkerNode;