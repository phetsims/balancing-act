// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

  // Constants
  var MASS = 30; // In kg
  var HEIGHT = 0.65; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function MediumTrashCan( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, MediumTrashCan,
    {
      createCopy: function() {
        return new MediumTrashCan( this.position.copy(), this.isMystery );
      }
    } );
} );