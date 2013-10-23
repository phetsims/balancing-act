// Copyright 2002-2013, University of Colorado Boulder

/**
 * This node is intended for use as a background on a screen, and shows the
 * ground on the bottom and the sky on the top.
 * <p/>
 * This assumes that the horizon is at Y=0.
 *
 * TODO: Move this to common code once it is fully debugged.
 *
 * @author John Blanco
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // Imports
  var Rectangle = require( 'DOT/Rectangle' );
  var SkyNode = require( 'BALANCING_ACT/common/view/SkyNode' );
  var GroundNode = require( 'BALANCING_ACT/common/view/GroundNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {ModelViewTransform2} mvt Model view transform
   * @param {number} skyGradientTopY Top of the gradient in model coordinates
   * @param {number} groundGradientBottomY Bottom of the gradient in model coordinates
   * @param {Object} options
   * @constructor
   */
  function OutsideBackgroundNode( mvt, skyGradientTopY, groundGradientBottomY, options ) {

    Node.call( this );

    options = _.extend(
      {
        // Defaults.
        modelRect: new Rectangle( -1000, -2000, 2000, 4000 )
      }
      , options );

    if ( options.modelRect.getMinY() < 0 ) {
      // Add the ground first, because we're earthy people.
      this.addChild( new GroundNode( mvt, options.modelRect, groundGradientBottomY ) );
    }
    if ( options.modelRect.getMaxY() > 0 ) {
      // Add the sky.
      this.addChild( new SkyNode( mvt, options.modelRect, skyGradientTopY ) );
    }
  }

  return inherit( Node, OutsideBackgroundNode );
} );
