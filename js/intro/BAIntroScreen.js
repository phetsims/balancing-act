// Copyright 2014-2015, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var BAIntroModel = require( 'BALANCING_ACT/intro/model/BAIntroModel' );
  var BAIntroView = require( 'BALANCING_ACT/intro/view/BAIntroView' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var introString = require( 'string!BALANCING_ACT/intro' );

  // images
  var introIcon = require( 'image!BALANCING_ACT/intro-icon.png' );
  var introIconSmall = require( 'image!BALANCING_ACT/intro-icon-small.png' );

  function BalanceLabScreen() {

    Screen.call( this,
      introString,
      new Image( introIcon ),
      function() { return new BAIntroModel(); },
      function( model ) { return new BAIntroView( model ); },
      {
        navigationBarIcon: new Image( introIconSmall )
      } );
  }

  return inherit( Screen, BalanceLabScreen );
} );