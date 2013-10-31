// Copyright 2002-2013, University of Colorado Boulder

/**
 * View representation for the plank.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelObjectNode = require( 'BALANCING_ACT/common/view/ModelObjectNode' );

  function PlankNode( mvt, plank ) {
    ModelObjectNode.call( this, mvt, plank.shapeProperty, new Color( 243, 203, 127 ) );
  }

  return inherit( ModelObjectNode, PlankNode, {
    //TODO prototypes
  } );
} );
