// Copyright 2013-2025, University of Colorado Boulder

/**
 * This object type represents a stack of bricks in a toolbox.  When the user clicks on this node, the corresponding
 * model element is added to the model at the user's mouse position.
 *
 * @author John Blanco
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Shape from '../../../../kite/js/Shape.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import Mass from '../../common/model/Mass.js';
import BrickStack from '../../common/model/masses/BrickStack.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import BrickStackNode from '../../common/view/BrickStackNode.js';
import BalanceLabModel from '../model/BalanceLabModel.js';
import MassCreatorNode from './MassCreatorNode.js';
import { ModelElementCreatorNodeOptions } from './ModelElementCreatorNode.js';

// Model-view transform for scaling the node used in the toolbox.  This
// may scale the node differently than what is used in the model so that
// items in the toolbox can be sized differently (generally smaller).
const SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 150 );

export default class BrickStackCreatorNode extends MassCreatorNode {

  private readonly numBricks: number;
  private readonly model: BalanceLabModel;

  public constructor( numBricks: number, model: BalanceLabModel, screenView: BasicBalanceScreenView, options?: ModelElementCreatorNodeOptions ) {
    super( screenView, numBricks * BrickStack.BRICK_MASS, true, model.columnStateProperty, options );
    this.numBricks = numBricks;
    this.model = model;

    const selectionNode = new BrickStackNode(
      new BrickStack( numBricks, Vector2.ZERO, { tandem: Tandem.OPT_OUT } ),
      SCALING_MVT,
      false,
      new Property( false ),
      false
    );

    // Make a larger touch area.  The diameter of the circle was determined empirically.
    selectionNode.touchArea = Shape.circle(
      selectionNode.bounds.width / 2,
      selectionNode.bounds.height / 2,
      selectionNode.bounds.width * 0.8
    );

    this.setSelectionNode( selectionNode );
    this.positioningOffset = new Vector2(
      0,
      -screenView.modelViewTransform.modelToViewDeltaY( BrickStack.BRICK_HEIGHT * numBricks / 2 )
    );
  }

  public override addElementToModel( position: Vector2 ): Mass {
    const mass = this.model.brickStackGroup.createNextElement( this.numBricks, position );
    this.model.addMass( mass );
    return mass;
  }
}

balancingAct.register( 'BrickStackCreatorNode', BrickStackCreatorNode );