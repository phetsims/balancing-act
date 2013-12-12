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
  var BoyCreatorNode = require( 'BALANCING_ACT/balancelab/view/BoyCreatorNode' );
  var BrickStackCreatorNode = require( 'BALANCING_ACT/balancelab/view/BrickStackCreatorNode' );
  var bricksString = require( 'string!BALANCING_ACT/bricks' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KitSelectionNode = require( 'BALANCING_ACT/common/view/KitSelectionNode' );
  var peopleString = require( 'string!BALANCING_ACT/people' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Text = require( 'SCENERY/nodes/Text' );

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
          content: new BrickStackCreatorNode( 2, model, mvt )
        },
        {
          title: new Text( peopleString, { font: TITLE_FONT } ),
          content: new BoyCreatorNode( model, mvt )
        },
        {
          title: new Text( 'Square', { font: TITLE_FONT } ),
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

