// Copyright 2013-2020, University of Colorado Boulder

/**
 * Type that defines 'mystery masses', which are masses whose mass value is
 * not labeled, so the users must determine it by testing it against known
 * mass values.
 */

import merge from '../../../../../phet-core/js/merge.js';
import mysteryObject1Image from '../../../../images/mystery-object-01_png.js';
import mysteryObject2Image from '../../../../images/mystery-object-02_png.js';
import mysteryObject3Image from '../../../../images/mystery-object-03_png.js';
import mysteryObject4Image from '../../../../images/mystery-object-04_png.js';
import mysteryObject5Image from '../../../../images/mystery-object-05_png.js';
import mysteryObject6Image from '../../../../images/mystery-object-06_png.js';
import mysteryObject7Image from '../../../../images/mystery-object-07_png.js';
import mysteryObject8Image from '../../../../images/mystery-object-08_png.js';
import balancingAct from '../../../balancingAct.js';
import balancingActStrings from '../../../balancingActStrings.js';
import BAQueryParameters from '../../BAQueryParameters.js';
import LabeledImageMass from './LabeledImageMass.js';

const massLabelAString = balancingActStrings.massLabelA;
const massLabelBString = balancingActStrings.massLabelB;
const massLabelCString = balancingActStrings.massLabelC;
const massLabelDString = balancingActStrings.massLabelD;
const massLabelEString = balancingActStrings.massLabelE;
const massLabelFString = balancingActStrings.massLabelF;
const massLabelGString = balancingActStrings.massLabelG;
const massLabelHString = balancingActStrings.massLabelH;

// in kg
const massValues = BAQueryParameters.stanford ? [ 15, 50, 2, 7, 32, 23, 18, 54 ] : [ 20, 5, 15, 10, 3, 50, 25, 7.5 ];

// Mass configurations
const MYSTERY_MASS_CONFIGURATIONS = [
  // Note that the height value needs to be somewhat coordinated with the
  // image for things to look good.
  {
    massValue: massValues[ 0 ], // in kg
    image: mysteryObject1Image,
    height: 0.25, // in meters
    labelText: massLabelAString,
    isMystery: true
  },
  {
    massValue: massValues[ 1 ], // in kg
    image: mysteryObject2Image,
    height: 0.30, // in meters
    labelText: massLabelBString,
    isMystery: true
  },
  {
    massValue: massValues[ 2 ], // in kg
    image: mysteryObject3Image,
    height: 0.35, // in meters
    labelText: massLabelCString,
    isMystery: true
  },
  {
    massValue: massValues[ 3 ], // in kg
    image: mysteryObject4Image,
    height: 0.4, // in meters
    labelText: massLabelDString,
    isMystery: true
  },
  {
    massValue: massValues[ 4 ], // in kg
    image: mysteryObject5Image,
    height: 0.25, // in meters
    labelText: massLabelEString,
    isMystery: true
  },
  {
    massValue: massValues[ 5 ], // in kg
    image: mysteryObject6Image,
    height: 0.35, // in meters
    labelText: massLabelFString,
    isMystery: true
  },
  {
    massValue: massValues[ 6 ], // in kg
    image: mysteryObject7Image,
    height: 0.4, // in meters
    labelText: massLabelGString,
    isMystery: true
  },
  {
    massValue: massValues[ 7 ], // in kg
    image: mysteryObject8Image,
    height: 0.3, // in meters
    labelText: massLabelHString,
    isMystery: true
  }
];

class MysteryMass extends LabeledImageMass {

  /**
   * @param {Vector2} initialPosition
   * @param {number} mysteryMassId
   * @param {Object} [options]
   */
  constructor( initialPosition, mysteryMassId, options ) {
    assert && assert( typeof mysteryMassId === 'number', 'mysteryMassId must be a number' );
    const config = merge( options, MYSTERY_MASS_CONFIGURATIONS[ mysteryMassId ] );

    super( initialPosition, config );
    this.mysteryMassId = mysteryMassId;
  }

  /**
   * @public
   */
  createCopy() {
    return new MysteryMass( this.positionProperty.get(), this.mysteryMassId );
  }
}

balancingAct.register( 'MysteryMass', MysteryMass );

export default MysteryMass;