// Copyright 2013-2015, University of Colorado Boulder

/**
 * A node which allows the user to scroll through the various mass kits and
 * select individual masses for putting on the balance.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var BoyCreatorNode = require( 'BALANCING_ACT/balancelab/view/BoyCreatorNode' );
  var BrickStackCreatorNode = require( 'BALANCING_ACT/balancelab/view/BrickStackCreatorNode' );
  var bricksString = require( 'string!BALANCING_ACT/bricks' );
  var GirlCreatorNode = require( 'BALANCING_ACT/balancelab/view/GirlCreatorNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KitSelectionNode = require( 'SCENERY_PHET/KitSelectionNode' );
  var ManCreatorNode = require( 'BALANCING_ACT/balancelab/view/ManCreatorNode' );
  var MysteryMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/MysteryMassCreatorNode' );
  var mysteryObjectsString = require( 'string!BALANCING_ACT/mysteryObjects' );
  var Node = require( 'SCENERY/nodes/Node' );
  var peopleString = require( 'string!BALANCING_ACT/people' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var WomanCreatorNode = require( 'BALANCING_ACT/balancelab/view/WomanCreatorNode' );

  // constants
  var TITLE_FONT = new PhetFont( 16 );

  function MassKitSelectionNode( model, modelViewTransform, options ) {

    // Create the kit node for creating brick stacks of various sizes.
    var brickCreatorKit = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new BrickStackCreatorNode( 1, model, modelViewTransform ),
                      new BrickStackCreatorNode( 2, model, modelViewTransform )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      new BrickStackCreatorNode( 3, model, modelViewTransform ),
                      new BrickStackCreatorNode( 4, model, modelViewTransform )
                    ],
                    spacing: 20
                  } )
              ],
              spacing: 20
            } )
        ]
      }
    );

    // Create the 1st kit node for creating people.
    var peopleKit1 = new Node(
      {
        children: [
          new HBox(
            {
              children: [
                new BoyCreatorNode( model, modelViewTransform ),
                new ManCreatorNode( model, modelViewTransform )
              ],
              spacing: 5
            } )
        ]
      } );

    // Create the 2nd kit node for creating people.
    var peopleKit2 = new Node(
      {
        children: [
          new HBox(
            {
              children: [
                new GirlCreatorNode( model, modelViewTransform ),
                new WomanCreatorNode( model, modelViewTransform )
              ],
              spacing: 5
            } )
        ]
      } );

    // Create the 1st kit node for mystery masses.
    var mysteryMassesKit1 = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 0, model, modelViewTransform ),
                      new MysteryMassCreatorNode( 1, model, modelViewTransform )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 2, model, modelViewTransform ),
                      new MysteryMassCreatorNode( 3, model, modelViewTransform )
                    ],
                    spacing: 20
                  } )
              ],
              spacing: 5
            } ) ]
      } );

    // Create the 2nd kit node for mystery masses.
    var mysteryMassesKit2 = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 4, model, modelViewTransform ),
                      new MysteryMassCreatorNode( 5, model, modelViewTransform )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 6, model, modelViewTransform ),
                      new MysteryMassCreatorNode( 7, model, modelViewTransform )
                    ],
                    spacing: 20
                  } )
              ],
              spacing: 5
            } ) ]
      } );

    // Create the actual kit selection node.
    this.selectedKit = new Property( 0 );
    KitSelectionNode.call( this, this.selectedKit,
      [
        {
          title: new Text( bricksString, { font: TITLE_FONT } ),
          content: brickCreatorKit
        },
        {
          title: new Text( peopleString, { font: TITLE_FONT } ),
          content: peopleKit1
        },
        {
          title: new Text( peopleString, { font: TITLE_FONT } ),
          content: peopleKit2
        },
        {
          title: new Text( mysteryObjectsString, { font: TITLE_FONT } ),
          content: mysteryMassesKit1
        },
        {
          title: new Text( mysteryObjectsString, { font: TITLE_FONT } ),
          content: mysteryMassesKit2
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

