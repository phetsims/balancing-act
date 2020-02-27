// Copyright 2013-2020, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate location but that has a fixed size and is labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingActStrings from '../../balancing-act-strings.js';
import balancingAct from '../../balancingAct.js';

const unknownMassLabelString = balancingActStrings.unknownMassLabel;

// constants
const FONT = new PhetFont( { size: 36 } );
const Y_DIST_FROM_POSITION = 3; // In screen units.

/**
 * @param positionedVectorProperty
 * @param visibilityProperty
 * @param modelViewTransform Model-view transform
 * @constructor
 */
function MysteryVectorNode( positionedVectorProperty, visibilityProperty, modelViewTransform ) {
  Node.call( this );
  const self = this;

  // Create the 'mystery vector' node and add it as a child.
  self.addChild( new Text( unknownMassLabelString, { font: FONT, fill: 'white', stroke: 'black', lineWidth: 1 } ) );

  // Follow the position as it changes
  positionedVectorProperty.link( function( positionedVector ) {
    self.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
    self.top = modelViewTransform.modelToViewY( positionedVector.origin.y ) + Y_DIST_FROM_POSITION;
  } );

  // Control visibility
  visibilityProperty.link( function( visible ) {
    self.visible = visible;
  } );
}

balancingAct.register( 'MysteryVectorNode', MysteryVectorNode );

inherit( Node, MysteryVectorNode );
export default MysteryVectorNode;