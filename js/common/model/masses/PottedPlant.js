// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import pottedPlantImage from '../../../../images/potted-plant_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.65; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function PottedPlant( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, pottedPlantImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'PottedPlant', PottedPlant );

inherit( ImageMass, PottedPlant );
export default PottedPlant;