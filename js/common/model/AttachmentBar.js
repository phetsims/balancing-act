// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that defines the attachment bar, which is the model element that
 * attaches the pivot point to the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Shape = require( 'KITE/Shape' );

  // Constants
  var WIDTH = 0.05; // In meters.

  /**
   * @param plank
   * @constructor
   */
  function AttachmentBar( plank ) {
    var thisAttachmentBar = this;
    thisAttachmentBar.plank = plank;

    // Function to generate the bar shape.
    function generateBarShape( plank ) {
      var distance = plank.pivotPoint.distance( plank.bottomCenterLocation );
      var barShape = new Shape();
      barShape.moveTo( 0, 0 );
      barShape.lineTo( WIDTH / 2, 0 );
      barShape.lineTo( WIDTH / 2, -distance );
      barShape.lineTo( -WIDTH / 2, -distance );
      barShape.lineTo( -WIDTH / 2, 0 );
      barShape.close();
      barShape = barShape.transformed( Matrix3.translation( plank.pivotPoint.x, plank.pivotPoint.y ) );
      barShape = barShape.transformed( Matrix3.rotationAround( plank.tiltAngle, plank.pivotPoint.x, plank.pivotPoint.y ) );
      return barShape;
    }

    PropertySet.call( this,
      {
        // Shape of the bar, which conveys everything about where it is in
        // model space.  TODO: This may or may not be used, based on what the
        // performance is like in Scenery.  If it is, some of the other
        // properties aren't needed, or at least don't need to be public.  If
        // it *isn't* used, get rid of it from here.
        shape: generateBarShape( plank )
      } );

    // Update the shape whenever the plank's tilt angle changes.
    plank.bottomCenterLocationProperty.link( function() {
      thisAttachmentBar.shape = generateBarShape( thisAttachmentBar.plank );
    } );
  }

  return inherit( PropertySet, AttachmentBar, {
    getPivotPoint: function() {
      return this.plank.pivotPoint;
    },

    /**
     * Get the angle of deflection.
     *
     * @return Zero if the bar is pointing straight down, positive if the bottom
     *         is to the right of the pivot point, negative if the bottom is to
     *         the left of the pivot point.
     */
    getDeflectionAngle: function() {
      return this.plank.tiltAngle;
    }
  } );
} );