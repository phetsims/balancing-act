// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

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