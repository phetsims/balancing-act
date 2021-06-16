// Copyright 2014-2021, University of Colorado Boulder


import bigRockImage from '../../../../images/rock-6_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 45; // In kg
const HEIGHT = 0.35; // In meters

class BigRock extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, bigRockImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'BigRock', BigRock );

export default BigRock;