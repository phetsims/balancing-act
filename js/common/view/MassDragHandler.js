// Copyright 2013-2020, University of Colorado Boulder

/**
 * Common drag handler for mass nodes.  Positions the corresponding model
 * element based on the movement of the mouse, and also sets and clears the
 * property that indicates whether or not the mass is being controlled by the
 * user.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  function MassDragHandler( mass, modelViewTransform ) {
    SimpleDragHandler.call( this, {

      // Allow moving a finger (touch) across a node to pick it up.
      allowTouchSnag: true,

      // Handler that moves the particle in model space.
      translate: function( translationParams ) {
        mass.positionProperty.set(
          mass.positionProperty.get().plus( modelViewTransform.viewToModelDelta( translationParams.delta ) )
        );
        return translationParams.position;
      },

      start: function( event, trail ) {
        mass.userControlledProperty.set( true );
      },

      end: function( event, trail ) {

        // There is a rare multi-touch case where userControlled may already be updated, and we need to handle it by
        // cycling the userControlled state, see https://github.com/phetsims/balancing-act/issues/95.
        if ( mass.userControlledProperty.get() === false ) {
          mass.userControlledProperty.set( true );
        }

        mass.userControlledProperty.set( false );
      }
    } );
  }

  balancingAct.register( 'MassDragHandler', MassDragHandler );

  return inherit( SimpleDragHandler, MassDragHandler );
} );

