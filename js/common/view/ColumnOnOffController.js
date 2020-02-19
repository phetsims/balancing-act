// Copyright 2014-2020, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( require => {
  'use strict';

  // modules
  const ABSwitch = require( 'SUN/ABSwitch' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BAQueryParameters = require( 'BALANCING_ACT/common/BAQueryParameters' );
  const ColumnControlIcon = require( 'BALANCING_ACT/common/view/ColumnControlIcon' );
  const ColumnState = require( 'BALANCING_ACT/common/model/ColumnState' );
  const Dimension2 = require( 'DOT/Dimension2' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Panel = require( 'SUN/Panel' );
  const Tandem = require( 'TANDEM/Tandem' );
  const Text = require( 'SCENERY/nodes/Text' );

  // constants
  const ICON_WIDTH = 60;

  function ColumnOnOffController( columnState, options ) {

    options = merge( {
      tandem: Tandem.REQUIRED
    }, options );
    Node.call( this );

    const columnSwitchTandem = options.tandem.createTandem( 'columnSwitch' );
    const columnsOnNode = new ColumnControlIcon( ICON_WIDTH, true, {
      tandem: columnSwitchTandem.createTandem( 'columnsOnNode' )
    } );
    const columnsOffNode = new ColumnControlIcon( ICON_WIDTH, true, {
      tandem: columnSwitchTandem.createTandem( 'columnsOffNode' )
    } );
    const columnSwitch = new ABSwitch( columnState, ColumnState.DOUBLE_COLUMNS, columnsOnNode, ColumnState.NO_COLUMNS, columnsOffNode, {
      toggleSwitchOptions: {
        size: new Dimension2( 32, 16 ),
        thumbTouchAreaXDilation: 5,
        thumbTouchAreaYDilation: 5
      },
      tandem: columnSwitchTandem
    } );

    // TODO: These options were misplaced, should they be deleted?
    // fill: 'rgb( 240, 240, 240 )',
    // cornerRadius: 5
    const panel = new Panel( columnSwitch );
    this.addChild( panel );

    if ( BAQueryParameters.stanford ) {
      const MARGIN = 10;
      const FONT_SIZE = 18;
      const FILL = 'black';
      const textOptions = {
        fill: FILL,
        fontSize: FONT_SIZE
      };
      this.addChild( new Text( 'Setup', merge( {
        right: panel.left - MARGIN,
        bottom: panel.bottom
      }, textOptions ) ) );
      this.addChild( new Text( 'Test', merge( {
        left: panel.right + MARGIN,
        bottom: panel.bottom
      }, textOptions ) ) );
    }

    this.mutate( options );
  }

  balancingAct.register( 'ColumnOnOffController', ColumnOnOffController );

  return inherit( Node, ColumnOnOffController );
} );