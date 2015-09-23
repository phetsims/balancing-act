// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the "Intro" screen.
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var BasicBalanceScreenView = require( 'BALANCING_ACT/common/view/BasicBalanceScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param model
   * @constructor
   */
  function BAIntroView( model ) {
    BasicBalanceScreenView.call( this, model );
    var thisScreen = this;

    model.massList.forEach( function( mass ) {
      // Add a listener for when the user drops the mass.  This is done here
      // in this case, rather than in the model, because we need to check
      // whether or not the user dropped it on the "stage" so that it isn't
      // permanently dragged off of the screen.
      mass.userControlledProperty.lazyLink( function( userControlled ) {
        if ( !userControlled ) {
          // The user has dropped this mass.
          if ( !model.plank.addMassToSurface( mass ) ) {
            // The attempt to add mass to surface of plank failed,
            // probably because mass was dropped somewhere other
            // than over the plank.
            if ( thisScreen.mvt.modelToViewX( mass.position.x ) > thisScreen.layoutBounds.minX && thisScreen.mvt.modelToViewX( mass.position.x ) < thisScreen.layoutBounds.maxX ) {
              // Mass is in the visible area, so just
              // drop it on the ground.
              mass.position = new Vector2( mass.position.x, 0 );
            }
            else {
              // Mass is off stage.  Return it to its original position.
              mass.positionProperty.reset();
            }
          }
        }
      } );
    } );
  }

  return inherit( BasicBalanceScreenView, BAIntroView );
} );

