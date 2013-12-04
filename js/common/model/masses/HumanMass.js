// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base type for a model element that represents a person, a.k.a. a human, in
 * the model.  The human can be grabbed from a tool box and placed on a
 * balance, so there needs to be a standing and sitting image representation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );

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
    var thisMass = this;
    thisMass.standingImage = standingImage;
    thisMass.standingHeight = standingHeight;
    thisMass.sittingImage = sittingImage;
    thisMass.sittingHeight = sittingHeight;
    thisMass.sittingCenterOfMassXOffset = sittingCenterOfMassXOffset;

    thisMass.onPlankProperty.link( function( onPlank ) {
      if ( onPlank ) {
        thisMass.height = sittingHeight;
        if ( thisMass.position.x > 0 ) {
          thisMass.image = thisMass.sittingImage;
          thisMass.centerOfMassXOffset = sittingCenterOfMassXOffset;
        }
        else {
          // Reverse image if on other side of balance.
          thisMass.image = thisMass.sittingImage; // TODO: How do I reverse the image?
          thisMass.centerOfMassXOffset = -sittingCenterOfMassXOffset;
        }
      }
      else {
        thisMass.height = thisMass.standingHeight;
        thisMass.image = thisMass.standingImage;
        thisMass.centerOfMassXOffset = 0;
      }
    } );
  }

  return inherit( ImageMass, HumanMass, {

    /**
     * Invoked when this is placed on or removed from the plank, switches
     * between seated and standing images.
     */
    setOnPlank: function( onPlank ) {
      if ( onPlank ) {
        this.height = sittingHeight;
        if ( this.position.x > 0 ) {
          this.image = this.sittingImage;
          this.centerOfMassXOffset = sittingCenterOfMassXOffset;
        }
        else {
          // Reverse image if on other side of balance.
          this.image = this.sittingImage; // TODO: How do I reverse the image?
          this.centerOfMassXOffset = -sittingCenterOfMassXOffset;
        }
      }
      else {
        this.height = this.standingHeight;
        this.image = this.standingImage;
        this.centerOfMassXOffset = 0;
      }
    }
  } );
} );