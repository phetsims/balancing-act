// Copyright 2013-2015, University of Colorado Boulder

/**
 * Primary model class for the 'balance lab' tab in the balancing act
 * simulation. This model depicts a plank on a fulcrum with a collection of
 * masses that the user can put on and remove from the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function BalanceLabModel() {
    BalanceModel.call( this );
  }

  balancingAct.register( 'BalanceLabModel', BalanceLabModel );

  return inherit( BalanceModel, BalanceLabModel, {

    reset: function() {
      this.massList.clear();
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

      var thisModel = this;

      // Register a listener for the completion of the removal animation sequence.
      mass.animatingProperty.link( function( isAnimating, wasAnimating ) {
        if ( wasAnimating && !isAnimating ) {
          // Animation sequence has completed.
          mass.animatingProperty.unlink( this );
          BalanceModel.prototype.removeMass.call( thisModel, mass );
        }
      } );

      // Kick off the animation back to the tool box.
      mass.initiateAnimation();
    }
  } );
} );

