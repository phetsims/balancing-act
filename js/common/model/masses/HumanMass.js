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

    // Monitor the 'onPlank' property and update the image as changes occur.
    thisMass.onPlankProperty.link( function( onPlank ) {
      if ( onPlank ) {
        thisMass.height = sittingHeight;
        thisMass.reverseImage = thisMass.position.x < 0;
        thisMass.image = sittingImage;
        thisMass.centerOfMassXOffset = sittingCenterOfMassXOffset * ( thisMass.position.x < 0 ? -1 : 1 );
      }
      else {
        thisMass.height = standingHeight;
        thisMass.reverseImage = false;
        thisMass.image = standingImage;
        thisMass.centerOfMassXOffset = 0;
      }
    } );
  }

  return inherit( ImageMass, HumanMass );
} );