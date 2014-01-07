// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Property = require( 'AXON/Property' );

  function TiltPredictionSelectorNode() {
    Node.call( this );
    // Property that tracks the selected prediction.  Value values are 'none',
    // 'tiltDownOnLeftSide', 'stayBalanced', and 'tiltDownOnRightSide'.
    this.tiltPredictionProperty = new Property( 'none' );

    //TODO: Implement the actual selection node.
  }

  return inherit( Node, TiltPredictionSelectorNode, {
    //TODO prototypes
  } );
} );