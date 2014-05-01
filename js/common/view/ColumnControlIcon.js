// Copyright 2002-2014, University of Colorado Boulder

/**
 * Icon for the control the turns the column on and off, programmatically
 * drawn for best appearance.
 */
define( function( require ) {
  'use strict';

  // Imports
  var Circle = require( 'SCENERY/nodes/Circle' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var LinearGradient = require( 'SCENERY/util/LinearGradient' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Shape = require( 'KITE/Shape' );

  // Constants
  var CORNER_ROUNDING = 4;
  var ASPECT_RATIO = 1.6; // Ratio of width to height.

  function createMiniColumn( size, options ) {
    var rootNode = new Node();
    var columnFill = new LinearGradient( 0, 0, size.width, 0 ).
      addColorStop( 0, 'rgb( 150, 150, 150 )' ).
      addColorStop( 0.25, 'rgb( 210, 210, 210 )' ).
      addColorStop( 0.65, 'rgb( 150, 150, 150 )' ).
      addColorStop( 1, 'rgb( 170, 170, 170 )' );
    rootNode.addChild( new Rectangle( 0, 0, size.width * 0.8, size.height, 0, 0,
      {
        fill: columnFill,
        stroke: 'black',
        lineWidth: 0.5,
        centerX: 0
      } ) );
    rootNode.addChild( new Rectangle( 0, size.height * 0.8, size.width, size.height * 0.2, 2, 2,
      {
        fill: columnFill,
        stroke: 'black',
        lineWidth: 0.5,
        centerX: 0
      } ) );
    rootNode.mutate( options );
    return rootNode;
  }

  /**
   * @param width
   * @param showColumns
   * @constructor
   */
  function ColumnControlIcon( width, showColumns ) {
    Node.call( this );
    var height = width / ASPECT_RATIO;
    this.addChild( new Rectangle( 0, 0, width, height, CORNER_ROUNDING, CORNER_ROUNDING,
      {
        stroke: 'black',
        lineWidth: 0.5,
        fill: new LinearGradient( 0, 0, 0, height ).addColorStop( 0, '#01ACE4' ).addColorStop( 1, '#D0ECFB' )
      }
    ) );

    // Create and add the fulcrum.
    var fulcrumWidth = width * 0.35;
    var fulcrumHeight = height * 0.5;
    var legThickness = width * 0.075;
    var fulcrumShape = new Shape();
    // Start at leftmost and lowest point.
    fulcrumShape.moveTo( -fulcrumWidth / 2, 0 );
    fulcrumShape.lineTo( -legThickness * 0.67, -fulcrumHeight - legThickness / 2 );
    fulcrumShape.lineTo( legThickness * 0.67, -fulcrumHeight - legThickness / 2 );
    fulcrumShape.lineTo( fulcrumWidth / 2, 0 );
    fulcrumShape.lineTo( fulcrumWidth / 2 - legThickness, 0 );
    fulcrumShape.lineTo( 0, -fulcrumHeight + legThickness * 0.2 );
    fulcrumShape.lineTo( -fulcrumWidth / 2 + legThickness, 0 );
    fulcrumShape.close();
    var fulcrumNode = new Path( fulcrumShape,
      {
        fill: 'rgb( 240, 240, 0 )',
        stroke: 'black',
        lineWidth: 0.5,
        centerX: width / 2,
        bottom: height
      } );
    this.addChild( fulcrumNode );

    // Create and add the plank.
    var plank = new Rectangle( 0, 0, width * 0.9, width * 0.05, 0, 0,
      {
        fill: 'rgb( 243, 203, 127 )',
        stroke: 'black',
        lineWidth: 0.5,
        centerX: width / 2,
        top: fulcrumNode.top + legThickness * 0.67
      } );
    this.addChild( plank );

    // Add the rotation point.
    this.addChild( new Circle( ( plank.top - fulcrumNode.top ) / 2, { fill: 'gray', centerX: width / 2, bottom: plank.top } ) );

    // Add the columns, if present.
    if ( showColumns ) {
      var columnSize = new Dimension2( width * 0.175, height - plank.bottom );
      this.addChild( createMiniColumn( columnSize, { bottom: height, centerX: width * 0.2 } ) );
      this.addChild( createMiniColumn( columnSize, { bottom: height, centerX: width * 0.8 } ) );
    }
  }

  return inherit( Node, ColumnControlIcon );
} );