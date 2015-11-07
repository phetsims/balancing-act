// Copyright 2013-2015, University of Colorado Boulder

/**
 * A node that can be used to add an image-based mass element to the model by
 * clicking on it.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // module
  var inherit = require( 'PHET_CORE/inherit' );
  var MassCreatorNode = require( 'BALANCING_ACT/balancelab/view/MassCreatorNode' );

  /**
   * @param {BalanceLabModel} model
   * @param {ModelViewTransform2} mvt
   * @param {ImageMass} prototypeImageMass
   * @param {boolean} showMassLabel
   * @constructor
   */
  function ImageMassCreatorNode( model, mvt, prototypeImageMass, showMassLabel ) {
    MassCreatorNode.call( this, mvt, prototypeImageMass.massValue, showMassLabel );
    this.prototypeImageMass = prototypeImageMass;
    this.model = model;
  }

  return inherit( MassCreatorNode, ImageMassCreatorNode, {

    addElementToModel: function( position ) {
      var imageMassModelElement = this.createImageMassInstance();
      imageMassModelElement.position = position.copy();
      imageMassModelElement.animationDestination = imageMassModelElement.position;
      imageMassModelElement.userControlled = true;
      this.model.addMass( imageMassModelElement );
      return imageMassModelElement;
    },

    /**
     * Create an instance of the image mass that corresponds to this creator
     * node.  Overridden by subclasses to create the appropriate type.
     */
    createImageMassInstance: function() {
      return this.prototypeImageMass.createCopy();
    }
  } );
} );