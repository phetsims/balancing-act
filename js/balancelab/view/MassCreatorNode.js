// Copyright 2013-2020, University of Colorado Boulder

/**
 * Base class for PNodes that create masses in the model when clicked upon.
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import balancingActStrings from '../../balancing-act-strings.js';
import balancingAct from '../../balancingAct.js';
import ModelElementCreatorNode from './ModelElementCreatorNode.js';

const kgString = balancingActStrings.kg;
const pattern0Value1UnitsString = balancingActStrings.pattern0Value1Units;

/**
 * @param {ModelViewTransform2} modelViewTransform
 * @param {number} massValue
 * @param {boolean} showMassLabel
 * @param {Object} [options]
 * @constructor
 */
function MassCreatorNode( modelViewTransform, massValue, showMassLabel, options ) {
  ModelElementCreatorNode.call( this, modelViewTransform, options );
  if ( showMassLabel ) {
    this.setCaption( StringUtils.format( pattern0Value1UnitsString, massValue, kgString ) );
  }
}

balancingAct.register( 'MassCreatorNode', MassCreatorNode );

inherit( ModelElementCreatorNode, MassCreatorNode );
export default MassCreatorNode;