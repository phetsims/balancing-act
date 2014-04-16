// Copyright 2002-2014, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( function( require ) {
  'use strict';

  // Imports
  var ABSwitch = require( 'SUN/ABSwitch' );
  var balanceWithSupportsIcon = require( 'image!BALANCING_ACT/balance-with-supports-icon.png' );
  var balanceWithoutSupportsIcon = require( 'image!BALANCING_ACT/balance-without-supports-icon.png' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );

  // Constants
  var IMAGE_SCALE = 0.75;

  function ColumnOnOffController( columnState, options ) {
    Node.call( this );
    this.addChild( new Panel(
      new ABSwitch( columnState, 'doubleColumns',
        new Image( balanceWithSupportsIcon, { scale: IMAGE_SCALE } ),
        'noColumns', new Image( balanceWithoutSupportsIcon, { scale: IMAGE_SCALE } ),
        { switchSize: new Dimension2( 26, 13 ) }
      ), { fill: 'rgb( 240, 240, 240 )', cornerRadius: 5 } ) );

    this.mutate( options );
  }

  return inherit( Node, ColumnOnOffController );
} );