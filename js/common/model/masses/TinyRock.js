// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var tinyRockImage = require( 'image!BALANCING_ACT/tiny-rock.png' );

  // Constants
  var MASS = 2.5; // In kg
  var HEIGHT = 0.1; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function TinyRock( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, tinyRockImage, HEIGHT, initialPosition, isMystery );
  }

  return inherit( ImageMass, TinyRock,
    {
      createCopy: function() {
        return new TinyRock( this.position.copy(), this.isMystery );
      }
    } );
} );