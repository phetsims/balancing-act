// Copyright 2013-2020, University of Colorado Boulder

/**
 * Factory type for creating mass nodes for a given Mass objects.  This
 * basically does the type identification necessary to match the model
 * representation with the appropriate view representation (i.e. node).
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BrickStack = require( 'BALANCING_ACT/common/model/masses/BrickStack' );
  const BrickStackNode = require( 'BALANCING_ACT/common/view/BrickStackNode' );
  const ImageMass = require( 'BALANCING_ACT/common/model/ImageMass' );
  const ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  const MysteryMass = require( 'BALANCING_ACT/common/model/masses/MysteryMass' );
  const MysteryMassNode = require( 'BALANCING_ACT/common/view/MysteryMassNode' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Text = require( 'SCENERY/nodes/Text' );

  const MassNodeFactory = {
    createMassNode: function( mass, modelViewTransform, isLabeled, labelVisibleProperty, columnStateProperty ) {
      let massNode;
      if ( mass instanceof MysteryMass ) {
        massNode = new MysteryMassNode( mass, modelViewTransform, isLabeled, labelVisibleProperty, true, columnStateProperty );
      }
      else if ( mass instanceof ImageMass ) {
        massNode = new ImageMassNode( mass, modelViewTransform, isLabeled, labelVisibleProperty, true, columnStateProperty );
      }
      else if ( mass instanceof BrickStack ) {
        massNode = new BrickStackNode( mass, modelViewTransform, isLabeled, labelVisibleProperty, true, columnStateProperty );
      }
      else {
        assert && assert( true, 'Error: Unrecognized mass type sent to MassNodeFactory.' );
        // In case the ever happens out in the wild, create a fake node.
        const textNode = new Text( 'Unimplemented Mass Node' );
        massNode = new Rectangle( 0, 0, textNode.width * 1.3, textNode.height * 1.3, 0, 0, {
          fill: 'pink',
          stroke: 'black'
        } );
        textNode.centerY = massNode.height / 2;
        massNode.addChild( textNode );
        massNode.center = modelViewTransform.modelToViewPosition( mass.positionProperty.get() );
      }
      return massNode;
    }
  };

  balancingAct.register( 'MassNodeFactory', MassNodeFactory );

  return MassNodeFactory;
} );
