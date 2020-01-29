// Copyright 2013-2020, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );

  // images
  const trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

  // constants
  const MASS = 10; // In kg
  const HEIGHT = 0.55; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @param {Object} [options]
   * @constructor
   */
  function SmallTrashCan( initialPosition, isMystery, options ) {
    ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery, options );
  }

  balancingAct.register( 'SmallTrashCan', SmallTrashCan );

  return inherit( ImageMass, SmallTrashCan );
} );