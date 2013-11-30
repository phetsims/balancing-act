// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type defines a mass in the model whose appearance is defined by its
 * shape as opposed to, say, an image.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Mass = require( 'BALANCING_ACT/common/model/Mass' );
  var Property = require( 'Mass' );
  var Vector2 = require( 'DOT/Vector2' );

  function ShapeMass( massValue, shape ) {
    Mass.call( this, massValue );

    // TODO: Is this really needed, i.e. do any of the sub-types change shape
    // once constructed?  If not, it may make sense to do away with this level
    // of the inheritance hierarchy altogether.
    this.shapeProperty = new Property( shape );
  }

  return inherit( Mass, ShapeMass, {
    getMiddlePoint: function() {
      return this.shapeProperty.value.bounds.center.rotated( this.rotationAngle ).plus( this.position );
    }
  } );
} );