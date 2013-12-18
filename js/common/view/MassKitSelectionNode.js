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
  var GirlCreatorNode = require( 'BALANCING_ACT/balancelab/view/GirlCreatorNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KitSelectionNode = require( 'BALANCING_ACT/common/view/KitSelectionNode' );
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

  // Constants
  var TITLE_FONT = new PhetFont( 16 );

  function MassKitSelectionNode( model, mvt, options ) {

    // Create the kit node for creating brick stacks of various sizes.
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

    // Create the 1st kit node for creating people.
    var peopleKit1 = new Node();
    peopleKit1.addChild( new HBox(
      {
        children: [
          new BoyCreatorNode( model, mvt ),
          new ManCreatorNode( model, mvt )
        ],
        spacing: 5
      } ) );

    // Create the 2nd kit node for creating people.
    var peopleKit2 = new Node();
    peopleKit2.addChild( new HBox(
      {
        children: [
          new GirlCreatorNode( model, mvt ),
          new WomanCreatorNode( model, mvt )
        ],
        spacing: 5
      } ) );

    // Create the 1st kit node for mystery masses.
    var mysteryMassesKit1 = new Node();
    mysteryMassesKit1.addChild( new VBox(
      {
        children: [
          new HBox(
            {
              children: [ new MysteryMassCreatorNode( 0, model, mvt ), new MysteryMassCreatorNode( 1, model, mvt ) ],
              spacing: 20

            } ),
          new HBox(
            {
              children: [ new MysteryMassCreatorNode( 2, model, mvt ), new MysteryMassCreatorNode( 3, model, mvt ) ],
              spacing: 20
            } )
        ],
        spacing: 5
      } ) );

    // Create the 2nd kit node for mystery masses.
    var mysteryMassesKit2 = new Node();
    mysteryMassesKit2.addChild( new VBox(
      {
        children: [
          new HBox(
            {
              children: [ new MysteryMassCreatorNode( 4, model, mvt ), new MysteryMassCreatorNode( 5, model, mvt ) ],
              spacing: 20

            } ),
          new HBox(
            {
              children: [ new MysteryMassCreatorNode( 6, model, mvt ), new MysteryMassCreatorNode( 7, model, mvt ) ],
              spacing: 20
            } )
        ],
        spacing: 5
      } ) );

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

