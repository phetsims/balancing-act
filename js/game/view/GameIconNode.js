// Copyright 2002-2014, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */
define( function( require ) {
  'use strict';

  // Imports
  var levelString = require( 'string!BALANCING_ACT/level' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var pattern0Label1Value = require( 'string!BALANCING_ACT/pattern0Label1Value' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var FONT = new PhetFont( 16 );
  var IMAGE_SIZE = new Dimension2( 100, 65 );

  function GameIconNode( image, levelNumber ) {
    Node.call( this );
    debugger;
    var title = new Text( StringUtils.format( pattern0Label1Value, levelString, levelNumber ), { font: FONT } );
    this.addChild( title );
    var imageNode = new Image( image );
    imageNode.scale( new Vector2( IMAGE_SIZE.width / imageNode.width, IMAGE_SIZE.height / imageNode.height ) );
    imageNode.top = title.bottom + 4;
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
