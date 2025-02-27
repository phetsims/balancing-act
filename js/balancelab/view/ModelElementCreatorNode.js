// Copyright 2013-2025, University of Colorado Boulder

/**
 * Base type for the Scenery nodes that appear in the view, generally in some sort of toolbox, and that can be clicked
 * on by the user in order to add model elements to the model.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import ManualConstraint from '../../../../scenery/js/layout/constraints/ManualConstraint.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import BAQueryParameters from '../../common/BAQueryParameters.js';
import ColumnState from '../../common/model/ColumnState.js';

// constants
const CAPTION_OFFSET_FROM_SELECTION_NODE = 4;
const LABEL_FONT = new PhetFont( 14 );
const MAX_CAPTION_WIDTH_PROPORTION = 1; // max width for the caption as a proportion of the creator node

class ModelElementCreatorNode extends Node {

  /**
   * @param {BasicBalanceScreenView} screenView
   * @param {EnumerationDeprecatedProperty} columnStateProperty
   * @param {Object} [options]
   */
  constructor( screenView, columnStateProperty, options ) {
    options = merge( {
      cursor: 'pointer',
      tandem: Tandem.REQUIRED
    }, options );
    super( options );
    const self = this;

    // Offset used when adding an element to the model.  This is useful in making sure that the newly created object
    // isn't positioned in, shall we say, an awkward position with respect to the mouse.
    this.positioningOffset = Vector2.ZERO;

    // Function for translating click and touch events to model coordinates.
    const modelViewTransform = screenView.modelViewTransform;
    const eventToModelPosition = pointerPosition => {
      return modelViewTransform.viewToModelPosition(
        screenView.globalToLocalPoint( pointerPosition ).plus( self.positioningOffset )
      );
    };

    // Create an input listener that will add the model element to the model and then forward events to the view node
    // that is created as a result.
    this.addInputListener( DragListener.createForwardingListener(
      event => {

        // Determine the initial position where this element should move to after it's created based on the position of
        // the pointer event.
        const initialPosition = eventToModelPosition( event.pointer.point );

        // Create a new mass and add it to the model.  This will cause a view node to be created in the view.
        const modelElement = this.addElementToModel( initialPosition );

        // Get the view node that should have appeared in the view so that events can be forwarded to its drag handler.
        const modelElementNode = screenView.getNodeForMass( modelElement );
        assert && assert( modelElementNode, 'unable to find view node for model element' );

        modelElementNode.dragHandler.press( event, modelElementNode );
      },
      {
        allowTouchSnag: true,
        tandem: options.tandem.createTandem( 'dragListener' )
      }
    ) );

    BAQueryParameters.stanford && columnStateProperty.link( columnState => {
      this.cursor = columnState === ColumnState.DOUBLE_COLUMNS ? 'pointer' : 'default';
      this.pickable = columnState === ColumnState.DOUBLE_COLUMNS;
    } );
  }

  /**
   * Method overridden by subclasses to add the element that they represent to the model.
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
    this.createManualConstraint();
  }

  /**
   * @param {String} captionText
   * @protected
   */
  setCaption( captionText ) {
    this.caption = new Text( captionText, { font: LABEL_FONT } );
    this.addChild( this.caption );
    this.createManualConstraint();
  }

  /**
   * @private
   * Create a manual constraint if both the caption and selection node are defined.
   * This code assumes that the selectionNode and caption are only being set once by each
   * instance in the constructor. If that ever changes this may create a memory leak.
   */
  createManualConstraint() {
    if ( this.selectionNode && this.caption ) {
      ManualConstraint.create( this, [ this.caption, this.selectionNode ], ( captionProxy, selectionNodeProxy ) => {
        captionProxy.maxWidth = selectionNodeProxy.width * MAX_CAPTION_WIDTH_PROPORTION;
        captionProxy.centerX = selectionNodeProxy.centerX;
        captionProxy.top = selectionNodeProxy.bottom + CAPTION_OFFSET_FROM_SELECTION_NODE;
      } );
    }
  }
}

balancingAct.register( 'ModelElementCreatorNode', ModelElementCreatorNode );

export default ModelElementCreatorNode;