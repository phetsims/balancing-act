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
  var pattern0Value1UnitsString = require( 'string!BALANCING_ACT/pattern0Value1Units' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );

  //TODO: This level in the inheritance hierarchy doesn't seem to add much
  // value.  When the port from Java is complete (or nearly so), consider
  // consolidating this into its parent class.

  /**
   * @param {BalanceLabModel} model
   * @param {ModelViewTransform2} mvt
   * @param {number} massValue
   * @param {boolean} showMassLabel
   * @param {Object} options
   * @constructor
   */
  function MassCreatorNode( model, mvt, massValue, showMassLabel, options ) {
    ModelElementCreatorNode.call( this, model, mvt, options );
    if ( showMassLabel ) {
      this.setCaption( StringUtils.format( pattern0Value1UnitsString, massValue, kgString ) );
    }
  }

  return inherit( ModelElementCreatorNode, MassCreatorNode );
} );