// Copyright 2013-2015, University of Colorado Boulder

/**
 * Base type for the Scenery nodes that appear in the view, generally in some
 * sort of tool box, and that can be clicked on by the user in order to add
 * model elements to the model.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var CAPTION_OFFSET_FROM_SELECTION_NODE = 4;
  var LABEL_FONT = new PhetFont( 14 );
  var MAX_CAPTION_WIDTH_PROPORTION = 1.5; // max width for for the caption as a proportion of the creator node

  /**
   * @param {ModelViewTransform} modelViewTransform
   * @param {Object} [options]
   * @constructor
   */
  function ModelElementCreatorNode( modelViewTransform, options ) {
    options = _.extend( { cursor: 'pointer' }, options );
    Node.call( this, options );
    var thisNode = this;

    // Element in the model that is being moved by the user.  Only non-null if
    // the user performed some action that caused this to be created, such as
    // clicking on this node.
    thisNode.modelElement = null;

    // Offset used when adding an element to the model.  This is useful in
    // making sure that the newly created object isn't positioned in, shall we
    // say, an awkward location with respect to the mouse.
    thisNode.positioningOffset = Vector2.ZERO;

    // Function for translating click events to model coordinates.
    function eventToModelPosition( position ) {
      if ( parentScreenView !== null ) {
        return modelViewTransform.viewToModelPosition( parentScreenView.globalToLocalPoint( position ).plus( thisNode.positioningOffset ) );
      }
      return position;
    }

    // Variable for the parent screen, which is needed for coordinate transforms.
    var parentScreenView = null;

    // Set up handling of mouse events.
    this.addInputListener( new SimpleDragHandler( {

      start: function( event ) {

        if ( !parentScreenView ) {
          // Move up the scene graph until the parent screen is found.
          var testNode = thisNode;
          while ( testNode !== null ) {
            if ( testNode instanceof ScreenView ) {
              parentScreenView = testNode;
              break;
            }
            testNode = testNode.parents[ 0 ]; // Move up the scene graph by one level
          }
          assert && assert( parentScreenView, 'unable to find parent screen view' );
        }

        // Create a new node and add it to the model.
        thisNode.modelElement = thisNode.addElementToModel( eventToModelPosition( event.pointer.point ) );
      },

      drag: function( event ) {
        if ( thisNode.modelElement !== null ) {
          // Move the node.
          thisNode.modelElement.position = eventToModelPosition( event.pointer.point );
        }
      },
      end: function( event ) {
        // The user has released the node.
        thisNode.modelElement.release();
        thisNode.modelElement = null;
      }
    } ) );
  }

  balancingAct.register( 'ModelElementCreatorNode', ModelElementCreatorNode );

  return inherit( Node, ModelElementCreatorNode, {
    /**
     * Method overriden by subclasses to add the element that they represent to
     * the model.
     */
    addElementToModel: function() {
      throw new Error( 'addElementToModel should be implemented in descendant classes.' );
    },

    setSelectionNode: function( selectionNode ) {
      if ( this.selectionNode ) {
        throw new Error( 'Can\'t set selectionNode more than once.' );
      }
      this.selectionNode = selectionNode;
      this.addChild( selectionNode );
      this.updateLayout();
    },

    setCaption: function( captionText ) {
      this.caption = new Text( captionText, { font: LABEL_FONT } );
      this.addChild( this.caption );
      this.updateLayout();
    },

    updateLayout: function() {
      // This only does something if both the element node and the caption are set.
      if ( this.caption && this.selectionNode ) {
        this.caption.maxWidth = this.selectionNode.width * MAX_CAPTION_WIDTH_PROPORTION;
        this.caption.centerX = this.selectionNode.centerX;
        this.caption.top = this.selectionNode.bottom + CAPTION_OFFSET_FROM_SELECTION_NODE;
      }
    }
  } );
} );