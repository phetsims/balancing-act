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
  const Panel = require( 'SUN/Panel' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );

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

    options = _.extend( {
      titleToControlsVerticalSpace: 5,
      fill: 'rgb( 240, 240, 240 )',
      xMargin: 5,
      align: 'left'
    }, options );

    const positionMarkerRadioButtons = new VerticalAquaRadioButtonGroup( positionIndicatorStateProperty, [
      {
        node: new Text( noneString, RADIO_BUTTON_TEXT_OPTIONS ),
        value: 'none'
      },
      {
        node: new Text( rulersString, RADIO_BUTTON_TEXT_OPTIONS ),
        value: 'rulers'
      },
      {
        node: new Text( marksString, RADIO_BUTTON_TEXT_OPTIONS ),
        value: 'marks'
      }
    ], {
      radioButtonOptions: { radius: 6 },
      touchAreaXDilation: 5
    } );

    const positionMarkerVBox = new VBox( {
      children: [
        new Text( positionString, TITLE_TEXT_OPTIONS ),
        new VStrut( options.titleToControlsVerticalSpace ),
        new HBox( { children: [ new HStrut( 10 ), positionMarkerRadioButtons ] } )
      ],
      align: 'left'
    } );

    Panel.call( this, positionMarkerVBox, options );
  }

  balancingAct.register( 'PositionIndicatorControlPanel', PositionIndicatorControlPanel );

  return inherit( Panel, PositionIndicatorControlPanel );
} );