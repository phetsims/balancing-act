// Copyright 2013-2020, University of Colorado Boulder

/**
 * This type represents a mystery mass in the view.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  const inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Mass} mass
   * @param {ModelViewTransform} modelViewTransform
   * @param {boolean} isLabeled
   * @param {Property} massLabelVisibleProperty
   * @param {boolean} draggable
   * @param {EnumerationProperty.<ColumnState>} columnStateProperty
   * @constructor
   */
  function MysteryMassNode( mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable, columnStateProperty ) {
    ImageMassNode.call( this, mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable, columnStateProperty );
  }

  balancingAct.register( 'MysteryMassNode', MysteryMassNode );

  return inherit( ImageMassNode, MysteryMassNode );
} );


