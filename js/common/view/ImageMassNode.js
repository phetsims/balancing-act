// Copyright 2002-2013, University of Colorado Boulder

/**
 * This class defines a Scenery node that represents a model element in the
 * view, and the particular model element itself contains an image that is used
 * as the primary representation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var defaultImage = require( 'image!BALANCING_ACT/default-image.png' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Image = require( 'SCENERY/nodes/Image' );
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var MassDragHandler = require( 'BALANCING_ACT/common/view/MassDragHandler' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var Node = require( 'SCENERY/nodes/Node' );
  var pattern0Value1UnitsString = require( 'string!BALANCING_ACT/pattern0Value1Units' );
  var Rectangle = require( 'SCENERY/nodes/rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Transform3 = require( 'DOT/Transform3' );
  var unknownMassString = require( 'string!BALANCING_ACT/unknownMassLabel' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param mvt
   * @param imageMass
   * @param massLabelVisibleProperty
   * @param {boolean} draggable
   * @constructor
   */
  function ImageMassNode( imageMass, mvt, massLabelVisibleProperty, draggable ) {
    Node.call( this, { cursor: 'pointer', pickable: true } );
    var thisNode = this;

    // Add the mass indicator label.  Note that it is positioned elsewhere.
    var massLabelText = imageMass.isMystery ? unknownMassString : StringUtils.format( pattern0Value1UnitsString, imageMass.massValue, kgString );
    var massLabel = new Text( massLabelText, { font: new PhetFont( 12 ) } );
    thisNode.addChild( massLabel );

    // Observe changes to mass indicator label visibility.
    massLabelVisibleProperty.link( function( visible ) {
      massLabel.visible = visible;
    } );

    // Add a rectangle that will be used as a reference when layout out this node.
    var referenceRect = new Rectangle( -20, 0, 40, 20, 0, 0, { fill: 'rgba( 0, 0, 0, 0 )' } );
    thisNode.addChild( referenceRect );

    var imageNode = new Image( defaultImage );
    // Observe image changes.
    var horizontalFlipTransform = new Transform3( Matrix3.scaling( -1, 1 ) );
    imageMass.imageProperty.link( function( image ) {
      imageNode.setScaleMagnitude( 1 );
      imageNode.setImage( image );
      if ( ( imageMass.reverseImage && imageNode.matrix.getDeterminant() > 0 ) ||
           ( !imageMass.reverseImage && imageNode.matrix.getDeterminant() < 0 ) ) {
        // Flip the image if reversed, or un-reverse it if it shouldn't be reversed.
        imageNode.matrix = imageNode.matrix.timesMatrix( Matrix3.scaling( -1, 1 ) );
      }
      var scalingFactor = Math.abs( mvt.modelToViewDeltaY( imageMass.height ) ) / imageNode.height;
      // Debug printouts for indicating whether the image for this node is
      // reasonably scaled.  Generally, scale values between 0.5 and 1 look best.
      if ( scalingFactor > 2 || scalingFactor < 0.5 ) {
        console.log( 'Warning: Scaling factor is too large or small, drawing size should be adjusted.  Scaling factor = ' + scalingFactor );
        console.log( '   Image src = ' + image.getAttribute( 'src' ) );
      }
      if ( scalingFactor > 1 ) {
        console.log( 'Warning: Scaling image up, could lead to blurriness, factor = ' + scalingFactor );
        console.log( '   Image src = ' + image.getAttribute( 'src' ) );
      }
      imageNode.scale( scalingFactor );
      imageNode.centerX = referenceRect.centerX;
      imageNode.bottom = referenceRect.bottom;
      massLabel.centerX = referenceRect.centerX + mvt.modelToViewDeltaX( imageMass.centerOfMassXOffset );
      massLabel.bottom = imageNode.top;
      updatePositionAndAngle();
    } );

    // Function for updating position and angle, used in multiple places below.
    function updatePositionAndAngle() {
      thisNode.rotation = 0;

      // Set overall position.  Recall that positions in the model are defined
      // as the center bottom of the item.
      thisNode.centerX = mvt.modelToViewX( imageMass.position.x - imageMass.centerOfMassXOffset );
      thisNode.bottom = mvt.modelToViewY( imageMass.position.y );

      // Set the rotation.  Rotation point is the center bottom.
      thisNode.rotateAround( new Vector2( mvt.modelToViewX( imageMass.position.x ), mvt.modelToViewY( imageMass.position.y ) ), -imageMass.rotationAngle );
    }

    // Add the image node.
    thisNode.addChild( imageNode );

    // Observe height changes.
    imageMass.heightProperty.link( function( newHeight ) {
      imageNode.setScaleMagnitude( 1 );
      var scalingFactor = Math.abs( mvt.modelToViewDeltaY( newHeight ) ) / imageNode.height;
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

    // Add the mouse event handler.
    if ( draggable ) {
      thisNode.addInputListener( new MassDragHandler( imageMass, mvt ) );
    }
  }

  return inherit( Node, ImageMassNode );
} );