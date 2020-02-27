// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import bigRockImage from '../../../../images/rock-6_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.35; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function BigRock( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, bigRockImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'BigRock', BigRock );

inherit( ImageMass, BigRock );
export default BigRock;