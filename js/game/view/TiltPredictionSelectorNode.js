// Copyright 2014-2017, University of Colorado Boulder

/**
 * A Scenery node that defines a user interface element which allows the user
 * to select one of three possible ways in which the balance might behave -
 * tilt left, tilt right, or stay balanced.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var plankBalancedImage = require( 'image!BALANCING_ACT/plank-balanced.png' );
  var plankTippedLeftImage = require( 'image!BALANCING_ACT/plank-tipped-left.png' );
  var plankTippedRightImage = require( 'image!BALANCING_ACT/plank-tipped-right.png' );
  var Property = require( 'AXON/Property' );
  var TiltPredictionSelectionPanel = require( 'BALANCING_ACT/game/view/TiltPredictionSelectionPanel' );

  function TiltPredictionSelectorNode( gameStateProperty ) {
    Node.call( this );

    // Property that tracks the selected prediction.  Valid values are 'none',
    // 'tiltDownOnLeftSide', 'stayBalanced', and 'tiltDownOnRightSide'.
    this.tiltPredictionProperty = new Property( 'none' );

    var panelContents = new HBox(
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