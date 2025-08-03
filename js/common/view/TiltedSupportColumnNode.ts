// Copyright 2013-2025, University of Colorado Boulder

/**
 * Node that represents a support column with a non-level (a.k.a. tilted) top
 * in the view.
 *
 * @author John Blanco
 */

import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import { GET_COLUMN_BODY_GRADIENT, GET_COLUMN_SUPPORT_GRADIENT } from '../../../../scenery-phet/js/LevelSupportColumnNode.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import balancingAct from '../../balancingAct.js';
import ColumnState from '../model/ColumnState.js';

class TiltedSupportColumnNode extends Node {

  public constructor( modelViewTransform: ModelViewTransform2, tiltedSupportColumn: IntentionalAny, columnState: typeof ColumnState ) {
    super();

    // Create and add the main body of the column.
    const transformedColumnShape = modelViewTransform.modelToViewShape( tiltedSupportColumn.shape );
    const mainBodyGradient = GET_COLUMN_BODY_GRADIENT( transformedColumnShape );

    const columnNode = new Path( transformedColumnShape,
      {
        fill: mainBodyGradient,
        stroke: 'black',
        lineWidth: 1
      } );
    this.addChild( columnNode );

    // Create and add the column support.
    const supportWidth = transformedColumnShape.bounds.width * 1.3; // Empirically determined.
    const supportHeight = transformedColumnShape.bounds.height * 0.15; // Empirically determined.
    const supportGradient = GET_COLUMN_SUPPORT_GRADIENT( transformedColumnShape, supportWidth );

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
    this.addChild( columnSupportNode );

    // @ts-expect-error
    columnState.link( state => {
      this.visible = state === ColumnState.SINGLE_COLUMN;
    } );
  }
}

balancingAct.register( 'TiltedSupportColumnNode', TiltedSupportColumnNode );

export default TiltedSupportColumnNode;