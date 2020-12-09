// Copyright 2014-2020, University of Colorado Boulder


import crateImage from '../../../../images/wood-crate-tall_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.6; // In meters

class Crate extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, crateImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Crate', Crate );

export default Crate;