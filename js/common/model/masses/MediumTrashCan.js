// Copyright 2013-2017, University of Colorado Boulder

define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const inherit = require( 'PHET_CORE/inherit' );
  const trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

  // constants
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

  balancingAct.register( 'MediumTrashCan', MediumTrashCan );

  return inherit( ImageMass, MediumTrashCan );
} );