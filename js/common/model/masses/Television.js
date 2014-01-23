// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var televisionImage = require( 'image!BALANCING_ACT/old-television.png' );

  // Constants
  var MASS = 10; // In kg
  var HEIGHT = 0.5; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Television( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, televisionImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, Television,
    {
      createCopy: function() {
        var copy = new Television();
        copy.position = this.position.copy;
        return copy;
      }
    } );
} );