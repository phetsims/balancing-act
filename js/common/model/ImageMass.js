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
  var Mass = require( 'Mass' );

  function ImageMass( mass, image, height, initialPosition, isMystery ) {
    Mass.call( this, initialPosition, isMystery );
  }

  return inherit( Mass, ImageMass, {
    //TODO prototypes
  } );
} );