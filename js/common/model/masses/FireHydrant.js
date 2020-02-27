// Copyright 2014-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import fireHydrantImage from '../../../../images/fire-hydrant_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 60; // In kg
const HEIGHT = 0.75; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function FireHydrant( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, fireHydrantImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'FireHydrant', FireHydrant );

inherit( ImageMass, FireHydrant );
export default FireHydrant;