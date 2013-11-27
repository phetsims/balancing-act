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
  var FulcrumNode = require( 'BALANCING_ACT/common/view/FulcrumNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Image = require( 'SCENERY/nodes/Image' );
  var InOutRadioButton = require( 'SUN/InOutRadioButton' );
  var MassNodeFactory = require( 'BALANCING_ACT/common/view/MassNodeFactory' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Node = require( 'SCENERY/nodes/Node' );
  var LevelIndicatorNode = require( 'BALANCING_ACT/common/view/LevelIndicatorNode' );
  var LevelSupportColumnNode = require( 'BALANCING_ACT/common/view/LevelSupportColumnNode' );
  var MysteryVectorNode = require( 'BALANCING_ACT/common/view/MysteryVectorNode' );
  var OutsideBackgroundNode = require( 'BALANCING_ACT/common/view/OutsideBackgroundNode' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var PlankNode = require( 'BALANCING_ACT/common/view/PlankNode' );
  var PositionedVectorNode = require( 'BALANCING_ACT/common/view/PositionedVectorNode' );
  var PositionMarkerSetNode = require( 'BALANCING_ACT/common/view/PositionMarkerSetNode' );
  var Property = require( 'AXON/Property' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var RotatingRulerNode = require( 'BALANCING_ACT/common/view/RotatingRulerNode' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Vector2 = require( 'DOT/Vector2' );
  var VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );
  var VerticalCheckBoxGroup = require( 'SUN/VerticalCheckBoxGroup' );

  // Images and Strings
  var balanceWithSupportsIcon = require( 'image!BALANCING_ACT/balance-with-supports-icon.png' );
  var balanceWithoutSupportsIcon = require( 'image!BALANCING_ACT/balance-without-supports-icon.png' );
  var forcesFromObjectsString = require( 'string!BALANCING_ACT/forcesFromObjects' );
  var levelString = require( 'string!BALANCING_ACT/level' );
  var marksString = require( 'string!BALANCING_ACT/marks' );
  var massLabelsString = require( 'string!BALANCING_ACT/massLabels' );
  var noneString = require( 'string!BALANCING_ACT/none' );
  var positionString = require( 'string!BALANCING_ACT/position' );
  var rulersString = require( 'string!BALANCING_ACT/rulers' );
  var showString = require( 'string!BALANCING_ACT/show' );

  // Constants
  var BUTTON_ICON_WIDTH = 70;

  /**
   * @param {BalanceModel} model
   * @constructor
   */
  function BasicBalanceView( model ) {
    ScreenView.call( this, { renderer: 'svg' } );
    var thisView = this;
    thisView.model = model;

    // Define the properties that control visibility of various display elements.
    thisView.massLabelsVisible = new Property( true );
    thisView.distancesVisible = new Property( false );
    thisView.forceVectorsFromObjectsVisible = new Property( false );
    thisView.levelIndicatorVisible = new Property( false );
    thisView.positionMarkerState = new Property( 'none' ); // Valid values are 'none', 'rulers', and 'markers'.

    // Create the model-view transform.  The primary units used in the model
    // are meters, so significant zoom is used.  The multipliers for the 2nd
    // parameter can be used to adjust where the point (0, 0) in the model,
    // which is on the ground just below the center of the balance, is located
    // in the view.
    var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( thisView.layoutBounds.width * 0.4, thisView.layoutBounds.height * 0.75 ),
      120 );
    thisView.mvt = mvt; // Make mvt available to descendant types.

    // Add the background, which portrays the sky and ground.
    thisView.addChild( new OutsideBackgroundNode( mvt, 3, -1 ) );

    // Set up a layer for non-mass model elements.
    var nonMassLayer = new Node();
    thisView.addChild( nonMassLayer );

    // Set up a separate layer for the masses so that they will be out in
    // front of the other elements of the model.
    var massesLayer = new Node();
    thisView.addChild( massesLayer );

    function handleMassAdded( addedMass ) {
      // Create and add the view representation for this mass.
      var massNode = MassNodeFactory.createMassNode( addedMass, mvt, thisView.massLabelsVisible );
      massesLayer.addChild( massNode );

      // Add the removal listener for if and when this mass is removed from the model.
      var removalListener = function( removedMass ) {
        assert( removedMass === addedMass );
        massesLayer.removeChild( massNode );
        model.massList.removeItemRemovedListener( removalListener );
      };
      model.massList.addItemRemovedListener( removalListener );
    }

    // Add initial mass representations.
    model.massList.forEach( handleMassAdded );

    // Whenever a mass is added to the model, create a graphic for it.
    model.massList.addItemAddedListener( handleMassAdded );

    // Add graphics for the plank, the fulcrum, the attachment bar, and the columns.
    nonMassLayer.addChild( new FulcrumNode( mvt, model.fulcrum ) );
    nonMassLayer.addChild( new PlankNode( mvt, model.plank ) );
    nonMassLayer.addChild( new AttachmentBarNode( mvt, model.attachmentBar ) );
    model.supportColumns.forEach( function( supportColumn ) {
      nonMassLayer.addChild( new LevelSupportColumnNode( mvt, supportColumn, model.columnStateProperty ) );
    } );

    // Add the ruler.
    var rulersVisible = new Property( false );
    this.positionMarkerState.link( function( positionMarkerState ) {
      rulersVisible.value = positionMarkerState === 'rulers';
    } );
    nonMassLayer.addChild( new RotatingRulerNode( model.plank, mvt, rulersVisible ) );

    // Add the position markers.
    var positionMarkersVisible = new Property( false );
    this.positionMarkerState.link( function( positionMarkerState ) {
      positionMarkersVisible.value = positionMarkerState === 'marks';
    } );
    nonMassLayer.addChild( new PositionMarkerSetNode( model.plank, mvt, positionMarkersVisible ) );

    // Add the level indicator node which will show whether the plank is balanced or not
    var levelIndicatorNode = new LevelIndicatorNode( mvt, model.plank );
    this.levelIndicatorVisible.link( function( visible ) {
      levelIndicatorNode.visible = visible;
    } );
    nonMassLayer.addChild( levelIndicatorNode );

    // Listen to the list of force vectors and manage their representations.
    model.plank.forceVectors.addItemAddedListener( function( addedMassForceVector ) {
      // Add a representation for the new vector.
      var forceVectorNode;
      if ( addedMassForceVector.isObfuscated() ) {
        forceVectorNode = new MysteryVectorNode( addedMassForceVector.forceVectorProperty, this.forceVectorsFromObjectsVisible, mvt );
      }
      else {
        forceVectorNode = new PositionedVectorNode( addedMassForceVector.forceVectorProperty,
          0.3,  // Scaling factor, chosen to make size reasonable.
          thisView.forceVectorsFromObjectsVisible,
          mvt
        );
      }
      nonMassLayer.addChild( forceVectorNode );

      // Remove representation when corresponding vector removed from model.
      model.plank.forceVectors.addItemRemovedListener( function( removedMassForceVector ) {
        if ( removedMassForceVector == addedMassForceVector ) {
          nonMassLayer.removeChild( forceVectorNode );
        }
      } );
    } );

    // TODO: Add everything else from BasicBalanceCanvas in Java.

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
    insertColumnsButton.centerX = mvt.modelToViewX( -0.4 );
    insertColumnsButton.centerY = mvt.modelToViewY( -0.5 );
    nonMassLayer.addChild( insertColumnsButton );
    var balanceWithoutSupportsIconImage = new Image( balanceWithoutSupportsIcon );
    balanceWithoutSupportsIconImage.scale( BUTTON_ICON_WIDTH / balanceWithoutSupportsIconImage.width );
    var removeColumnsButton = new InOutRadioButton( model.columnStateProperty, 'noColumns', balanceWithoutSupportsIconImage,
      {
        xMargin: 0,
        yMargin: 0,
        cornerRadius: 5,
        stroke: null
      } );
    removeColumnsButton.centerX = mvt.modelToViewX( 0.4 );
    removeColumnsButton.centerY = mvt.modelToViewY( -0.5 );
    nonMassLayer.addChild( removeColumnsButton );

    // Add the control panel that will allow users to control the visibility
    // of the various indicators.
    var panelTitleFont = new PhetFont( 16 );
    var panelOptionFont = { font: new PhetFont( 14 ) };
    var checkBoxGroup = new VerticalCheckBoxGroup( [
      { content: new Text( massLabelsString, panelOptionFont ), property: thisView.massLabelsVisible, label: massLabelsString },
      { content: new Text( forcesFromObjectsString, panelOptionFont ), property: thisView.forceVectorsFromObjectsVisible, label: forcesFromObjectsString },
      { content: new Text( levelString, panelOptionFont ), property: thisView.levelIndicatorVisible, label: levelString }
    ] );
    var checkBoxPanelContent = new Node();
    checkBoxPanelContent.addChild( new Text( showString, { font: panelTitleFont } ) );
    checkBoxGroup.left = 10;
    checkBoxGroup.top = checkBoxPanelContent.bottom + 5;
    checkBoxPanelContent.addChild( checkBoxGroup );
    var indicatorControlPanel = new Panel( checkBoxPanelContent,
      {
        xMargin: 5,
        yMargin: 5,
        fill: 'rgb( 240, 240, 240 )',
        right: this.layoutBounds.width - 20,
        top: 10
      } );
    nonMassLayer.addChild( indicatorControlPanel );

    // Add the control panel that will allow users to select between the
    // various position markers, i.e. ruler, position markers, or nothing.
    var positionMarkerRadioButtons = new VerticalAquaRadioButtonGroup( [
      { node: new Text( noneString, panelOptionFont ), property: thisView.positionMarkerState, value: 'none', label: noneString },
      { node: new Text( rulersString, panelOptionFont ), property: thisView.positionMarkerState, value: 'rulers', label: rulersString },
      { node: new Text( marksString, panelOptionFont ), property: thisView.positionMarkerState, value: 'marks', label: marksString }
    ] );
    var positionMarkerPanelContent = new Node();
    positionMarkerPanelContent.addChild( new Text( positionString, panelTitleFont ) );
    positionMarkerRadioButtons.left = 10;
    positionMarkerRadioButtons.top = positionMarkerPanelContent.bottom + 5;
    positionMarkerPanelContent.addChild( positionMarkerRadioButtons );
    nonMassLayer.addChild( new Panel( positionMarkerPanelContent,
      {
        xMargin: 5,
        yMargin: 5,
        fill: 'rgb( 240, 240, 240 )',
        left: indicatorControlPanel.left,
        top: indicatorControlPanel.bottom + 5
      } ) );

    // Reset All button.
    nonMassLayer.addChild( new ResetAllButton( function() { thisView.reset(); },
      {
        radius: 20,
        centerX: mvt.modelToViewX( 2 ),
        centerY: mvt.modelToViewY( -0.5 )
      } ) );
  }

  return inherit( ScreenView, BasicBalanceView, {
    reset: function() {
      this.model.reset();
      this.massLabelsVisible.reset();
      this.distancesVisible.reset();
      this.forceVectorsFromObjectsVisible.reset();
      this.levelIndicatorVisible.reset();
      this.positionMarkerState.reset();
    }
  } );
} );