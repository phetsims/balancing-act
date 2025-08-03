// Copyright 2013-2024, University of Colorado Boulder

/**
 * This class defines a mass in the model that carries with it an associated image that should be presented in the view.
 * The image can change at times, such as when it is dropped on the balance.
 * <p/>
 * IMPORTANT: All images used by this class are assumed to have their center of mass in the horizontal direction in the
 * center of the image.  In order to make this work for an image, it may be necessary to have some blank transparent
 * space on one side.
 * <p/>
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import { ImageableImage } from '../../../../scenery/js/nodes/Imageable.js';
import balancingAct from '../../balancingAct.js';
import Mass, { MassOptions } from './Mass.js';

export default class ImageMass extends Mass {

  // Property that contains the current image.
  public readonly imageProperty: Property<HTMLImageElement | ImageableImage>;

  // Property that contains the current height of the corresponding model object.  Only height is used, as opposed to
  // both height and width, because the aspect ratio of the image is expected to be maintained, so the model element's
  // width can be derived from a combination of its height and the aspect ratio of the image that represents it.
  // A property is used because the size may change during animations.
  public readonly heightProperty: Property<number>;

  // Flag that indicates whether this node should be represented by a reversed version of the current image, must be
  // set prior to image updates.
  public reverseImage: boolean;

  public constructor( mass: number, image: HTMLImageElement | ImageableImage, height: number, initialPosition: Vector2, isMystery: boolean, options?: MassOptions ) {
    super( mass, initialPosition, isMystery, options );

    this.imageProperty = new Property( image );

    this.heightProperty = new Property( height );

    this.reverseImage = false;

    // Expected duration of the current animation.
    this.expectedAnimationTime = 0;
  }

  public override reset(): void {
    this.heightProperty.reset();
    this.imageProperty.reset();
    super.reset();
  }

  public override getMiddlePoint(): Vector2 {
    const position = this.positionProperty.get();
    return new Vector2( position.x, position.y + this.heightProperty.get() / 2 );
  }

  public override createCopy(): ImageMass {

    // TODO: This is written such that it will work for the subclasses in the masses/directory, but only because it assumes they
    // all have the same constructor signature. This method should be made abstract and implemented
    // properly in each subclass. See https://github.com/phetsims/balancing-act/issues/168
    // @ts-expect-error - TypeScript correctly identifies that this.constructor cannot be properly typed for polymorphic instantiation
    return new this.constructor( this.positionProperty.get().copy(), this.isMystery );
  }
}

balancingAct.register( 'ImageMass', ImageMass );