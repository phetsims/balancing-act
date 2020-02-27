// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import mediumRockImage from '../../../../images/rock-1_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.3; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function MediumRock( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, mediumRockImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'MediumRock', MediumRock );

inherit( ImageMass, MediumRock );
export default MediumRock;