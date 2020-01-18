// Copyright 2013-2019, University of Colorado Boulder

/**
 * Node that represents a support column with a non-level (a.k.a. tilted) top
 * in the view.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ColumnState = require( 'BALANCING_ACT/common/model/ColumnState' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LinearGradient = require( 'SCENERY/util/LinearGradient' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Path = require( 'SCENERY/nodes/Path' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );

  /**
   * @param modelViewTransform
   * @param tiltedSupportColumn
   * @param columnState
   * @constructor
   */
  function TiltedSupportColumnNode( modelViewTransform, tiltedSupportColumn, columnState ) {
    Node.call( this );
    const self = this;

    // Create and add the main body of the column.
    const transformedColumnShape = modelViewTransform.modelToViewShape( tiltedSupportColumn.shape );
    const mainBodyGradient = new LinearGradient( transformedColumnShape.bounds.minX, 0, transformedColumnShape.bounds.maxX, 0 ).addColorStop( 0, 'rgb( 150, 150, 150 )' ).addColorStop( 0.25, 'rgb( 230, 230, 230 )' ).addColorStop( 0.65, 'rgb( 150, 150, 150 )' ).addColorStop( 1, 'rgb( 200, 200, 200 )' );

    const columnNode = new Path( transformedColumnShape,
      {
        fill: mainBodyGradient,
        stroke: 'black',
        lineWidth: 1
      } );
    self.addChild( columnNode );

    // Create and add the column support.
    const supportWidth = transformedColumnShape.bounds.width * 1.3; // Empirically determined.
    const supportHeight = transformedColumnShape.bounds.height * 0.15; // Empirically determined.
    const supportGradient = new LinearGradient( transformedColumnShape.bounds.centerX - supportWidth / 2, 0, transformedColumnShape.bounds.centerX + supportWidth / 2, 0 ).addColorStop( 0, 'rgb( 150, 150, 150 )' ).addColorStop( 0.25, 'rgb( 210, 210, 210 )' ).addColorStop( 0.65, 'rgb( 150, 150, 150 )' ).addColorStop( 1, 'rgb( 170, 170, 170 )' );
    const columnSupportNode = new Rectangle(
      transformedColumnShape.bounds.centerX - supportWidth / 2,
      transformedColumnShape.bounds.maxY - supportHeight,
      supportWidth,
      supportHeight,
      3,
      3,
      {
        fill: supportGradient,
        stroke: 'black',
        lineWidth: 1
      } );
    self.addChild( columnSupportNode );

    columnState.link( function( state ) {
      self.visible = state === ColumnState.SINGLE_COLUMN;
    } );
  }

  balancingAct.register( 'TiltedSupportColumnNode', TiltedSupportColumnNode );

  return inherit( Node, TiltedSupportColumnNode );
} );

