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

  function Mass( massValue, initialPosition, isMystery ) {
    var thisMass = this;
    PropertySet.call( this,
      {
        // Property that indicates whether this mass is currently user controlled,
        // i.e. being moved around by the user.
        userControlled: false,

        // Property that contains the position in model space.  By convention for
        // this simulation, the position of a mass is the center bottom of the
        // model object.
        position: initialPosition,

        // Property that contains the rotation angle, in radians, of the model
        // element.  By convention for this simulation, the point of rotation is
        // considered to be the center bottom of the model element.
        rotationAngle: 0,

        // Property that tracks whether this mass is on the plank, changes to
        // which may initiate changes in the visual depiction of the mass.
        onPlank: false,

        // Boolean property that indicates whether this model element is currently
        // animating.  At the time of this writing, the only animation supported
        // is a simple linear motion to a preset point.
        animating: false
      } );

    //------------------------------------------------------------------------
    // Externally used (i.e. public) attributes that don't need to be properties.
    //------------------------------------------------------------------------
    thisMass.massValue = massValue;
    thisMass.animationDestination = null;
    thisMass.animationMotionVector = null;
    thisMass.animationScale = 1;
    thisMass.expectedAnimationTime = 0;
    thisMass.isMystery = isMystery;

    // Since not all objects are symmetrical, some may need to have an offset
    // that indicates where their center of mass is when placed on a balance.
    // This is the horizontal offset from the center of the shape or image.
    thisMass.centerOfMassXOffset = 0;
  }

  return inherit( PropertySet, Mass, {
    translate: function( translationVector ) {
      this.position = this.position.plus( translationVector );
    },

    getMiddlePoint: function() { console.log( 'getMiddlePoint should be implemented in descendant types.' ); },

    release: function() { this.userControlled = false; },

    initiateAnimation: function() {
      // Calculate velocity.  A higher velocity is used if the model element
      // has a long way to travel, otherwise it takes too long.
      var velocity = Math.max( this.position.distance( this.animationDestination ) / this.MAX_REMOVAL_ANIMATION_DURATION, this.MIN_ANIMATION_VELOCITY );
      this.expectedAnimationTime = this.position.distance( this.animationDestination ) / velocity; // In seconds.
      // Calculate the animation motion vector.
      this.animationMotionVector = new Vector2( velocity, 0 );
      var animationAngle = Math.atan2( this.animationDestination.y - this.position.y, this.animationDestination.x - this.position.x );
      this.animationMotionVector = this.animationMotionVector.rotated( animationAngle );
      // Update the property that tracks the animation state.
      this.animating = true;
      // Save starting height - needed as a reference.
      this.animationStartHeight = this.height;
    },

    step: function( dt ) {
      if ( this.animating ) {
        // Do a step of the linear animation towards the destination.
        if ( this.position.distance( this.animationDestination ) >= this.animationMotionVector.magnitude() * dt ) {
          // Perform next step of animation.
          this.translate( this.animationMotionVector.times( dt ) );
          this.animationScale = Math.max( this.animationScale - ( dt / this.expectedAnimationTime ) * 0.9, 0.1 );
        }
        else {
          // Close enough - animation is complete.
          this.position = this.animationDestination;
          this.animating = false;
          this.animationScale = 1;
        }
      }
    },

    createCopy: function() { console.log( 'createCopy should be implemented in descendant types.' ); },

    // Public constants - TODO - Probably need to be made public, instead of on the prototype.
    MIN_ANIMATION_VELOCITY: 3, // In meters/sec.
    MAX_REMOVAL_ANIMATION_DURATION: 0.75, // In seconds.
    DEFAULT_INITIAL_LOCATION: new Vector2( 0, 0 )
  } );
} );