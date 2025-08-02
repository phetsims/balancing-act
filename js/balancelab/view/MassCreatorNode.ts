// Copyright 2013-2024, University of Colorado Boulder

/**
 * Base class for PNodes that create masses in the model when clicked upon.
 *
 * @author John Blanco
 */

import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import ModelElementCreatorNode from './ModelElementCreatorNode.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const pattern0Value1UnitsStringProperty = BalancingActStrings.pattern0Value1UnitsStringProperty;

class MassCreatorNode extends ModelElementCreatorNode {

  /**
   * @param {BasicBalanceScreenView} screenView
   * @param {number} massValue
   * @param {boolean} showMassLabel
   * @param {EnumerationDeprecatedProperty} columnStateProperty
   * @param {Object} [options]
   */
  constructor( screenView, massValue, showMassLabel, columnStateProperty, options ) {
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

export default MassCreatorNode;