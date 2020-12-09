// Copyright 2013-2020, University of Colorado Boulder

/**
 * Base class for PNodes that create masses in the model when clicked upon.
 *
 * @author John Blanco
 */

import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import balancingAct from '../../balancingAct.js';
import balancingActStrings from '../../balancingActStrings.js';
import ModelElementCreatorNode from './ModelElementCreatorNode.js';

const kgString = balancingActStrings.kg;
const pattern0Value1UnitsString = balancingActStrings.pattern0Value1Units;

class MassCreatorNode extends ModelElementCreatorNode {

  /**
   * @param {ModelViewTransform2} modelViewTransform
   * @param {number} massValue
   * @param {boolean} showMassLabel
   * @param {Object} [options]
   */
  constructor( modelViewTransform, massValue, showMassLabel, options ) {
    super( modelViewTransform, options );
    if ( showMassLabel ) {
      this.setCaption( StringUtils.format( pattern0Value1UnitsString, massValue, kgString ) );
    }
  }
}

balancingAct.register( 'MassCreatorNode', MassCreatorNode );

export default MassCreatorNode;