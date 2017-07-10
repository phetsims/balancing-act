// Copyright 2013-2015, University of Colorado Boulder

/**
 * Type that defines 'mystery masses', which are masses whose mass value is
 * not labeled, so the users must determine it by testing it against known
 * mass values.
 */
define( function( require ) {
  'use strict';

  // modules
  var balancingAct = require( 'BALANCING_ACT/balancingAct' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LabeledImageMass = require( 'BALANCING_ACT/common/model/masses/LabeledImageMass' );

  // Mass configurations
  var MYSTERY_MASS_CONFIGURATIONS = [
    // Note that the height value needs to be somewhat coordinated with the
    // image for things to look good.
    {
      massValue: 20, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-01.png' ),
      height: 0.25, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelA' ),
      isMystery: true
    },
    {
      massValue: 5, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-02.png' ),
      height: 0.30, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelB' ),
      isMystery: true
    },
    {
      massValue: 15, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-03.png' ),
      height: 0.35, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelC' ),
      isMystery: true
    },
    {
      massValue: 10, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-04.png' ),
      height: 0.4, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelD' ),
      isMystery: true
    },
    {
      massValue: 3, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-05.png' ),
      height: 0.25, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelE' ),
      isMystery: true
    },
    {
      massValue: 50, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-06.png' ),
      height: 0.35, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelF' ),
      isMystery: true
    },
    {
      massValue: 25, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-07.png' ),
      height: 0.4, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelG' ),
      isMystery: true
    },
    {
      massValue: 7.5, // in kg
      image: require( 'image!BALANCING_ACT/mystery-object-08.png' ),
      height: 0.3, // in meters
      labelText: require( 'string!BALANCING_ACT/massLabelH' ),
      isMystery: true
    }
  ];

  function MysteryMass( initialPosition, mysteryMassId ) {
    LabeledImageMass.call( this, initialPosition, MYSTERY_MASS_CONFIGURATIONS[ mysteryMassId ] );
    this.mysteryMassId = mysteryMassId;
  }

  balancingAct.register( 'MysteryMass', MysteryMass );

  return inherit( LabeledImageMass, MysteryMass, {
    createCopy: function() {
      return new MysteryMass( this.positionProperty.get(), this.mysteryMassId );
    }
  } );
} );
