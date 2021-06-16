[object Promise]

/**
 * A Scenery node that defines a user interface element which allows the user
 * to select one of three possible ways in which the balance might behave -
 * tilt left, tilt right, or stay balanced.
 *
 * @author John Blanco
 */

import Property from '../../../../axon/js/Property.js';
import HBox from '../../../../scenery/js/nodes/HBox.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Panel from '../../../../sun/js/Panel.js';
import plankBalancedImage from '../../../images/plank-balanced_png.js';
import plankTippedLeftImage from '../../../images/plank-tipped-left_png.js';
import plankTippedRightImage from '../../../images/plank-tipped-right_png.js';
import balancingAct from '../../balancingAct.js';
import TiltPredictionSelectionPanel from './TiltPredictionSelectionPanel.js';

class TiltPredictionSelectorNode extends Node {

  /**
   * @param gameStateProperty
   */
  constructor( gameStateProperty ) {
    super();

    // Property that tracks the selected prediction.  Valid values are 'none',
    // 'tiltDownOnLeftSide', 'stayBalanced', and 'tiltDownOnRightSide'.
    this.tiltPredictionProperty = new Property( 'none' ); // TODO: Enumeration

    const panelContents = new HBox(
      {
        children: [
          new TiltPredictionSelectionPanel( plankTippedLeftImage, 'tiltDownOnLeftSide', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankBalancedImage, 'stayBalanced', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankTippedRightImage, 'tiltDownOnRightSide', this.tiltPredictionProperty, gameStateProperty )
        ], spacing: 5
      } );

    this.addChild( new Panel( panelContents, { cornerRadius: 5 } ) );
  }
}

balancingAct.register( 'TiltPredictionSelectorNode', TiltPredictionSelectorNode );

export default TiltPredictionSelectorNode;