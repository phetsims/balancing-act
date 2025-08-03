// Copyright 2013-2025, University of Colorado Boulder

/**
 * Basic model for depicting masses on a balance, meant to be used as a base
 * type.
 *
 * @author John Blanco
 */

import createObservableArray, { ObservableArray } from '../../../../axon/js/createObservableArray.js';
import EnumerationDeprecatedProperty from '../../../../axon/js/EnumerationDeprecatedProperty.js';
import Property from '../../../../axon/js/Property.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from './ColumnState.js';
import Fulcrum from './Fulcrum.js';
import LevelSupportColumn from './LevelSupportColumn.js';
import Mass from './Mass.js';
import Plank from './Plank.js';

// constants
const FULCRUM_HEIGHT = 0.85; // In meters.
const PLANK_HEIGHT = 0.75; // In meters.

export default class BalanceModel {

  // Model elements
  public readonly fulcrum: Fulcrum;
  public readonly massList: ObservableArray<Mass>;
  public readonly userControlledMasses: Mass[];

  public readonly columnStateProperty: Property<typeof ColumnState>;
  public readonly plank: Plank;
  public readonly supportColumns: LevelSupportColumn[];

  public constructor( tandem: Tandem ) {
    this.fulcrum = new Fulcrum( new Dimension2( 1, FULCRUM_HEIGHT ) );
    this.massList = createObservableArray<Mass>();
    this.userControlledMasses = []; // Masses being controlled by user(s), potentially more than one in touch environment.

    this.columnStateProperty = new EnumerationDeprecatedProperty( ColumnState, ColumnState.DOUBLE_COLUMNS, {
      tandem: tandem.createTandem( 'columnStateProperty' ),
      phetioReadOnly: true
    } );
    this.plank = new Plank(
      new Vector2( 0, PLANK_HEIGHT ),
      new Vector2( 0, FULCRUM_HEIGHT ),
      this.columnStateProperty,
      this.userControlledMasses,
      tandem.createTandem( 'plank' )
    );
    this.supportColumns = [
      new LevelSupportColumn( PLANK_HEIGHT, -1.625 ),
      new LevelSupportColumn( PLANK_HEIGHT, 1.625 )
    ];
  }

  /**
   * Step function, called by the framework, clocks time-dependent behavior.
   */
  public step( dt: number ): void {
    this.plank.step( dt );
    this.massList.forEach( mass => {
      mass.step( dt );
    } );
  }

  /**
   * Add a mass to the model.  Subclasses generally do additional things.
   */
  public addMass( mass: Mass ): void {
    this.massList.push( mass );
    // Add a listener that will update the list of user controlled masses
    // that is used by the plank to update the active drop positions.
    const userControlledMassesUpdater = ( userControlled: boolean ) => {
      if ( userControlled ) {
        this.userControlledMasses.push( mass );
      }
      else {
        this.userControlledMasses.splice( this.userControlledMasses.indexOf( mass ), 1 );
      }
    };
    mass.userControlledProperty.link( userControlledMassesUpdater );

    // Attach a reference for this listener to the mass so that it can be removed later.
    mass.userControlledMassesUpdater = userControlledMassesUpdater;
  }

  /**
   * Remove a mass from the model.  Subtypes often do additional things.
   */
  public removeMass( mass: Mass ): void {
    this.massList.remove( mass );
    mass.dispose();
  }

  public reset(): void {
    this.plank.removeAllMasses();
    this.columnStateProperty.reset();
  }
}

balancingAct.register( 'BalanceModel', BalanceModel );