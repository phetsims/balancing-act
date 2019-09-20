// Copyright 2014-2019, University of Colorado Boulder

/**
 * Node that defines a single panel for use on the tilt prediction selector node.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const DownUpListener = require( 'SCENERY/input/DownUpListener' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants, collected here for easy appearance tweaking.
  const PANEL_WIDTH = 170; // In screen coords, fairly close to pixels.  Empirically determined.
  const NON_HIGHLIGHT_COLOR = 'black';
  const NON_HIGHLIGHT_LINE_WIDTH = 1;
  const HOVER_LINE_WIDTH = 2;
  const SELECTED_HIGHLIGHT_COLOR = 'rgb( 255, 215, 0 )';
  const SELECTED_HIGHLIGHT_LINE_WIDTH = 6;
  const CORRECT_ANSWER_HIGHLIGHT_COLOR = 'rgb( 0, 255, 0 )';
  const INVISIBLE_COLOR = 'rgba( 0, 0, 0, 0 )';

  /**
   * @constructor
   */
  function TiltPredictionSelectionPanel( image, correspondingPrediction, tiltPredictionProperty, gameStateProperty ) {
    Node.call( this );
    const self = this;

    // Add the image.
    const imagePanel = new Image( image, { cursor: 'pointer' } );
    imagePanel.scale( PANEL_WIDTH / imagePanel.width );
    self.addChild( imagePanel );

    // Define a function for updating the highlight state
    function updateHighlightState() {
      if ( tiltPredictionProperty.value === correspondingPrediction ) {
        self.thinOutline.stroke = INVISIBLE_COLOR;
        if ( gameStateProperty.value === 'displayingCorrectAnswer' ) {
          self.thickOutline.stroke = CORRECT_ANSWER_HIGHLIGHT_COLOR;
        }
        else {
          self.thickOutline.stroke = SELECTED_HIGHLIGHT_COLOR;
        }
      }
      else {
        self.thickOutline.stroke = INVISIBLE_COLOR;
        self.thinOutline.stroke = NON_HIGHLIGHT_COLOR;
        if ( self.mouseOver ) {
          self.thinOutline.lineWidth = HOVER_LINE_WIDTH;
        }
        else {
          self.thinOutline.lineWidth = NON_HIGHLIGHT_LINE_WIDTH;
        }
      }
    }

    // Set up mouse listener that watches to see if the user has selected this option.
    self.addInputListener( new DownUpListener( { up: function( event ) { tiltPredictionProperty.value = correspondingPrediction; } } ) );

    // Set up a hover listener to update hover highlight.
    self.mouseOver = false;
    self.addInputListener(
      {
        over: function() {
          self.mouseOver = true;
          updateHighlightState();
        },
        out: function() {
          self.mouseOver = false;
          updateHighlightState();
        }
      } );

    // Add the outline around the panel, which will be changed to depict the
    // user's selection and the correct answer.
    self.thinOutline = new Rectangle.bounds( imagePanel.bounds,
      {
        stroke: NON_HIGHLIGHT_COLOR,
        lineWidth: NON_HIGHLIGHT_LINE_WIDTH
      } );
    self.addChild( self.thinOutline );
    self.thickOutline = new Rectangle.bounds( imagePanel.bounds,
      {
        stroke: INVISIBLE_COLOR,
        lineWidth: SELECTED_HIGHLIGHT_LINE_WIDTH
      } );
    self.addChild( self.thickOutline );

    // Add listener for changes to the tilt prediction.
    tiltPredictionProperty.link( function( predictionValue ) {
      // Turn the highlight on or off.
      updateHighlightState();
    } );

    // Add listener for changes to the game state.
    gameStateProperty.link( function( gameState ) {
      updateHighlightState();
    } );
  }

  balancingAct.register( 'TiltPredictionSelectionPanel', TiltPredictionSelectionPanel );

  return inherit( Node, TiltPredictionSelectionPanel );
} );