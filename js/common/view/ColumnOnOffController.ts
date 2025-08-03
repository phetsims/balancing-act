// Copyright 2014-2025, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import optionize from '../../../../phet-core/js/optionize.js';
import Node, { NodeOptions } from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import ABSwitch from '../../../../sun/js/ABSwitch.js';
import Panel from '../../../../sun/js/Panel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import BAQueryParameters from '../BAQueryParameters.js';
import ColumnState from '../model/ColumnState.js';
import ColumnControlIcon from './ColumnControlIcon.js';

// constants
const ICON_WIDTH = 60;

type SelfOptions = {
  // Currently no self options
};

type ColumnOnOffControllerOptions = SelfOptions & NodeOptions;

class ColumnOnOffController extends Node {

  public constructor( columnState: Property<typeof ColumnState>, providedOptions?: ColumnOnOffControllerOptions ) {

    const options = optionize<ColumnOnOffControllerOptions, SelfOptions, NodeOptions>()( {
      tandem: Tandem.REQUIRED
    }, providedOptions );
    super( options );

    const columnSwitchTandem = options.tandem.createTandem( 'columnSwitch' );
    const columnsOnNode = new ColumnControlIcon( ICON_WIDTH, true, {
      tandem: columnSwitchTandem.createTandem( 'columnsOnNode' )
    } );
    const columnsOffNode = new ColumnControlIcon( ICON_WIDTH, false, {
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

    const panel = new Panel( columnSwitch );
    this.addChild( panel );

    if ( BAQueryParameters.stanford ) {
      const MARGIN = 10;
      const FONT_SIZE = 18;
      const FILL = 'black';
      this.addChild( new Text( 'Setup', {
        right: panel.left - MARGIN,
        bottom: panel.bottom,
        fill: FILL,
        fontSize: FONT_SIZE
      } ) );
      this.addChild( new Text( 'Test', {
        left: panel.right + MARGIN,
        bottom: panel.bottom,
        fill: FILL,
        fontSize: FONT_SIZE
      } ) );
    }

    this.mutate( options );
  }
}

balancingAct.register( 'ColumnOnOffController', ColumnOnOffController );

export default ColumnOnOffController;