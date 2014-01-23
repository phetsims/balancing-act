// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var smallRockImage = require( 'image!BALANCING_ACT/rock-4.png' );

  // Constants
  var MASS = 30; // In kg
  var HEIGHT = 0.25; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function SmallRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, smallRockImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, SmallRock,
    {
      createCopy: function() {
        var copy = new SmallRock();
        copy.position = this.position.copy;
        return copy;
      }
    } );
} );