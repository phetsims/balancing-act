// Copyright 2013-2015, University of Colorado Boulder

/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );

  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );
  var VStrut = require( 'SCENERY/nodes/VStrut' );

  // strings
  var marksString = require( 'string!BALANCING_ACT/marks' );
  var noneString = require( 'string!BALANCING_ACT/none' );
  var positionString = require( 'string!BALANCING_ACT/position' );
  var rulersString = require( 'string!BALANCING_ACT/rulers' );

  // constants
  var RADIO_BUTTON_TEXT_OPTIONS = { font: new PhetFont( 14 ) };
  var TITLE_TEXT_OPTIONS = { font: new PhetFont( 16 ) };

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

    var positionMarkerRadioButtons = new VerticalAquaRadioButtonGroup( [
      {
        node: new Text( noneString, RADIO_BUTTON_TEXT_OPTIONS ),
        property: positionIndicatorStateProperty,
        value: 'none',
        label: noneString
      },
      {
        node: new Text( rulersString, RADIO_BUTTON_TEXT_OPTIONS ),
        property: positionIndicatorStateProperty,
        value: 'rulers',
        label: rulersString
      },
      {
        node: new Text( marksString, RADIO_BUTTON_TEXT_OPTIONS ),
        property: positionIndicatorStateProperty,
        value: 'marks',
        label: marksString
      }
    ], {
      radius: 6,
      touchAreaXDilation: 5
    } );

    var positionMarkerVBox = new VBox( {
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