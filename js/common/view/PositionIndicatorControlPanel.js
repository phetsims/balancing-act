// Copyright 2013-2025, University of Colorado Boulder

/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 *
 * @author John Blanco
 */

import Multilink from '../../../../axon/js/Multilink.js';
import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import HBox from '../../../../scenery/js/layout/nodes/HBox.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import HStrut from '../../../../scenery/js/nodes/HStrut.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VStrut from '../../../../scenery/js/nodes/VStrut.js';
import Panel from '../../../../sun/js/Panel.js';
import VerticalAquaRadioButtonGroup from '../../../../sun/js/VerticalAquaRadioButtonGroup.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import PositionIndicatorChoice from '../model/PositionIndicatorChoice.js';

const marksStringProperty = BalancingActStrings.marksStringProperty;
const noneStringProperty = BalancingActStrings.noneStringProperty;
const positionStringProperty = BalancingActStrings.positionStringProperty;
const rulersStringProperty = BalancingActStrings.rulersStringProperty;

// constants
const RADIO_BUTTON_TEXT_OPTIONS = { font: new PhetFont( 14 ), maxWidth: 100 };
const TITLE_TEXT_OPTIONS = { font: new PhetFont( 16 ), maxWidth: 140 };

class PositionIndicatorControlPanel extends Panel {

  /**
   * @param {Property} positionIndicatorStateProperty
   * @param {number} layoutBoundsWidth
   * @param {Object} [options]
   */
  constructor( positionIndicatorStateProperty, layoutBoundsWidth, options ) {

    options = merge( {
      titleToControlsVerticalSpace: 5,
      fill: 'rgb( 240, 240, 240 )',
      xMargin: 5,
      align: 'left',
      tandem: Tandem.REQUIRED
    }, options );

    const positionRadioButtonGroup = new VerticalAquaRadioButtonGroup( positionIndicatorStateProperty, [
      {
        createNode: () => new Text( noneStringProperty, RADIO_BUTTON_TEXT_OPTIONS ),
        value: PositionIndicatorChoice.NONE,
        tandemName: 'noneRadioButton'
      },
      {
        createNode: () => new Text( rulersStringProperty, RADIO_BUTTON_TEXT_OPTIONS ),
        value: PositionIndicatorChoice.RULERS,
        tandemName: 'rulerRadioButton'
      },
      {
        createNode: () => new Text( marksStringProperty, RADIO_BUTTON_TEXT_OPTIONS ),
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
        new Text( positionStringProperty, TITLE_TEXT_OPTIONS ),
        new VStrut( options.titleToControlsVerticalSpace ),
        new HBox( { children: [ new HStrut( 10 ), positionRadioButtonGroup ] } )
      ],
      align: 'left'
    } );

    super( positionMarkerVBox, options );

    // Ensure the panel doesn't extend past the layout bounds when any of the strings change for dynamic locale
    Multilink.multilink( [ positionStringProperty, marksStringProperty, noneStringProperty, rulersStringProperty ], () => {
      this.right = layoutBoundsWidth - 10;
    } );
  }
}

balancingAct.register( 'PositionIndicatorControlPanel', PositionIndicatorControlPanel );
export default PositionIndicatorControlPanel;