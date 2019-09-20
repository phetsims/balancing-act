// Copyright 2013-2019, University of Colorado Boulder

/**
 * Primary model class for the 'balance lab' tab in the balancing act
 * simulation. This model depicts a plank on a fulcrum with a collection of
 * masses that the user can put on and remove from the plank.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );

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
      const self = this;
      BalanceModel.prototype.addMass.call( self, mass );
      mass.userControlledProperty.lazyLink( function( isUserControlled ) {
        if ( !isUserControlled ) {
          // The user has dropped this mass.
          if ( !self.plank.addMassToSurface( mass ) ) {
            // The attempt to add mass to surface of plank failed, probably because the area below the mass is full, or
            // because the mass wasn't over the plank.
            self.removeMassAnimated( mass );
          }
        }
      } );
    },

    removeMassAnimated: function( mass ) {

      const self = this;

      // Register a listener for the completion of the removal animation sequence.
      function removeMass( isAnimating, wasAnimating ){
        if ( wasAnimating && !isAnimating ) {
          // Animation sequence has completed.
          mass.animatingProperty.unlink( removeMass );
          BalanceModel.prototype.removeMass.call( self, mass );
        }
      }
      mass.animatingProperty.link( removeMass );

      // Kick off the animation back to the toolbox.
      mass.initiateAnimation();
    }
  } );
} );

