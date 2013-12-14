// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type represents a mystery mass in the view.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // Constants
  var INSET_PROPORTION = 0.1;

  /**
   * @param {ModelViewTransform} mvt
   * @param {Mass} mass
   * @param {Property} massLabelVisibleProperty
   * @constructor
   */
  function MysteryMassNode( mass, mvt, massLabelVisibleProperty ) {
    ImageMassNode.call( this, mass, mvt, massLabelVisibleProperty );
    var thisNode = this;
    var inset = thisNode.width * INSET_PROPORTION;

    // Create the label.
    var labelText = new Text( mass.labelText, { font: new PhetFont( { size: 12, style: 'bold' } ) } );
    var label = new Rectangle( 0, 0, labelText.width + inset * 2, labelText.height + inset * 2, 5, 5,
      {
        fill: 'white',
        stroke: 'black',
        lineWidth: 1
      } );
    label.addChild( labelText.mutate( { centerX: label.centerX, centerY: label.centerY } ) );

    // Position the label on the image.  TWEAK WARNING - These labels are
    // positioned a little below the center because it looked better on the
    // initial set of mystery masses.  May require adjustment if the artwork
    // for the mystery masses changes.
    label.centerX = thisNode.width / 2;
    label.centerY = thisNode.height / 2;

    // Add the label as a child.
    thisNode.addChild( label );
  }

  return inherit( ImageMassNode, MysteryMassNode );
} );


