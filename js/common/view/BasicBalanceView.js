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
  var FulcrumNode = require( 'BALANCING_ACT/common/view/FulcrumNode' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Node = require( 'SCENERY/nodes/Node' );
  var OutsideBackgroundNode = require( 'BALANCING_ACT/common/view/OutsideBackgroundNode' );
  var PlankNode = require( 'BALANCING_ACT/common/view/PlankNode' );
  var ResetAllButtonDrawn = require( 'SCENERY_PHET/ResetAllButtonDrawn' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  // TODO: Temp for demo
  var fireExtinguisherImage = require( 'image!BALANCING_ACT/fire-extinguisher.png' )
  var Image = require( 'SCENERY/nodes/Image' );

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

    // Set up a layer for non-mass model elements.
    var nonMassLayer = new Node();
    thisView.addChild( nonMassLayer );

    // Set up a separate layer for the masses so that they will be out in
    // front of the other elements of the model.
    var massesLayer = new Node();
    thisView.addChild( massesLayer );

    // TODO: Add the listener that will add/remove masses to/from the screen.

    // Add graphics for the plank, the fulcrum, the attachment bar, and the columns.
    nonMassLayer.addChild( new FulcrumNode( mvt, model.fulcrum ) );
    nonMassLayer.addChild( new PlankNode( mvt, model.plank, this ) );
//    nonMassLayer.addChild( new AttachmentBarNode( mvt, model.getAttachmentBar() ) );
//    for ( LevelSupportColumn supportColumn : model.getSupportColumns() ) {
//      nonMassLayer.addChild( new LevelSupportColumnNode( mvt, supportColumn, model.columnState, true ) );
//    }

    // TODO: Temp - add a couple images for demo.
    massesLayer.addChild( new Image( fireExtinguisherImage,
      {
        scale: 0.65,
        centerX: mvt.modelToViewX( 2.5 ),
        bottom: mvt.modelToViewY( 0 ),
        pickable: true,
        cursor: 'pointer'
      } ) );
    massesLayer.addChild( new Image( fireExtinguisherImage,
      {
        scale: 0.65,
        centerX: mvt.modelToViewX( 2.8 ),
        bottom: mvt.modelToViewY( 0 ),
        pickable: true,
        cursor: 'pointer'
      } ) );


    // TODO: Add the ruler.

    // TODO: Add the level indicator.

    // TODO: Add the force vectors and the code that updates them.

    // TODO: Add everything else from BasicBalanceCanvas in Java.

    nonMassLayer.addChild( new ResetAllButtonDrawn( function() { model.reset() },
      {
        radius: 24,
        centerX: mvt.modelToViewX( 2 ),
        centerY: mvt.modelToViewY( -0.5 )
      } ) );


  }

  return inherit( ScreenView, BasicBalanceView, {
    //TODO prototypes
  } );
} );