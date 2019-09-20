// Copyright 2014-2019, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // imports
  const BAIntroModel = require( 'BALANCING_ACT/intro/model/BAIntroModel' );
  const BAIntroView = require( 'BALANCING_ACT/intro/view/BAIntroView' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const introString = require( 'string!BALANCING_ACT/intro' );

  // images
  const introIcon = require( 'image!BALANCING_ACT/intro-icon.png' );
  const introIconSmall = require( 'image!BALANCING_ACT/intro-icon-small.png' );

  function BAIntroScreen( tandem ) {

    const options = {
      name: introString,
      homeScreenIcon: new Image( introIcon ),
      navigationBarIcon: new Image( introIconSmall ),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new BAIntroModel(); },
      function( model ) { return new BAIntroView( model ); },
      options );
  }

  balancingAct.register( 'BAIntroScreen', BAIntroScreen );

  return inherit( Screen, BAIntroScreen );
} );