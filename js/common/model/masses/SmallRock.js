// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import smallRockImage from '../../../../images/rock-4_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.25; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function SmallRock( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, smallRockImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'SmallRock', SmallRock );

inherit( ImageMass, SmallRock );
export default SmallRock;