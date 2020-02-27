// Copyright 2013-2020, University of Colorado Boulder

/**
 * Type that defines the "Intro" screen.
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import balancingAct from '../../balancingAct.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';

/**
 * @param model
 * @param {Tandem} tandem
 * @constructor
 */
function BAIntroView( model, tandem ) {
  BasicBalanceScreenView.call( this, model, tandem );
  const self = this;

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
          const massXPosition = mass.positionProperty.get().x;
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

inherit( BasicBalanceScreenView, BAIntroView );
export default BAIntroView;