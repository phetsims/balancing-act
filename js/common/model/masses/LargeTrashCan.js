// Copyright 2013-2017, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var inherit = require( 'PHET_CORE/inherit' );
  var trashCanImage = require( 'image!BALANCING_ACT/trash-can.png' );

  // constants
  var MASS = 40; // In kg
  var HEIGHT = 0.8; // In meters

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