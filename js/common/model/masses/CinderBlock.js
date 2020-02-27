// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import cinderBlockImage from '../../../../images/cinder-block_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 12; // In kg
const HEIGHT = 0.2; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function CinderBlock( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, cinderBlockImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'CinderBlock', CinderBlock );

inherit( ImageMass, CinderBlock );
export default CinderBlock;