// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import flowerPotImage from '../../../../images/flower-pot_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.55; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function FlowerPot( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, flowerPotImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'FlowerPot', FlowerPot );

inherit( ImageMass, FlowerPot );
export default FlowerPot;