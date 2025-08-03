// Copyright 2014-2025, University of Colorado Boulder

/**
 * A Scenery node that defines a user interface element which allows the user
 * to select one of three possible ways in which the balance might behave -
 * tilt left, tilt right, or stay balanced.
 *
 * @author John Blanco
 */

import EnumerationProperty from '../../../../axon/js/EnumerationProperty.js';
import Property from '../../../../axon/js/Property.js';
import HBox from '../../../../scenery/js/layout/nodes/HBox.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Panel from '../../../../sun/js/Panel.js';
import plankBalanced_svg from '../../../images/plankBalanced_svg.js';
import plankTippedLeft_svg from '../../../images/plankTippedLeft_svg.js';
import plankTippedRight_svg from '../../../images/plankTippedRight_svg.js';
import balancingAct from '../../balancingAct.js';
import TiltPredictionState from '../model/TiltPredictionState.js';
import TiltPredictionSelectionPanel from './TiltPredictionSelectionPanel.js';

class TiltPredictionSelectorNode extends Node {

  // Property that tracks the selected prediction.
  public readonly tiltPredictionProperty: EnumerationProperty<TiltPredictionState>;

  public constructor( gameStateProperty: Property<string> ) {
    super();

    this.tiltPredictionProperty = new EnumerationProperty( TiltPredictionState.NONE );

    const panelContents = new HBox(
      {
        children: [
          // @ts-expect-error
          new TiltPredictionSelectionPanel( plankTippedLeft_svg, TiltPredictionState.TILT_DOWN_ON_LEFT_SIDE, this.tiltPredictionProperty, gameStateProperty ),
          // @ts-expect-error
          new TiltPredictionSelectionPanel( plankBalanced_svg, TiltPredictionState.STAY_BALANCED, this.tiltPredictionProperty, gameStateProperty ),
          // @ts-expect-error
          new TiltPredictionSelectionPanel( plankTippedRight_svg, TiltPredictionState.TILT_DOWN_ON_RIGHT_SIDE, this.tiltPredictionProperty, gameStateProperty )
        ], spacing: 5
      } );

    this.addChild( new Panel( panelContents, { cornerRadius: 5 } ) );
  }
}

balancingAct.register( 'TiltPredictionSelectorNode', TiltPredictionSelectorNode );

export default TiltPredictionSelectorNode;