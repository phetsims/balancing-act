// Copyright 2013-2025, University of Colorado Boulder

/**
 * This is an extension of the ImageMass type that adds a textual label.  This
 * was created in support of a request to label the mystery masses with
 * translatable labels.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import { TReadOnlyProperty } from '../../../../../axon/js/TReadOnlyProperty.js';
import Vector2 from '../../../../../dot/js/Vector2.js';
import { ImageableImage } from '../../../../../scenery/js/nodes/Imageable.js';
import balancingAct from '../../../balancingAct.js';
import ImageMass from '../ImageMass.js';
import { MassOptions } from '../Mass.js';

export type LabeledImageMassConfig = {
  massValue: number;
  image: HTMLImageElement | ImageableImage;
  height: number;
  isMystery: boolean;
  labelTextProperty: TReadOnlyProperty<string>;
} & MassOptions;

export default class LabeledImageMass extends ImageMass {

  public readonly labelTextProperty: TReadOnlyProperty<string>;

  public constructor( initialPosition: Vector2, config: LabeledImageMassConfig ) {
    super( config.massValue, config.image, config.height, initialPosition, config.isMystery, config );
    this.labelTextProperty = config.labelTextProperty;
  }
}

balancingAct.register( 'LabeledImageMass', LabeledImageMass );