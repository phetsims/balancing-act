// Copyright 2014-2019, University of Colorado Boulder

/**
 * A Scenery node that defines a user interface element which allows the user
 * to select one of three possible ways in which the balance might behave -
 * tilt left, tilt right, or stay balanced.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const HBox = require( 'SCENERY/nodes/HBox' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Panel = require( 'SUN/Panel' );
  const Property = require( 'AXON/Property' );
  const TiltPredictionSelectionPanel = require( 'BALANCING_ACT/game/view/TiltPredictionSelectionPanel' );

  // images
  const plankBalancedImage = require( 'image!BALANCING_ACT/plank-balanced.png' );
  const plankTippedLeftImage = require( 'image!BALANCING_ACT/plank-tipped-left.png' );
  const plankTippedRightImage = require( 'image!BALANCING_ACT/plank-tipped-right.png' );

  function TiltPredictionSelectorNode( gameStateProperty ) {
    Node.call( this );

    // Property that tracks the selected prediction.  Valid values are 'none',
    // 'tiltDownOnLeftSide', 'stayBalanced', and 'tiltDownOnRightSide'.
    this.tiltPredictionProperty = new Property( 'none' ); // TODO: Enumeration

    const panelContents = new HBox(
      {
        children: [
          new TiltPredictionSelectionPanel( plankTippedLeftImage, 'tiltDownOnLeftSide', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankBalancedImage, 'stayBalanced', this.tiltPredictionProperty, gameStateProperty ),
          new TiltPredictionSelectionPanel( plankTippedRightImage, 'tiltDownOnRightSide', this.tiltPredictionProperty, gameStateProperty )
        ], spacing: 5
      } );

    this.addChild( new Panel( panelContents, { cornerRadius: 5 } ) );
  }

  balancingAct.register( 'TiltPredictionSelectorNode', TiltPredictionSelectorNode );

  return inherit( Node, TiltPredictionSelectorNode );
} );