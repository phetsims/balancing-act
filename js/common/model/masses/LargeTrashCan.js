// Copyright 2013-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import trashCanImage from '../../../../images/trash-can_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 40; // In kg
const HEIGHT = 0.8; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function LargeTrashCan( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'LargeTrashCan', LargeTrashCan );

inherit( ImageMass, LargeTrashCan );
export default LargeTrashCan;