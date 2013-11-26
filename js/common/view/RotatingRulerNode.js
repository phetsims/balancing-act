// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type represents a ruler that sits on the bottom of the plank and
 * rotates as the plank rotates.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var RulerNode = require( 'SCENERY_PHET/RulerNode' );

  // Strings
  var metersString = require( 'string!BALANCING_ACT/meters' );

  /**
   * @param {Plank} plank
   * @param {ModelViewTransform2} mvt model-view transform
   * @param {Property} visibleProperty
   * @constructor
   */
  function RotatingRulerNode( plank, mvt, visibleProperty ) {
    Node.call( this );
    var thisNode = this;
    var rulerWidth = mvt.modelToViewDeltaX( plank.LENGTH );
    var majorTickMarkWidth = rulerWidth / 18;
    this.addChild( new RulerNode( rulerWidth, 30, majorTickMarkWidth, metersString,
      {

      } ) );

    // Observe visibility.
    visibleProperty.link( function( visible ) {
      thisNode.visible = visible;
    } );
  }

  return inherit( Node, RotatingRulerNode, {
    //TODO prototypes
  } );
} );



