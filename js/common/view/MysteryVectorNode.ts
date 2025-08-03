// Copyright 2013-2025, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate position but that has a fixed size and is labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import PositionedVector from '../model/PositionedVector.js';

// constants
const FONT = new PhetFont( { size: 36 } );
const Y_DIST_FROM_POSITION = 3; // In screen units.

class MysteryVectorNode extends Node {
  private readonly disposeMysteryVectorNode: () => void;

  public constructor( positionedVectorProperty: TReadOnlyProperty<PositionedVector>, visibleProperty: TReadOnlyProperty<boolean>, modelViewTransform: ModelViewTransform2 ) {

    super( {
      visibleProperty: visibleProperty
    } );

    // Create the 'mystery vector' node and add it as a child.
    this.addChild( new Text( BalancingActStrings.unknownMassLabelStringProperty, { font: FONT, fill: 'white', stroke: 'black', lineWidth: 1 } ) );

    // Follow the position as it changes
    const positionHandler = ( positionedVector: PositionedVector ) => {
      this.centerX = modelViewTransform.modelToViewX( positionedVector.origin.x );
      this.top = modelViewTransform.modelToViewY( positionedVector.origin.y ) + Y_DIST_FROM_POSITION;
    };
    positionedVectorProperty.link( positionHandler );

    // Clean up any linkages that could cause memory leaks.
    this.disposeMysteryVectorNode = () => {
      positionedVectorProperty.unlink( positionHandler );
    };
  }

  public override dispose(): void {
    this.disposeMysteryVectorNode();
    super.dispose();
  }
}

balancingAct.register( 'MysteryVectorNode', MysteryVectorNode );

export default MysteryVectorNode;