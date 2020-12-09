// Copyright 2013-2020, University of Colorado Boulder


import trashCanImage from '../../../../images/trash-can_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.55; // In meters

class SmallTrashCan extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   */
  constructor( initialPosition, isMystery, options ) {
    super( MASS, trashCanImage, HEIGHT, initialPosition, isMystery, options );
  }
}

balancingAct.register( 'SmallTrashCan', SmallTrashCan );

export default SmallTrashCan;