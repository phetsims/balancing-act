// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var Property = require( 'AXON/Property' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // Constants
  var READOUT_FONT = new PhetFont( 16 );

  /**
   * @constructor
   */
  function MassValueEntryNode( options ) {
    Node.call( this );
    this.readoutValue = new Property( 0 );
    var readoutText = new Text( '0', { font: READOUT_FONT } );

    var readoutBackground = new Rectangle( 0, 0, readoutText.width * 2, readoutText.height * 1.5, 4, 4,
      {
        fill: 'white',
        stroke: 'black'
      }
    );

    var panelContent = new Node();
    panelContent.addChild( readoutBackground );
    readoutText.centerY = readoutBackground.centerY;
    panelContent.addChild( readoutText );
    var panel = new Panel( panelContent );
    this.addChild( panel );

    // Update the text whenever the value changes.
    this.readoutValue.link( function( value ) {
      readoutText.text = value;
      readoutText.centerX = readoutBackground.centerX;
    } );

    this.mutate( options );
  }

  return inherit( Node, MassValueEntryNode, {
    clear: function() {
      this.readoutValue = 0;
    }
  } );
} );