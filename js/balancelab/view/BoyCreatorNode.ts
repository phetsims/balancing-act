// Copyright 2013-2025, University of Colorado Boulder

/**
 * This type represents an adolescent boy in a toolbox.  When the user clicks
 * on this node, the corresponding model element is added to the model at the
 * user's mouse position.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import balancingAct from '../../balancingAct.js';
import BalanceLabModel from '../model/BalanceLabModel.js';
import Boy from '../../common/model/masses/Boy.js';
import BasicBalanceScreenView from '../../common/view/BasicBalanceScreenView.js';
import ImageMassNode from '../../common/view/ImageMassNode.js';
import ImageMassCreatorNode from './ImageMassCreatorNode.js';

// Model-view transform for scaling the node used in the toolbox.  This may scale the node differently than what is
// used in the model so that items in the toolbox can be sized differently (generally smaller).
const SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 80 );

export default class BoyCreatorNode extends ImageMassCreatorNode {

  public constructor( model: BalanceLabModel, screenView: BasicBalanceScreenView ) {
    super( model, screenView, new Boy(), true );
    this.setSelectionNode( new ImageMassNode( this.prototypeImageMass, SCALING_MVT, false, new Property( false ), false, model.columnStateProperty ) );
    this.positioningOffset = new Vector2(
      0,
      -screenView.modelViewTransform.modelToViewDeltaY( this.prototypeImageMass.heightProperty.get() / 2 )
    );
  }
}

balancingAct.register( 'BoyCreatorNode', BoyCreatorNode );