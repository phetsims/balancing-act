// Copyright 2014-2019, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // imports
  const BalanceGameModel = require( 'BALANCING_ACT/game/model/BalanceGameModel' );
  const BalanceGameView = require( 'BALANCING_ACT/game/view/BalanceGameView' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const gameString = require( 'string!BALANCING_ACT/game' );

  // images
  const gameIcon = require( 'image!BALANCING_ACT/game-icon.png' );
  const gameIconSmall = require( 'image!BALANCING_ACT/game-icon-small.png' );

  function BalanceGameScreen( tandem ) {

    const options = {
      name: gameString,
      homeScreenIcon: new Image( gameIcon ),
      navigationBarIcon: new Image( gameIconSmall ),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new BalanceGameModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new BalanceGameView( model, tandem.createTandem( 'view' ) ); },
      options );
  }

  balancingAct.register( 'BalanceGameScreen', BalanceGameScreen );

  return inherit( Screen, BalanceGameScreen );
} );