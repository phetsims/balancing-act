// Copyright 2013-2018, University of Colorado Boulder

/**
 * Base type for a model element that represents a person, a.k.a. a human, in
 * the model.  The human can be grabbed from a toolbox and placed on a
 * balance, so there needs to be a standing and sitting image representation.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {number} massValue
   * @param {image} standingImage
   * @param {number} standingHeight
   * @param {image} sittingImage
   * @param {number} sittingHeight
   * @param {Vector2} initialPosition
   * @param {number} sittingCenterOfMassXOffset
   * @param {boolean} isMystery
   * @constructor
   */
  function HumanMass( massValue, standingImage, standingHeight, sittingImage, sittingHeight, initialPosition, sittingCenterOfMassXOffset, isMystery ) {
    ImageMass.call( this, massValue, standingImage, standingHeight, initialPosition, isMystery );
    const self = this;

    // Monitor the 'onPlank' property and update the image as changes occur.
    self.onPlankProperty.link( function( onPlank ) {
      if ( onPlank ) {
        const xPosition = self.positionProperty.get().x;
        self.centerOfMassXOffset = sittingCenterOfMassXOffset * ( xPosition < 0 ? -1 : 1 );
        self.heightProperty.set( sittingHeight );
        self.reverseImage = xPosition < 0;
        self.imageProperty.set( sittingImage );
      }
      else {
        self.centerOfMassXOffset = 0;
        self.heightProperty.set( standingHeight );
        self.reverseImage = false;
        self.imageProperty.set( standingImage );
      }
    } );
  }

  balancingAct.register( 'HumanMass', HumanMass );

  return inherit( ImageMass, HumanMass );
} );