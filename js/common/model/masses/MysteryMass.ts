// Copyright 2013-2025, University of Colorado Boulder

/**
 * Type that defines 'mystery masses', which are masses whose mass value is not labeled, so the users must determine it
 * by testing it against known mass values.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Vector2 from '../../../../../dot/js/Vector2.js';
import optionize from '../../../../../phet-core/js/optionize.js';
import mysteryObject01_svg from '../../../../images/objects/mysteryObject01_svg.js';
import mysteryObject02_svg from '../../../../images/objects/mysteryObject02_svg.js';
import mysteryObject03_svg from '../../../../images/objects/mysteryObject03_svg.js';
import mysteryObject04_svg from '../../../../images/objects/mysteryObject04_svg.js';
import mysteryObject05_svg from '../../../../images/objects/mysteryObject05_svg.js';
import mysteryObject06_svg from '../../../../images/objects/mysteryObject06_svg.js';
import mysteryObject07_svg from '../../../../images/objects/mysteryObject07_svg.js';
import mysteryObject08_svg from '../../../../images/objects/mysteryObject08_svg.js';
import balancingAct from '../../../balancingAct.js';
import BalancingActStrings from '../../../BalancingActStrings.js';
import BAQueryParameters from '../../BAQueryParameters.js';
import LabeledImageMass, { type LabeledImageMassConfig } from './LabeledImageMass.js';

const massLabelAStringProperty = BalancingActStrings.massLabelAStringProperty;
const massLabelBStringProperty = BalancingActStrings.massLabelBStringProperty;
const massLabelCStringProperty = BalancingActStrings.massLabelCStringProperty;
const massLabelDStringProperty = BalancingActStrings.massLabelDStringProperty;
const massLabelEStringProperty = BalancingActStrings.massLabelEStringProperty;
const massLabelFStringProperty = BalancingActStrings.massLabelFStringProperty;
const massLabelGStringProperty = BalancingActStrings.massLabelGStringProperty;
const massLabelHStringProperty = BalancingActStrings.massLabelHStringProperty;

// in kg
const massValues = BAQueryParameters.stanford ? [ 15, 50, 2, 7, 32, 23, 18, 54 ] : [ 20, 5, 15, 10, 3, 50, 25, 7.5 ];

// Mass configurations
const MYSTERY_MASS_CONFIGURATIONS = [
  // Note that the height value needs to be somewhat coordinated with the
  // image for things to look good.
  {
    massValue: massValues[ 0 ], // in kg
    image: mysteryObject01_svg,
    height: 0.25, // in meters
    labelTextProperty: massLabelAStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 1 ], // in kg
    image: mysteryObject02_svg,
    height: 0.30, // in meters
    labelTextProperty: massLabelBStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 2 ], // in kg
    image: mysteryObject03_svg,
    height: 0.35, // in meters
    labelTextProperty: massLabelCStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 3 ], // in kg
    image: mysteryObject04_svg,
    height: 0.4, // in meters
    labelTextProperty: massLabelDStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 4 ], // in kg
    image: mysteryObject05_svg,
    height: 0.25, // in meters
    labelTextProperty: massLabelEStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 5 ], // in kg
    image: mysteryObject06_svg,
    height: 0.35, // in meters
    labelTextProperty: massLabelFStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 6 ], // in kg
    image: mysteryObject07_svg,
    height: 0.4, // in meters
    labelTextProperty: massLabelGStringProperty,
    isMystery: true
  },
  {
    massValue: massValues[ 7 ], // in kg
    image: mysteryObject08_svg,
    height: 0.3, // in meters
    labelTextProperty: massLabelHStringProperty,
    isMystery: true
  }
];

type SelfOptions = {
  // Currently no self options
};

type MysteryMassOptions = SelfOptions;

export default class MysteryMass extends LabeledImageMass {
  private readonly mysteryMassId: number;

  public constructor( initialPosition: Vector2, mysteryMassId: number, providedOptions?: MysteryMassOptions ) {
    const config = optionize<MysteryMassOptions, SelfOptions>()( MYSTERY_MASS_CONFIGURATIONS[ mysteryMassId ], providedOptions ) as LabeledImageMassConfig;

    super( initialPosition, config );
    this.mysteryMassId = mysteryMassId;
  }

  public override createCopy(): MysteryMass {
    return new MysteryMass( this.positionProperty.get(), this.mysteryMassId );
  }
}

balancingAct.register( 'MysteryMass', MysteryMass );