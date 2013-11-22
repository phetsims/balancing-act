// Copyright 2002-2013, University of Colorado Boulder

/**
 * Class that depicts a "mystery vector", which is a vector that is presented to
 * the user in the appropriate location but that has a fixed size and it labeled
 * with a question mark (or some other symbol).
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param positionedVectorProperty
   * @param scalingFactor
   * @param visibilityProperty
   * @param fillColor
   * @param mvt Model-view transform
   * @constructor
   */
  function MysteryVectorNode( positionedVectorProperty, scalingFactor, visibilityProperty, fillColor, mvt ) {
    Node.call( this );
    var thisNode = this;
    // Create the vector node and add it as a child.
    //TODO this is stubbed, port needs to be completed.

    var Rectangle = require( 'SCENERY/nodes/Rectangle' );
    thisNode.addChild( new Rectangle( 0, 0, 20, 20, 0, 0, {fill: 'pink', stroke: 'black'} ) );

    positionedVectorProperty.link( function( positionedVector ) {
      thisNode.centerX = mvt.modelToViewX( positionedVector.origin.x );
      thisNode.centerY = mvt.modelToViewY( positionedVector.origin.y );
    } );

    visibilityProperty.link( function( visible ) {
      thisNode.visible = visible;
    } );
  }

  return inherit( Node, MysteryVectorNode, {
    //TODO prototypes
  } );
} );
