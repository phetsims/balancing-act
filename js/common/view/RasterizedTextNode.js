// Copyright 2016-2021, University of Colorado Boulder
/**
 * A scenery node that rasterizes text.  This is needed due to an issue where text moves in undesirable ways when
 * rotated in Chrome and Firefox, see issue #16 (https://github.com/phetsims/balancing-act/issues/16).
 *
 * This node is not generalized to the point where it is safe to use as a full drop-in replacement for a Scenery Text
 * node.  It has been only tested and worked out for the specific needs of the Balancing Act simulation.
 *
 * TODO: At some point, Chrome and Firefox plan to fix the underlying issues with text rendering.  At that time, it
 * should be possible to replace all usages of this class with regular text nodes.  I (@jbphet) tried replacing this
 * with TextNode on April 11, 2018, and decided that the rasterized version still looked better, so that was the most
 * recent evaluation.
 */

import platform from '../../../../phet-core/js/platform.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';

// Since the rasterization is done in the label's parent coordinate frame, we need additional resolution to not look
// blurry.  The default value was empirically determined.
const RASTER_SCALE = 2;

class RasterizedTextNode extends Node {

  /**
   * @param {String} text
   * @param {Object} textOptions
   * @param {Object} nodeOptions
   */
  constructor( text, textOptions, nodeOptions ) {
    super();
    if ( platform.firefox ) {
      // SVG image rotation and scaling causes jitter in Firefox, so we switch to DOM rendering for now.  See
      // https://github.com/phetsims/balancing-act/issues/16
      this.renderer = 'dom';
    }
    textOptions.scale = RASTER_SCALE;
    const label = new Text( text, textOptions ); // create scaled up node to avoid blurry look
    // TODO: maybe try toImageNodeAsynchronous.
    const labelRasterized = label.rasterized();
    labelRasterized.scale( 1 / RASTER_SCALE ); // apply the inverse scale to the rasterized version
    this.addChild( labelRasterized );
    this.localBounds = label.localBounds;
    this.mutate( nodeOptions );
  }
}

balancingAct.register( 'RasterizedTextNode', RasterizedTextNode );

export default RasterizedTextNode;