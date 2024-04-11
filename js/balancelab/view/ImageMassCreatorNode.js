// Copyright 2013-2024, University of Colorado Boulder

/**
 * A node that can be used to add an image-based mass element to the model by
 * clicking on it.
 *
 * @author John Blanco
 */


// module
import balancingAct from '../../balancingAct.js';
import MassCreatorNode from './MassCreatorNode.js';

class ImageMassCreatorNode extends MassCreatorNode {

  /**
   * @param {BalanceLabModel} model
   * @param {BasicBalanceScreenView} screenView
   * @param {ImageMass} prototypeImageMass
   * @param {boolean} showMassLabel
   * @param {Object} [options]
   */
  constructor( model, screenView, prototypeImageMass, showMassLabel, options ) {
    super( screenView, prototypeImageMass.massValue, showMassLabel, model.columnStateProperty, options );
    this.prototypeImageMass = prototypeImageMass;
    this.model = model;
  }

  /**
   * @param position
   * @returns {*}
   * @public
   */
  addElementToModel( position ) {
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
   * @protected
   */
  createImageMassInstance() {
    return this.prototypeImageMass.createCopy();
  }
}

balancingAct.register( 'ImageMassCreatorNode', ImageMassCreatorNode );

export default ImageMassCreatorNode;