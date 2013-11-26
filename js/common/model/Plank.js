// Copyright 2002-2013, University of Colorado Boulder

/**
 * This is the model for the plank upon which masses can be placed.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var MassForceVector = require( 'BALANCING_ACT/common/model/MassForceVector' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var ObservableArray = require( 'AXON/ObservableArray' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Shape = require( 'KITE/Shape' );
  var Transform3 = require( 'DOT/Transform3' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var PLANK_LENGTH = 4.5;// meters
  var PLANK_THICKNESS = 0.05; // meters
  var PLANK_MASS = 75; // kg
  var INTER_SNAP_TO_MARKER_DISTANCE = 0.25; // meters
  var NUM_SNAP_TO_LOCATIONS = Math.floor( PLANK_LENGTH / INTER_SNAP_TO_MARKER_DISTANCE - 1 );
  var MOMENT_OF_INERTIA = PLANK_MASS * ( ( PLANK_LENGTH * PLANK_LENGTH ) + ( PLANK_THICKNESS * PLANK_THICKNESS ) ) / 12;

  /**
   * @param location {Vector2} Initial location of the horizontal center, vertical bottom
   * @param pivotPoint {Vector2} Point around which the plank will pivot
   * @param columnState {Property} Property that indicates current state of support columns.
   * @constructor
   */
  function Plank( location, pivotPoint, columnState ) {
    var thisPlank = this;

    // Create the outline shape of the plank.
    var tempShape = new Shape();
    tempShape.moveTo( 0, 0 );
    tempShape.lineTo( PLANK_LENGTH / 2, 0 );
    tempShape.lineTo( PLANK_LENGTH / 2, PLANK_THICKNESS );
    tempShape.lineTo( 0, PLANK_THICKNESS );
    tempShape.lineTo( -PLANK_LENGTH / 2, PLANK_THICKNESS );
    tempShape.lineTo( -PLANK_LENGTH / 2, 0 );
    tempShape.lineTo( 0, 0 );
    var initialPlankShape = tempShape.transformed( Matrix3.translation( location.x, location.y ) );

    PropertySet.call( this,
      {
        // Point where the bottom center of the plank is currently located.
        // If the plank is sitting on top of the fulcrum, this point will be
        // the same as the pivot point.  When the pivot point is above the
        // plank, as is generally done in this simulation in order to make the
        // plank rebalance if nothing is on it, this location will be
        // different.
        bottomCenterLocation: location,

        // Angle of the plank with respect to the ground.  A value of 0
        // indicates a level plank, positive is tilted left, negative to the
        // right.  In radians.
        tiltAngle: 0,

        // Shape of the plank, which conveys everything about where it is in
        // model space.  TODO: This may or may not be used, based on what the
        // performance is like in scenery.  If it is, some of the other
        // properties aren't needed, or at least don't need to be public.  If
        // it *isn't* used, get rid of it from here.
        shape: initialPlankShape,

        // Shape of the tick marks.  These are calculated here in the model, since
        // their positions correspond to the "snap to" locations, but they are not
        // added to the overall shape so that the view has more freedom to vary
        // their appearance.
        tickMarks: [],

        // Property that indicates whether the plank is being manually moved
        // by the user.
        userControlled: false
      } );

    // Externally visible observable lists.
    thisPlank.massesOnSurface = new ObservableArray();
    thisPlank.forceVectors = new ObservableArray();

    // Map of masses to distance from the plank's center.
    thisPlank.massDistancePairs = [];

    // Variables that need to be retained for dynamic behavior, but are not
    // intended to be accessed externally.
    thisPlank.pivotPoint = new Vector2( pivotPoint.x, pivotPoint.y );
    thisPlank.columnState = columnState;
    thisPlank.angularVelocity = 0;
    thisPlank.currentNetTorque = 0;

    // Listen the our own overall shape and update the tick marks whenever
    // the shape changes.
    thisPlank.shapeProperty.lazyLink( function() {
      thisPlank.updateTickMarks( thisPlank );
    } );

    // Calculate the max angle at which the plank can tilt before hitting
    // the ground.  NOTE: This assumes a small distance between the pivot
    // point and the bottom of the plank.  If this assumption changes, or
    // if the fulcrum becomes movable, the way this is done will need to
    // change.
    thisPlank.maxTiltAngle = Math.asin( location.y / ( PLANK_LENGTH / 2 ) );

    // The original, unrotated shape, which is needed for a number of operations.
    thisPlank.unrotatedShape = initialPlankShape;

    // Maintain the tick mark positions here, since they represent the
    // locations where masses can be placed.
    thisPlank.tickMarks = [];

    // Listen to the support column property.  The plank goes to the level
    // position whenever there are two columns present, and into a tilted
    // position when only one is present.
    columnState.link( function( newColumnState ) {
      if ( newColumnState === 'singleColumn' ) {
        thisPlank.forceToMaxAndStill();
      }
      else if ( newColumnState === 'doubleColumns' ) {
        thisPlank.forceToLevelAndStill();
      }
    } );
  }

  // Inherit from base class and define the methods for this object.
  return inherit( PropertySet, Plank, {

    step: function( dt ) {
      if ( !this.userControlled ) {
        var angularAcceleration;
        this.updateNetTorque();

        // Update the angular acceleration and velocity.  There is some
        // thresholding here to prevent the plank from oscillating forever
        // with small values, since this can cause odd-looking movements
        // of the planks and masses.  The thresholds were empirically
        // determined.
        angularAcceleration = this.currentNetTorque / MOMENT_OF_INERTIA;
        angularAcceleration = Math.abs( angularAcceleration ) > 0.00001 ? angularAcceleration : 0;
        this.angularVelocity += angularAcceleration;
        this.angularVelocity = Math.abs( this.angularVelocity ) > 0.00001 ? this.angularVelocity : 0;

        // Update the angle of the plank's tilt based on the angular velocity.
        var previousTiltAngle = this.tiltAngle;
        var newTiltAngle = this.tiltAngle + this.angularVelocity * dt;
        if ( Math.abs( newTiltAngle ) > this.maxTiltAngle ) {
          // Limit the angle when one end is touching the ground.
          newTiltAngle = this.maxTiltAngle * ( this.tiltAngle < 0 ? -1 : 1 );
          this.angularVelocity = 0;
        }
        else if ( Math.abs( newTiltAngle ) < 0.0001 ) {
          // Below a certain threshold just force the tilt angle to be
          // zero so that it appears perfectly level.
          newTiltAngle = 0;
        }
        this.tiltAngle = newTiltAngle;

        // Update the shape of the plank and the positions of the masses on
        // the surface, but only if the tilt angle has changed.
        if ( this.tiltAngle !== previousTiltAngle ) {
          this.updatePlank();
          this.updateMassPositions();
        }

        // Simulate friction by slowing down the rotation a little.
        this.angularVelocity *= 0.91;
      }
    },

    // Add a mass to the surface of the plank, chooses a location below the mass.
    addMassToSurface: function( mass ) {
      var massAdded = false;
      var closestOpenLocation = this.getOpenMassDroppedLocation( mass.position );
      if ( this.isPointAbovePlank( mass.getMiddlePoint() ) && closestOpenLocation !== null ) {
        mass.position = closestOpenLocation;
        mass.onPlank = true;
        this.massDistancePairs.push(
          {
            mass: mass,
            distance: this.getPlankSurfaceCenter().distance( mass.position ) * ( mass.position.x > this.getPlankSurfaceCenter().x ? 1 : -1 )
          } );

        // Add the force vector for this mass.
        this.forceVectors.push( new MassForceVector( mass ) );

        // Add an observer that will remove this mass when the user picks it up.
        var thisPlank = this;
        var userControlledObserver = function( userControlled ) {
          if ( userControlled ) {
            // The user has picked up this mass, so it is no longer
            // on the surface.
            thisPlank.removeMassFromSurface( mass );
            mass.userControlledProperty.unlink( userControlledObserver );
          }
        };

        mass.userControlledProperty.link( userControlledObserver );
        this.massesOnSurface.push( mass );
        this.updateMassPositions();
        this.updateNetTorque();
        massAdded = true;
      }

      return massAdded;
    },

    // Add a mass to the specified location on the plank.
    addMassToSurfaceAt: function( mass, distanceFromCenter ) {
      if ( distanceFromCenter <= PLANK_LENGTH / 2 ) {
        throw new Error( 'Warning: Attempt to add mass at invalid distance from center' );
      }
      var vectorToLocation = this.getPlankSurfaceCenter().plus( new Vector2( distanceFromCenter, 0 ).rotated( this.tiltAngle ) );
      // Set the position of the mass to be just above the plank at the
      // appropriate distance so that it will drop to the correct place.
      mass.setPosition( vectorToLocation.x, vectorToLocation.y + 0.01 );
      assert( this.isPointAbovePlank( mass.position ) );  // Need to fix this if mass isn't above the surface.
      this.addMassToSurface( mass );
    },

    updateMassPositions: function() {
      var thisPlank = this;
      this.massesOnSurface.forEach( function( mass ) {
        // Compute the vector from the center of the plank's surface to
        // the bottom of the mass, in meters.
        var vectorFromCenterToMass = new Vector2( thisPlank.getMassDistanceFromCenter( mass ), 0 ).rotated( thisPlank.tiltAngle );

        // Set the position and rotation of the mass.
        mass.position = thisPlank.getPlankSurfaceCenter().plus( vectorFromCenterToMass );
        mass.rotationAngle = thisPlank.tiltAngle;
      } );

      // Update the force vectors from the masses.  This mostly just moves
      // them to the correct locations.
      this.forceVectors.forEach( function( forceVectors ) {
        forceVectors.update();
      } );
    },

    removeMassFromSurface: function( mass ) {

      // Remove the mass.
      this.massesOnSurface.remove( mass );

      // Remove the mass-distance pair for this mass.
      for ( var i = 0; i < this.massDistancePairs.length; i++ ) {
        if ( this.massDistancePairs[i].mass === mass ) {
          this.massDistancePairs.splice( i, 1 );
          break;
        }
      }

      // Reset the attributes of the mass that may have been affected by being on the plank.
      mass.rotationAngle = 0;
      mass.onPlank = false;

      // Remove the force vector associated with this mass.
      for ( var j = 0; j < this.forceVectors.length; j++ ) {
        if ( this.forceVectors.get( j ).mass === mass ) {
          this.forceVectors.remove( this.forceVectors.get( j ) );
          break;
        }
      }

      // Update the torque, since the removal of the mass undoubtedly changed it.
      this.updateNetTorque();
    },

    removeAllMasses: function() {
      var copyOfMassesArray = this.massesOnSurface.getArray().slice( 0 );
      var thisPlank = this;
      copyOfMassesArray.forEach( function( mass ) {
        thisPlank.removeMassFromSurface( mass );
      } );
    },

    getMassDistanceFromCenter: function( mass ) {
      for ( var i = 0; i < this.massDistancePairs.length; i++ ) {
        if ( this.massDistancePairs[i].mass === mass ) {
          return this.massDistancePairs[i].distance;
        }
      }
      return 0;
    },

    updatePlank: function() {
      if ( this.pivotPoint.y >= this.unrotatedShape.minY ) {
        throw new Error( 'Pivot point cannot be below the plank.' );
      }
      this.shape = this.unrotatedShape.transformed( Matrix3.rotationAround( this.tiltAngle, this.pivotPoint.x, this.pivotPoint.y ) );
      var attachmentBarVector = new Vector2( 0, this.unrotatedShape.bounds.y - this.pivotPoint.y );
      attachmentBarVector = attachmentBarVector.rotated( this.tiltAngle );
      this.bottomCenterLocation = this.pivotPoint.plus( attachmentBarVector );
    },

    // Find the best open location for a mass that was dropped at the given
    // point.  Returns null if no nearby open location is available.
    getOpenMassDroppedLocation: function( position ) {
      var closestOpenLocation = null;
      var candidateOpenLocations = this.getSnapToLocations();
      if ( NUM_SNAP_TO_LOCATIONS % 2 === 1 ) {
        // Remove the location at the center of the plank from the set of
        // candidates, since we don't want to allow users to place things
        // there.
        candidateOpenLocations.splice( NUM_SNAP_TO_LOCATIONS / 2, 1 );
      }

      // Sort through the locations and eliminate those that are already
      // occupied or too far away.
      var copyOfCandidateLocations = candidateOpenLocations.slice( 0 );
      for ( var i = 0; i < copyOfCandidateLocations.length; i++ ) {
        for ( var j = 0; j < this.massesOnSurface.length; j++ ) {
          if ( this.massesOnSurface.get( j ).position.distance( copyOfCandidateLocations[i] ) < INTER_SNAP_TO_MARKER_DISTANCE / 10 ) {
            // This position is already occupied.
            candidateOpenLocations = _.without( candidateOpenLocations, this.massesOnSurface[j] );
          }
        }
      }

      // Find the closest of the open locations.
      candidateOpenLocations.forEach( function( candidateOpenLocation ) {
        // Must be a reasonable distance away in the horizontal direction
        // so that objects don't appear to fall sideways.
        if ( Math.abs( candidateOpenLocation.x - position.x ) <= INTER_SNAP_TO_MARKER_DISTANCE ) {
          // This location is a potential candidate.  Is it better than what was already found?
          if ( closestOpenLocation === null || candidateOpenLocation.distance( position ) < closestOpenLocation.distance( position ) ) {
            closestOpenLocation = candidateOpenLocation;
          }
        }
      } );
      return closestOpenLocation;
    },

    /**
     * Force the plank back to the level position.  This is generally done
     * when the two support columns are put into place.
     */
    forceToLevelAndStill: function() {
      this.forceAngle( 0.0 );
    },

    /**
     * Force the plank to the max tilted position.  This is generally done
     * when the single big support column is put into place.
     */
    forceToMaxAndStill: function() {
      this.forceAngle( this.maxTiltAngle );
    },

    forceAngle: function( angle ) {
      this.angularVelocity = 0;
      this.tiltAngle = angle;
      this.updatePlank();
      this.updateMassPositions();
    },

    isTickMarkOccupied: function( tickMark ) {
      var tickMarkCenter = new Vector2( tickMark.bounds.centerX(), tickMark.bounds.centerY() );
      var tickMarkDistanceFromCenter = this.getPlankSurfaceCenter().distance( tickMarkCenter );
      if ( tickMarkCenter.x < this.getPlankSurfaceCenter().x ) {
        tickMarkDistanceFromCenter = -tickMarkDistanceFromCenter;
      }
      // Since the distance is from the center of the plank to the center of
      // the tick mark, there needs to be some tolerance built in to
      // recognizing whether masses are at the same distance.
      var massAtThisTickMark = false;
      for ( var i = 0; i < this.massesOnSurface; i++ ) {
        var massDistanceFromCenter = this.getMassDistanceFromCenter( this.massesOnSurface[i] );
        if ( massDistanceFromCenter > tickMarkDistanceFromCenter - PLANK_THICKNESS && massDistanceFromCenter < tickMarkDistanceFromCenter + PLANK_THICKNESS ) {
          massAtThisTickMark = true;
          break;
        }
      }
      return massAtThisTickMark;
    },

    updateTickMarks: function() {
      var interTickMarkDistance = PLANK_LENGTH / ( NUM_SNAP_TO_LOCATIONS + 1 );
      var plankLeftEdgeX = this.unrotatedShape.bounds.minX + interTickMarkDistance;
      var tickMarkYPos = this.unrotatedShape.bounds.minY;
      var rotationTransform = new Transform3( Matrix3.rotationAroundPoint( this.tiltAngle, this.pivotPoint ) );
      var newTickMarks = new Array( NUM_SNAP_TO_LOCATIONS );
      for ( var i = 0; i < NUM_SNAP_TO_LOCATIONS; i++ ) {
        var tickMarkShape = new Shape();
        var xPos = plankLeftEdgeX + interTickMarkDistance * i;
        tickMarkShape.moveTo( xPos, tickMarkYPos );
        tickMarkShape.lineTo( xPos, tickMarkYPos + PLANK_THICKNESS );
        newTickMarks[i] = rotationTransform.transformShape( tickMarkShape );
      }
      this.tickMarks = newTickMarks;
    },

    // Obtain the absolute position (in meters) of the center surface (top)
    // of the plank
    getPlankSurfaceCenter: function() {
      // Start at the absolute location of the attachment point, and add the
      // relative location of the top of the plank, accounting for its
      // rotation angle
      return new Vector2( this.bottomCenterLocation.x, this.bottomCenterLocation.y ).plus( new Vector2( 0, PLANK_THICKNESS ).rotated( this.tiltAngle ) );
    },

    // Obtain the Y value for the surface of the plank for the specified X
    // value.  Does not check for valid x value.
    getSurfaceYValue: function( xValue ) {
      // Solve the linear equation for the line that represents the surface
      // of the plank.
      var m = Math.tan( this.tiltAngle );
      var plankSurfaceCenter = this.getPlankSurfaceCenter();
      var b = plankSurfaceCenter.y - m * plankSurfaceCenter.x;
      // Does NOT check if the xValue range is valid.
      return m * xValue + b;
    },

    isPointAbovePlank: function( p ) {
      var plankBounds = this.shape.bounds;
      return p.x >= plankBounds.minX && p.x <= plankBounds.maxX && p.y > this.getSurfaceYValue( p.x );
    },

    /*
     * Returns true if the masses and distances on the plank work out such
     * that the plank is balanced, even if it is not yet in the level position.
     * This does NOT pay attention to support columns.
     */
    isBalanced: function() {
      var unCompensatedTorque = 0;
      this.massesOnSurface.forEach( function( mass ) {
        unCompensatedTorque += mass.mass * this.getMassDistanceFromCenter( mass );
      } );

      // Account for floating point error, just make sure it is close enough.
      return Math.abs( unCompensatedTorque ) < 1E-6;
    },

    updateNetTorque: function() {
      this.currentNetTorque = 0;
      if ( this.columnState.value === 'noColumns' ) {

        // Add the torque due to the masses on the surface of the plank.
        this.currentNetTorque += this.getTorqueDueToMasses();

        // Add in torque due to plank.
        this.currentNetTorque += ( this.pivotPoint.x - this.bottomCenterLocation.x ) * PLANK_MASS;
      }
    },

    getTorqueDueToMasses: function() {
      var thisPlank = this;
      var torque = 0;
      this.massesOnSurface.forEach( function( mass ) {
        torque += thisPlank.pivotPoint.x - mass.position.x * mass.mass;
      } );
      return torque;
    },

    getSnapToLocations: function() {
      var snapToLocations = new Array( NUM_SNAP_TO_LOCATIONS );
      var rotationTransform = Matrix3.rotationAround( this.tiltAngle, this.pivotPoint.x, this.pivotPoint.y );
      var unrotatedY = this.unrotatedShape.bounds.maxY;
      var unrotatedMinX = this.unrotatedShape.bounds.minX;
      for ( var i = 0; i < NUM_SNAP_TO_LOCATIONS; i++ ) {
        var unrotatedPoint = new Vector2( unrotatedMinX + ( i + 1 ) * INTER_SNAP_TO_MARKER_DISTANCE, unrotatedY );
        snapToLocations[i] = rotationTransform.timesVector2( unrotatedPoint );
      }

      return snapToLocations;
    },

    // Public constants.
    LENGTH: PLANK_LENGTH
  } );

} );