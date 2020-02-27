// Copyright 2013-2020, University of Colorado Boulder


import inherit from '../../../../../phet-core/js/inherit.js';
import trashCanImage from '../../../../images/trash-can_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.65; // In meters

/**
 * @param initialPosition
 * @param isMystery
 * @constructor
 */
function MediumTrashCan( initialPosition, isMystery ) {
  ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
}

balancingAct.register( 'MediumTrashCan', MediumTrashCan );

inherit( ImageMass, MediumTrashCan );
export default MediumTrashCan;