// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var ArrowButton = require( 'SCENERY_PHET/ArrowButton' );
  var inherit = require( 'PHET_CORE/inherit' );
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var Property = require( 'AXON/Property' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );
  var HSlider = require( 'SUN/HSlider' );

  // Constants
  var READOUT_FONT = new PhetFont( 16 );

  /**
   * @constructor
   */
  function MassValueEntryNode( options ) {
    Node.call( this );
    var thisNode = this;
    thisNode.readoutValue = new Property( 0 );

    // Create and add the readout, including the background.
    var readoutText = new Text( '0' + ' ' + kgString, { font: READOUT_FONT } );
    var readoutBackground = new Rectangle( 0, 0, readoutText.width * 2.5, readoutText.height * 1.5, 4, 4,
      {
        fill: 'white',
        stroke: 'black'
      }
    );
    var panelContent = new Node();
    panelContent.addChild( readoutBackground );
    readoutText.centerY = readoutBackground.centerY;
    panelContent.addChild( readoutText );

    // Create and add the slider.
    var slider = new HSlider( thisNode.readoutValue, { min: 0, max: 100 } );
    panelContent.addChild( slider );

    // Create and add the arrow buttons.
    var leftArrowButton = new ArrowButton( 'left', function() { thisNode.readoutValue.value-- } );
    panelContent.addChild( leftArrowButton );
    var rightArrowButton = new ArrowButton( 'right', function() { thisNode.readoutValue.value++ } );
    panelContent.addChild( rightArrowButton );

    // layout
    thisNode.readoutValue.value = 50; // Make sure slider is in the middle during layout.
    readoutBackground.centerX = slider.bounds.width / 2;
    readoutBackground.top = 0;
    slider.left = 0;
    slider.top = readoutBackground.bottom + 5;
    leftArrowButton.right = slider.left - 5;
    leftArrowButton.centerY = slider.centerY;
    rightArrowButton.left = slider.right + 5;
    rightArrowButton.centerY = slider.centerY;
    thisNode.readoutValue.reset(); // Put slider back to original position.

    // Put the contents into a panel.
    var panel = new Panel( panelContent, { fill: 'rgb( 234, 234, 174 )' } );
    thisNode.addChild( panel );

    // Update the readout text whenever the value changes.
    thisNode.readoutValue.link( function( value ) {
      readoutText.text = Math.round( value ) + ' ' + kgString;
      readoutText.centerX = readoutBackground.centerX;
    } );

    thisNode.mutate( options );
  }

  return inherit( Node, MassValueEntryNode, {
    clear: function() {
      this.readoutValue.reset();
    }
  } );
} );