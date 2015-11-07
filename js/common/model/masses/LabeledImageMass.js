// Copyright 2013-2015, University of Colorado Boulder

/**
 * This is an extension of the ImageMass type that adds a textual label.  This
 * was created in support of a request to label the mystery masses with
 * translatable labels.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );

  /**
   * @param {Vector2} initialPosition
   * @param {Object} config - configuration information for the labeled image mass
   * @constructor
   */
  function LabeledImageMass( initialPosition, config ) {
    ImageMass.call( this, config.massValue, config.image, config.height, initialPosition, config.isMystery );
    this.labelText = config.labelText;
  }

  return inherit( ImageMass, LabeledImageMass );
} );
