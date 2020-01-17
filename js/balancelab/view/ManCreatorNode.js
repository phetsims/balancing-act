// Copyright 2013-2019, University of Colorado Boulder

/**
 * This class represents an adult male human in a toolbox.  When the user
 * clicks on this node, the corresponding model element is added to the model at
 * the user's mouse location.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/ImageMassCreatorNode' );
  const ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Man = require( 'BALANCING_ACT/common/model/masses/Man' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const Property = require( 'AXON/Property' );
  const Vector2 = require( 'DOT/Vector2' );

  // Model-view transform for scaling the node used in the toolbox.  This
  // may scale the node differently than what is used in the model so that
  // items in the toolbox can be sized differently (generally smaller).
  const SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 80 );

  /**
   * @param {BalanceLabModel} model
   * @param {ModelViewTransform2} modelViewTransform
   * @constructor
   */
  function ManCreatorNode( model, modelViewTransform ) {
    ImageMassCreatorNode.call( this, model, modelViewTransform, new Man(), true );
    this.setSelectionNode( new ImageMassNode( this.prototypeImageMass, SCALING_MVT, false, new Property( false ), false, model.columnStateProperty ) );
    this.positioningOffset = new Vector2( 0, -modelViewTransform.modelToViewDeltaY( this.prototypeImageMass.heightProperty.get() / 2 ) );
  }

  balancingAct.register( 'ManCreatorNode', ManCreatorNode );

  return inherit( ImageMassCreatorNode, ManCreatorNode );
} );