// Copyright 2002-2013, University of Colorado Boulder

/**
 * View representation for the type fulcrum.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelObjectNode = require( 'BALANCING_ACT/common/view/ModelObjectNode' );

  function FulcrumNode( mvt, fulcrum ) {
    ModelObjectNode.call( this, mvt, fulcrum.shape, new Color( 240, 240, 0 ) );
  }

  return inherit( ModelObjectNode, FulcrumNode, {
    //TODO prototypes
  } );
} );
