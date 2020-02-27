// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import televisionImage from '../../../../images/old-television_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.5; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function Television( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, televisionImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'Television', Television );

inherit( ImageMass, Television );
export default Television;