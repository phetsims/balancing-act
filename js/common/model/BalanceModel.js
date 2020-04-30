// Copyright 2013-2020, University of Colorado Boulder

/**
 * Basic model for depicting masses on a balance, meant to be used as a base
 * type.
 *
 * @author John Blanco
 */

import EnumerationProperty from '../../../../axon/js/EnumerationProperty.js';
import ObservableArray from '../../../../axon/js/ObservableArray.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from './ColumnState.js';
import Fulcrum from './Fulcrum.js';
import LevelSupportColumn from './LevelSupportColumn.js';
import Plank from './Plank.js';

// constants
const FULCRUM_HEIGHT = 0.85; // In meters.
const PLANK_HEIGHT = 0.75; // In meters.

/**
 * @param {Tandem} tandem
 * @constructor
 */
function BalanceModel( tandem ) {

  const self = this;

  // Model elements
  self.fulcrum = new Fulcrum( new Dimension2( 1, FULCRUM_HEIGHT ) );
  self.massList = new ObservableArray();
  self.userControlledMasses = []; // Masses being controlled by user(s), potentially more than one in touch environment.

  self.columnStateProperty = new EnumerationProperty( ColumnState, ColumnState.DOUBLE_COLUMNS, {
    tandem: tandem.createTandem( 'columnStateProperty' ),
    phetioStudioControl: false
  } );
  self.plank = new Plank(
    new Vector2( 0, PLANK_HEIGHT ),
    new Vector2( 0, FULCRUM_HEIGHT ),
    this.columnStateProperty,
    this.userControlledMasses,
    tandem.createTandem( 'plank' )
  );
  self.supportColumns = [
    new LevelSupportColumn( PLANK_HEIGHT, -1.625 ),
    new LevelSupportColumn( PLANK_HEIGHT, 1.625 )
  ];
}

balancingAct.register( 'BalanceModel', BalanceModel );

inherit( Object, BalanceModel, {

  // Step function, called by the framework, clocks time-dependent behavior.
  step: function( dt ) {
    this.plank.step( dt );
    this.massList.forEach( function( mass ) {
      mass.step( dt );
    } );
  },

  // Add a mass to the model.  Subclasses generally do additional things.
  addMass: function( mass ) {
    this.massList.push( mass );
    const self = this;

    // Add a listener that will update the list of user controlled masses
    // that is used by the plank to update the active drop positions.
    const userControlledMassesUpdater = function( userControlled ) {
      if ( userControlled ) {
        self.userControlledMasses.push( mass );
      }
      else {
        self.userControlledMasses.splice( self.userControlledMasses.indexOf( mass ), 1 );
      }
    };
    mass.userControlledProperty.link( userControlledMassesUpdater );

    // Attach a reference for this listener to the mass so that it can be removed later.
    mass.userControlledMassesUpdater = userControlledMassesUpdater;
  },

  // Remove a mass from the model.  Sub-types often do additional things.
  removeMass: function( mass ) {
    this.massList.remove( mass );
    if ( mass.userControlledMassesUpdater ) {
      mass.userControlledProperty.unlink( mass.userControlledMassesUpdater );
      mass.userControlledMassesUpdater = null;
    }
  },

  reset: function() {
    this.plank.removeAllMasses();
    this.columnStateProperty.reset();
  }
} );

export default BalanceModel;
