// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

  // Constants
  var MASS = 40; // In kg
  var HEIGHT = 0.8; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function LargeTrashCan( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, LargeTrashCan,
    {
      createCopy: function() {
        return new LargeTrashCan( this.position.copy(), this.isMystery );
      }
    } );
} );