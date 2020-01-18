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
  const MASS = 40; // In kg
  const HEIGHT = 0.8; // In meters

  /**
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function LargeTrashCan( initialPosition, isMystery ) {
    ImageMass.call( this, MASS, trashCanImage, HEIGHT, initialPosition, isMystery );
  }

  balancingAct.register( 'LargeTrashCan', LargeTrashCan );

  return inherit( ImageMass, LargeTrashCan );
} );