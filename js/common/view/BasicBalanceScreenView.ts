// Copyright 2013-2025, University of Colorado Boulder

/**
 * ScreenView that displays items in the balance model, primarily the balance beam (i.e. the plank), the various masses,
 * and a floating control panel for controlling the visibility of labels, rulers, etc.
 *
 * @author John Blanco
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import Emitter from '../../../../axon/js/Emitter.js';
import EnumerationDeprecatedProperty from '../../../../axon/js/EnumerationDeprecatedProperty.js';
import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import LevelSupportColumnNode from '../../../../scenery-phet/js/LevelSupportColumnNode.js';
import OutsideBackgroundNode from '../../../../scenery-phet/js/OutsideBackgroundNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import HBox from '../../../../scenery/js/layout/nodes/HBox.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import HStrut from '../../../../scenery/js/nodes/HStrut.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VStrut from '../../../../scenery/js/nodes/VStrut.js';
import Panel from '../../../../sun/js/Panel.js';
import VerticalCheckboxGroup from '../../../../sun/js/VerticalCheckboxGroup.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';
import BASharedConstants from '../BASharedConstants.js';
import BalanceModel from '../model/BalanceModel.js';
import ColumnState from '../model/ColumnState.js';
import LevelSupportColumn from '../model/LevelSupportColumn.js';
import Mass from '../model/Mass.js';
import MassForceVector from '../model/MassForceVector.js';
import PositionIndicatorChoice from '../model/PositionIndicatorChoice.js';
import AttachmentBarNode from './AttachmentBarNode.js';
import BrickStackNode from './BrickStackNode.js';
import ColumnOnOffController from './ColumnOnOffController.js';
import FulcrumNode from './FulcrumNode.js';
import ImageMassNode from './ImageMassNode.js';
import LevelIndicatorNode from './LevelIndicatorNode.js';
import MassNodeFactory from './MassNodeFactory.js';
import MysteryVectorNode from './MysteryVectorNode.js';
import PlankNode from './PlankNode.js';
import PositionedVectorNode from './PositionedVectorNode.js';
import PositionIndicatorControlPanel from './PositionIndicatorControlPanel.js';
import PositionMarkerSetNode from './PositionMarkerSetNode.js';
import RotatingRulerNode from './RotatingRulerNode.js';


// constants
const X_MARGIN_IN_PANELS = 5;
const PANEL_TITLE_FONT = new PhetFont( 16 );
const PANEL_TEXT_MAX_WIDTH = 130;
const PANEL_OPTION_FONT = { font: new PhetFont( 14 ), maxWidth: PANEL_TEXT_MAX_WIDTH };

export default class BasicBalanceScreenView extends ScreenView {

  public readonly model: BalanceModel;
  public readonly viewProperties: {
    massLabelsVisibleProperty: Property<boolean>;
    forceVectorsFromObjectsVisibleProperty: Property<boolean>;
    levelIndicatorVisibleProperty: Property<boolean>;
    positionMarkerStateProperty: EnumerationDeprecatedProperty;
  };

  // model-view transform for this screen
  public readonly modelViewTransform: ModelViewTransform2;

  private readonly interruptDragHandlerEmitter: Emitter;
  private readonly nonMassLayer: Node;

  // a map of masses to their corresponding view elements
  private readonly massesToNodesMap: Map<Mass, Node>;

  public readonly controlPanelMaxWidth: number;
  public readonly controlPanelVBox: VBox;

  public constructor( model: BalanceModel, tandem: Tandem ) {
    super( { layoutBounds: BASharedConstants.LAYOUT_BOUNDS } );
    this.model = model;

    // Define the properties that control visibility of various display elements.
    this.viewProperties = {
      massLabelsVisibleProperty: new BooleanProperty( true, {
        tandem: tandem.createTandem( 'massLabelsVisibleProperty' )
      } ),
      forceVectorsFromObjectsVisibleProperty: new BooleanProperty( false, {
        tandem: tandem.createTandem( 'forceVectorsFromObjectsVisibleProperty' )
      } ),
      levelIndicatorVisibleProperty: new BooleanProperty( false, {
        tandem: tandem.createTandem( 'levelIndicatorVisibleProperty' )
      } ),
      positionMarkerStateProperty: new EnumerationDeprecatedProperty( PositionIndicatorChoice, PositionIndicatorChoice.NONE, {
        tandem: tandem.createTandem( 'positionMarkerStateProperty' )
      } )
    };

    // Create the model-view transform.  The primary units used in the model are meters, so significant zoom is used.
    // The multipliers for the 2nd parameter can be used to adjust where the point (0, 0) in the model, which is on the
    // ground just below the center of the balance, is positioned in the view.
    const modelViewTransform = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( this.layoutBounds.width * 0.375, this.layoutBounds.height * 0.79 ),
      105
    );

    this.modelViewTransform = modelViewTransform;

    // Create a root node and send to back so that the layout bounds box can be made visible if needed.
    const root = new Node();
    this.addChild( root );
    root.moveToBack();

    // Add the background, which portrays the sky and ground.
    const skyAndGroundHeight = this.layoutBounds.height * 1.5;
    root.addChild( new OutsideBackgroundNode(
      this.layoutBounds.centerX,
      modelViewTransform.modelToViewY( 0 ),
      this.layoutBounds.width * 2.5,
      skyAndGroundHeight,
      skyAndGroundHeight
    ) );

    // The drag handler on the mass node needs to be interrupted during reset.
    this.interruptDragHandlerEmitter = new Emitter();

    // Set up a layer for non-mass model elements.
    this.nonMassLayer = new Node();
    root.addChild( this.nonMassLayer );

    // Set up a separate layer for the masses so that they will be out in front of the other elements of the model.
    const massesLayer = new Node();
    root.addChild( massesLayer );

    this.massesToNodesMap = new Map<Mass, Node>();

    const handleMassAdded = ( addedMass: Mass ) => {

      // Create and add the view representation for this mass.
      const massNode = MassNodeFactory.createMassNode(
        addedMass,
        modelViewTransform,
        true,
        this.viewProperties.massLabelsVisibleProperty,
        model.columnStateProperty
      );
      massesLayer.addChild( massNode );
      this.massesToNodesMap.set( addedMass, massNode );

      // Move the mass to the front when grabbed so that layering stays reasonable.
      addedMass.userControlledProperty.link( ( userControlled: boolean ) => {
        if ( userControlled ) {
          massNode.moveToFront();
        }
      } );

      const interruptListener = () => {

        if ( massNode instanceof BrickStackNode || massNode instanceof ImageMassNode ) {
          massNode.dragHandler && massNode.dragHandler.interrupt();
        }
      };

      this.interruptDragHandlerEmitter.addListener( interruptListener );

      // Add the removal listener for if and when this mass is removed from the model.
      const removalListener = ( removedMass: Mass ) => {
        if ( removedMass === addedMass ) {
          massesLayer.removeChild( massNode );
          massNode.dispose();
          this.interruptDragHandlerEmitter.removeListener( interruptListener );
          this.massesToNodesMap.delete( removedMass );
          model.massList.removeItemRemovedListener( removalListener );
        }
      };
      model.massList.addItemRemovedListener( removalListener );
    };

    // Add initial mass representations.
    model.massList.forEach( handleMassAdded );

    // Whenever a mass is added to the model, create a graphic for it.
    model.massList.addItemAddedListener( handleMassAdded );

    // Add graphics for the plank, the fulcrum, the attachment bar, and the columns.
    this.nonMassLayer.addChild( new FulcrumNode( modelViewTransform, model.fulcrum ) );
    const plankNode = new PlankNode( modelViewTransform, model.plank );
    this.nonMassLayer.addChild( plankNode );
    this.nonMassLayer.addChild( new AttachmentBarNode( modelViewTransform, model.plank ) );

    const visibleProperty = DerivedProperty.valueEqualsConstant( model.columnStateProperty, ColumnState.DOUBLE_COLUMNS );
    model.supportColumns.forEach( ( supportColumn: LevelSupportColumn ) => {

      const transformedColumnShape = modelViewTransform.modelToViewShape( supportColumn );
      this.nonMassLayer.addChild( new LevelSupportColumnNode(
        {
          columnWidth: transformedColumnShape.bounds.width,
          columnHeight: transformedColumnShape.bounds.height,
          visibleProperty: visibleProperty,
          x: transformedColumnShape.bounds.x,
          y: transformedColumnShape.bounds.y
        }
      ) );
    } );

    // Add the ruler.
    const rulersVisibleProperty = new Property( false );

    this.viewProperties.positionMarkerStateProperty.link( ( positionMarkerState: typeof PositionIndicatorChoice ) => {
      rulersVisibleProperty.value = positionMarkerState === PositionIndicatorChoice.RULERS;
    } );
    this.nonMassLayer.addChild( new RotatingRulerNode( model.plank, modelViewTransform, rulersVisibleProperty ) );

    // Add the position markers.
    const positionMarkersVisibleProperty = new Property( false );

    this.viewProperties.positionMarkerStateProperty.link( ( positionMarkerState: typeof PositionIndicatorChoice ) => {
      positionMarkersVisibleProperty.value = positionMarkerState === PositionIndicatorChoice.MARKS;
    } );
    this.nonMassLayer.addChild( new PositionMarkerSetNode( model.plank, modelViewTransform, positionMarkersVisibleProperty ) );

    // Add the level indicator node which will show whether the plank is balanced or not
    const levelIndicatorNode = new LevelIndicatorNode( modelViewTransform, model.plank );
    this.viewProperties.levelIndicatorVisibleProperty.link( ( visible: boolean ) => {
      levelIndicatorNode.visible = visible;
    } );
    this.nonMassLayer.addChild( levelIndicatorNode );

    // Listen to the list of force vectors and manage their representations.
    model.plank.forceVectors.addItemAddedListener( ( addedMassForceVector: MassForceVector ) => {

      // Add a representation for the new vector.
      let forceVectorNode;
      if ( addedMassForceVector.isObfuscated() ) {
        forceVectorNode = new MysteryVectorNode(
          addedMassForceVector.forceVectorProperty,
          this.viewProperties.forceVectorsFromObjectsVisibleProperty,
          modelViewTransform
        );
      }
      else {
        forceVectorNode = new PositionedVectorNode( addedMassForceVector.forceVectorProperty,
          0.23,  // Scaling factor, chosen to make size reasonable.
          this.viewProperties.forceVectorsFromObjectsVisibleProperty,
          modelViewTransform
        );
      }
      this.nonMassLayer.addChild( forceVectorNode );

      // Remove view representation when corresponding force vector is removed from the model.
      const massForceVectorRemovedListener = ( removedMassForceVector: MassForceVector ) => {
        if ( removedMassForceVector === addedMassForceVector ) {
          this.nonMassLayer.removeChild( forceVectorNode );
          forceVectorNode.dispose();
          model.plank.forceVectors.removeItemRemovedListener( massForceVectorRemovedListener );
        }
      };
      model.plank.forceVectors.addItemRemovedListener( massForceVectorRemovedListener );
    } );

    // Add the buttons that will control whether the support columns are in place.
    const columnControlPanel = new ColumnOnOffController( model.columnStateProperty, {
      center: modelViewTransform.modelToViewPosition( new Vector2( 0, -0.5 ) ),
      tandem: tandem.createTandem( 'columnControlPanel' )
    } );
    this.nonMassLayer.addChild( columnControlPanel );

    // The panels should fit in the space to the right of the plank.
    const maxControlPanelWidth = this.layoutBounds.maxX - plankNode.bounds.maxX - 20;

    // Ensures panels stay within bounds with short strings. This is crucial when wider panels (like the mass carousel)
    // are present, as panels strive to maintain the same width.
    const minControlPanelWidth = 170;

    // Add the control panel that will allow users to control the visibility of the various indicators.
    const showPanelTandem = tandem.createTandem( 'showPanel' );
    const indicatorVisibilityCheckboxGroup = new VerticalCheckboxGroup( [ {
      createNode: () => new Text( BalancingActStrings.massLabelsStringProperty, PANEL_OPTION_FONT ),
      property: this.viewProperties.massLabelsVisibleProperty,
      tandemName: 'massLabelsCheckbox'
    }, {
      createNode: () => new Text( BalancingActStrings.forcesFromObjectsStringProperty, PANEL_OPTION_FONT ),
      property: this.viewProperties.forceVectorsFromObjectsVisibleProperty,
      tandemName: 'forcesFromObjectsCheckbox'
    }, {
      createNode: () => new Text( BalancingActStrings.levelStringProperty, PANEL_OPTION_FONT ),
      property: this.viewProperties.levelIndicatorVisibleProperty,
      tandemName: 'levelCheckbox'
    }
    ], {
      checkboxOptions: { boxWidth: 15 },
      spacing: 5,
      tandem: showPanelTandem
    } );
    const titleToControlsVerticalSpace = 7;
    const indicatorVisibilityControlsVBox = new VBox( {
      children: [
        new Text( BalancingActStrings.showStringProperty, { font: PANEL_TITLE_FONT, maxWidth: PANEL_TEXT_MAX_WIDTH } ),
        new VStrut( titleToControlsVerticalSpace ),
        new HBox( { children: [ new HStrut( 10 ), indicatorVisibilityCheckboxGroup ] } )
      ],
      align: 'left'
    } );
    const indicatorVisibilityControlPanel = new Panel( indicatorVisibilityControlsVBox, {
      xMargin: X_MARGIN_IN_PANELS,
      fill: 'rgb( 240, 240, 240 )',
      top: 5,
      right: this.layoutBounds.width - 10,
      minWidth: minControlPanelWidth,
      maxWidth: maxControlPanelWidth
    } );

    // Add the control panel that will allow users to select between the various position markers, i.e. ruler, position
    // markers, or nothing.
    const positionPanel = new PositionIndicatorControlPanel(
      this.viewProperties.positionMarkerStateProperty, this.layoutBounds.width, {

        left: indicatorVisibilityControlPanel.left,
        top: indicatorVisibilityControlPanel.bottom + 5,
        minWidth: minControlPanelWidth,
        maxWidth: maxControlPanelWidth,
        tandem: tandem.createTandem( 'positionPanel' )
      } );
    const controlPanelsVBox = new VBox( {
      children: [ indicatorVisibilityControlPanel, positionPanel ],
      stretch: true,
      right: this.layoutBounds.right - 10,
      top: 5,
      spacing: 5
    } );
    this.nonMassLayer.addChild( controlPanelsVBox );

    // Add bounds for the control panels so that descendant types can see them for layout.
    this.controlPanelMaxWidth = maxControlPanelWidth;
    this.controlPanelVBox = controlPanelsVBox;

    // Reset All button.
    this.nonMassLayer.addChild( new ResetAllButton( {
      listener: () => this.reset(),
      scale: BASharedConstants.RESET_ALL_BUTTON_SCALE,
      right: controlPanelsVBox.right,
      bottom: this.layoutBounds.height - 10,
      tandem: tandem.createTandem( 'resetAllButton' )
    } ) );
  }

  /**
   * Get the node for the provided mass.
   */
  public getNodeForMass( mass: Mass ): Node | undefined {
    return this.massesToNodesMap.get( mass );
  }

  public reset(): void {
    this.interruptDragHandlerEmitter.emit();
    this.model.reset();
    _.values( this.viewProperties ).forEach( viewProperty => { viewProperty.reset(); } );
  }
}

balancingAct.register( 'BasicBalanceScreenView', BasicBalanceScreenView );