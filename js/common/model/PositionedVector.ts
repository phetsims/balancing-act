// Copyright 2025, University of Colorado Boulder

/**
 * Type definition for a vector that has both an origin point and a directional vector component.
 * This is used throughout the Balancing Act simulation for force vectors and positioned vectors.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';

type PositionedVector = {
  origin: Vector2;
  vector: Vector2;
};

export default PositionedVector;