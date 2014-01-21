// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that defines a single panel for use on the tilt prediction selector node.
 */
define( function( require ) {
  'use strict';

  // Imports
  var DownUpListener = require( 'SCENERY/input/DownUpListener' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Shape = require( 'KITE/Shape' );

  // Constants, collected here for easy appearance tweaking.
  var PANEL_WIDTH = 170; // In screen coords, fairly close to pixels.  Empirically determined.
  var NON_HIGHLIGHT_COLOR = 'black';
  var NON_HIGHLIGHT_LINE_WIDTH = 1;
  var SELECTED_HIGHLIGHT_COLOR = 'rgb( 255, 215, 0 )';
  var SELECTED_HIGHLIGHT_LINE_WIDTH = 6;
  var CORRECT_ANSWER_HIGHLIGHT_COLOR = 'rgb( 0, 255, 0 )';
  var CORRECT_ANSWER_HIGHLIGHT_LINE_WIDTH = 6;
  var INVISIBLE_COLOR = 'rgba( 0, 0, 0, 0 )';

  /**
   * @constructor
   */
  function TiltPredictionSelectionPanel( image, correspondingPrediction, tiltPredictionProperty, gameStateProperty ) {
    Node.call( this );
    var thisNode = this;
    var imagePanel = new Image( image, { cursor: 'pointer' } );
    imagePanel.scale( PANEL_WIDTH / imagePanel.width );
    thisNode.addChild( imagePanel );

    // Set up mouse listener that watches to see if the user has
    // selected this option.
    imagePanel.addInputListener( new DownUpListener(
      {
        up: function( event ) {
          tiltPredictionProperty.value = correspondingPrediction;
        }
      } ) );

    // Add the outline around the panel, which will be changed to depict the
    // user's selection and the correct answer.
    var outlineShape = Shape.rect( imagePanel.bounds.minX, imagePanel.bounds.minY, imagePanel.bounds.width, imagePanel.bounds.minX )
    thisNode.thinOutline = new Rectangle.bounds( imagePanel.bounds,
      {
        stroke: NON_HIGHLIGHT_COLOR,
        lineWidth: NON_HIGHLIGHT_LINE_WIDTH
      } );
    thisNode.addChild( thisNode.thinOutline );
    thisNode.thickOutline = new Rectangle.bounds( imagePanel.bounds,
      {
        stroke: INVISIBLE_COLOR,
        lineWidth: SELECTED_HIGHLIGHT_LINE_WIDTH
      } );
    thisNode.addChild( thisNode.thickOutline );

    // Add listener for changes to the tilt prediction.
    tiltPredictionProperty.link( function( predictionValue ) {
      // Turn the highlight on or off.
      thisNode.updateHighlightState( predictionValue === correspondingPrediction, gameStateProperty.value === 'displayingCorrectAnswer' );
    } );

    // Add listener for changes to the game state.
    gameStateProperty.link( function( gameState ) {
      thisNode.updateHighlightState( tiltPredictionProperty.value === correspondingPrediction, gameState === 'displayingCorrectAnswer' );
    } );
  }

  return inherit( Node, TiltPredictionSelectionPanel, {
    updateHighlightState: function( selectionMatches, displayingCorrectAnswer ) {
      if ( selectionMatches ) {
        this.thinOutline.stroke = INVISIBLE_COLOR;
        if ( displayingCorrectAnswer ) {
          this.thickOutline.stroke = CORRECT_ANSWER_HIGHLIGHT_COLOR;
        }
        else {
          this.thickOutline.stroke = SELECTED_HIGHLIGHT_COLOR;
        }
      }
      else {
        this.thinOutline.stroke = NON_HIGHLIGHT_COLOR;
        this.thickOutline.stroke = INVISIBLE_COLOR;
      }
    }
  } );
} );