// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base type for the Scenery nodes that appear in the view, generally in some
 * sort of tool box, and that can be clicked on by the user in order to add
 * model elements to the model.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var CAPTION_OFFSET_FROM_SELECTION_NODE = 4;
  var LABEL_FONT = new PhetFont( 16 );

  /**
   * @param {BalanceModel} model
   * @param {ModelViewTransform} mvt
   * @param {Object} options
   * @constructor
   */
  function ModelElementCreatorNode( model, mvt, options ) {
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

    // Function for translating click event to model coordinates.
    function eventToModelPosition( position ) {
      return mvt.viewToModelPosition( thisNode.globalToParentPoint( position ).plus( thisNode.positioningOffset ) );
    }

    // Set up handling of mouse events.
    this.addInputListener( new SimpleDragHandler(
      {
        start: function( event ) {
          // Create a new node and add it to the model.
          thisNode.modelElement = thisNode.addElementToModel( eventToModelPosition( event.pointer.point ) );
        },

        drag: function( event ) {
          if ( thisNode.modelElement !== null ) {
            // Move the node.
            thisNode.modelElement.position = eventToModelPosition( event.pointer.point );
          }
          else {
            // TODO: Remove this 'else' clause once this handler is fully debugged.
            console.log( "Drag event received with no model element to move." );
          }
        },
        end: function( event ) {
          // The user has released the node.
          thisNode.modelElement.release();
          thisNode.modelElement = null;
        }
      } ) );
  }

  return inherit( Node, ModelElementCreatorNode, {
    /**
     * Method overriden by subclasses to add the element that they represent to
     * the model.
     *
     * @param position
     */
    addElementToModel: function( position ) {
      console.log( 'addElementToModel should be implemented in descendant classes.' );
    },

    setSelectionNode: function( selectionNode ) {
      // TODO: Note to self made during port: Why isn't this handled in the
      // constructor?  Consider making it so once things are working.
      if ( this.selectionNode ) {
        console.log( 'Can\'t set selectionNode more than once.' );
      }
      this.selectionNode = selectionNode;
      this.addChild( selectionNode );
      this.updateLayout();
    },

    setCaption: function( captionText ) {
      // TODO: Note to self made during port: Why isn't this handled in the constructor?
      this.caption = new Text( '', { font: LABEL_FONT } );
      this.addChild( this.caption );
      this.updateLayout();
    },

    updateLayout: function() {
      // This only does something if both the element node and the caption are set.
      if ( this.caption && this.selectionNode ) {
        this.caption.centerX = this.selectionNode.centerX;
        this.caption.top = this.selectionNode.bottom + CAPTION_OFFSET_FROM_SELECTION_NODE;
      }
    }
  } );
} );