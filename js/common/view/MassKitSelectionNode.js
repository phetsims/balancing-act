// Copyright 2002-2013, University of Colorado Boulder

/**
 * A node which allows the user to scroll through the various mass kits and
 * select individual masses for putting on the balance.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var bricksString = require( 'string!BALANCING_ACT/bricks' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KitSelectionNode = require( 'BALANCING_ACT/common/view/KitSelectionNode' );
  var Text = require( 'SCENERY/nodes/Text' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );

  // TODO: Temp for testing --------------
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  // End of temp for testing --------------

  // Constants
  var TITLE_FONT = new PhetFont( 16 );

  function MassKitSelectionNode( model, mvt, options ) {
    this.selectedKit = new Property( 0 );
    KitSelectionNode.call( this, this.selectedKit,
      [
        {
          title: new Text( bricksString, { font: TITLE_FONT } ),
          content: new Rectangle( 0, 0, 20, 20, 0, 0, { fill: 'pink'} )
        },
        {
          title: new Text( 'Stuff', { font: TITLE_FONT } ),
          content: new Rectangle( 0, 0, 60, 60, 8, 8, { fill: 'green'} )
        },
        {
          title: new Text( 'Square stuff', { font: TITLE_FONT } ),
          content: new Rectangle( 0, 0, 50, 50, 5, 5, { fill: 'blue'} )
        }
      ], options );
  }

  return inherit( KitSelectionNode, MassKitSelectionNode,
    {
      reset: function() {
        this.selectedKit.reset();
      }
    }
  );
} );

