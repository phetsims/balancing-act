// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var tireImage = require( 'image!BALANCING_ACT/tire.png' );

  // Constants
  var MASS = 15; // In kg
  var HEIGHT = 0.13; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Tire( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, tireImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, Tire,
    {
      createCopy: function() {
        return new Tire( this.position.copy(), this.isMystery );
      }
    } );
} );