// Copyright 2002-2013, University of Colorado Boulder

/**
 * Primary model class for the intro tab in the balancing act simulation.
 * This model depicts a plank on a fulcrum with a few masses that the user can
 * put on and remove from the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  var FireExtinguisher = require( 'BALANCING_ACT/common/model/masses/FireExtinguisher' );
  var SmallTrashCan = require( 'BALANCING_ACT/common/model/masses/SmallTrashCan' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @constructor
   */
  function IntroModel() {
    BalanceModel.call( this );

    // Add the initial masses and save their initial positions.
    this.addMass( new FireExtinguisher( new Vector2( 2.7, 0 ), false ) );
    this.addMass( new FireExtinguisher( new Vector2( 3.2, 0 ), false ) );
    this.addMass( new SmallTrashCan( new Vector2( 3.7, 0 ), false ) );
  }

  return inherit( BalanceModel, IntroModel, {
    reset: function() {
      this.massList.forEach( function( mass ) {
        mass.positionProperty.reset();
      } );
    }
  } );
} );

