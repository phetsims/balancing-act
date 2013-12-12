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
        buttonColor: 'rgb( 255, 184, 77 )',
        minButtonXSpace: 30
      }, options );

    var arrowButtonOptions = {
      arrowWidth: 10,
      arrowHeight: 10,
      fill: options.buttonColor,
      xMargin: 5,
      yMargin: 3
    };

    var nextKitButton = new ArrowButton( 'right', function() {
      selectedKit.value = selectedKit.value + 1;
    }, arrowButtonOptions );
    this.addChild( nextKitButton );

    var previousKitButton = new ArrowButton( 'left', function() {
      selectedKit.value = selectedKit.value - 1;
    }, arrowButtonOptions );
    this.addChild( previousKitButton );

    // Control button enabled state
    selectedKit.link( function( kitNum ) {
      nextKitButton.setEnabled( kitNum < numKits - 1 );
      previousKitButton.setEnabled( kitNum != 0 );
    } );

    // Layout
    var interButtonXSpace = Math.max( options.minButtonXSpace, 2 * options.inset + ( options.titleNode === null ? 0 : options.titleNode.width ) );
    nextKitButton.left = previousKitButton.right + interButtonXSpace;
    if ( options.titleNode !== null ) {
      this.addChild( options.titleNode, { centerX: ( previousKitButton.centerX + nextKitButton.centerX ) / 2 } );
    }

    // If there is only one kit, show the title but not the control buttons.
    // Leave the buttons in the scene graph for keeping layout consistent.
    previousKitButton.visible = numKits > 1;
    nextKitButton.visible = numKits > 1;

    this.mutate( options );
  }

  return inherit( Node, KitControlNode );
} );
