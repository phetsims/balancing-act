// Copyright 2014-2017, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( require => {
  'use strict';

  // modules
  const ABSwitch = require( 'SUN/ABSwitch' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ColumnControlIcon = require( 'BALANCING_ACT/common/view/ColumnControlIcon' );
  const Dimension2 = require( 'DOT/Dimension2' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Panel = require( 'SUN/Panel' );

  // constants
  const ICON_WIDTH = 60;

  function ColumnOnOffController( columnState, options ) {
    Node.call( this );

    const contentNode = new ABSwitch( columnState, 'doubleColumns', new ColumnControlIcon( ICON_WIDTH, true ), 'noColumns', new ColumnControlIcon( ICON_WIDTH, false ), {
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