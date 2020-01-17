// Copyright 2013-2019, University of Colorado Boulder

/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const HBox = require( 'SCENERY/nodes/HBox' );
  const HStrut = require( 'SCENERY/nodes/HStrut' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const Panel = require( 'SUN/Panel' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const PositionIndicatorChoice = require( 'BALANCING_ACT/common/model/PositionIndicatorChoice' );
  const Tandem = require( 'TANDEM/Tandem' );

  const Text = require( 'SCENERY/nodes/Text' );
  const VBox = require( 'SCENERY/nodes/VBox' );
  const VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );
  const VStrut = require( 'SCENERY/nodes/VStrut' );

  // strings
  const marksString = require( 'string!BALANCING_ACT/marks' );
  const noneString = require( 'string!BALANCING_ACT/none' );
  const positionString = require( 'string!BALANCING_ACT/position' );
  const rulersString = require( 'string!BALANCING_ACT/rulers' );

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
      touchAreaXDilation: 5,
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

  return inherit( Panel, PositionIndicatorControlPanel );
} );