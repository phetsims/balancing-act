// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import puppyImage from '../../../../images/puppy_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 6; // In kg
const HEIGHT = 0.6; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function Puppy( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, puppyImage, HEIGHT, initialPosition, isMystery );
  this.centerOfMassXOffset = 0.03; // Empirically determined.
}

balancingAct.register( 'Puppy', Puppy );

inherit( ImageMass, Puppy );
export default Puppy;