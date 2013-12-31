// Copyright 2002-2013, University of Colorado Boulder

/**
 * This class defines a mass in the model that carries with it an associated
 * image that should be presented in the view.  The image can change at times,
 * such as when it is dropped on the balance.
 * <p/>
 * IMPORTANT: All images used by this class are assumed to have their center of
 * mass in the horizontal direction in the center of the image.  In order to
 * make this work for an image, it may be necessary to have some blank
 * transparent space on one side.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Mass = require( 'BALANCING_ACT/common/model/Mass' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param mass
   * @param image
   * @param height
   * @param initialPosition
   * @param isMystery
   * @constructor
   */
  function ImageMass( mass, image, height, initialPosition, isMystery ) {
    Mass.call( this, mass, initialPosition, isMystery );
    PropertySet.call( this,
      {
        // Property that contains the current image.
        image: image,

        // Property that contains the current height of the corresponding model
        // object.  Only height is used, as opposed to both height and width,
        // because the aspect ratio of the image is expected to be maintained, so
        // the model element's width can be derived from a combination of its
        // height and the the aspect ratio of the image that represents it.  A
        // property is used because the size may change during animations.
        height: height

      } );

    // Flag that indicates whether this node should be represented by a
    // reversed version of the current image, must be set prior to image
    // updates.
    this.reverseImage = false;

    // Expected duration of the current animation.
    this.expectedAnimationTime = 0;

    // Height at initiation of animation - needed for shrinking.
    this.animationStartHeight = height;
  }

  return inherit( Mass, ImageMass, {

    getMiddlePoint: function() {
      return new Vector2( this.position.x, this.position.y + this.height / 2 );
    },

    createCopy: function() {
      return new ImageMass( this.massValue, this.image, this.height, this.position, this.isMystery );
    }
  } );
} );