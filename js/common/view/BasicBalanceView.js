// Copyright 2002-2013, University of Colorado Boulder

/**
 * ScreenView that displays items in the balance model, primarily the balance
 * beam (i.e. the plank), the various masses, and a floating control panel for
 * controlling the visibility of labels, rulers, etc.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var OutsideBackgroundNode = require( 'BALANCING_ACT/common/view/OutsideBackgroundNode' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {BalanceModel} model
   * @constructor
   */
  function BasicBalanceView( model ) {
    ScreenView.call( this );
    var thisView = this;
    this.model = model;

    // Create the model-view transform.  The primary units used in the model
    // are meters, so significant zoom is used.  The multipliers for the 2nd
    // parameter can be used to adjust where the point (0, 0) in the model,
    // which is on the ground just below the center of the balance, is located
    // in the view.
    var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( thisView.layoutBounds.width * 0.4, thisView.layoutBounds.height * 0.75 ),
      150 );

    // Add the background, which portrays the sky and ground.
    thisView.addChild( new OutsideBackgroundNode( mvt, 3, -1 ) );
  }

  return inherit( ScreenView, BasicBalanceView, {
    //TODO prototypes
  } );
} );