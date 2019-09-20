// Copyright 2014-2019, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const Dimension2 = require( 'DOT/Dimension2' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  const Text = require( 'SCENERY/nodes/Text' );
  const Vector2 = require( 'DOT/Vector2' );

  // strings
  const levelString = require( 'string!BALANCING_ACT/level' );
  const pattern0Label1ValueString = require( 'string!BALANCING_ACT/pattern0Label1Value' );

  // constants
  const FONT = new PhetFont( 16 );
  const IMAGE_SIZE = new Dimension2( 100, 65 );

  function GameIconNode( image, levelNumber ) {
    Node.call( this );
    const title = new Text( StringUtils.format( pattern0Label1ValueString, levelString, levelNumber ), { font: FONT } );
    this.addChild( title );
    const imageNode = new Image( image );
    imageNode.scale( new Vector2( IMAGE_SIZE.width / imageNode.width, IMAGE_SIZE.height / imageNode.height ) );
    imageNode.top = title.bottom + 4;
    this.addChild( imageNode );
    imageNode.centerX = title.centerX;
  }

  balancingAct.register( 'GameIconNode', GameIconNode );

  return inherit( Node, GameIconNode );
} );
