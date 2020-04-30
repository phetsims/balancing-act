// Copyright 2014-2020, University of Colorado Boulder

/**
 * A challenge, used in the balance game, in which the user must predict which
 * way the plank will tilt when the supports are removed.
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import balancingActStrings from '../../balancingActStrings.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from '../../common/model/ColumnState.js';
import BalanceGameChallenge from './BalanceGameChallenge.js';

const whatWillHappenString = balancingActStrings.whatWillHappen;

/**
 * @constructor
 */
function TiltPredictionChallenge( fixedMasses ) {
  BalanceGameChallenge.call( this, ColumnState.DOUBLE_COLUMNS );
  Array.prototype.push.apply( this.fixedMassDistancePairs, fixedMasses );

  // Set up the challenge view configuration, which provides information to
  // the view about how this challenge should be displayed.
  this.viewConfig = {
    title: whatWillHappenString,
    showMassEntryDialog: false,
    showTiltPredictionSelector: true
  };
}

balancingAct.register( 'TiltPredictionChallenge', TiltPredictionChallenge );

inherit( BalanceGameChallenge, TiltPredictionChallenge, {}, {
  // statics

  // convenience factory method for creating this type of challenge
  create: function( fixedMass1, fixedMass1DistanceFromCenter, fixedMass2, fixedMass2DistanceFromCenter ) {

    // Add the fixed masses and their distances from the center of the balance.
    const fixedMassesList = [];
    fixedMassesList.push( { mass: fixedMass1, distance: fixedMass1DistanceFromCenter } );
    fixedMassesList.push( { mass: fixedMass2, distance: fixedMass2DistanceFromCenter } );

    // Create the actual challenge.
    return new TiltPredictionChallenge( fixedMassesList );
  }
} );

export default TiltPredictionChallenge;