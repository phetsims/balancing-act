// Copyright 2013-2015, University of Colorado Boulder

/**
 * This type represents a mystery mass in the view.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var INSET_PROPORTION = 0.25;

  /**
   * @param {ModelViewTransform} mvt
   * @param {Mass} mass
   * @param {Property} massLabelVisibleProperty
   * @constructor
   */
  function MysteryMassNode( mass, mvt, isLabeled, massLabelVisibleProperty, draggable ) {
    ImageMassNode.call( this, mass, mvt, isLabeled, massLabelVisibleProperty, draggable );
    var thisNode = this;
    var inset = thisNode.imageNode.width * INSET_PROPORTION;

    // Create the label.
    var labelText = new Text( mass.labelText, { font: new PhetFont( { size: 12, weight: 'bold' } ) } );
    var dimension = Math.max( labelText.width, labelText.height );
    var label = new Rectangle( 0, 0, dimension, dimension, 3, 3,
      {
        fill: 'white',
        stroke: 'black',
        lineWidth: 1
      } );
    label.addChild( labelText.mutate( { centerX: label.centerX, centerY: label.centerY } ) );

    // Scale the label to fit.
    var widthScale = ( thisNode.imageNode.width - ( 2 * inset ) ) / label.width;
    var heightScale = ( thisNode.imageNode.height - ( 2 * inset ) ) / label.height;
    label.scale( Math.min( widthScale, heightScale ) );

    // Position the label on the image.  TWEAK WARNING - These labels are
    // positioned a little below the center because it looked better on the
    // initial set of mystery masses.  May require adjustment if the artwork
    // for the mystery masses changes.
    label.centerX = thisNode.imageNode.centerX;
    label.centerY = thisNode.imageNode.centerY + thisNode.imageNode.height * 0.2;

    // Add the label as a child.
    thisNode.addChild( label );
  }

  return inherit( ImageMassNode, MysteryMassNode );
} );


