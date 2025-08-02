// Copyright 2013-2025, University of Colorado Boulder

/**
 * This class defines a Scenery node that represents a model element in the view, and the particular model element
 * itself contains an image that is used as the primary representation.
 *
 * @author John Blanco
 */

import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import Matrix3 from '../../../../dot/js/Matrix3.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import ManualConstraint from '../../../../scenery/js/layout/constraints/ManualConstraint.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import defaultImage_png from '../../../images/objects/defaultImage_png.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import BAQueryParameters from '../BAQueryParameters.js';
import ColumnState from '../model/ColumnState.js';
import MassDragHandler from './MassDragHandler.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const pattern0Value1UnitsStringProperty = BalancingActStrings.pattern0Value1UnitsStringProperty;
const unknownMassLabelStringProperty = BalancingActStrings.unknownMassLabelStringProperty;

class ImageMassNode extends Node {

  /**
   * @param imageMass
   * @param modelViewTransform
   * @param {boolean} isLabeled - Flag that controls whether this note include a textual label of the mass
   * @param massLabelVisibleProperty
   * @param {boolean} draggable
   * @param {EnumerationDeprecatedProperty.<ColumnState>} columnStateProperty
   */
  constructor( imageMass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable, columnStateProperty ) {
    super( { cursor: 'pointer' } );
    BAQueryParameters.stanford && columnStateProperty.link( columnState => {
      this.cursor = columnState === ColumnState.DOUBLE_COLUMNS ? 'pointer' : 'default';
      this.pickable = columnState === ColumnState.DOUBLE_COLUMNS;
    } );
    const self = this;

    let massLabel;
    let massLabelContainer;
    const massLabelVisibilityListener = visible => { massLabel.visible = visible; };
    if ( isLabeled ) {

      // Add the mass indicator label.  Note that it is positioned elsewhere.
      const massLabelStringProperty = imageMass.isMystery ? unknownMassLabelStringProperty : new PatternStringProperty(
        pattern0Value1UnitsStringProperty, {
          0: imageMass.massValue,
          1: kgStringProperty
        }, {
          formatNames: [ '0', '1' ]
        } );
      massLabel = new Text( massLabelStringProperty, { font: new PhetFont( 12 ) } );

      // Avoid infinite loops like https://github.com/phetsims/axon/issues/447 by applying the maxWidth to a different Node
      // than the one that is used for layout.
      massLabelContainer = new Node( { children: [ massLabel ] } );
      this.addChild( massLabelContainer );

      // Observe changes to mass indicator label visibility.
      massLabelVisibleProperty.link( massLabelVisibilityListener );
    }

    const imageNode = new Image( defaultImage_png );
    let mouseArea = imageNode.bounds.copy();
    let touchArea = imageNode.bounds.copy();

    // Observe image changes.
    const imageChangeHandler = image => {
      imageNode.setScaleMagnitude( 1 );
      imageNode.setImage( image );

      // Flip the image if reversed, or un-reverse it if it shouldn't be reversed.
      if ( ( imageMass.reverseImage && imageNode.matrix.getDeterminant() > 0 ) ||
           ( !imageMass.reverseImage && imageNode.matrix.getDeterminant() < 0 ) ) {
        imageNode.matrix = imageNode.matrix.timesMatrix( Matrix3.scaling( -1, 1 ) );
      }

      const scalingFactor = Math.abs( modelViewTransform.modelToViewDeltaY( imageMass.heightProperty.get() ) ) /
                            imageNode.height;
      imageNode.scale( scalingFactor );
      imageNode.centerX = 0;

      if ( isLabeled ) {

        ManualConstraint.create( this, [ massLabel, massLabelContainer, imageNode ],
          ( massLabelProxy, massLabelContainerProxy, imageNodeProxy ) => {

            // Avoid infinite loops like https://github.com/phetsims/axon/issues/447 by applying the maxWidth to a different Node
            // than the one that is used for translation.
            massLabelProxy.maxWidth = imageNodeProxy.width;
            massLabelContainerProxy.centerX = imageNodeProxy.centerX + modelViewTransform.modelToViewDeltaX( imageMass.centerOfMassXOffset );
            massLabelContainerProxy.bottom = imageNodeProxy.top;
          } );

        // Increase the touchArea and mouseArea bounds in the x direction if the massLabel extends beyond the imageNode bounds.
        const bounds = imageNode.bounds.copy();
        let boundsXDilation = 0;
        if ( massLabel.bounds.left < bounds.left ) {
          boundsXDilation = bounds.left - massLabel.bounds.left;
        }
        if ( bounds.right < massLabel.bounds.right ) {
          boundsXDilation = massLabel.bounds.right - bounds.right;
        }
        self.setTouchArea( touchArea.dilateX( boundsXDilation ) );
        self.setMouseArea( mouseArea.dilatedX( boundsXDilation ) );
      }
      updatePositionAndAngle();
    };
    imageMass.imageProperty.link( imageChangeHandler );

    // Increase the touchArea and mouseArea bounds to include the height of the massLabel.
    imageNode.boundsProperty.link( () => {
      mouseArea = imageNode.bounds.copy();
      touchArea = imageNode.bounds.copy();
      if ( isLabeled ) {
        const massLabelHeightFactor = massLabel.height / 2;
        mouseArea = mouseArea.dilatedY( massLabelHeightFactor ).shiftedY( -massLabelHeightFactor );
        touchArea = touchArea.dilatedY( massLabelHeightFactor + 5 ).shiftedY( -massLabelHeightFactor + 5 );
      }
      self.setMouseArea( mouseArea );
      self.setTouchArea( touchArea );
    } );

    // Function for updating position and angle, used in multiple places below.
    function updatePositionAndAngle() {
      if ( self.bounds.isFinite() ) {

        self.rotation = 0;
        const imageMassPosition = imageMass.positionProperty.get();

        // Set overall position.  Recall that positions in the model are defined as the center bottom of the item.
        self.centerX = modelViewTransform.modelToViewX( imageMassPosition.x - imageMass.centerOfMassXOffset );
        self.bottom = modelViewTransform.modelToViewY( imageMassPosition.y );

        // Set the rotation.  Rotation point is the center bottom.
        self.rotateAround(
          new Vector2(
            modelViewTransform.modelToViewX( imageMassPosition.x ),
            modelViewTransform.modelToViewY( imageMassPosition.y )
          ),
          -imageMass.rotationAngleProperty.get()
        );
      }
    }

    // Add the image node.
    this.addChild( imageNode );

    // Make the image node visible to descendant classes for layout purposes.
    this.imageNode = imageNode;

    // Observe height changes.
    const heightChangeHandler = newHeight => {
      imageNode.setScaleMagnitude( 1 );
      const scalingFactor = Math.abs( modelViewTransform.modelToViewDeltaY( newHeight ) ) / imageNode.height;
      imageNode.scale( scalingFactor );
      updatePositionAndAngle();
    };
    imageMass.heightProperty.link( heightChangeHandler );

    // Observe position changes.
    imageMass.positionProperty.link( updatePositionAndAngle );

    // Observe rotational angle changes.
    imageMass.rotationAngleProperty.link( updatePositionAndAngle );

    // Make this non-pickable when animating so that users can't grab it mid-flight.
    const animatingStateChangeHandler = animating => {
      if ( !this.isDisposed ) {
        this.pickable = !animating;
      }
    };
    imageMass.animatingProperty.link( animatingStateChangeHandler );

    // Add the mouse event handler if this is intended to be draggable.
    if ( draggable ) {

      // @public (read-only) {MassDragHandler} - drag handler, made available for use by creator nodes
      this.dragHandler = new MassDragHandler( imageMass, modelViewTransform );

      this.addInputListener( this.dragHandler );
    }

    // Remove any linkages that could cause memory leaks.
    this.disposeImageMassNode = () => {
      imageMass.imageProperty.unlink( imageChangeHandler );
      massLabel && massLabel.dispose();
      massLabelContainer && massLabelContainer.dispose();
      if ( massLabelVisibleProperty.hasListener( massLabelVisibilityListener ) ) {
        massLabelVisibleProperty.unlink( massLabelVisibilityListener );
      }
      imageMass.heightProperty.unlink( heightChangeHandler );
      imageMass.positionProperty.unlink( updatePositionAndAngle );
      imageMass.rotationAngleProperty.unlink( updatePositionAndAngle );
      imageMass.animatingProperty.unlink( animatingStateChangeHandler );
    };
  }

  /**
   * @public
   * @override
   */
  dispose() {
    super.dispose();
    this.disposeImageMassNode();
  }
}

balancingAct.register( 'ImageMassNode', ImageMassNode );

export default ImageMassNode;