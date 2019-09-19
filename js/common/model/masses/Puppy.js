// Copyright 2014-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const puppyImage = require( 'image!BALANCING_ACT/puppy.png' );

  // constants
  var MASS = 6; // In kg
  var HEIGHT = 0.6; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function Puppy( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, puppyImage, HEIGHT, initialPosition, isMystery );
    this.centerOfMassXOffset = 0.03; // Empirically determined.
  }

  balancingAct.register( 'Puppy', Puppy );

  return inherit( ImageMass, Puppy );
} );