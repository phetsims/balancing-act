// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import sodaBottleImage from '../../../../images/soda-bottle_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 2; // In kg
const HEIGHT = 0.4; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function SodaBottle( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, sodaBottleImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'SodaBottle', SodaBottle );

inherit( ImageMass, SodaBottle );
export default SodaBottle;