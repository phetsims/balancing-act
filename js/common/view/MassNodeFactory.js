// Copyright 2002-2013, University of Colorado Boulder

/**
 * Factory type for creating mass nodes for a given Mass objects.  This
 * basically does the type identification necessary to match the model
 * representation with the appropriate view representation (i.e. node).
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  var ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  return{
    createMassNode: function( mass, mvt, labelVisibleProperty ) {
      var massNode;
      if ( mass instanceof ImageMass ) {
        massNode = new ImageMassNode( mvt, mass, labelVisibleProperty );
      }
      else if ( mass instanceof ShapeMass ) {
        massNode = new BrickStackNode( mass, mvt, labelVisibleProperty );
      }
      else if ( mass instanceof MysteryMass ) {
        massNode = new MysteryMassNode( mvt, mass, labelVisibleProperty );
      }
      else {
        console.log( "Error: Unrecognized mass type sent to MassNodeFactory." );
        // In case the ever happens out in the wild, create a fake node.
        var textNode = new Text( "Unimplemented Mass Node" );
        massNode = new Rectangle( 0, 0, textNode.width, textNode.height, 0, 0, { fill: 'pink', stroke: 'black'} );
        massNode.addChild( textNode );
        massNode.center = mvt.modelToViewPosition( mass.position );
      }
      return massNode;
    }
  };
} );
