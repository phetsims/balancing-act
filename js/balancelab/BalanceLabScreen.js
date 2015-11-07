// Copyright 2014-2015, University of Colorado Boulder

/**
 * The 'Balance Lab' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var BalanceLabModel = require( 'BALANCING_ACT/balancelab/model/BalanceLabModel' );
  var BalanceLabView = require( 'BALANCING_ACT/balancelab/view/BalanceLabView' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var balanceLabString = require( 'string!BALANCING_ACT/balanceLab' );

  // images
  var labIcon = require( 'image!BALANCING_ACT/lab-icon.png' );
  var labIconSmall = require( 'image!BALANCING_ACT/lab-icon-small.png' );

  function BalanceLabScreen() {

    Screen.call( this,
      balanceLabString,
      new Image( labIcon ),
      function() { return new BalanceLabModel(); },
      function( model ) {return new BalanceLabView( model ); },
      {
        navigationBarIcon: new Image( labIconSmall )
      } );
  }

  return inherit( Screen, BalanceLabScreen );
} );