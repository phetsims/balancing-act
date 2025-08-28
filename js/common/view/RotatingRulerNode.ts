// Copyright 2013-2025, University of Colorado Boulder

/**
 * This type represents a ruler that sits on the bottom of the plank and
 * rotates as the plank rotates.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import { TReadOnlyProperty } from '../../../../axon/js/TReadOnlyProperty.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import RulerNode from '../../../../scenery-phet/js/RulerNode.js';
import ManualConstraint from '../../../../scenery/js/layout/constraints/ManualConstraint.js';
import Line from '../../../../scenery/js/nodes/Line.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import Plank from '../model/Plank.js';

const metersStringProperty = BalancingActStrings.metersStringProperty;

// constants
const RULER_HEIGHT = 50; // Empirically determined
const UNITS_FONT = new PhetFont( 14 ); // Empirically determined

class RotatingRulerNode extends Node {

  public constructor( plank: Plank, modelViewTransform: ModelViewTransform2, visibleProperty: TReadOnlyProperty<boolean> ) {
    super();

    // Set up the tick mark labels.
    const rulerLengthInModel = Plank.LENGTH - 0.5; // Take 1/2 meter off end of ruler so it doesn't exceed plank length.
    const numTickMarks = rulerLengthInModel * 4 + 1; // Tick marks every 1/4 meter.
    const tickMarkLabels = [];
    for ( let i = 0; i < numTickMarks; i++ ) {
      const labelValue = Math.abs( ( i - ( ( numTickMarks - 1 ) / 2 ) ) / 4 );
      if ( labelValue !== 0 ) {
        tickMarkLabels.push( labelValue );
      }
      else {
        tickMarkLabels.push( '' ); // No label at zero.
      }
    }

    // Create and add the ruler node.
    const rulerLength = modelViewTransform.modelToViewDeltaX( rulerLengthInModel );
    const majorTickMarkWidth = rulerLength / ( numTickMarks - 1 );

    const rulerNode = new RulerNode( rulerLength, RULER_HEIGHT, majorTickMarkWidth, tickMarkLabels, '', {
      backgroundFill: 'rgba( 236, 225, 113, 0.5)',
      majorTickFont: new PhetFont( 11 ),
      tickMarksOnBottom: false
    } );
    this.addChild( rulerNode );

    // Add a line in the center of the ruler to make it look like two separate rulers.
    this.addChild( new Line( rulerNode.centerX, 0, rulerNode.centerX, RULER_HEIGHT, { stroke: 'black' } ) );

    // Add a units label on each side.
    const metersStringMaxWidth = rulerNode.width / 2.1; // empirically determined to visually fit within "each ruler"
    const leftMetersText = new Text( metersStringProperty, {
      font: UNITS_FONT,
      centerX: rulerNode.width * 0.25,
      bottom: RULER_HEIGHT,
      maxWidth: metersStringMaxWidth
    } );
    const rightMetersText = new Text( metersStringProperty, {
      font: UNITS_FONT,
      centerX: rulerNode.width * 0.75,
      bottom: RULER_HEIGHT,
      maxWidth: metersStringMaxWidth
    } );
    this.addChild( leftMetersText );
    this.addChild( rightMetersText );

    ManualConstraint.create( this, [ leftMetersText, rightMetersText ], ( leftMetersTextProxy, rightMetersTextProxy ) => {
      leftMetersTextProxy.centerX = rulerNode.width * 0.25;
      rightMetersTextProxy.centerX = rulerNode.width * 0.75;
    } );

    // Observe visibility.
    visibleProperty.link( visible => {
      this.visible = visible;
    } );

    // Set initial position.
    const topCenter = modelViewTransform.modelToViewPosition( plank.bottomCenterPositionProperty.get() );
    this.top = topCenter.y;
    this.centerX = topCenter.x;

    // Rotate with the plank.
    let rulerRotationAngle = 0;
    const rotationPoint = modelViewTransform.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( angle => {
      const deltaAngle = rulerRotationAngle - angle;
      rulerRotationAngle = angle;
      this.rotateAround( rotationPoint, deltaAngle );
    } );
  }
}

balancingAct.register( 'RotatingRulerNode', RotatingRulerNode );

export default RotatingRulerNode;