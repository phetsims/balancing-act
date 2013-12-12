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
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KitSelectionNode = require( 'BALANCING_ACT/common/view/KitSelectionNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var peopleString = require( 'string!BALANCING_ACT/people' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var WomanCreatorNode = require( 'BALANCING_ACT/balancelab/view/WomanCreatorNode' );

  // TODO: Temp for testing --------------
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  // End of temp for testing --------------

  // Constants
  var TITLE_FONT = new PhetFont( 16 );

  function MassKitSelectionNode( model, mvt, options ) {

    // Lay out the kit node for creating bricks of various sizes.
    var brickCreatorKit = new Node();
    brickCreatorKit.addChild( new VBox(
      {
        children: [
          new HBox(
            {
              children: [ new BrickStackCreatorNode( 1, model, mvt ), new BrickStackCreatorNode( 2, model, mvt ) ],
              spacing: 20

            } ),
          new HBox(
            {
              children: [ new BrickStackCreatorNode( 3, model, mvt ), new BrickStackCreatorNode( 4, model, mvt ) ],
              spacing: 20
            } )
        ],
        spacing: 5
      } ) );

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
          title: new Text( peopleString, { font: TITLE_FONT } ),
          content: new WomanCreatorNode( model, mvt )
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

