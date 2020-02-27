// Copyright 2013-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import trashCanImage from '../../../../images/trash-can_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.55; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @param {Object} [options]
 * @constructor
 */
function SmallTrashCan( initialPosition, isMystery, options ) {
  ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery, options );
}

balancingAct.register( 'SmallTrashCan', SmallTrashCan );

inherit( ImageMass, SmallTrashCan );
export default SmallTrashCan;