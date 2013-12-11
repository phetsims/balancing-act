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
      }, options );

    var nextKitButton = new ArrowButton( 'right', function() {
      selectedKit.value = selectedKit.value + 1;
    }, { fill: options.buttonColor  } );
    this.addChild( nextKitButton );

    var previousKitButton = new ArrowButton( 'left', function() {
      selectedKit.value = selectedKit.value - 1;
    }, { fill: options.buttonColor } );
    this.addChild( previousKitButton );

    // Control button enabled state
    selectedKit.link( function( kitNum ) {
      nextKitButton.setEnabled( kitNum < numKits - 1 );
      previousKitButton.setEnabled( kitNum != 0 );
      console.log( kitNum );
    } );

    // Layout
    if ( options.titleNode !== null ) {
      this.addChild( options.titleNode );
      options.titleNode.centerY = previousKitButton.centerY;
      options.titleNode.left = previousKitButton.right + options.inset;
      nextKitButton.left = options.titleNode.right + options.inset;
    }
    else {
      nextKitButton.left = previousKitButton.right + options.inset * 2;
    }

    // If there is only one kit, show the title but not the control buttons.
    // Leave the buttons in the scene graph for keeping layout consistent.
    previousKitButton.visible = numKits > 1;
    nextKitButton.visible = numKits > 1;

    this.mutate( options );
  }

  return inherit( Node, KitControlNode );
} );
