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
  var AttachmentBarNode = require( 'BALANCING_ACT/common/view/AttachmentBarNode' );
  var balanceWithoutSupportsIcon = require( 'image!BALANCING_ACT/balance-without-supports-icon.png' );
  var balanceWithSupportsIcon = require( 'image!BALANCING_ACT/balance-with-supports-icon.png' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var ColumnOnOffController = require( 'BALANCING_ACT/common/view/ColumnOnOffController' );
  var forcesFromObjectsString = require( 'string!BALANCING_ACT/forcesFromObjects' );
  var FulcrumNode = require( 'BALANCING_ACT/common/view/FulcrumNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SUN/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Image = require( 'SCENERY/nodes/Image' );
  var InOutRadioButton = require( 'SUN/InOutRadioButton' );
  var MassNodeFactory = require( 'BALANCING_ACT/common/view/MassNodeFactory' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Node = require( 'SCENERY/nodes/Node' );
  var LevelIndicatorNode = require( 'BALANCING_ACT/common/view/LevelIndicatorNode' );
  var levelString = require( 'string!BALANCING_ACT/level' );
  var LevelSupportColumnNode = require( 'BALANCING_ACT/common/view/LevelSupportColumnNode' );
  var massLabelsString = require( 'string!BALANCING_ACT/massLabels' );
  var MysteryVectorNode = require( 'BALANCING_ACT/common/view/MysteryVectorNode' );
  var OutsideBackgroundNode = require( 'SCENERY_PHET/OutsideBackgroundNode' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var PlankNode = require( 'BALANCING_ACT/common/view/PlankNode' );
  var PositionedVectorNode = require( 'BALANCING_ACT/common/view/PositionedVectorNode' );
  var PositionIndicatorControlPanel = require( 'BALANCING_ACT/common/view/PositionIndicatorControlPanel' );
  var PositionMarkerSetNode = require( 'BALANCING_ACT/common/view/PositionMarkerSetNode' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var RotatingRulerNode = require( 'BALANCING_ACT/common/view/RotatingRulerNode' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var showString = require( 'string!BALANCING_ACT/show' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var Vector2 = require( 'DOT/Vector2' );
  var VerticalCheckBoxGroup = require( 'SUN/VerticalCheckBoxGroup' );
  var VStrut = require( 'SUN/VStrut' );

  // Constants
  var BUTTON_ICON_WIDTH = 60;
  var X_MARGIN_IN_PANELS = 5;
  var PANEL_TITLE_FONT = new PhetFont( 16 );
  var PANEL_OPTION_FONT = { font: new PhetFont( 14 ) };

  /**
   * @param {BalanceModel} model
   * @constructor
   */
  function BasicBalanceScreen( model ) {
    ScreenView.call( this, { renderer: 'svg' } );
    var thisScreen = this;
    thisScreen.model = model;

    // Define the properties that control visibility of various display elements.
    thisScreen.viewProperties = new PropertySet( {
      massLabelsVisible: true,
      forceVectorsFromObjectsVisible: false,
      levelIndicatorVisible: false,
      positionMarkerState: 'none' // Valid values are 'none', 'rulers', and 'markers'.
    } );

    // Create the model-view transform.  The primary units used in the model
    // are meters, so significant zoom is used.  The multipliers for the 2nd
    // parameter can be used to adjust where the point (0, 0) in the model,
    // which is on the ground just below the center of the balance, is located
    // in the view.
    var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( thisScreen.layoutBounds.width * 0.375, thisScreen.layoutBounds.height * 0.79 ),
      105 );
    thisScreen.mvt = mvt; // Make mvt available to descendant types.

    // Create a root node and send to back so that the layout bounds box can
    // be made visible if needed.
    var root = new Node();
    thisScreen.addChild( root );
    root.moveToBack();

    // Add the background, which portrays the sky and ground.
    var skyAndGroundHeight = this.layoutBounds.height * 1.5;
    root.addChild( new OutsideBackgroundNode( this.layoutBounds.centerX, mvt.modelToViewY( 0 ), this.layoutBounds.width * 2.5, skyAndGroundHeight, skyAndGroundHeight ) );

    // Set up a layer for non-mass model elements.
    thisScreen.nonMassLayer = new Node();
    root.addChild( thisScreen.nonMassLayer );

    // Set up a separate layer for the masses so that they will be out in
    // front of the other elements of the model.
    var massesLayer = new Node();
    root.addChild( massesLayer );

    function handleMassAdded( addedMass ) {
      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, mvt, true, thisScreen.viewProperties.massLabelsVisibleProperty );
      massesLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      model.massList.addItemRemovedListener( function removalListener( removedMass ) {
        if ( removedMass === addedMass ) {
          massesLayer.removeChild( massNode );
          model.massList.removeItemRemovedListener( removalListener );
        }
      } );
    }

    // Add initial mass representations.
    model.massList.forEach( handleMassAdded );

    // Whenever a mass is added to the model, create a graphic for it.
    model.massList.addItemAddedListener( handleMassAdded );

    // Add graphics for the plank, the fulcrum, the attachment bar, and the columns.
    thisScreen.nonMassLayer.addChild( new FulcrumNode( mvt, model.fulcrum ) );
    thisScreen.nonMassLayer.addChild( new PlankNode( mvt, model.plank ) );
    thisScreen.nonMassLayer.addChild( new AttachmentBarNode( mvt, model.plank ) );
    model.supportColumns.forEach( function( supportColumn ) {
      thisScreen.nonMassLayer.addChild( new LevelSupportColumnNode( mvt, supportColumn, model.columnStateProperty ) );
    } );

    // Add the ruler.
    var rulersVisible = new Property( false );
    thisScreen.viewProperties.positionMarkerStateProperty.link( function( positionMarkerState ) {
      rulersVisible.value = positionMarkerState === 'rulers';
    } );
    thisScreen.addChild( new RotatingRulerNode( model.plank, mvt, rulersVisible ) );

    // Add the position markers.
    var positionMarkersVisible = new Property( false );
    thisScreen.viewProperties.positionMarkerStateProperty.link( function( positionMarkerState ) {
      positionMarkersVisible.value = positionMarkerState === 'marks';
    } );
    thisScreen.nonMassLayer.addChild( new PositionMarkerSetNode( model.plank, mvt, positionMarkersVisible ) );

    // Add the level indicator node which will show whether the plank is balanced or not
    var levelIndicatorNode = new LevelIndicatorNode( mvt, model.plank );
    thisScreen.viewProperties.levelIndicatorVisibleProperty.link( function( visible ) {
      levelIndicatorNode.visible = visible;
    } );
    thisScreen.nonMassLayer.addChild( levelIndicatorNode );

    // Listen to the list of force vectors and manage their representations.
    model.plank.forceVectors.addItemAddedListener( function( addedMassForceVector ) {
      // Add a representation for the new vector.
      var forceVectorNode;
      if ( addedMassForceVector.isObfuscated() ) {
        forceVectorNode = new MysteryVectorNode( addedMassForceVector.forceVectorProperty, thisScreen.viewProperties.forceVectorsFromObjectsVisibleProperty, mvt );
      }
      else {
        forceVectorNode = new PositionedVectorNode( addedMassForceVector.forceVectorProperty,
          0.23,  // Scaling factor, chosen to make size reasonable.
          thisScreen.viewProperties.forceVectorsFromObjectsVisibleProperty,
          mvt
        );
      }
      thisScreen.nonMassLayer.addChild( forceVectorNode );

      // Remove representation when corresponding vector removed from model.
      model.plank.forceVectors.addItemRemovedListener( function( removedMassForceVector ) {
        if ( removedMassForceVector === addedMassForceVector ) {
          thisScreen.nonMassLayer.removeChild( forceVectorNode );
        }
      } );
    } );

    // Add the buttons that will control whether or not the support columns are in place.
    var balanceWithSupportsIconImage = new Image( balanceWithSupportsIcon );
    balanceWithSupportsIconImage.scale( BUTTON_ICON_WIDTH / balanceWithSupportsIconImage.width );
    var insertColumnsButton = new InOutRadioButton( model.columnStateProperty, 'doubleColumns', balanceWithSupportsIconImage,
      {
        xMargin: 0,
        yMargin: 0,
        cornerRadius: 5,
        stroke: null
      } );
//    insertColumnsButton.center = mvt.modelToViewPosition( new Vector2( -0.4, -0.5 ) );
//    thisScreen.nonMassLayer.addChild( insertColumnsButton );
    var balanceWithoutSupportsIconImage = new Image( balanceWithoutSupportsIcon );
    balanceWithoutSupportsIconImage.scale( BUTTON_ICON_WIDTH / balanceWithoutSupportsIconImage.width );
    var removeColumnsButton = new InOutRadioButton( model.columnStateProperty, 'noColumns', balanceWithoutSupportsIconImage,
      {
        xMargin: 0,
        yMargin: 0,
        cornerRadius: 5,
        stroke: null
      } );
//    removeColumnsButton.centerX = mvt.modelToViewX( 0.4 );
//    removeColumnsButton.centerY = mvt.modelToViewY( -0.5 );
//    thisScreen.nonMassLayer.addChild( removeColumnsButton );

//    var columnControlPanel = new Panel(
//      new HBox( { children: [ insertColumnsButton, removeColumnsButton ], spacing: 15 } ),
//      {
//        fill: 'green',
//        fill: 'white',
//        fill: 'rgb( 240, 240, 240 )',
//        center: mvt.modelToViewPosition( new Vector2( 0, -0.5 ) )
//      }
//    );
//    thisScreen.nonMassLayer.addChild( columnControlPanel );

    var columnControlPanel = new ColumnOnOffController( model.columnStateProperty, { center: mvt.modelToViewPosition( new Vector2( 0, -0.5 ) ) } );
    thisScreen.nonMassLayer.addChild( columnControlPanel );

    // Add the control panel that will allow users to control the visibility
    // of the various indicators.
    var indicatorVisibilityCheckBoxGroup = new VerticalCheckBoxGroup( [
      { content: new Text( massLabelsString, PANEL_OPTION_FONT ), property: thisScreen.viewProperties.massLabelsVisibleProperty, label: massLabelsString },
      { content: new Text( forcesFromObjectsString, PANEL_OPTION_FONT ), property: thisScreen.viewProperties.forceVectorsFromObjectsVisibleProperty, label: forcesFromObjectsString },
      { content: new Text( levelString, PANEL_OPTION_FONT ), property: thisScreen.viewProperties.levelIndicatorVisibleProperty, label: levelString }
    ], { boxWidth: 15, spacing: 5 } );
    var titleToControlsVerticalSpace = 7;
    var indicatorVisibilityControlsVBox = new VBox( {
      children: [
        new Text( showString, PANEL_TITLE_FONT ),
        new VStrut( titleToControlsVerticalSpace ),
        new HBox( { children: [ new HStrut( 10 ), indicatorVisibilityCheckBoxGroup ] } )
      ],
      align: 'left'
    } );
    var indicatorVisibilityControlPanel = new Panel( indicatorVisibilityControlsVBox,
      {
        xMargin: X_MARGIN_IN_PANELS,
        fill: 'rgb( 240, 240, 240 )',
        top: 5,
        right: this.layoutBounds.width - 10
      } );
    thisScreen.nonMassLayer.addChild( indicatorVisibilityControlPanel );

    // Add the control panel that will allow users to select between the
    // various position markers, i.e. ruler, position markers, or nothing.
    var positionIndicatorControlPanel = new PositionIndicatorControlPanel( thisScreen.viewProperties.positionMarkerStateProperty,
      {
        left: indicatorVisibilityControlPanel.left,
        top: indicatorVisibilityControlPanel.bottom + 5,
        minWidth: indicatorVisibilityControlPanel.width
      } );
    thisScreen.nonMassLayer.addChild( positionIndicatorControlPanel );

    // Add bounds for the control panels so that descendant types can see them for layout.
    this.controlPanelBounds = new Bounds2( indicatorVisibilityControlPanel.bounds.minX, positionIndicatorControlPanel.bounds.minY,
      indicatorVisibilityControlPanel.bounds.maxX, positionIndicatorControlPanel.bounds.maxY );

    // Reset All button.
    function resetClosure() {
      thisScreen.reset.call( thisScreen );
    }

    thisScreen.nonMassLayer.addChild( new ResetAllButton(
      resetClosure,
      {
        radius: 18,
        right: thisScreen.layoutBounds.width - 20,
        bottom: thisScreen.layoutBounds.height - 15
      } ) );
  }

  return inherit( ScreenView, BasicBalanceScreen,
    {
      reset: function() {
        this.model.reset();
        this.viewProperties.reset();
      }
    } );
} );
