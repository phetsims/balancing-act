// Copyright 2013-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import tinyRockImage from '../../../../images/tiny-rock_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 4; // In kg
const HEIGHT = 0.09; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function TinyRock( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, tinyRockImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'TinyRock', TinyRock );

inherit( ImageMass, TinyRock );
export default TinyRock;