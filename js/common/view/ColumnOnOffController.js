// Copyright 2002-2014, University of Colorado Boulder

/**
 * A user interface control that is used to turn the columns on or off.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  function ColumnOnOffController( columnState, options ) {
    Node.call( this );
    // TODO: Temp for testing --------------
    var Rectangle = require( 'SCENERY/nodes/rectangle' );
    this.addChild( new Rectangle( 0, 0, 100, 100, 0, 0, { fill: 'pink' } ) );// TODO: Temp for testing --------------
    // End of temp for testing --------------

    this.mutate( options );
  }

  return inherit( Node, ColumnOnOffController );
} );