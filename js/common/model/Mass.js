// Copyright 2013-2019, University of Colorado Boulder

/**
 * Base class for all objects that can be placed on the balance.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Vector2 = require( 'DOT/Vector2' );

  // constants
  const MIN_ANIMATION_VELOCITY = 3; // In meters/sec.
  const MAX_REMOVAL_ANIMATION_DURATION = 0.75; // In seconds.

  function Mass( massValue, initialPosition, isMystery ) {
    const self = this;

    // Property that indicates whether this mass is currently user controlled, i.e. being moved around by the user.
    this.userControlledProperty = new Property( false );

    // Property that contains the position in model space.  By convention for this simulation, the position of a mass is
    // the center bottom of the model object.
    this.positionProperty = new Property( initialPosition );

    // Property that contains the rotation angle, in radians, of the model element.  By convention for this simulation,
    // the point of rotation is considered to be the center bottom of the model element.
    this.rotationAngleProperty = new Property( 0 );

    // Property that tracks whether this mass is on the plank, changes to which may initiate changes in the visual
    // depiction of the mass.
    this.onPlankProperty = new Property( false );

    // Boolean property that indicates whether this model element is currently animating.  At the time of this writing,
    // the only animation supported is a simple linear motion to a preset point.
    this.animatingProperty = new Property( false );

    //------------------------------------------------------------------------
    // Externally used (i.e. public) attributes that don't need to be properties.
    //------------------------------------------------------------------------
    self.massValue = massValue;
    self.animationDestination = null;
    self.animationMotionVector = null;
    self.animationScale = 1;
    self.expectedAnimationTime = 0;
    self.isMystery = isMystery;

    // This property is used to keep track of a function that is used to to
    // add/remove this mass from a list of user-controlled masses.
    self.userControlledMassesUpdater = null;

    // Since not all objects are symmetrical, some may need to have an offset
    // that indicates where their center of mass is when placed on a balance.
    // This is the horizontal offset from the center of the shape or image.
    self.centerOfMassXOffset = 0;
  }

  balancingAct.register( 'Mass', Mass );

  return inherit( Object, Mass, {

    reset: function() {
      this.userControlledProperty.reset();
      this.positionProperty.reset();
      this.rotationAngleProperty.reset();
      this.onPlankProperty.reset();
      this.animatingProperty.reset();
    },

    translate: function( translationVector ) {
      this.positionProperty.set( this.positionProperty.get().plus( translationVector ) );
    },

    getMiddlePoint: function() { throw new Error( 'getMiddlePoint should be implemented in descendant types.' ); },

    release: function() { this.userControlledProperty.set( false ); },

    initiateAnimation: function() {

      // Calculate velocity.  A higher velocity is used if the model element has a long way to travel, otherwise it
      // takes too long.
      const position = this.positionProperty.get();
      const velocity = Math.max(
        position.distance( this.animationDestination ) / MAX_REMOVAL_ANIMATION_DURATION,
        MIN_ANIMATION_VELOCITY
      );
      this.expectedAnimationTime = position.distance( this.animationDestination ) / velocity; // In seconds.

      // Calculate the animation motion vector.
      this.animationMotionVector = new Vector2( velocity, 0 );
      const animationAngle = Math.atan2(
        this.animationDestination.y - position.y,
        this.animationDestination.x - position.x
      );
      this.animationMotionVector = this.animationMotionVector.rotated( animationAngle );

      // Update the property that tracks the animation state.
      this.animatingProperty.set( true );
    },

    step: function( dt ) {
      if ( this.animatingProperty.get() ) {

        // Do a step of the linear animation towards the destination.
        if ( this.positionProperty.get().distance( this.animationDestination ) >= this.animationMotionVector.magnitude * dt ) {

          // Perform next step of animation.
          this.translate( this.animationMotionVector.times( dt ) );
          this.animationScale = Math.max( this.animationScale - ( dt / this.expectedAnimationTime ) * 0.9, 0.1 );
        }
        else {

          // Close enough - animation is complete.
          this.positionProperty.set( this.animationDestination );
          this.animatingProperty.set( false );
          this.animationScale = 1;
        }
      }
    },

    createCopy: function() { throw new Error( 'createCopy should be implemented in descendant types.' ); }
  } );
} );
