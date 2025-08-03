// Copyright 2013-2025, University of Colorado Boulder

/**
 * Common drag handler for mass nodes.  Positions the corresponding model element based on the movement of the mouse or
 * finger, and also sets and clears the property that indicates whether or not the mass is being controlled by the user.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import balancingAct from '../../balancingAct.js';
import Mass from '../model/Mass.js';

class MassDragHandler extends DragListener {

  public constructor( mass: Mass, modelViewTransform: ModelViewTransform2 ) {

    // {Vector2} - offset for dragging, in model coordinate frame
    let dragOffset = Vector2.ZERO;

    super( {

      // Allow moving a finger (touch) across a node to pick it up.
      allowTouchSnag: true,

      start: event => {
        mass.userControlledProperty.set( true );
        const parentPoint = this.globalToParentPoint( event.pointer.point );
        const positionInModelSpace = modelViewTransform.viewToModelPosition( parentPoint );
        dragOffset = mass.positionProperty.value.minus( positionInModelSpace );
      },

      drag: event => {
        const parentPoint = this.globalToParentPoint( event.pointer.point );
        mass.positionProperty.set( modelViewTransform.viewToModelPosition( parentPoint ).plus( dragOffset ) );
      },

      end: () => {

        // There is a rare multi-touch case where userControlled may already be updated, and we need to handle it by
        // cycling the userControlled state, see https://github.com/phetsims/balancing-act/issues/95.
        if ( !mass.userControlledProperty.get() ) {
          mass.userControlledProperty.set( true );
        }

        mass.userControlledProperty.set( false );
      }
    } );
  }
}

balancingAct.register( 'MassDragHandler', MassDragHandler );

export default MassDragHandler;