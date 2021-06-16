// Copyright 2014-2021, University of Colorado Boulder


import cinderBlockImage from '../../../../images/cinder-block_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 12; // In kg
const HEIGHT = 0.2; // In meters

class CinderBlock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, cinderBlockImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'CinderBlock', CinderBlock );

export default CinderBlock;