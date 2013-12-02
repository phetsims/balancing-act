// Copyright 2002-2013, University of Colorado Boulder

/**
 * Primary model class for the 'balance lab' tab in the balancing act
 * simulation. This model depicts a plank on a fulcrum with a collection of
 * masses that the user can put on and remove from the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  var BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @constructor
   */
  function BalanceLabModel() {
    BalanceModel.call( this );

    // Add the initial masses and save their initial positions.
    this.addMass( new BrickStack( 1, new Vector2( 2.7, 0 ), false ) );
    this.addMass( new BrickStack( 2, new Vector2( 3.3, 0 ), false ) );
  }

  return inherit( BalanceModel, BalanceLabModel, {
    reset: function() {
      this.massList.forEach( function( mass ) {
        mass.positionProperty.reset();
        mass.rotationAngleProperty.reset();
      } );
      BalanceModel.prototype.reset.call( this );
    }
  } );
} );

