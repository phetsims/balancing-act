// Copyright 2014-2015, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( function( require ) {
  'use strict';

  // modules
  var ABSwitch = require( 'SUN/ABSwitch' );
  var ColumnControlIcon = require( 'BALANCING_ACT/common/view/ColumnControlIcon' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );

  // constants
  var ICON_WIDTH = 60;

  function ColumnOnOffController( columnState, options ) {
    Node.call( this );
    this.addChild( new Panel(
      new ABSwitch( columnState, 'doubleColumns', new ColumnControlIcon( ICON_WIDTH, true ), 'noColumns', new ColumnControlIcon( ICON_WIDTH, false ),
        { switchSize: new Dimension2( 32, 16 ) }
      ), { fill: 'rgb( 240, 240, 240 )', cornerRadius: 5 } ) );

    this.mutate( options );
  }

  return inherit( Node, ColumnOnOffController );
} );