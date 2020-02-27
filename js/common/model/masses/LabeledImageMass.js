// Copyright 2013-2020, University of Colorado Boulder

/**
 * This is an extension of the ImageMass type that adds a textual label.  This
 * was created in support of a request to label the mystery masses with
 * translatable labels.
 *
 * @author John Blanco
 */

import inherit from '../../../../../phet-core/js/inherit.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

/**
 * @param {Vector2} initialPosition
 * @param {Object} config - configuration information for the labeled image mass
 * @constructor
 */
function LabeledImageMass( initialPosition, config ) {
  ImageMass.call( this, config.massValue, config.image, config.height, initialPosition, config.isMystery, config );
  this.labelText = config.labelText;
}

balancingAct.register( 'LabeledImageMass', LabeledImageMass );

inherit( ImageMass, LabeledImageMass );
export default LabeledImageMass;