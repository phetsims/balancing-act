// Copyright 2013-2019, University of Colorado Boulder

/**
 * This type represents a ruler that sits on the bottom of the plank and
 * rotates as the plank rotates.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Line = require( 'SCENERY/nodes/Line' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Plank = require( 'BALANCING_ACT/common/model/Plank' );
  const RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );
  const RulerNodeRasterizedText = require( 'BALANCING_ACT/common/view/RulerNodeRasterizedText' );

  // strings
  const metersString = require( 'string!BALANCING_ACT/meters' );

  // constants
  const RULER_HEIGHT = 50; // Empirically determined
  const UNITS_FONT = new PhetFont( 14 ); // Empirically determined

  /**
   * @param {Plank} plank
   * @param {ModelViewTransform2} modelViewTransform model-view transform
   * @param {Property} visibleProperty
   * @constructor
   */
  function RotatingRulerNode( plank, modelViewTransform, visibleProperty ) {
    Node.call( this );
    const self = this;

    // Set up the tick mark labels.
    const rulerLengthInModel = Plank.LENGTH - 0.5; // Take 1/2 meter off end of ruler so it doesn't exceed plank length.
    const numTickMarks = rulerLengthInModel * 4 + 1; // Tick marks every 1/4 meter.
    const tickMarkLabels = [];
    for ( let i = 0; i < numTickMarks; i++ ) {
      const labelValue = Math.abs( ( i - ( ( numTickMarks - 1 ) / 2 ) ) / 4 );
      if ( labelValue !== 0 ) {
        tickMarkLabels.push( labelValue );
      }
      else {
        tickMarkLabels.push( '' ); // No label at zero.
      }
    }

    // Create and add the ruler node.
    const rulerLength = modelViewTransform.modelToViewDeltaX( rulerLengthInModel );
    const majorTickMarkWidth = rulerLength / ( numTickMarks - 1 );
    const rulerNode = new RulerNodeRasterizedText( rulerLength, RULER_HEIGHT, majorTickMarkWidth, tickMarkLabels, '',
      {
        backgroundFill: 'rgba( 236, 225, 113, 0.5)',
        majorTickFont: new PhetFont( 11 ),
        tickMarksOnBottom: false
      } );
    self.addChild( rulerNode );

    // Add a line in the center of the ruler to make it look like two separate rulers.
    self.addChild( new Line( rulerNode.centerX, 0, rulerNode.centerX, RULER_HEIGHT, { stroke: 'black' } ) );

    // Add a units label on each side.
    self.addChild( new RasterizedTextNode( metersString, { font: UNITS_FONT }, {
      centerX: rulerNode.width * 0.25,
      bottom: RULER_HEIGHT
    } ) );
    self.addChild( new RasterizedTextNode( metersString, { font: UNITS_FONT }, {
      centerX: rulerNode.width * 0.75,
      bottom: RULER_HEIGHT
    } ) );

    // Observe visibility.
    visibleProperty.link( function( visible ) {
      self.visible = visible;
    } );

    // Set initial position.
    const topCenter = modelViewTransform.modelToViewPosition( plank.bottomCenterLocationProperty.get() );
    self.top = topCenter.y;
    self.centerX = topCenter.x;

    // Rotate with the plank.
    let rulerRotationAngle = 0;
    const rotationPoint = modelViewTransform.modelToViewPosition( plank.pivotPoint );
    plank.tiltAngleProperty.link( function( angle ) {
      const deltaAngle = rulerRotationAngle - angle;
      rulerRotationAngle = angle;
      self.rotateAround( rotationPoint, deltaAngle );
    } );
  }

  balancingAct.register( 'RotatingRulerNode', RotatingRulerNode );

  return inherit( Node, RotatingRulerNode );
} );



