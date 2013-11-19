// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Intro" screen.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceView = require( 'BALANCING_ACT/common/view/BasicBalanceView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param model
   * @constructor
   */
  function BAIntroScreen( model ) {
    BasicBalanceView.call( this, model );
    var thisScreen = this;

    model.massList.forEach( function( mass ) {
      // Add a listener that decides what the mass does once it is released
      // by the user.
      mass.userControlledProperty.lazyLink( function( userControlled, wasUserControlled ) {
        if ( !userControlled ) {
          // The user has dropped this mass.
          if ( !model.plank.addMassToSurface( mass ) ) {
            // The attempt to add mass to surface of plank failed,
            // probably because mass was dropped somewhere other
            // than over the plank.
            if ( thisScreen.mvt.modelToViewX( mass.position.x > 0 ) && thisScreen.mvt.modelToViewX( mass.position.x < thisScreen.layoutBounds.width ) ) {
              // Mass is in the visible area, so just
              // drop it on the ground.
              mass.position = new Vector2( mass.position.x, 0 );
            }
            else {
              // Mass is off stage.  Return it to its original position.
              mass.position.reset();
            }
          }
        }
      } );
    } );
  }

  return inherit( BasicBalanceView, BAIntroScreen );
} );

