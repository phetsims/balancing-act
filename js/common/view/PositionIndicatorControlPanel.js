// Copyright 2013-2020, University of Colorado Boulder

/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 *
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import HBox from '../../../../scenery/js/nodes/HBox.js';
import HStrut from '../../../../scenery/js/nodes/HStrut.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import VStrut from '../../../../scenery/js/nodes/VStrut.js';
import Panel from '../../../../sun/js/Panel.js';
import VerticalAquaRadioButtonGroup from '../../../../sun/js/VerticalAquaRadioButtonGroup.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingActStrings from '../../balancing-act-strings.js';
import balancingAct from '../../balancingAct.js';
import PositionIndicatorChoice from '../model/PositionIndicatorChoice.js';

const marksString = balancingActStrings.marks;
const noneString = balancingActStrings.none;
const positionString = balancingActStrings.position;
const rulersString = balancingActStrings.rulers;

// constants
const RADIO_BUTTON_TEXT_OPTIONS = { font: new PhetFont( 14 ) };
const TITLE_TEXT_OPTIONS = { font: new PhetFont( 16 ) };

/**
 * @param {Property} positionIndicatorStateProperty
 * @param {Object} [options]
 * @constructor
 */
function PositionIndicatorControlPanel( positionIndicatorStateProperty, options ) {

  options = merge( {
    titleToControlsVerticalSpace: 5,
    fill: 'rgb( 240, 240, 240 )',
    xMargin: 5,
    align: 'left',
    tandem: Tandem.REQUIRED
  }, options );

  const positionRadioButtonGroup = new VerticalAquaRadioButtonGroup( positionIndicatorStateProperty, [
    {
      node: new Text( noneString, RADIO_BUTTON_TEXT_OPTIONS ),
      value: PositionIndicatorChoice.NONE,
      tandemName: 'noneRadioButton'
    },
    {
      node: new Text( rulersString, RADIO_BUTTON_TEXT_OPTIONS ),
      value: PositionIndicatorChoice.RULERS,
      tandemName: 'rulerRadioButton'
    },
    {
      node: new Text( marksString, RADIO_BUTTON_TEXT_OPTIONS ),
      value: PositionIndicatorChoice.MARKS,
      tandemName: 'marksRadioButton'
    }
  ], {
    radioButtonOptions: { radius: 6 },
    touchAreaDilation: 5,
    tandem: options.tandem.createTandem( 'positionRadioButtonGroup' )
  } );

  const positionMarkerVBox = new VBox( {
    children: [
      new Text( positionString, TITLE_TEXT_OPTIONS ),
      new VStrut( options.titleToControlsVerticalSpace ),
      new HBox( { children: [ new HStrut( 10 ), positionRadioButtonGroup ] } )
    ],
    align: 'left'
  } );

  Panel.call( this, positionMarkerVBox, options );
}

balancingAct.register( 'PositionIndicatorControlPanel', PositionIndicatorControlPanel );

inherit( Panel, PositionIndicatorControlPanel );
export default PositionIndicatorControlPanel;