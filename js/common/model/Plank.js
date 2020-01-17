// Copyright 2013-2020, University of Colorado Boulder

/**
 * This is the model for the plank upon which masses can be placed.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BASharedConstants = require( 'BALANCING_ACT/common/BASharedConstants' );
  const ColumnState = require( 'BALANCING_ACT/common/model/ColumnState' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MassForceVector = require( 'BALANCING_ACT/common/model/MassForceVector' );
  const Matrix3 = require( 'DOT/Matrix3' );
  const ObservableArray = require( 'AXON/ObservableArray' );
  const Property = require( 'AXON/Property' );
  const Shape = require( 'KITE/Shape' );
  const Vector2 = require( 'DOT/Vector2' );

  // constants
  const PLANK_LENGTH = 4.5;// meters
  const PLANK_THICKNESS = 0.05; // meters
  const PLANK_MASS = 75; // kg
  const INTER_SNAP_TO_MARKER_DISTANCE = 0.25; // meters
  const NUM_SNAP_TO_LOCATIONS = Math.floor( PLANK_LENGTH / INTER_SNAP_TO_MARKER_DISTANCE - 1 );
  const MOMENT_OF_INERTIA = PLANK_MASS * ( ( PLANK_LENGTH * PLANK_LENGTH ) + ( PLANK_THICKNESS * PLANK_THICKNESS ) ) / 12;

  /**
   * @param location {Vector2} Initial location of the horizontal center, vertical bottom
   * @param pivotPoint {Vector2} Point around which the plank will pivot
   * @param columnState {Property} Property that indicates current state of support columns.
   * @param userControlledMasses {Array} Masses being controlled by the user, used to update active drop locations.
   * @constructor
   */
  function Plank( location, pivotPoint, columnState, userControlledMasses ) {
    const self = this;
    self.userControlledMasses = userControlledMasses;

    // Angle of the plank with respect to the ground.  A value of 0 indicates a level plank, positive is tilted left,
    // negative to the right.  In radians.
    this.tiltAngleProperty = new Property( 0 );

    // Point where the bottom center of the plank is currently located. If the plank is sitting on top of the fulcrum,
    // this point will be the same as the pivot point.  When the pivot point is above the plank, as is generally done
    // in this simulation in order to make the plank rebalance if nothing is on it, this location will be different.
    this.bottomCenterLocationProperty = new Property( location );

    // Externally visible observable lists.
    self.massesOnSurface = new ObservableArray();
    self.forceVectors = new ObservableArray();
    self.activeDropLocations = new ObservableArray(); // Locations where user-controlled masses would land if dropped, in meters from center.

    // Other external visible attributes.
    self.pivotPoint = pivotPoint;

    // Map of masses to distance from the plank's center.
    self.massDistancePairs = [];

    // Variables that need to be retained for dynamic behavior, but are not
    // intended to be accessed externally.
    self.columnState = columnState;
    self.angularVelocity = 0;
    self.currentNetTorque = 0;

    // Calculate the max angle at which the plank can tilt before hitting
    // the ground.  NOTE: This assumes a small distance between the pivot
    // point and the bottom of the plank.  If this assumption changes, or
    // if the fulcrum becomes movable, the way this is done will need to
    // change.
    self.maxTiltAngle = Math.asin( location.y / ( PLANK_LENGTH / 2 ) );

    // Unrotated shape of the plank
    self.unrotatedShape = Shape.rect( location.x - PLANK_LENGTH / 2, location.y, PLANK_LENGTH, PLANK_THICKNESS );

    // Listen to the support column property.  The plank goes to the level
    // position whenever there are two columns present, and into a tilted
    // position when only one is present.
    columnState.link( function( newColumnState ) {
      if ( newColumnState === ColumnState.SINGLE_COLUMN ) {
        self.forceToMaxAndStill();
      }
      else if ( newColumnState === ColumnState.DOUBLE_COLUMNS ) {
        self.forceToLevelAndStill();
      }
    } );
  }

  balancingAct.register( 'Plank', Plank );

  // Inherit from base class and define the methods for this object.
  return inherit( Object, Plank, {
      step: function( dt ) {
        const self = this;
        let angularAcceleration;
        self.updateNetTorque();

        // Update the angular acceleration and velocity.  There is some
        // thresholding here to prevent the plank from oscillating forever
        // with small values, since this can cause odd-looking movements
        // of the planks and masses.  The thresholds were empirically
        // determined.
        angularAcceleration = self.currentNetTorque / MOMENT_OF_INERTIA;
        angularAcceleration = Math.abs( angularAcceleration ) > 0.00001 ? angularAcceleration : 0;
        self.angularVelocity += angularAcceleration;
        self.angularVelocity = Math.abs( self.angularVelocity ) > 0.00001 ? self.angularVelocity : 0;

        // Update the angle of the plank's tilt based on the angular velocity.
        const previousTiltAngle = self.tiltAngleProperty.get();
        let newTiltAngle = self.tiltAngleProperty.get() + self.angularVelocity * dt;
        if ( Math.abs( newTiltAngle ) > self.maxTiltAngle ) {
          // Limit the angle when one end is touching the ground.
          newTiltAngle = self.maxTiltAngle * ( self.tiltAngleProperty.get() < 0 ? -1 : 1 );
          self.angularVelocity = 0;
        }
        else if ( Math.abs( newTiltAngle ) < 0.0001 ) {
          // Below a certain threshold just force the tilt angle to be
          // zero so that it appears perfectly level.
          newTiltAngle = 0;
        }
        self.tiltAngleProperty.set( newTiltAngle );

        // Update the shape of the plank and the positions of the masses on
        // the surface, but only if the tilt angle has changed.
        if ( self.tiltAngleProperty.get() !== previousTiltAngle ) {
          self.updatePlank();
          self.updateMassPositions();
        }

        // Simulate friction by slowing down the rotation a little.
        self.angularVelocity *= 0.91;

        // Update the active drop locations.
        const tempDropLocations = [];
        self.userControlledMasses.forEach( function( userControlledMass ) {
          if ( self.isPointAbovePlank( userControlledMass.getMiddlePoint() ) ) {
            const closestOpenLocation = self.getOpenMassDroppedLocation( userControlledMass.positionProperty.get() );
            if ( closestOpenLocation ) {
              const plankSurfaceCenter = self.getPlankSurfaceCenter();
              const distanceFromCenter = closestOpenLocation.distance( plankSurfaceCenter ) * ( closestOpenLocation.x < 0 ? -1 : 1 );
              tempDropLocations.push( distanceFromCenter );
            }
          }
        } );
        const copyOfActiveDropLocations = self.activeDropLocations.getArray().slice( 0 );
        // Remove newly inactive drop locations.
        copyOfActiveDropLocations.forEach( function( activeDropLocation ) {
          if ( tempDropLocations.indexOf( activeDropLocation ) < 0 ) {
            self.activeDropLocations.remove( activeDropLocation );
          }
        } );
        // Add any new active drop locations.
        tempDropLocations.forEach( function( dropLocation ) {
          if ( !self.activeDropLocations.contains( dropLocation ) ) {
            self.activeDropLocations.add( dropLocation );
          }
        } );
      },

      // Add a mass to the surface of the plank, chooses a location below the mass.
      addMassToSurface: function( mass ) {
        let massAdded = false;
        const closestOpenLocation = this.getOpenMassDroppedLocation( mass.positionProperty.get() );
        if ( this.isPointAbovePlank( mass.getMiddlePoint() ) && closestOpenLocation !== null ) {
          mass.positionProperty.set( closestOpenLocation );
          mass.onPlankProperty.set( true );
          this.massDistancePairs.push(
            {
              mass: mass,
              distance: this.getPlankSurfaceCenter().distance( mass.positionProperty.get() ) *
                        ( mass.positionProperty.get().x > this.getPlankSurfaceCenter().x ? 1 : -1 )
            } );

          // Add the force vector for this mass.
          this.forceVectors.push( new MassForceVector( mass ) );

          // Add an observer that will remove this mass when the user picks it up.
          const self = this;
          var userControlledObserver = function( userControlled ) {
            if ( userControlled ) {
              // The user has picked up this mass, so it is no longer
              // on the surface.
              self.removeMassFromSurface( mass );
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
        if ( Math.abs( distanceFromCenter ) > PLANK_LENGTH / 2 ) {
          throw new Error( 'Warning: Attempt to add mass at invalid distance from center' );
        }
        const vectorToLocation = this.getPlankSurfaceCenter().plus(
          Vector2.createPolar( distanceFromCenter, this.tiltAngleProperty.get() )
        );

        // Set the position of the mass to be just above the plank at the
        // appropriate distance so that it will drop to the correct place.
        mass.positionProperty.set( new Vector2( vectorToLocation.x, vectorToLocation.y + 0.01 ) );
        assert && assert( this.isPointAbovePlank( mass.positionProperty.get() ) );  // Need to fix this if mass isn't above the surface.
        this.addMassToSurface( mass );
      },

      updateMassPositions: function() {
        const self = this;
        this.massesOnSurface.forEach( function( mass ) {
          // Compute the vector from the center of the plank's surface to
          // the bottom of the mass, in meters.
          const vectorFromCenterToMass = new Vector2(
            self.getMassDistanceFromCenter( mass ), 0 ).rotated( self.tiltAngleProperty.get()
          );

          // Set the position and rotation of the mass.
          mass.rotationAngleProperty.set( self.tiltAngleProperty.get() );
          mass.positionProperty.set( self.getPlankSurfaceCenter().plus( vectorFromCenterToMass ) );
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
        for ( let i = 0; i < this.massDistancePairs.length; i++ ) {
          if ( this.massDistancePairs[ i ].mass === mass ) {
            this.massDistancePairs.splice( i, 1 );
            break;
          }
        }

        // Reset the attributes of the mass that may have been affected by being on the plank.
        mass.rotationAngleProperty.set( 0 );
        mass.onPlankProperty.set( false );

        // Remove the force vector associated with this mass.
        for ( let j = 0; j < this.forceVectors.length; j++ ) {
          if ( this.forceVectors.get( j ).mass === mass ) {
            this.forceVectors.remove( this.forceVectors.get( j ) );
            break;
          }
        }

        // Update the torque, since the removal of the mass undoubtedly changed it.
        this.updateNetTorque();
      },

      removeAllMasses: function() {
        const copyOfMassesArray = this.massesOnSurface.getArray().slice( 0 );
        const self = this;
        copyOfMassesArray.forEach( function( mass ) {
          self.removeMassFromSurface( mass );
        } );
      },

      getMassDistanceFromCenter: function( mass ) {
        for ( let i = 0; i < this.massDistancePairs.length; i++ ) {
          if ( this.massDistancePairs[ i ].mass === mass ) {
            return this.massDistancePairs[ i ].distance;
          }
        }
        return 0;
      },

      updatePlank: function() {
        if ( this.pivotPoint.y < this.unrotatedShape.minY ) {
          throw new Error( 'Pivot point cannot be below the plank.' );
        }
        let attachmentBarVector = new Vector2( 0, this.unrotatedShape.bounds.y - this.pivotPoint.y );
        attachmentBarVector = attachmentBarVector.rotated( this.tiltAngleProperty.get() );
        this.bottomCenterLocationProperty.set( this.pivotPoint.plus( attachmentBarVector ) );
      },

      // Find the best open location for a mass that was dropped at the given
      // point.  Returns null if no nearby open location is available.
      getOpenMassDroppedLocation: function( position ) {
        const self = this;
        let closestOpenLocation = null;
        const validMassLocations = this.getSnapToLocations();
        if ( NUM_SNAP_TO_LOCATIONS % 2 === 1 ) {
          // Remove the location at the center of the plank from the set of
          // candidates, since we don't want to allow users to place things
          // there.
          validMassLocations.splice( NUM_SNAP_TO_LOCATIONS / 2, 1 );
        }

        let candidateOpenLocations = [];

        validMassLocations.forEach( function( validLocation ) {
          let occupiedOrTooFar = false;
          if ( Math.abs( validLocation.x - position.x ) > INTER_SNAP_TO_MARKER_DISTANCE * 2 ) {
            occupiedOrTooFar = true;
          }
          for ( let i = 0; i < self.massesOnSurface.length && !occupiedOrTooFar; i++ ) {
            if ( self.massesOnSurface.get( i ).positionProperty.get().distance( validLocation ) < INTER_SNAP_TO_MARKER_DISTANCE / 10 ) {
              occupiedOrTooFar = true;
            }
          }
          if ( !occupiedOrTooFar ) {
            candidateOpenLocations.push( validLocation );
          }
        } );

        // Sort through the locations and eliminate those that are already
        // occupied or too far away.
        const copyOfCandidateLocations = candidateOpenLocations.slice( 0 );
        for ( let i = 0; i < copyOfCandidateLocations.length; i++ ) {
          for ( let j = 0; j < this.massesOnSurface.length; j++ ) {
            if ( this.massesOnSurface.get( j ).positionProperty.get().distance( copyOfCandidateLocations[ i ] ) < INTER_SNAP_TO_MARKER_DISTANCE / 10 ) {
              // This position is already occupied.
              candidateOpenLocations = _.without( candidateOpenLocations, this.massesOnSurface[ j ] );
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
        this.tiltAngleProperty.set( angle );
        this.updatePlank();
        this.updateMassPositions();
      },

      // Obtain the absolute position (in meters) of the center surface (top)
      // of the plank
      getPlankSurfaceCenter: function() {
        // Start at the absolute location of the attachment point, and add the
        // relative location of the top of the plank, accounting for its
        // rotation angle
        return this.bottomCenterLocationProperty.get().plus(
          Vector2.createPolar( PLANK_THICKNESS, this.tiltAngleProperty.get() + Math.PI / 2 )
        );
      },

      // Obtain the Y value for the surface of the plank for the specified X
      // value.  Does not check for valid x value.
      getSurfaceYValue: function( xValue ) {
        // Solve the linear equation for the line that represents the surface
        // of the plank.
        const m = Math.tan( this.tiltAngleProperty.get() );
        const plankSurfaceCenter = this.getPlankSurfaceCenter();
        const b = plankSurfaceCenter.y - m * plankSurfaceCenter.x;
        // Does NOT check if the xValue range is valid.
        return m * xValue + b;
      },

      isPointAbovePlank: function( p ) {
        const plankSpan = PLANK_LENGTH * Math.cos( this.tiltAngleProperty.get() );
        const surfaceCenter = this.getPlankSurfaceCenter();
        return p.x >= surfaceCenter.x - ( plankSpan / 2 ) && p.x <= surfaceCenter.x + ( plankSpan / 2 ) && p.y > this.getSurfaceYValue( p.x );
      },

      /*
       * Returns true if the masses and distances on the plank work out such
       * that the plank is balanced, even if it is not yet in the level position.
       * This does NOT pay attention to support columns.
       */
      isBalanced: function() {
        let unCompensatedTorque = 0;
        const self = this;
        this.massesOnSurface.forEach( function( mass ) {
          unCompensatedTorque += mass.massValue * self.getMassDistanceFromCenter( mass );
        } );

        // Account for floating point error, just make sure it is close enough.
        return Math.abs( unCompensatedTorque ) < BASharedConstants.COMPARISON_TOLERANCE;
      },

      updateNetTorque: function() {
        this.currentNetTorque = 0;
        if ( this.columnState.value === ColumnState.NO_COLUMNS ) {

          // Add the torque due to the masses on the surface of the plank.
          this.currentNetTorque += this.getTorqueDueToMasses();

          // Add in torque due to plank.
          this.currentNetTorque += ( this.pivotPoint.x - this.bottomCenterLocationProperty.get().x ) * PLANK_MASS;
        }
      },

      getTorqueDueToMasses: function() {
        const self = this;
        let torque = 0;
        this.massesOnSurface.forEach( function( mass ) {
          torque += self.pivotPoint.x - mass.positionProperty.get().x * mass.massValue;
        } );
        return torque;
      },

      getSnapToLocations: function() {
        const snapToLocations = new Array( NUM_SNAP_TO_LOCATIONS );
        const rotationTransform = Matrix3.rotationAround(
          this.tiltAngleProperty.get(),
          this.pivotPoint.x,
          this.pivotPoint.y
        );
        const unrotatedY = this.unrotatedShape.bounds.maxY;
        const unrotatedMinX = this.unrotatedShape.bounds.minX;
        for ( let i = 0; i < NUM_SNAP_TO_LOCATIONS; i++ ) {
          const unrotatedPoint = new Vector2( unrotatedMinX + ( i + 1 ) * INTER_SNAP_TO_MARKER_DISTANCE, unrotatedY );
          snapToLocations[ i ] = rotationTransform.timesVector2( unrotatedPoint );
        }

        return snapToLocations;
      }
    },
    {
      // Public constants.
      LENGTH: PLANK_LENGTH,
      THICKNESS: PLANK_THICKNESS,
      INTER_SNAP_TO_MARKER_DISTANCE: INTER_SNAP_TO_MARKER_DISTANCE,
      NUM_SNAP_TO_LOCATIONS: NUM_SNAP_TO_LOCATIONS
    }
  );
} );
