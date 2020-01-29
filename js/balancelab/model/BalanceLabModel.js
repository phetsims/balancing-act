// Copyright 2013-2020, University of Colorado Boulder

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
  const BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MysteryMass = require( 'BALANCING_ACT/common/model/masses/MysteryMass' );
  const PhetioGroup = require( 'TANDEM/PhetioGroup' );
  const PhetioGroupIO = require( 'TANDEM/PhetioGroupIO' );
  const ReferenceIO = require( 'TANDEM/types/ReferenceIO' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function BalanceLabModel( tandem ) {
    BalanceModel.call( this, tandem );

    // @public {PhetioGroup<BrickStack>}
    this.brickStackGroup = new PhetioGroup( ( tandem, numberOfBricks, position ) => {
        const brickStack = new BrickStack( numberOfBricks, position, {
          tandem: tandem,
          phetioDynamicElement: true
        } );
        brickStack.userControlledProperty.set( true );
        brickStack.animationDestination = position;
        return brickStack;
      },
      [ 1, Vector2.ZERO ], {
        tandem: tandem.createTandem( 'brickStackGroup' ),
        phetioType: PhetioGroupIO( ReferenceIO )
      } );

    // @public {PhetioGroup<MysteryMass>}
    this.mysteryMassGroup = new PhetioGroup( ( tandem, position, mysteryMassId ) => {
        const mysteryMassModelElement = new MysteryMass( position, mysteryMassId, {
          tandem: tandem,
          phetioDynamicElement: true
        } );
        mysteryMassModelElement.animationDestination = position;
        mysteryMassModelElement.userControlledProperty.set( true );
        return mysteryMassModelElement;
      },
      [ Vector2.ZERO, 0 ], {
        tandem: tandem.createTandem( 'mysteryMassGroup' ),
        phetioType: PhetioGroupIO( ReferenceIO )
      } );

      // TODO: Add person group here too, see https://github.com/phetsims/balancing-act/issues/99
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
      function removeMass( isAnimating, wasAnimating ) {
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

