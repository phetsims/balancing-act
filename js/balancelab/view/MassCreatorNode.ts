// Copyright 2013-2024, University of Colorado Boulder

/**
 * Base class for PNodes that create masses in the model when clicked upon.
 *
 * @author John Blanco
 */

import EnumerationDeprecatedProperty from '../../../../axon/js/EnumerationDeprecatedProperty.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import ModelElementCreatorNode, { ModelElementCreatorNodeOptions } from './ModelElementCreatorNode.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const pattern0Value1UnitsStringProperty = BalancingActStrings.pattern0Value1UnitsStringProperty;

export default class MassCreatorNode extends ModelElementCreatorNode {

  public constructor( screenView: BasicBalanceScreenView, massValue: number, showMassLabel: boolean, columnStateProperty: EnumerationDeprecatedProperty, options?: ModelElementCreatorNodeOptions ) {
    super( screenView, columnStateProperty, options );
    if ( showMassLabel ) {
      this.setCaption( new PatternStringProperty( pattern0Value1UnitsStringProperty, {
        0: massValue,
        1: kgStringProperty
      }, {
        formatNames: [ '0', '1' ]
      } ) );
    }
  }
}

balancingAct.register( 'MassCreatorNode', MassCreatorNode );