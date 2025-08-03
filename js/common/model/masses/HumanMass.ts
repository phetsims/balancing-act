// Copyright 2013-2024, University of Colorado Boulder

/**
 * Base type for a model element that represents a person, a.k.a. a human, in
 * the model.  The human can be grabbed from a toolbox and placed on a
 * balance, so there needs to be a standing and sitting image representation.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Multilink from '../../../../../axon/js/Multilink.js';
import Vector2 from '../../../../../dot/js/Vector2.js';
import IntentionalAny from '../../../../../phet-core/js/types/IntentionalAny.js';
import type { ImageableImage } from '../../../../../scenery/js/nodes/Imageable.js';
import balancingAct from '../../../balancingAct.js';
import HumanTypeEnum from '../HumanTypeEnum.js';
import ImageMass from '../ImageMass.js';

export default class HumanMass extends ImageMass {

  private readonly disposeHumanMass: () => void;

  public constructor( humanType: HumanTypeEnum, massValue: number, standingHeight: number, sittingHeight: number, initialPosition: Vector2, sittingCenterOfMassXOffset: number, isMystery: boolean ) {

    super( massValue, humanType.standingImageProperty.value, standingHeight, initialPosition, isMystery );

    // Monitor the 'onPlank' property and update the image as changes occur.
    const imageUpdateMultilink = Multilink.multilink(
      [ this.onPlankProperty, humanType.standingImageProperty, humanType.sittingImageProperty ],
      ( onPlank: boolean, standingImage: ImageableImage, sittingImage: IntentionalAny ) => {
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

  public override dispose(): void {
    this.disposeHumanMass();
    super.dispose();
  }
}

balancingAct.register( 'HumanMass', HumanMass );