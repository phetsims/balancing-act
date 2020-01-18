// Copyright 2013-2020, University of Colorado Boulder

/**
 * Primary model class for the intro screen in the balancing act simulation.
 * This model depicts a plank on a fulcrum with a few masses that the user can
 * put on and remove from the plank.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const BalanceModel = require( 'BALANCING_ACT/common/model/BalanceModel' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const FireExtinguisher = require( 'BALANCING_ACT/common/model/masses/FireExtinguisher' );
  const inherit = require( 'PHET_CORE/inherit' );
  const SmallTrashCan = require( 'BALANCING_ACT/common/model/masses/SmallTrashCan' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function BAIntroModel( tandem ) {
    BalanceModel.call( this, tandem );

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

