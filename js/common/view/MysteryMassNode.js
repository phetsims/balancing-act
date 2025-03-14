// Copyright 2013-2025, University of Colorado Boulder

/**
 * This type represents a mystery mass in the view.
 *
 * @author John Blanco
 */

import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import balancingAct from '../../balancingAct.js';
import ImageMassNode from './ImageMassNode.js';

// constants
const INSET_PROPORTION = 0.25;

class MysteryMassNode extends ImageMassNode {

  /**
   * @param {Mass} mass
   * @param {ModelViewTransform2} modelViewTransform
   * @param {boolean} isLabeled
   * @param {Property} massLabelVisibleProperty
   * @param {boolean} draggable
   * @param {EnumerationDeprecatedProperty.<ColumnState>} columnStateProperty
   */
  constructor( mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable, columnStateProperty ) {
    super( mass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable, columnStateProperty );
    const inset = this.imageNode.width * INSET_PROPORTION;

    // Create the label.
    const labelText = new Text( mass.labelTextProperty, { font: new PhetFont( { size: 12, weight: 'bold' } ), maxWidth: 10 } );

    // Padding around the labelText to account for the stroke width of the background label rectangle
    const padding = 1;

    const dimension = Math.max( labelText.width, labelText.height ) + padding;
    const label = new Rectangle( 0, 0, dimension, dimension, 3, 3,
      {
        fill: 'white',
        stroke: 'black',
        lineWidth: padding
      } );
    label.addChild( labelText.mutate( { centerX: label.centerX, centerY: label.centerY } ) );

    // Ensure the labelText stays centered within its background label rectangle for dynamic locale
    const labelCenter = label.center;

    // @private - Only for use in unlinking the listeners
    this.mass = mass;
    this.labelCenterListener = () => { labelText.center = labelCenter; };
    mass.labelTextProperty.link( this.labelCenterListener );

    // Scale the label to fit within the imageNode.
    const widthScale = ( this.imageNode.width - ( 2 * inset ) ) / label.width;
    const heightScale = ( this.imageNode.height - ( 2 * inset ) ) / label.height;
    label.scale( Math.min( widthScale, heightScale ) );

    // Position the label on the image.  TWEAK WARNING - These labels are
    // positioned a little below the center because it looked better on the
    // initial set of mystery masses.  May require adjustment if the artwork
    // for the mystery masses changes.
    label.centerX = this.imageNode.centerX;
    label.centerY = this.imageNode.centerY + this.imageNode.height * 0.2;

    // Add the label as a child.
    this.addChild( label );
  }

  /**
   * @public
   * @override
   */
  dispose() {
    this.mass.labelTextProperty.unlink( this.labelCenterListener );
    super.dispose();
  }
}

balancingAct.register( 'MysteryMassNode', MysteryMassNode );

export default MysteryMassNode;