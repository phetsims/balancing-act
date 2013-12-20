// Copyright 2002-2013, University of Colorado Boulder

/**
 * This class represents a "mystery mass" in a tool box.  When the user clicks
 * on this node, the corresponding model element is added to the model at the
 * user's mouse location.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/ImageMassCreatorNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var MysteryMass = require( 'BALANCING_ACT/common/model/masses/MysteryMass' );
  var MysteryMassNode = require( 'BALANCING_ACT/common/view/MysteryMassNode' );
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  // Model-view transform for scaling the node used in the tool box.  This
  // may scale the node differently than what is used in the model so that
  // items in the tool box can be sized differently (generally smaller).
  var SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 150 );

  function MysteryMassCreatorNode( mysteryMassID, model, mvt ) {
    ImageMassCreatorNode.call( this, model, mvt, new MysteryMass( Vector2.ZERO, mysteryMassID ), false );
    this.setSelectionNode( new MysteryMassNode( this.prototypeImageMass, SCALING_MVT, false, new Property( false ), false ) );
    this.positioningOffset = new Vector2( 0, -mvt.modelToViewDeltaY( this.prototypeImageMass.height / 2 ) );
  }

  return inherit( ImageMassCreatorNode, MysteryMassCreatorNode );
} );