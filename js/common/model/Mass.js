// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base class for all objects that can be placed on the balance.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants - TODO - Probably need to be made public.
  var MIN_ANIMATION_VELOCITY = 3; // In meters/sec.
  var MAX_REMOVAL_ANIMATION_DURATION = 0.75; // In seconds.
  var DEFAULT_INITIAL_LOCATION = new Vector2( 0, 0 );

  function Mass( mass, initialPosition, isMystery ) {
    var thisMass = mass;
    PropertySet.call( this,
      {
        // Property that indicates whether this mass is currently user controlled,
        // i.e. being moved around by the user.
        userControlled: false,

        // Property that contains the position in model space.  By convention for
        // this simulation, the position of a mass is the center bottom of the
        // model object.
        position: initialPosition,

        // Property that contains the rotational angle, in radians, of the model
        // element.  By convention for this simulation, the point of rotation is
        // considered to be the center bottom of the model element.
        rotationalAngle: 0,

        // Boolean property that indicates whether this model element is currently
        // animating.  At the time of this writing, the only animation supported
        // is a simple linear motion to a preset point.
        animating: false
      } );

    //------------------------------------------------------------------------
    // Externally used (i.e. public) attributes that do not change after construction.
    //------------------------------------------------------------------------
    thisMass.mass = mass;
    thisMass.animationDestination = null;
    thisMass.animationMoionVector = null;
    thisMass.animationScale = 1;
    thisMass.expectedAnimationTime = 0;
    thisMass.isMystery = isMystery;


  }

  return inherit( PropertySet, Mass, {
    translate: function() { console.log( 'Translate function not implemented.' )}, // TODO: Implement this.
    getMiddlePoint: function() { console.log( 'getMiddlePoint should be implemented in descendant types.' ) },
    initiateAnimation: function() {
      // In this default implementation the signal is sent that says that
      // the animation is complete, but no actual animation is done.
      // Override to implement the subclass-specific animation.  This is
      // done because the animated removal relies on the transition of the
      // animation property from true to false in order to remove the mass
      // from the model, so if a removal animation is initiated and the
      // transition doesn't happen the mass will never go away.
      this.animating = true;
      this.animating = false;
    },
    setOnPlank: function() {
      // Handle any changes that need to happen when added to the plank,
      // such as changes to shape or image.  By default, this does nothing.
    },
    release: function() { this.userControlled = false },
    step: function() { console.log( 'step should be implemented in descendant types.' ) },
    createCopy: function() { console.log( 'createCopy should be implemented in descendant types.' ) }
  } );
} )
;