// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Balance Lab' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const BalanceLabModel = require( 'BALANCING_ACT/balancelab/model/BalanceLabModel' );
  const BalanceLabView = require( 'BALANCING_ACT/balancelab/view/BalanceLabView' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const balanceLabString = require( 'string!BALANCING_ACT/balanceLab' );

  // images
  const labIcon = require( 'image!BALANCING_ACT/lab-icon.png' );
  const labIconSmall = require( 'image!BALANCING_ACT/lab-icon-small.png' );

  function BalanceLabScreen( tandem ) {

    const options = {
      name: balanceLabString,
      homeScreenIcon: new Image( labIcon ),
      navigationBarIcon: new Image( labIconSmall ),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new BalanceLabModel( tandem.createTandem( 'model' ) ); },
      function( model ) {return new BalanceLabView( model, tandem.createTandem( 'view' ) ); },
      options );
  }

  balancingAct.register( 'BalanceLabScreen', BalanceLabScreen );

  return inherit( Screen, BalanceLabScreen );
} );