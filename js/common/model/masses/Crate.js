// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import crateImage from '../../../../images/wood-crate-tall_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.6; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function Crate( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, crateImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'Crate', Crate );

inherit( ImageMass, Crate );
export default Crate;