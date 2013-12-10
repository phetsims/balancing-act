// Copyright 2002-2013, University of Colorado Boulder

/**
 * A scenery node that is used to control which kit is selected within a kit
 * selection carousel node.  It contains the back and forward buttons and,
 * optionally, a title node.
 *
 * @author John Blanco
 * @author Sam Reid
 */

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ArrowButton = require( 'SCENERY_PHET/ArrowButton' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {number} numKits
   * @param {Property} selectedKit - A property that tracks the selected kit as an integer
   * @param {Object} options
   * @constructor
   */
  function KitControlNode( numKits, selectedKit, options ) {
    Node.call( this );
    options = _.extend(
      {
        // Default values
        titleNode: null,
        inset: 5,
        buttonColor: 'orange'
      } );

    // Set up the 'next kit' button
    var nextButton = new ArrowButton( 'right', function() {
      selectedKit.value = selectedKit.value + 1;
    } );
    this.addChild( nextButton );

    // Set up the 'previous kit' button
    var previousButton = new ArrowButton( 'left', function() {
      selectedKit.value = selectedKit.value - 1;
    }, { fill: options.buttonColor } );
    this.addChild( previousButton );

    // Control button enabled state
    selectedKit.link( function( kitNum ) {
      nextButton.enabled = kitNum < numKits - 1;
      previousButton.enabled = kitNum != 0;
    }, { fill: options.buttonColor } );

    // Layout
    if ( options.title !== null ) {
      this.addChild( title );
      title.left = previousButton.right + options.inset;
      nextButton.left = title.right + options.inset;
    }
    else {
      nextButton.left = title.right + options.inset * 2;
    }

    // If there is only one kit, show the title but not the control buttons.
    // Leave the buttons in the scene graph for keeping layout consistent.
    previousButton.visible = numKits > 0;
    nextButton.visible = numKits > 0;

    this.mutate( options );
  }

  return inherit( Node, KitControlNode );
} );
