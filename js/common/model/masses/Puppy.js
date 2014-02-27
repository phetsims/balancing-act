// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var puppyImage = require( 'image!BALANCING_ACT/puppy.png' );

  // Constants
  var MASS = 6; // In kg
  var HEIGHT = 0.6; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Puppy( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, puppyImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, Puppy,
    {
      createCopy: function() {
        return new Puppy( this.position.copy(), this.isMystery );
      }
    } );
} );