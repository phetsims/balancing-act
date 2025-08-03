// Copyright 2014-2025, University of Colorado Boulder

/**
 * This class presents a dialog to the user that allows them to enter a mass value.
 *
 * @author John Blanco
 */

import NumberProperty from '../../../../axon/js/NumberProperty.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Range from '../../../../dot/js/Range.js';
import Utils from '../../../../dot/js/Utils.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import AlignBox from '../../../../scenery/js/layout/nodes/AlignBox.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import ArrowButton from '../../../../sun/js/buttons/ArrowButton.js';
import HSlider from '../../../../sun/js/HSlider.js';
import Panel from '../../../../sun/js/Panel.js';
import balancingAct from '../../balancingAct.js';
import BalancingActStrings from '../../BalancingActStrings.js';

const kgStringProperty = BalancingActStrings.kgStringProperty;
const pattern0Value1UnitsStringProperty = BalancingActStrings.pattern0Value1UnitsStringProperty;

// constants
const READOUT_FONT = new PhetFont( 16 );
const ARROW_HEIGHT = 15;
const MAX_MASS = 100;
const TICK_MARK_FONT = new PhetFont( 10 );
const READOUT_BACKGROUND_WIDTH = 100;
const READOUT_BACKGROUND_HEIGHT = 24;

class MassValueEntryNode extends Node {
  public readonly massValueProperty: NumberProperty;

  public constructor( options?: IntentionalAny ) {
    super();
    this.massValueProperty = new NumberProperty( 0 );

    // Create and add the readout, including the background.

    const readoutBackground = new Rectangle( 0, 0, READOUT_BACKGROUND_WIDTH, READOUT_BACKGROUND_HEIGHT * 1.3, 4, 4,
      {
        fill: 'white',
        stroke: 'black'
      }
    );

    const readoutText = new Text( new PatternStringProperty( pattern0Value1UnitsStringProperty, {
      0: this.massValueProperty,
      1: kgStringProperty
    }, {
      formatNames: [ '0', '1' ]
    } ), {
      font: READOUT_FONT,
      maxWidth: 95 // empirically determined based on tests with long strings
    } );
    const readoutAlignBox = new AlignBox( readoutText, {
      xAlign: 'center',
      yAlign: 'center',
      alignBounds: readoutBackground.rectBounds
    } );
    const panelContent = new Node();
    panelContent.addChild( readoutBackground );
    panelContent.addChild( readoutAlignBox );

    // Create and add the slider.
    const slider = new HSlider( this.massValueProperty, new Range( 0, MAX_MASS ), {
      thumbSize: new Dimension2( 15, 30 ),
      thumbTouchAreaXDilation: 8,
      thumbTouchAreaYDilation: 8,
      majorTickLength: 15,
      tickLabelSpacing: 2,
      constrainValue: Utils.roundSymmetric
    } );
    panelContent.addChild( slider );
    for ( let i = 0; i <= MAX_MASS; i += 10 ) {
      if ( i % 50 === 0 ) {
        slider.addMajorTick( i, new Text( i, { font: TICK_MARK_FONT } ) );
      }
      else {

        // @ts-expect-error
        slider.addMinorTick( i, null );
      }
    }

    // Create and add the arrow buttons.
    const arrowButtonOptions = { arrowHeight: ARROW_HEIGHT, arrowWidth: ARROW_HEIGHT * Math.sqrt( 3 ) / 2 };
    const leftArrowButton = new ArrowButton( 'left', () => { this.massValueProperty.value--; }, arrowButtonOptions );
    panelContent.addChild( leftArrowButton );
    const rightArrowButton = new ArrowButton( 'right', () => { this.massValueProperty.value++; }, arrowButtonOptions );
    panelContent.addChild( rightArrowButton );

    // layout
    this.massValueProperty.value = MAX_MASS / 2; // Make sure slider is in the middle during layout.
    readoutBackground.centerX = slider.bounds.width / 2;
    readoutAlignBox.center = readoutBackground.center;
    readoutBackground.top = 0;
    slider.left = 0;
    slider.top = readoutBackground.bottom + 5;
    leftArrowButton.right = slider.left - 12;
    leftArrowButton.centerY = slider.centerY;
    rightArrowButton.left = slider.right + 12;
    rightArrowButton.centerY = slider.centerY;
    this.massValueProperty.reset(); // Put slider back to original position.

    // Put the contents into a panel.
    const panel = new Panel( panelContent, { fill: 'rgb( 234, 234, 174 )', xMargin: 7, yMargin: 7 } );
    this.addChild( panel );

    // Update the readout text and arrow button states whenever the value changes.
    this.massValueProperty.link( value => {
      leftArrowButton.enabled = ( value > 0 );
      rightArrowButton.enabled = ( value < MAX_MASS );
    } );

    this.mutate( options );
  }

  public clear(): void {
    this.massValueProperty.reset();
  }

  public showAnswer( massValue: number ): void {
    this.massValueProperty.value = massValue;
  }
}

balancingAct.register( 'MassValueEntryNode', MassValueEntryNode );

export default MassValueEntryNode;