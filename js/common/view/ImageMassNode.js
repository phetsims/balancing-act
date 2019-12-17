// Copyright 2013-2015, University of Colorado Boulder

/**
 * This class defines a Scenery node that represents a model element in the
 * view, and the particular model element itself contains an image that is used
 * as the primary representation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var defaultImage = require( 'image!BALANCING_ACT/default-image.png' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Image = require( 'SCENERY/nodes/Image' );
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var MassDragHandler = require( 'BALANCING_ACT/common/view/MassDragHandler' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var Node = require( 'SCENERY/nodes/Node' );
  var pattern0Value1UnitsString = require( 'string!BALANCING_ACT/pattern0Value1Units' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RasterizedTextNode = require( 'BALANCING_ACT/common/view/RasterizedTextNode' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Vector2 = require( 'DOT/Vector2' );

  // strings
  var unknownMassLabelString = require( 'string!BALANCING_ACT/unknownMassLabel' );

  /**
   * @param imageMass
   * @param modelViewTransform
   * @param {boolean} isLabeled - Flag that controls whether this note include a textual label of the mass
   * @param massLabelVisibleProperty
   * @param {boolean} draggable
   * @constructor
   */
  function ImageMassNode( imageMass, modelViewTransform, isLabeled, massLabelVisibleProperty, draggable ) {
    Node.call( this, { cursor: 'pointer' } );
    var thisNode = this;

    if ( isLabeled ) {

      // Add the mass indicator label.  Note that it is positioned elsewhere.
      var massLabelText = imageMass.isMystery ? unknownMassLabelString : StringUtils.format(
        pattern0Value1UnitsString, imageMass.massValue, kgString );
      var massLabel = new RasterizedTextNode(
        massLabelText,
        { font: new PhetFont( 12 ) },
        { pickable: false } // this is done as a workaround for an issue with RasterizedTextNode, can be made pickable if replaced with Text
      );
      thisNode.addChild( massLabel );

      // Observe changes to mass indicator label visibility.
      massLabelVisibleProperty.link( function( visible ) {
        massLabel.visible = visible;
      } );
    }

    var imageNode = new Image( defaultImage );
    // Observe image changes.
    imageMass.imageProperty.link( function( image ) {
      imageNode.setScaleMagnitude( 1 );
      imageNode.setImage( image );

      // Flip the image if reversed, or un-reverse it if it shouldn't be reversed.
      if ( ( imageMass.reverseImage && imageNode.matrix.getDeterminant() > 0 ) ||
           ( !imageMass.reverseImage && imageNode.matrix.getDeterminant() < 0 ) ) {
        imageNode.matrix = imageNode.matrix.timesMatrix( Matrix3.scaling( -1, 1 ) );
      }

      var scalingFactor = Math.abs( modelViewTransform.modelToViewDeltaY( imageMass.height ) ) / imageNode.height;
      imageNode.scale( scalingFactor );
      imageNode.centerX = 0;
      if ( isLabeled ) {
        massLabel.maxWidth = imageNode.width;
        massLabel.centerX = imageNode.centerX + modelViewTransform.modelToViewDeltaX( imageMass.centerOfMassXOffset );
        massLabel.bottom = imageNode.top;
      }
      updatePositionAndAngle();
    } );

    // Function for updating position and angle, used in multiple places below.
    function updatePositionAndAngle() {
      if ( thisNode.bounds.isFinite() ) {

        thisNode.rotation = 0;

        // Set overall position.  Recall that positions in the model are defined
        // as the center bottom of the item.
        thisNode.centerX = modelViewTransform.modelToViewX( imageMass.position.x - imageMass.centerOfMassXOffset );
        thisNode.bottom = modelViewTransform.modelToViewY( imageMass.position.y );

        // Set the rotation.  Rotation point is the center bottom.
        thisNode.rotateAround( new Vector2(
          modelViewTransform.modelToViewX( imageMass.position.x ),
          modelViewTransform.modelToViewY( imageMass.position.y ) ),
          -imageMass.rotationAngle
        );
      }
    }

    // Add the image node.
    thisNode.addChild( imageNode );

    // Make the image node visible to descendant classes for layout purposes.
    this.imageNode = imageNode;

    // Observe height changes.
    imageMass.heightProperty.link( function( newHeight ) {
      imageNode.setScaleMagnitude( 1 );
      var scalingFactor = Math.abs( modelViewTransform.modelToViewDeltaY( newHeight ) ) / imageNode.height;
      imageNode.scale( scalingFactor );
      updatePositionAndAngle();
    } );

    // Observe position changes.
    imageMass.positionProperty.link( function() {
      updatePositionAndAngle();
    } );

    // Observe rotational angle changes.
    imageMass.rotationAngleProperty.link( function() {
      updatePositionAndAngle();
    } );

    // Make this non-pickable when animating so that users can't grab it mid-flight.
    imageMass.animatingProperty.link( function( animating ) {
      self.pickable = !animating;
    } );

    // Add the mouse event handler.
    if ( draggable ) {
      thisNode.addInputListener( new MassDragHandler( imageMass, modelViewTransform ) );
    }
  }

  balancingAct.register( 'ImageMassNode', ImageMassNode );

  return inherit( Node, ImageMassNode );
} );
