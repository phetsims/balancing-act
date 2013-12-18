// Copyright 2002-2013, University of Colorado Boulder

/**
 * This class represents an adult male human in a tool box.  When the user
 * clicks on this node, the corresponding model element is added to the model at
 * the user's mouse location.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var Man = require( 'BALANCING_ACT/common/model/masses/Man' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ImageMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/ImageMassCreatorNode' );
  var ImageMassNode = require( 'BALANCING_ACT/common/view/ImageMassNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  // Model-view transform for scaling the node used in the tool box.  This
  // may scale the node differently than what is used in the model so that
  // items in the tool box can be sized differently (generally smaller).
  var SCALING_MVT = ModelViewTransform2.createOffsetScaleMapping( Vector2.ZERO, 80 );

  /**
   * @param {BalanceLabModel} model
   * @param {ModelViewTransform2} mvt
   * @constructor
   */
  function ManCreatorNode( model, mvt ) {
    ImageMassCreatorNode.call( this, model, mvt, new Man(), true );
    this.setSelectionNode( new ImageMassNode( this.prototypeImageMass, SCALING_MVT, new Property( false ), false ) );
    this.positioningOffset = new Vector2( 0, -mvt.modelToViewDeltaY( this.prototypeImageMass.height / 2 ) );
  }

  return inherit( ImageMassCreatorNode, ManCreatorNode );
} );