// Copyright 2013-2020, University of Colorado Boulder

/**
 * Primary model class for the intro screen in the balancing act simulation.
 * This model depicts a plank on a fulcrum with a few masses that the user can
 * put on and remove from the plank.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import balancingAct from '../../balancingAct.js';
import BalanceModel from '../../common/model/BalanceModel.js';
import FireExtinguisher from '../../common/model/masses/FireExtinguisher.js';
import SmallTrashCan from '../../common/model/masses/SmallTrashCan.js';

/**
 * @param {Tandem} tandem
 * @constructor
 */
function BAIntroModel( tandem ) {
  BalanceModel.call( this, tandem );

  // Add the initial masses and save their initial positions.
  this.addMass( new FireExtinguisher( new Vector2( 2.7, 0 ), false, { tandem: tandem.createTandem( 'fireExtinguisher1' ) } ) );
  this.addMass( new FireExtinguisher( new Vector2( 3.2, 0 ), false, { tandem: tandem.createTandem( 'fireExtinguisher2' ) } ) );
  this.addMass( new SmallTrashCan( new Vector2( 3.7, 0 ), false, { tandem: tandem.createTandem( 'smallTrashCan' ) } ) );
}

balancingAct.register( 'BAIntroModel', BAIntroModel );

export default inherit( BalanceModel, BAIntroModel, {
  reset: function() {
    this.massList.forEach( function( mass ) {
      mass.positionProperty.reset();
      mass.rotationAngleProperty.reset();
    } );
    BalanceModel.prototype.reset.call( this );
  }
} );