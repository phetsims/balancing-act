// Copyright 2014-2015, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( function( require ) {
  'use strict';

  // modules
  var ABSwitch = require( 'SUN/ABSwitch' );
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var ColumnControlIcon = require( 'BALANCING_ACT/common/view/ColumnControlIcon' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );

  // constants
  var ICON_WIDTH = 60;

  function ColumnOnOffController( columnState, options ) {
    Node.call( this );

    var contentNode = new ABSwitch( columnState, 'doubleColumns', new ColumnControlIcon( ICON_WIDTH, true ), 'noColumns', new ColumnControlIcon( ICON_WIDTH, false ), {
      switchSize: new Dimension2( 32, 16 ),
      thumbTouchAreaXDilation: 5,
      thumbTouchAreaYDilation: 5
    } );

    this.addChild( new Panel( contentNode ), {
      fill: 'rgb( 240, 240, 240 )',
      cornerRadius: 5
    } );

    this.mutate( options );
  }

  balancingAct.register( 'ColumnOnOffController', ColumnOnOffController );

  return inherit( Node, ColumnOnOffController );
} );