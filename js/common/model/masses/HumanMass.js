// Copyright 2013-2024, University of Colorado Boulder

/**
 * Base type for a model element that represents a person, a.k.a. a human, in
 * the model.  The human can be grabbed from a toolbox and placed on a
 * balance, so there needs to be a standing and sitting image representation.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Multilink from '../../../../../axon/js/Multilink.js';
import balancingAct from '../../../balancingAct.js';
import PreferencesModelSingleton from '../../PreferencesModelSingleton.js';
import ImageMass from '../ImageMass.js';

class HumanMass extends ImageMass {

  /**
   * @param {HumanTypeEnum} humanType
   * @param {number} massValue
   * @param {number} standingHeight
   * @param {number} sittingHeight
   * @param {Vector2} initialPosition
   * @param {number} sittingCenterOfMassXOffset
   * @param {boolean} isMystery
   */
  constructor( humanType, massValue, standingHeight, sittingHeight, initialPosition, sittingCenterOfMassXOffset, isMystery ) {

    super( massValue, humanType.standingImageProperty.value, standingHeight, initialPosition, isMystery );

    // Monitor the 'onPlank' property and update the image as changes occur.
    const imageUpdateMultilink = Multilink.multilink(
      [ this.onPlankProperty, PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty,
        humanType.standingImageProperty, humanType.sittingImageProperty ],
      ( onPlank, portrayal, standingImage, sittingImage ) => {
      if ( onPlank ) {
        const xPosition = this.positionProperty.get().x;
        this.centerOfMassXOffset = sittingCenterOfMassXOffset * ( xPosition < 0 ? -1 : 1 );
        this.heightProperty.set( sittingHeight );
        this.reverseImage = xPosition < 0;
        this.imageProperty.set( sittingImage );
      }
      else {
        this.centerOfMassXOffset = 0;
        this.heightProperty.set( standingHeight );
        this.reverseImage = false;
        this.imageProperty.set( standingImage );
      }
    } );

    this.disposeHumanMass = () => {
      imageUpdateMultilink.dispose();
    };
  }

  /**
   * @public
   * @override
   */
  dispose() {
    this.disposeHumanMass();
    super.dispose();
  }
}

balancingAct.register( 'HumanMass', HumanMass );

export default HumanMass;