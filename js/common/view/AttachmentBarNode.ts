// Copyright 2013-2025, University of Colorado Boulder

/**
 * View representation for the attachment bar which goes from the pivot point
 * to the bottom center of the plank.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import Circle from '../../../../scenery/js/nodes/Circle.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import balancingAct from '../../balancingAct.js';
import Plank from '../model/Plank.js';

// constants
const PIVOT_RADIUS = 5;
const ATTACHMENT_BAR_WIDTH = PIVOT_RADIUS * 1.5;

class AttachmentBarNode extends Node {

  public constructor( modelViewTransform: ModelViewTransform2, plank: Plank ) {
    super();
    const pivotPointPosInView = modelViewTransform.modelToViewPosition( plank.pivotPoint );

    // Add the bar, which goes from the pivot point to the bottom of the plank.
    const attachmentBarLength = modelViewTransform.modelToViewDeltaY(
      plank.bottomCenterPositionProperty.get().y - plank.pivotPoint.y
    );
    const attachmentBar = new Rectangle( pivotPointPosInView.x - ATTACHMENT_BAR_WIDTH / 2, pivotPointPosInView.y, ATTACHMENT_BAR_WIDTH,
      attachmentBarLength, 0, 0, { fill: 'rgb( 200, 200, 200 )', stroke: 'rgb( 50, 50, 50 )' } );
    this.addChild( attachmentBar );

    // Rotate the bar as the plank tilts.
    let nodeRotation = 0;
    plank.tiltAngleProperty.link( angle => {
      attachmentBar.rotateAround( pivotPointPosInView, nodeRotation - angle );
      nodeRotation = angle;
    } );

    // Add the pivot point, which is represented as a circle with a point in the middle.
    this.addChild( new Circle( PIVOT_RADIUS,
      {
        fill: 'rgb( 220, 220, 220 )',
        stroke: 'black',
        lineWidth: 1,
        center: pivotPointPosInView
      } ) );
    this.addChild( new Circle( 1,
      {
        fill: 'black',
        center: pivotPointPosInView
      } ) );
  }
}

balancingAct.register( 'AttachmentBarNode', AttachmentBarNode );

export default AttachmentBarNode;