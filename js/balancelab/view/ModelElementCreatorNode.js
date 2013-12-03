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

  // Constants
  var CAPTION_OFFSET_FROM_SELECTION_NODE = 4;
  var LABEL_FONT = new PhetFont( 16 );

  /**
   * @param model
   * @param mvt
   * @constructor
   */
  function ModelElementCreatorNode( model, mvt ) {
    Node.call( this, { cursor: 'pointer' } );

    // Element in the model that is being moved by the user.  Only non-null if
    // the user performed some action that caused this to be created, such as
    // clicking on this node.
    this.modelElement = null;

    // Set up handling of mouse events.
    this.addInputListener( new SimpleDragHandler(
      {
        start: function( event ) {
          // Create a new node and add it to the model.
          this.modelElement = this.addElementToModel( mvt.viewToModelPosition( event.pointer.point ) );
        },

        drag: function( event ) {
          if ( modelElement !== null ) {
            // Move the node.
            this.modelElement.setPosition( mvt.viewToModelPosition( event.pointer.point ) );
          }
          else {
            // TODO: Remove this 'else' clause once this handler is fully debugged.
            console.log( "Drag event received with no model element to move." );
          }
        },
        end: function( event ) {
          // The user has released the node.
          this.modelElement.release();
          this.modelElement = null;
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
      // TODO: Note to self made during port: Why isn't this handled in the constructor?
      if ( this.selectionNode ) {
        console.log( 'Can\'t set selectionNode more than once.' );
      }
      this.selectionNode = selectionNode;
      this.addChild( selectionNode );
      this.updateLayout();
    },

    setCaption: function() {

    }

  } );
} );