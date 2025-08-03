// Copyright 2013-2024, University of Colorado Boulder

/**
 * A node that can be used to add an image-based mass element to the model by
 * clicking on it.
 *
 * @author John Blanco
 */


import Vector2 from '../../../../dot/js/Vector2.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import balancingAct from '../../balancingAct.js';
import ImageMass from '../../common/model/ImageMass.js';
import Mass from '../../common/model/Mass.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import BalanceLabModel from '../model/BalanceLabModel.js';
import MassCreatorNode from './MassCreatorNode.js';

export default class ImageMassCreatorNode extends MassCreatorNode {

  protected readonly prototypeImageMass: ImageMass;
  protected readonly model: BalanceLabModel;

  public constructor( model: BalanceLabModel, screenView: BasicBalanceScreenView, prototypeImageMass: ImageMass, showMassLabel: boolean, options?: IntentionalAny ) {
    super( screenView, prototypeImageMass.massValue, showMassLabel, model.columnStateProperty, options );
    this.prototypeImageMass = prototypeImageMass;
    this.model = model;
  }

  public override addElementToModel( position: Vector2 ): Mass {
    const imageMassModelElement = this.createImageMassInstance();
    imageMassModelElement.positionProperty.set( position.copy() );
    imageMassModelElement.animationDestination = imageMassModelElement.positionProperty.get();
    imageMassModelElement.userControlledProperty.set( true );
    this.model.addMass( imageMassModelElement );
    return imageMassModelElement;
  }

  /**
   * Create an instance of the image mass that corresponds to this creator node.  Overridden by subclasses to create the
   * appropriate type.
   */
  protected createImageMassInstance(): ImageMass {
    return this.prototypeImageMass.createCopy();
  }
}

balancingAct.register( 'ImageMassCreatorNode', ImageMassCreatorNode );