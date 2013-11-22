// Copyright 2002-2013, University of Colorado Boulder

/**
 * A convenience class that combines a standard vector with a second vector
 * that describes the point of origination.
 *
 * Note: This is a bit of a holdover from the Java implementation of this sim.
 * Probably wouldn't be necessary if starting from scratch in JavaScript.
 *
 * TODO: Check if this is used when sim complete, delete it if not.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  function PositionedVector( origin, vector ) {
    this.origin = origin;
    this.vector = vector;
  }

  return PositionedVector;
} );

