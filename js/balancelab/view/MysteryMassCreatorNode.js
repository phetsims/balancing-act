// Copyright 2013-2020, University of Colorado Boulder

/**
 * This class represents a "mystery mass" in a toolbox.  When the user clicks
 * on this node, the corresponding model element is added to the model at the
 * user's mouse location.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const ImageMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/ImageMassCreatorNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const MysteryMass = require( 'BALANCING_ACT/common/model/masses/MysteryMass' );
  const MysteryMassNode = require( 'BALANCING_ACT/common/view/MysteryMassNode' );
  const Property = require( 'AXON/Property' );
  const Vector2 = require( 'DOT/Vector2' );
  const Tandem = require( 'TANDEM/Tandem' );

  // Model-view transform for scaling the node used in the toolbox.  This
  // may scale the node differently than what is used in the model so that
  // items in the toolbox can be sized differently (generally smaller).
  const SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 150 );

  function MysteryMassCreatorNode( mysteryMassID, model, modelViewTransform, options ) {
    ImageMassCreatorNode.call( this, model, modelViewTransform, new MysteryMass( Vector2.ZERO, mysteryMassID, { tandem: Tandem.OPT_OUT } ), false, options );
    this.mysteryMassId = mysteryMassID;
    this.setSelectionNode( new MysteryMassNode( this.prototypeImageMass, SCALING_MVT, false, new Property( false ), false, model.columnStateProperty ) );
    this.positioningOffset = new Vector2( 0, -modelViewTransform.modelToViewDeltaY( this.prototypeImageMass.heightProperty.get() / 2 ) );
  }

  balancingAct.register( 'MysteryMassCreatorNode', MysteryMassCreatorNode );

  return inherit( ImageMassCreatorNode, MysteryMassCreatorNode, {

    /**
     * @param position
     * @returns {PhetioObject}
     * @override
     */
    addElementToModel: function( position ) {
      const mass = this.model.mysteryMassGroup.createNextMember( position, this.mysteryMassId );
      this.model.addMass( mass );
      return mass;
    }
  } );
} );