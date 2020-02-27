// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import barrelImage from '../../../../images/barrel_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 90; // In kg
const HEIGHT = 0.75; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function Barrel( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, barrelImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'Barrel', Barrel );

inherit( ImageMass, Barrel );
export default Barrel;