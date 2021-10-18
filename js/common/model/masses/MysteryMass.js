// Copyright 2013-2020, University of Colorado Boulder

/**
 * Type that defines 'mystery masses', which are masses whose mass value is
 * not labeled, so the users must determine it by testing it against known
 * mass values.
 */
define( require => {
  'use strict';

  // modules
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BAQueryParameters = require( 'BALANCING_ACT/common/BAQueryParameters' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LabeledImageMass = require( 'BALANCING_ACT/common/model/masses/LabeledImageMass' );
  const merge = require( 'PHET_CORE/merge' );

  // images
  const mysteryObject1Image = require( 'image!BALANCING_ACT/mystery-object-01.png' );
  const mysteryObject2Image = require( 'image!BALANCING_ACT/mystery-object-02.png' );
  const mysteryObject3Image = require( 'image!BALANCING_ACT/mystery-object-03.png' );
  const mysteryObject4Image = require( 'image!BALANCING_ACT/mystery-object-04.png' );
  const mysteryObject5Image = require( 'image!BALANCING_ACT/mystery-object-05.png' );
  const mysteryObject6Image = require( 'image!BALANCING_ACT/mystery-object-06.png' );
  const mysteryObject7Image = require( 'image!BALANCING_ACT/mystery-object-07.png' );
  const mysteryObject8Image = require( 'image!BALANCING_ACT/mystery-object-08.png' );

  // strings
  const massLabelAString = require( 'string!BALANCING_ACT/massLabelA' );
  const massLabelBString = require( 'string!BALANCING_ACT/massLabelB' );
  const massLabelCString = require( 'string!BALANCING_ACT/massLabelC' );
  const massLabelDString = require( 'string!BALANCING_ACT/massLabelD' );
  const massLabelEString = require( 'string!BALANCING_ACT/massLabelE' );
  const massLabelFString = require( 'string!BALANCING_ACT/massLabelF' );
  const massLabelGString = require( 'string!BALANCING_ACT/massLabelG' );
  const massLabelHString = require( 'string!BALANCING_ACT/massLabelH' );

  // in kg
  const massValues = BAQueryParameters.stanford ? [ 15, 50, 2, 7, 32, 23, 18, 55 ] : [ 20, 5, 15, 10, 3, 50, 25, 7.5 ];

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

  /**
   * @param {Vector2} initialPosition
   * @param {number} mysteryMassId
   * @param {Object} [options]
   * @constructor
   */
  function MysteryMass( initialPosition, mysteryMassId, options ) {
    assert && assert( typeof mysteryMassId === 'number', 'mysteryMassId must be a number' );
    const config = merge( options, MYSTERY_MASS_CONFIGURATIONS[ mysteryMassId ] );

    LabeledImageMass.call( this, initialPosition, config );
    this.mysteryMassId = mysteryMassId;
  }

  balancingAct.register( 'MysteryMass', MysteryMass );

  return inherit( LabeledImageMass, MysteryMass, {
    createCopy: function() {
      return new MysteryMass( this.positionProperty.get(), this.mysteryMassId );
    }
  } );
} );