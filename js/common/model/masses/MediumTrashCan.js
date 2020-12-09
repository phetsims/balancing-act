// Copyright 2013-2020, University of Colorado Boulder


import trashCanImage from '../../../../images/trash-can_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 30; // In kg
const HEIGHT = 0.65; // In meters

class MediumTrashCan extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'MediumTrashCan', MediumTrashCan );

export default MediumTrashCan;