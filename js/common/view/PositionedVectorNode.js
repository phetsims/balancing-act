// Copyright 2002-2013, University of Colorado Boulder

/**
 * Class that depicts a vector that has an origin as well as x and y components,
 * and that monitors the vector and updates the representation when changes
 * occur.
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
  function PositionedVectorNode( positionedVectorProperty, scalingFactor, visibilityProperty, fillColor, mvt ) {
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

  return inherit( Node, PositionedVectorNode, {
    //TODO prototypes
  } );
} );
