// Copyright 2013-2025, University of Colorado Boulder

/**
 * Primary model class for the 'balance lab' tab in the balancing act simulation. This model depicts a plank on a
 * fulcrum with a collection of masses that the user can put on and remove from the plank.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import PhetioGroup from '../../../../tandem/js/PhetioGroup.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import IOType from '../../../../tandem/js/types/IOType.js';
import ReferenceIO from '../../../../tandem/js/types/ReferenceIO.js';
import balancingAct from '../../balancingAct.js';
import BalanceModel from '../../common/model/BalanceModel.js';
import Mass from '../../common/model/Mass.js';
import BrickStack from '../../common/model/masses/BrickStack.js';
import MysteryMass from '../../common/model/masses/MysteryMass.js';

export default class BalanceLabModel extends BalanceModel {

  // PhetioGroup for brick stacks. TODO: Type parameter, see https://github.com/phetsims/balancing-act/issues/168
  public readonly brickStackGroup: PhetioGroup<BrickStack | Mass, [ number, Vector2 ]>;

  // PhetioGroup for mystery masses TODO: Type parameter, see https://github.com/phetsims/balancing-act/issues/168
  public readonly mysteryMassGroup: PhetioGroup<MysteryMass | Mass, [ Vector2, number ]>;

  public constructor( tandem: Tandem ) {
    super( tandem );

    this.brickStackGroup = new PhetioGroup<BrickStack | Mass, [ number, Vector2 ]>(
      ( tandem: Tandem, numberOfBricks: number, position: Vector2 ) => {
        const brickStack = new BrickStack( numberOfBricks, position, {
          tandem: tandem,
          phetioDynamicElement: true
        } );
        brickStack.userControlledProperty.set( true );
        brickStack.animationDestination = position;
        return brickStack;
      },
      [ 1, Vector2.ZERO ],
      {
        tandem: tandem.createTandem( 'brickStackGroup' ),
        phetioType: PhetioGroup.PhetioGroupIO( ReferenceIO( IOType.ObjectIO ) )
      }
    );

    this.mysteryMassGroup = new PhetioGroup<MysteryMass | Mass, [ Vector2, number ]>(
      ( tandem: Tandem, position: Vector2, mysteryMassId: number ) => {
        const mysteryMassModelElement = new MysteryMass( position, mysteryMassId, {
          tandem: tandem,
          phetioDynamicElement: true
        } );
        mysteryMassModelElement.animationDestination = position;
        mysteryMassModelElement.userControlledProperty.set( true );
        return mysteryMassModelElement;
      },
      [ Vector2.ZERO, 0 ],
      {
        tandem: tandem.createTandem( 'mysteryMassGroup' ),
        phetioType: PhetioGroup.PhetioGroupIO( ReferenceIO( IOType.ObjectIO ) )
      }
    );

    // TODO: Add person group here too, see https://github.com/phetsims/balancing-act/issues/99
  }

  public override reset(): void {
    super.reset();

    // Remove all masses from the model.  This must be done one at a time rather than clearing massList in order to
    // avoid memory leaks.
    this.massList.getArrayCopy().forEach( mass => { this.removeMass( mass ); } );
  }

  public override addMass( mass: Mass ): void {
    super.addMass( mass );
    mass.userControlledProperty.lazyLink( ( isUserControlled: boolean ) => {
      if ( !isUserControlled ) {

        // The user has dropped this mass.
        if ( !this.plank.addMassToSurface( mass ) ) {

          // The attempt to add mass to surface of plank failed, probably because the area below the mass is full or
          // because the mass wasn't over the plank.
          this.removeMassAnimated( mass );
        }
      }
    } );
  }

  /**
   * Return a mass to the toolbox in an animated fashion, then remove it from the model.
   */
  public removeMassAnimated( mass: Mass ): void {

    // Register a listener for the completion of the removal animation sequence.
    const removeMass = ( isAnimating: boolean, wasAnimating: boolean | null ) => {
      if ( wasAnimating && !isAnimating ) {

        // Animation sequence has completed, so remove the mass from the model.
        mass.animatingProperty.unlink( removeMass );
        this.removeMass( mass );
      }
    };

    mass.animatingProperty.link( removeMass );

    // Kick off the animation back to the toolbox.
    mass.initiateAnimation();
  }

  /**
   * Remove a mass from the model.
   */
  public override removeMass( mass: Mass ): void {
    this.massList.remove( mass );
    if ( this.brickStackGroup.includes( mass ) ) {
      this.brickStackGroup.disposeElement( mass );
    }
    else if ( this.mysteryMassGroup.includes( mass ) ) {
      this.mysteryMassGroup.disposeElement( mass );
    }
    else {

      // This mass was not in a group.  As of 3/7/2024, there isn't a phet-io group for people, so the mass should be
      // directly disposed here. See https://github.com/phetsims/balancing-act/issues/99 and
      // https://github.com/phetsims/balancing-act/issues/94.
      mass.dispose();
    }
  }
}

balancingAct.register( 'BalanceLabModel', BalanceLabModel );