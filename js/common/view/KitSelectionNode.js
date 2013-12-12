// Copyright 2002-2013, University of Colorado Boulder

/**
 * Node for showing and scrolling between kits.
 *
 * @author Sam Reid
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var KitControlNode = require( 'BALANCING_ACT/common/view/KitControlNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  /**
   * @param {Property} selectedKit
   * @param {Array} kits
   * @param {Object} options
   * @constructor
   */
  function KitSelectionNode( selectedKit, kits, options ) {
    Node.call( this );
    var thisNode = this;

    options = _.extend(
      {
        // Defaults
        backgroundFill: 'white',
        titleNode: null
      }, options
    );

    // Make the selected kit property visible externally.
    thisNode.selectedKit = selectedKit;

    // Determine the max size of all the kit contents for layout purposes.
    var maxKitContentSize = new Dimension2( 0, 0 );
    var maxKitTitleSize = new Dimension2( 0, 0 );
    kits.forEach( function( kit ) {
      maxKitContentSize.width = Math.max( maxKitContentSize.width, kit.content.width );
      maxKitContentSize.height = Math.max( maxKitContentSize.height, kit.content.height );
      maxKitTitleSize.width = Math.max( maxKitTitleSize.width, kit.title.width );
      maxKitTitleSize.height = Math.max( maxKitTitleSize.height, kit.title.height );
    } );

    var controlNode = new KitControlNode( kits.length, selectedKit, { titleNode: options.titleNode } );

    // Construct and add the background.  Make it big enough to hold the
    // largest kit.
    thisNode.background = new Rectangle( 0, 0, Math.max( Math.max( maxKitContentSize.width, maxKitTitleSize.width ), controlNode.width ),
      controlNode.height + maxKitContentSize.height + maxKitTitleSize.height, 5, 5, { fill: null } );
    thisNode.addChild( thisNode.background );

    // Create the layer that contains all the kits, and add the kits side by
    // side spaced by the distance of the background so only 1 kit will be
    // visible at a time.
    thisNode.kitLayer = new Node();

    // X location of each kit content nodes within the new parent (kitLayer)
    // that will be scrolled across
    var x = 0;

    var availableSpaceForContentNode = thisNode.background.height - maxKitTitleSize.height;
    kits.forEach( function( kit ) {
      // Put the title centered at the top and the content node centered in the
      // available space beneath.
      if ( kit.title ) {
        kit.title.centerX = x + thisNode.background.width / 2;
        kit.title.top = 0;
        thisNode.kitLayer.addChild( kit.title );
      }
      kit.content.centerX = x + thisNode.background.width / 2;
      kit.content.top = kit.title.bottom;
      thisNode.kitLayer.addChild( kit.content );

      //Move over to the next kit
      x += thisNode.background.width;
    } );

    // Clip the kits so that the unselected ones are invisible.
    // TODO: Add clipping.  For now, the kit node is just directly added
    thisNode.kitLayer.top = controlNode.height;
    thisNode.addChild( thisNode.kitLayer );
    thisNode.addChild( controlNode );

    // Set up an observer to set visibility of the selected kit.
    selectedKit.link( function( kit ) {
      thisNode.scrollTo( kit );
    } );

    // Pass through any options intended for Node.
    thisNode.mutate( options );
  }

  return inherit( Node, KitSelectionNode, {
    scrollTo: function( kitNumber ) {
      this.kitLayer.x = -kitNumber * this.background.width;
    }
  } );
} );