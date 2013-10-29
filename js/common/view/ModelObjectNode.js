// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base type for displaying and interacting with model objects.  Uses the shape
 * of the object, which will change as the object moves, rotates, or changes its
 * basic shape.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );

  // TODO: ModelObjectNode was the Java name, but I (jblanco) don't like it much - consider changing to ShapeNode or something.
  /**
   * @param mvt Model View Transform
   * @param modelObject Model object that has a shape property
   * @param fill Color, gradient, or whatever to use as the fill for this object
   * @constructor
   */
  function ModelObjectNode( mvt, shapeProperty, fill ) {
    Node.call( this );
    var thisNode = this;
    var rootNode = new Node();
    thisNode.addChild( rootNode );

    shapeProperty.link( function( newShape ) {
      rootNode.removeAllChildren();
      rootNode.addChild( new Path( mvt.modelToViewShape( newShape ), { fill: fill, stroke: 'black', lineThickness: 1 } ) );
    } );
  }

  return inherit( Node, ModelObjectNode, {
    //TODO prototypes
  } );
} );
