// Copyright 2013-2024, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate position but that has a fixed size and is labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco
 */

import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';

const unknownMassLabelString = BalancingActStrings.unknownMassLabelStringProperty;

// constants
const FONT = new PhetFont( { size: 36 } );
const Y_DIST_FROM_POSITION = 3; // In screen units.

class MysteryVectorNode extends Node {

  /**
   * @param positionedVectorProperty
   * @param visibleProperty
   * @param modelViewTransform
   */
  constructor( positionedVectorProperty, visibleProperty, modelViewTransform ) {

    super( {
      visibleProperty: visibleProperty
    } );

    // Create the 'mystery vector' node and add it as a child.
    this.addChild( new Text( unknownMassLabelString, { font: FONT, fill: 'white', stroke: 'black', lineWidth: 1 } ) );

    // Follow the position as it changes
    const positionHandler = positionedVector => {
      this.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
      this.top = modelViewTransform.modelToViewY( positionedVector.origin.y ) + Y_DIST_FROM_POSITION;
    };
    positionedVectorProperty.link( positionHandler );

    // Clean up any linkages that could cause memory leaks.
    this.disposeMysteryVectorNode = () => {
      positionedVectorProperty.unlink( positionHandler );
    };
  }

  /**
   * @public
   * @override
   */
  dispose() {
    this.disposeMysteryVectorNode();
    super.dispose();
  }

}

balancingAct.register( 'MysteryVectorNode', MysteryVectorNode );

export default MysteryVectorNode;