// Copyright 2014-2024, University of Colorado Boulder

/**
 * A Scenery node that defines a user interface element which allows the user
 * to select one of three possible ways in which the balance might behave -
 * tilt left, tilt right, or stay balanced.
 *
 * @author John Blanco
 */

import Property from '../../../../axon/js/Property.js';
import { HBox, Node } from '../../../../scenery/js/imports.js';
import Panel from '../../../../sun/js/Panel.js';
import plankBalanced_svg from '../../../images/plankBalanced_svg.js';
import plankTippedLeft_svg from '../../../images/plankTippedLeft_svg.js';
import plankTippedRight_svg from '../../../images/plankTippedRight_svg.js';
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
    //TODO https://github.com/phetsims/balancing-act/issues/142 This should be an EnumerationProperty
    this.tiltPredictionProperty = new Property( 'none' );

    const panelContents = new HBox(
      {
        children: [
          new TiltPredictionSelectionPanel( plankTippedLeft_svg, 'tiltDownOnLeftSide', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankBalanced_svg, 'stayBalanced', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankTippedRight_svg, 'tiltDownOnRightSide', this.tiltPredictionProperty, gameStateProperty )
        ], spacing: 5
      } );

    this.addChild( new Panel( panelContents, { cornerRadius: 5 } ) );
  }
}

balancingAct.register( 'TiltPredictionSelectorNode', TiltPredictionSelectorNode );

export default TiltPredictionSelectorNode;