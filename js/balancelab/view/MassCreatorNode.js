// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base class for PNodes that create masses in the model when clicked upon.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var kgString = require( 'string!BALANCING_ACT/kg' );
  var ModelElementCreatorNode = require( 'BALANCING_ACT/balancelab/view/ModelElementCreatorNode' );
  //REVIEW: pattern0Value1Units is used only for mass in kg (maybe should be named for that)
  //REVIEW: In general, I don't like the pattern0Value1Units pattern since it forces translators to use "all units before values" or "all values before units".
  var pattern0Value1UnitsString = require( 'string!BALANCING_ACT/pattern0Value1Units' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );

  /**
   * @param {ModelViewTransform2} mvt
   * @param {number} massValue
   * @param {boolean} showMassLabel
   * @param {Object} options
   * @constructor
   */
  function MassCreatorNode( mvt, massValue, showMassLabel, options ) {
    ModelElementCreatorNode.call( this, mvt, options );
    if ( showMassLabel ) {
      this.setCaption( StringUtils.format( pattern0Value1UnitsString, massValue, kgString ) );
    }
  }

  return inherit( ModelElementCreatorNode, MassCreatorNode );
} );
