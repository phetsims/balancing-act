// Copyright 2014-2024, University of Colorado Boulder

/**
 * Base type for a single "challenge" (a.k.a. problem) that is presented to the user during the balance game.
 *
 * @author John Blanco
 */

import optionize from '../../../../phet-core/js/optionize.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import balancingAct from '../../balancingAct.js';
import Mass from '../../common/model/Mass.js';
import BalanceGameChallengeFactory from './BalanceGameChallengeFactory.js';

type MassDistancePair = {
  mass: Mass;
  distance: number;
};

type SelfOptions = {
  maxAttemptsAllowed?: number;
};

type BalanceGameChallengeOptions = SelfOptions;

export default class BalanceGameChallenge {

  // The initial state of the support columns for this challenge
  public readonly initialColumnState: IntentionalAny;

  // Maximum number of attempts allowed for this challenge
  public readonly maxAttemptsAllowed: number;

  // Fixed masses that are initially on the balance and cannot be moved by the user
  public fixedMassDistancePairs: MassDistancePair[];

  // Masses that the user can move to balance the fixed masses
  public movableMasses: Mass[];

  // The correct configuration that balances the fixed masses
  public balancedConfiguration: MassDistancePair[];

  // Disposal function to clean up memory references
  private readonly disposeBalanceGameChallenge: () => void;

  public constructor( initialColumnState: IntentionalAny, providedOptions?: BalanceGameChallengeOptions ) {

    const options = optionize<BalanceGameChallengeOptions, SelfOptions>()( {
      maxAttemptsAllowed: 2
    }, providedOptions );

    this.initialColumnState = initialColumnState;

    this.maxAttemptsAllowed = options.maxAttemptsAllowed;
    this.fixedMassDistancePairs = [];
    this.movableMasses = [];
    this.balancedConfiguration = [];

    // Clean up any memory references that could cause leaks.
    this.disposeBalanceGameChallenge = (): void => {

      // Here's the thing: When this code was originally written, circa 2013, masses didn't need to be disposed because
      // simply de-referencing them wouldn't cause memory leaks.  However, with the advent of dynamic region & culture,
      // the different image type Properties can have references to these masses, ergo, they must be disposed.  However,
      // some of them might be shared, so we have the check this first.  Yikes.  This would have been designed
      // differently if all of these requirements had existed at the start, but they didn't, so ya gotta do whacha gotta
      // do.
      this.movableMasses.forEach( ( mass: Mass ) => {

        // @ts-expect-error
        if ( !BalanceGameChallengeFactory.isReusableMass( mass ) ) {
          mass.dispose();
        }
      } );
      this.fixedMassDistancePairs.forEach( ( massDistancePair: MassDistancePair ) => {

        // @ts-expect-error
        if ( !BalanceGameChallengeFactory.isReusableMass( massDistancePair.mass ) ) {
          massDistancePair.mass.dispose();
        }
      } );
    };
  }

  /**
   * Convenience function for determining whether an equivalent mass is contained on the list.  The 'contains' function
   * for the mass list can't be used because it relies on the 'equals' function, which needs to be more specific than
   * just matching class and mass value.
   */
  private containsEquivalentMass( mass: Mass, massList: Mass[] ): boolean {
    for ( let i = 0; i < massList.length; i++ ) {
      if ( mass.massValue === massList[ i ].massValue && typeof ( mass ) === typeof ( massList[ i ] ) ) {

        // These masses are equivalent, so the list contains an equivalent mass.
        return true;
      }
    }
    return false;
  }

  /**
   * Test two mass lists to see if they contain equivalent masses.
   */
  private containsEquivalentMasses( massList1: Mass[], massList2: Mass[] ): boolean {
    if ( massList1.length !== massList2.length ) {
      return false;
    }
    for ( let i = 0; i < massList1.length; i++ ) {
      if ( !this.containsEquivalentMass( massList1[ i ], massList2 ) ) {
        return false;
      }
    }
    return true;
  }

  /**
   * Extract the fixed masses from the mass-distance pairs.
   */
  private getFixedMassesList(): Mass[] {
    const fixedMassesList: Mass[] = [];
    this.fixedMassDistancePairs.forEach( ( massDistancePair: MassDistancePair ) => {
      fixedMassesList.push( massDistancePair.mass );
    } );
    return fixedMassesList;
  }

  /**
   * Returns true if the specified challenge uses the same fixed masses. This is used for various equivalence
   * comparisons.
   */
  public usesSameFixedMasses( that: BalanceGameChallenge ): boolean {
    if ( this === that ) {
      return true;
    }

    const thisFixedMasses = this.getFixedMassesList();
    const thatFixedMasses = that.getFixedMassesList();

    if ( !this.containsEquivalentMasses( thisFixedMasses, thatFixedMasses ) ) {
      return false;
    }

    // If we made it to here, the masses are the same.
    return true;
  }

  /**
   * Returns true if the specified challenge uses the same movable masses.
   */
  private usesSameMovableMasses( that: BalanceGameChallenge ): boolean {
    return this.containsEquivalentMasses( this.movableMasses, that.movableMasses );
  }

  /**
   * Returns true if the specified challenge uses the same masses as this challenge.  Note that "same masses" means the
   * same classes, not just the same values.  For example, if both challenges have a movable mass that weigh 60kg but
   * one is a rock and the other is a person, this will return false.
   */
  public usesSameMasses( that: BalanceGameChallenge ): boolean {
    return this.usesSameFixedMasses( that ) && this.usesSameMovableMasses( that );
  }

  /**
   * Compares the fixed masses and their distances to those of the given challenge and, if all fixed masses and
   * distances are the same, 'true' is returned.
   */
  public usesSameFixedMassesAndDistances( that: BalanceGameChallenge ): boolean {
    if ( this === that ) {
      return true;
    }

    if ( this.fixedMassDistancePairs.length !== that.fixedMassDistancePairs.length ) {
      // If the lists are unequal in size, then the set of fixed masses
      // and distances can't be equal.
      return false;
    }

    let matchCount = 0;
    this.fixedMassDistancePairs.forEach( ( thisFixedMassDistancePair: MassDistancePair ) => {
      that.fixedMassDistancePairs.forEach( ( thatFixedMassDistancePair: MassDistancePair ) => {
        if ( thisFixedMassDistancePair.mass.massValue === thatFixedMassDistancePair.mass.massValue &&
             thisFixedMassDistancePair.distance === thatFixedMassDistancePair.distance ) {
          matchCount++;
        }
      } );
    } );

    // If a match was found for all fixed mass distance pairs, then the
    // lists are equivalent.
    return matchCount === this.fixedMassDistancePairs.length;
  }

  /**
   * Clean up any memory linkages that could lead to leaks.
   */
  public dispose(): void {
    this.disposeBalanceGameChallenge();
  }
}

balancingAct.register( 'BalanceGameChallenge', BalanceGameChallenge );