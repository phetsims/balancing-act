// Copyright 2014-2020, University of Colorado Boulder


import televisionImage from '../../../../images/old-television_png.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';

// constants
const MASS = 10; // In kg
const HEIGHT = 0.5; // In meters

class Television extends ImageMass {

  /**
   * @param initialPosition
   * @param isMystery
   */
  constructor( initialPosition, isMystery ) {
    super( MASS, televisionImage, HEIGHT, initialPosition, isMystery );
  }
}

balancingAct.register( 'Television', Television );

export default Television;