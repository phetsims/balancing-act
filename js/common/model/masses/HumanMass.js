// Copyright 2013-2015, University of Colorado Boulder

/**
 * Base type for a model element that represents a person, a.k.a. a human, in
 * the model.  The human can be grabbed from a tool box and placed on a
 * balance, so there needs to be a standing and sitting image representation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
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
    var self = this;

    // Monitor the 'onPlank' property and update the image as changes occur.
    self.onPlankProperty.link( function( onPlank ) {
      if ( onPlank ) {
        self.centerOfMassXOffset = sittingCenterOfMassXOffset * ( self.position.x < 0 ? -1 : 1 );
        self.height = sittingHeight;
        self.reverseImage = self.position.x < 0;
        self.image = sittingImage;
      }
      else {
        self.centerOfMassXOffset = 0;
        self.height = standingHeight;
        self.reverseImage = false;
        self.image = standingImage;
      }
    } );
  }

  balancingAct.register( 'HumanMass', HumanMass );

  return inherit( ImageMass, HumanMass );
} );