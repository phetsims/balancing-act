// Copyright 2013-2015, University of Colorado Boulder

/**
 * Primary model class for the intro screen in the balancing act simulation.
 * This model depicts a plank on a fulcrum with a few masses that the user can
 * put on and remove from the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var FireExtinguisher = require( 'BALANCING_ACT/common/model/masses/FireExtinguisher' );
  var inherit = require( 'PHET_CORE/inherit' );
  var SmallTrashCan = require( 'BALANCING_ACT/common/model/masses/SmallTrashCan' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @constructor
   */
  function BAIntroModel() {
    BalanceModel.call( this );

    // Add the initial masses and save their initial positions.
    this.addMass( new FireExtinguisher( new Vector2( 2.7, 0 ), false ) );
    this.addMass( new FireExtinguisher( new Vector2( 3.2, 0 ), false ) );
    this.addMass( new SmallTrashCan( new Vector2( 3.7, 0 ), false ) );
  }

  balancingAct.register( 'BAIntroModel', BAIntroModel );

  return inherit( BalanceModel, BAIntroModel, {
    reset: function() {
      this.massList.forEach( function( mass ) {
        mass.positionProperty.reset();
        mass.rotationAngleProperty.reset();
      } );
      BalanceModel.prototype.reset.call( this );
    }
  } );
} );

