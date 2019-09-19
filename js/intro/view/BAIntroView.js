// Copyright 2013-2017, University of Colorado Boulder

/**
 * Type that defines the "Intro" screen.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BasicBalanceScreenView = require( 'BALANCING_ACT/common/view/BasicBalanceScreenView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param model
   * @constructor
   */
  function BAIntroView( model ) {
    BasicBalanceScreenView.call( this, model );
    var self = this;

    model.massList.forEach( function( mass ) {
      // Add a listener for when the user drops the mass.  This is done here in this case, rather than in the model,
      // because we need to check whether or not the user dropped it on the "stage" so that it isn't permanently dragged
      // off of the screen.
      mass.userControlledProperty.lazyLink( function( userControlled ) {
        if ( !userControlled ) {
          // The user has dropped this mass.
          if ( !model.plank.addMassToSurface( mass ) ) {
            // The attempt to add mass to surface of plank failed, probably because mass was dropped somewhere other
            // than over the plank.
            var massXPosition = mass.positionProperty.get().x;
            if ( self.modelViewTransform.modelToViewX( massXPosition ) > self.layoutBounds.minX &&
                 self.modelViewTransform.modelToViewX( massXPosition ) < self.layoutBounds.maxX ) {
              // Mass is in the visible area, so just drop it on the ground.
              mass.positionProperty.set( new Vector2( massXPosition, 0 ) );
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

  balancingAct.register( 'BAIntroView', BAIntroView );

  return inherit( BasicBalanceScreenView, BAIntroView );
} );

