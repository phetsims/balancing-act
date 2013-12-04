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
  }

  return inherit( BalanceModel, BalanceLabModel, {

    reset: function() {
      this.massList.forEach( function( mass ) {
        mass.positionProperty.reset();
        mass.rotationAngleProperty.reset();
      } );
      BalanceModel.prototype.reset.call( this );
    },

    addMass: function( mass ) {
      var thisModel = this;
      BalanceModel.prototype.addMass.call( thisModel, mass );
      mass.userControlledProperty.lazyLink( function( isUserControlled ) {
        if ( !isUserControlled ) {
          // The user has dropped this mass.
          if ( !thisModel.plank.addMassToSurface( mass ) ) {
            // The attempt to add mass to surface of plank failed,
            // probably because the area below the mass is full,
            // or because the mass wasn't over the plank.
            thisModel.removeMassAnimated( mass );
          }
        }
      } );
    },

    removeMassAnimated: function( mass ) {

      // Register a listener for the completion of the removal animation sequence.
      mass.animatingProperty.link( function( isAnimating, wasAnimating ) {
        if ( wasAnimating && !isAnimating ) {
          // Animation sequence has completed.
          debugger; // TODO: Does the 'this' below refer to the function, so that this will work?
          mass.unlink( this );
          this.massList.remove( mass );
        }
      } );

      // Kick off the animation back to the tool box.
      mass.initiateAnimation();
    }
  } );
} );

