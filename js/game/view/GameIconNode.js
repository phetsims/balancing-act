// Copyright 2002-2014, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */
define( function( require ) {
  'use strict';

  // Imports
  var levelString = require( 'string!BALANCING_ACT/level' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // TODO - Temp, remove eventually.
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // Constants
  var FONT = new PhetFont( 16 );
  var IMAGE_SIZE = new Dimension2( 100, 65 );

  function GameIconNode( image, levelNumber ) {
    Node.call( this );
    var title = new Text( levelString + ' ' + levelNumber, { font: FONT } );
    this.addChild( title );
    var imageNode = new Rectangle( 0, 0, IMAGE_SIZE.width, IMAGE_SIZE.height, 0, 0, { top: title.bottom + 5, fill: 'red' } );
    this.addChild( imageNode );
    if ( title.width > imageNode.width ) {
      imageNode.centerX = title.width / 2;
    }
    else {
      title.centerX = imageNode.width / 2;
    }
  }

  return inherit( Node, GameIconNode );
} );