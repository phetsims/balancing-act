// Copyright 2013-2019, University of Colorado Boulder

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
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Text = require( 'SCENERY/nodes/Text' );

  // constants
  const INSET_PROPORTION = 0.25;

  /**
   * @param {ModelViewTransform} modelViewTransform
   * @param {Mass} mass
   * @param {Property} massLabelVisibleProperty
   * @constructor
   */
  function MysteryMassNode( mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable ) {
    ImageMassNode.call( this, mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable );
    const self = this;
    const inset = self.imageNode.width * INSET_PROPORTION;

    // Create the label.
    const labelText = new Text( mass.labelText, { font: new PhetFont( { size: 12, weight: 'bold' } ) } );
    const dimension = Math.max( labelText.width, labelText.height );
    const label = new Rectangle( 0, 0, dimension, dimension, 3, 3,
      {
        fill: 'white',
        stroke: 'black',
        lineWidth: 1
      } );
    label.addChild( labelText.mutate( { centerX: label.centerX, centerY: label.centerY } ) );

    // Scale the label to fit.
    const widthScale = ( self.imageNode.width - ( 2 * inset ) ) / label.width;
    const heightScale = ( self.imageNode.height - ( 2 * inset ) ) / label.height;
    label.scale( Math.min( widthScale, heightScale ) );

    // Position the label on the image.  TWEAK WARNING - These labels are
    // positioned a little below the center because it looked better on the
    // initial set of mystery masses.  May require adjustment if the artwork
    // for the mystery masses changes.
    label.centerX = self.imageNode.centerX;
    label.centerY = self.imageNode.centerY + self.imageNode.height * 0.2;

    // Add the label as a child.
    self.addChild( label );
  }

  balancingAct.register( 'MysteryMassNode', MysteryMassNode );

  return inherit( ImageMassNode, MysteryMassNode );
} );


