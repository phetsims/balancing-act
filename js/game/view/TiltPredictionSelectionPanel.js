// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that defines a single panel for use on the tilt prediction selector node.
 */
define( function( require ) {
  'use strict';

  // Imports
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );

  // Constants, collected here for easy appearance tweaking.
  var PANEL_WIDTH = 220; // In screen coords, fairly close to pixels.
  var NON_HIGHLIGHT_COLOR = 'black';
  var NON_HIGHLIGHT_LINE_WIDTH = 1;
  var SELECTED_HIGHLIGHT_COLOR = 'rgb( 255, 215, 0 )';
  var SELECTED_HIGHLIGHT_LINE_WIDTH = 6;
  var CORRECT_ANSWER_HIGHLIGHT_COLOR = 'rgb( 0, 255, 0 )';
  var CORRECT_ANSWER_HIGHLIGHT_LINE_WIDTH = 6;

  /**
   * @constructor
   */
  function TiltPredictionSelectionPanel( image, correspondingPrediction, tiltPredictionProperty, gameStateProperty ) {
    Node.call( this );
    var imagePanel = new Image( image, { cursor: 'pointer' } );
    imagePanel.scale( PANEL_WIDTH / imagePanel.width );
    this.addChild( imagePanel );

    // Set up mouse listener that watches to see if the user has
    // selected this option.
    imagePanel.addInputListener( { mouseReleased: function( event ) { tiltPredictionProperty = correspondingPrediction; } } );

    // Add the outline around the panel, which will be changed to depict the
    // user's selection and the correct answer.
    this.outline = new Path( imagePanel.bounds,
      {
        stroke: NON_HIGHLIGHT_COLOR,
        lineWidth: NON_HIGHLIGHT_LINE_WIDTH
      } );
    this.addChild( this.outline );

    // Add listener for changes to the tilt prediction.
    tiltPredictionProperty.link( function( predictionValue ) {
      // Turn the highlight on or off.
      this.updateHighlightState( predictionValue === correspondingPrediction, gameStateProperty.value === 'displayingCorrectAnswer' );
    } );

    // Add listener for changes to the game state.
    gameStateProperty.addObserver( function( gameState ) {
      this.updateHighlightState( tiltPredictionProperty.value === correspondingPrediction, gameState === 'displayingCorrectAnswer' );
    } );
  }

  return inherit( Node, TiltPredictionSelectionPanel, {
    updateHighlightState: function( selectionMatches, displayingCorrectAnswer ) {
      var outlineColor = NON_HIGHLIGHT_COLOR;
      var outlineLineWidth = NON_HIGHLIGHT_LINE_WIDTH;
      if ( selectionMatches ) {
        if ( displayingCorrectAnswer ) {
          outlineColor = CORRECT_ANSWER_HIGHLIGHT_COLOR;
          outlineLineWidth = CORRECT_ANSWER_HIGHLIGHT_LINE_WIDTH;
        }
        else {
          outlineColor = SELECTED_HIGHLIGHT_COLOR;
          outlineLineWidth = SELECTED_HIGHLIGHT_LINE_WIDTH;
        }
      }
      this.outline.stroke = outlineColor;
      this.outline.lineWidth = outlineLineWidth;
    }
  } );
} );