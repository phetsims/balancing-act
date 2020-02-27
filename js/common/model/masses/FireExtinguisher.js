// Copyright 2013-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import fireExtinguisherImage from '../../../../images/fire-extinguisher_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 5; // In kg
const HEIGHT = 0.5; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @param {Object} [options]
 * @constructor
 */
function FireExtinguisher( initialPosition, isMystery, options ) {
  ImageMass.call( this, MASS, fireExtinguisherImage, HEIGHT, initialPosition, isMystery, options );
  this.centerOfMassXOffset = 0.03; // Empirically determined.
}

balancingAct.register( 'FireExtinguisher', FireExtinguisher );

inherit( ImageMass, FireExtinguisher );
export default FireExtinguisher;