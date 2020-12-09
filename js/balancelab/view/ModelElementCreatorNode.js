// Copyright 2013-2020, University of Colorado Boulder

/**
 * Base type for the Scenery nodes that appear in the view, generally in some sort of toolbox, and that can be clicked
 * on by the user in order to add model elements to the model.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import SimpleDragHandler from '../../../../scenery/js/input/SimpleDragHandler.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';

// constants
const CAPTION_OFFSET_FROM_SELECTION_NODE = 4;
const LABEL_FONT = new PhetFont( 14 );
const MAX_CAPTION_WIDTH_PROPORTION = 1.5; // max width for for the caption as a proportion of the creator node

class ModelElementCreatorNode extends Node {

  /**
   * @param {ModelViewTransform2} modelViewTransform
   * @param {Object} [options]
   */
  constructor( modelViewTransform, options ) {
    options = merge( {
      cursor: 'pointer',
      tandem: Tandem.REQUIRED
    }, options );
    super( options );
    const self = this;

    // Element in the model that is being moved by the user.  Only non-null if the user performed some action that
    // caused this to be created, such as clicking on this node.
    this.modelElement = null;

    // Offset used when adding an element to the model.  This is useful in making sure that the newly created object
    // isn't positioned in, shall we say, an awkward position with respect to the mouse.
    this.positioningOffset = Vector2.ZERO;

    // Function for translating click events to model coordinates.
    function eventToModelPosition( position ) {
      if ( parentScreenView !== null ) {
        return modelViewTransform.viewToModelPosition(
          parentScreenView.globalToLocalPoint( position ).plus( self.positioningOffset )
        );
      }
      return position;
    }

    // Variable for the parent screen, which is needed for coordinate transforms.
    var parentScreenView = null;

    // Set up handling of mouse events.
    this.addInputListener( new SimpleDragHandler( {

      start: event => {

        if ( !parentScreenView ) {

          // Move up the scene graph until the parent screen is found.
          let testNode = this.parents[ 0 ];
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
        this.modelElement = this.addElementToModel( eventToModelPosition( event.pointer.point ) );
      },

      drag: event => {
        if ( this.modelElement !== null ) {
          // Move the node.
          this.modelElement.positionProperty.set( eventToModelPosition( event.pointer.point ) );
        }
      },
      end: () => {

        // There is a rare multi-touch case where userControlled may already be updated, and we need to handle it by
        // cycling the userControlled state, see https://github.com/phetsims/balancing-act/issues/95.
        if ( this.modelElement.userControlledProperty.get() === false ) {
          this.modelElement.userControlledProperty.set( true );
        }

        // The user has released the node.
        this.modelElement.userControlledProperty.set( false );
        this.modelElement = null;
        parentScreenView = null;
      },
      tandem: options.tandem.createTandem( 'dragHandler' )
    } ) );
  }

  /**
   * Method overriden by subclasses to add the element that they represent to the model.
   * @public
   */
  addElementToModel() {
    throw new Error( 'addElementToModel should be implemented in descendant classes.' );
  }

  /**
   * @param selectionNode
   * @public
   */
  setSelectionNode( selectionNode ) {
    if ( this.selectionNode ) {
      throw new Error( 'Can\'t set selectionNode more than once.' );
    }
    this.selectionNode = selectionNode;
    this.addChild( selectionNode );
    this.updateLayout();
  }

  /**
   * @param {String} captionText
   * @protected
   */
  setCaption( captionText ) {
    this.caption = new Text( captionText, { font: LABEL_FONT } );
    this.addChild( this.caption );
    this.updateLayout();
  }

  /**
   * @private
   */
  updateLayout() {

    // This only does something if both the element node and the caption are set.
    if ( this.caption && this.selectionNode ) {
      this.caption.maxWidth = this.selectionNode.width * MAX_CAPTION_WIDTH_PROPORTION;
      this.caption.centerX = this.selectionNode.centerX;
      this.caption.top = this.selectionNode.bottom + CAPTION_OFFSET_FROM_SELECTION_NODE;
    }
  }
}

balancingAct.register( 'ModelElementCreatorNode', ModelElementCreatorNode );

export default ModelElementCreatorNode;
