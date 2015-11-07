// Copyright 2014-2015, University of Colorado Boulder

/**
 * Base type for a single "challenge" (a.k.a. problem) that is presented to
 * the user during the balance game.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  /**
   * @param initialColumnState
   * @param {Object} [options]
   * @constructor
   */
  function BalanceGameChallenge( initialColumnState, options ) {
    options = _.extend(
      {
        maxAttemptsAllowed: 2
      }, options );
    this.initialColumnState = initialColumnState;
    this.maxAttemptsAllowed = options.maxAttemptsAllowed;

    // An array of mass-distance pairs, i.e. { mass: <Mass>, distance: <Number> }
    // where the mass is initially sitting on the balance and is not movable
    // by the user.
    this.fixedMassDistancePairs = [];

    // List of masses that the user will move into the appropriate positions
    // in order to balance out the other masses.
    this.movableMasses = [];

    // An array of mass-distance pairs, i.e. { mass: <Mass>, distance: <Number> }
    // where the movable masses balance the fixed masses.  For some challenges,
    // this is what will be displayed to the user if they ask to see a correct answer.
    this.balancedConfiguration = [];
  }

  BalanceGameChallenge.prototype = {

    /**
     * Convenience function for determining whether an equivalent mass is
     * contained on the list.  The 'contains' function for the mass list can't
     * be used because it relies on the 'equals' function, which needs to be
     * more specific than just matching class and mass value.
     */
    containsEquivalentMass: function( mass, massList ) {
      for ( var i = 0; i < massList.length; i++ ) {
        if ( mass.massValue === massList[ i ].massValue && typeof( mass ) === typeof( massList[ i ] ) ) {
          // These masses are equivalent, so the list contains an equivalent mass.
          return true;
        }
      }
      return false;
    },

    // Test two mass lists to see if they contain equivalent masses.
    containsEquivalentMasses: function( massList1, massList2 ) {
      if ( massList1.length !== massList2.length ) {
        return false;
      }
      for ( var i = 0; i < massList1.length; i++ ) {
        if ( !this.containsEquivalentMass( massList1[ i ], massList2 ) ) {
          return false;
        }
      }
      return true;
    },

    // Extract the fixed masses from the mass-distance pairs.
    getFixedMassesList: function() {
      var fixedMassesList = [];
      this.fixedMassDistancePairs.forEach( function( massDistancePair ) {
        fixedMassesList.push( massDistancePair.mass );
      } );
      return fixedMassesList;
    },

    /**
     * Returns true if the specified challenge uses the same fixed masses.
     * This is used for various equivalence comparisons.
     */
    usesSameFixedMasses: function( that ) {
      if ( this === that ) {
        return true;
      }

      var thisFixedMasses = this.getFixedMassesList();
      var thatFixedMasses = that.getFixedMassesList();

      if ( !this.containsEquivalentMasses( thisFixedMasses, thatFixedMasses ) ) {
        return false;
      }

      // If we made it to here, the masses are the same.
      return true;
    },

    usesSameMovableMasses: function( that ) {
      return this.containsEquivalentMasses( this.movableMasses, that.movableMasses );
    },

    /**
     * Returns true if the specified challenge uses the same masses as this
     * challenge.  Note that "same masses" means the same classes, not just
     * the same values.  For example, if both challenges have a movable mass
     * that weigh 60kg but one is a rock and the other is a person, this will
     * return false.
     */
    usesSameMasses: function( that ) {
      return this.usesSameFixedMasses( that ) && this.usesSameMovableMasses( that );
    },

    /**
     * Compares the fixed masses and their distances to those of the given
     * challenge and, if all fixed masses and distances are the same, 'true'
     * is returned.
     */
    usesSameFixedMassesAndDistances: function( that ) {
      if ( this === that ) {
        return true;
      }

      if ( this.fixedMassDistancePairs.length !== that.fixedMassDistancePairs.length ) {
        // If the lists are unequal in size, then the set of fixed masses
        // and distances can't be equal.
        return false;
      }

      var matchCount = 0;
      this.fixedMassDistancePairs.forEach( function( thisFixedMassDistancePair ) {
        that.fixedMassDistancePairs.forEach( function( thatFixedMassDistancePair ) {
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
  };

  return BalanceGameChallenge;
} );
