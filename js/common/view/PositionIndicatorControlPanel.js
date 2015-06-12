// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 */
define( function( require ) {
  'use strict';

  // Imports
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var marksString = require( 'string!BALANCING_ACT/marks' );
  var noneString = require( 'string!BALANCING_ACT/none' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var positionString = require( 'string!BALANCING_ACT/position' );
  var rulersString = require( 'string!BALANCING_ACT/rulers' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );
  var VStrut = require( 'SCENERY/nodes/VStrut' );

  // Constants
  var PANEL_OPTION_FONT = { font: new PhetFont( 14 ) };
  var PANEL_TITLE_FONT = new PhetFont( 16 );

  /**
   * @param {Property} positionIndicatorStateProperty
   * @param {Object} [options]
   * @constructor
   */
  function PositionIndicatorControlPanel( positionIndicatorStateProperty, options ) {

    options = _.extend(
      {
        titleToControlsVerticalSpace: 5,
        minWidth: 0.1, // Can't be zero, so defaults to something small
        fill: 'rgb( 240, 240, 240 )',
        xMargin: 5
      }, options );

    var positionMarkerRadioButtons = new VerticalAquaRadioButtonGroup( [
      { node: new Text( noneString, PANEL_OPTION_FONT ), property: positionIndicatorStateProperty, value: 'none', label: noneString },
      { node: new Text( rulersString, PANEL_OPTION_FONT ), property: positionIndicatorStateProperty, value: 'rulers', label: rulersString },
      { node: new Text( marksString, PANEL_OPTION_FONT ), property: positionIndicatorStateProperty, value: 'marks', label: marksString }
    ], { radius: 8 } );
    var positionMarkerVBox = new VBox( {
      children: [
        new Text( positionString, PANEL_TITLE_FONT ),
        new VStrut( options.titleToControlsVerticalSpace ),
        new HStrut( Math.max( 0.1, options.minWidth - 2 * options.xMargin ) ),
        new HBox( { children: [ new HStrut( 10 ), positionMarkerRadioButtons ] } )
      ],
      align: 'left'
    } );

    Panel.call( this, positionMarkerVBox, options );
  }

  return inherit( Panel, PositionIndicatorControlPanel );
} );