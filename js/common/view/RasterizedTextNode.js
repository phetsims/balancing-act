// Copyright 2002-2014, University of Colorado Boulder
/**
 * A scenery node the rasterizes text.  This is needed due to an issue where
 * text moves in undesirable ways when rotated in Chrome and Firefox, see
 * issue #16 (https://github.com/phetsims/balancing-act/issues/16).
 *
 * This node is not generalized to the point where it is safe to use as a full
 * drop-in replacement for a Scenery Text node.  It has been only tested and
 * worked out for the specific needs of the Balancing Act simulation.
 *
 * TODO: At some point, Chrome and Firefox plan to fix the underlying issue
 * with text rendering.  At that time, it should be possible to replace all
 * usages of this class with regular text nodes.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Text = require( 'SCENERY/nodes/Text' );

  // Since the rasterization is done in the label's parent coordinate
  // frame, we need additional resolution to not look blurry.  The default
  // value was empirically determined.
  var RASTER_SCALE = 2;

  /**
   * @param text
   * @param textOptions
   * @param nodeOptions
   * @constructor
   */
  function RasterizedTextNode( text, textOptions, nodeOptions ) {
    Node.call( this );
    textOptions.scale = RASTER_SCALE;
    var label = new Text( text, textOptions ); // create scaled up node to avoid blurry look
    // TODO: maybe try toImageNodeAsynchronous.
    var labelRasterized = label.toDataURLNodeSynchronous();
    labelRasterized.scale( 1 / RASTER_SCALE ); // apply the inverse scale to the rasterized version
    this.addChild( labelRasterized );
    this.localBounds = label.localBounds;
    this.mutate( nodeOptions );
  }

  return inherit( Node, RasterizedTextNode );
} );