// Copyright 2013-2020, University of Colorado Boulder

/**
 * A node which allows the user to scroll through the various mass kits and
 * select individual masses for putting on the balance.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const AlignGroup = require( 'SCENERY/nodes/AlignGroup' );
  const balancingAct = require( 'BALANCING_ACT/balancingAct' );
  const BAQueryParameters = require( 'BALANCING_ACT/common/BAQueryParameters' );
  const BoyCreatorNode = require( 'BALANCING_ACT/balancelab/view/BoyCreatorNode' );
  const BrickStackCreatorNode = require( 'BALANCING_ACT/balancelab/view/BrickStackCreatorNode' );
  const Carousel = require( 'SUN/Carousel' );
  const GirlCreatorNode = require( 'BALANCING_ACT/balancelab/view/GirlCreatorNode' );
  const HBox = require( 'SCENERY/nodes/HBox' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ManCreatorNode = require( 'BALANCING_ACT/balancelab/view/ManCreatorNode' );
  const merge = require( 'PHET_CORE/merge' );
  const MysteryMassCreatorNode = require( 'BALANCING_ACT/balancelab/view/MysteryMassCreatorNode' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Tandem = require( 'TANDEM/Tandem' );
  const Text = require( 'SCENERY/nodes/Text' );
  const VBox = require( 'SCENERY/nodes/VBox' );
  const WomanCreatorNode = require( 'BALANCING_ACT/balancelab/view/WomanCreatorNode' );

  // strings
  const bricksString = require( 'string!BALANCING_ACT/bricks' );
  const mysteryObjectsString = require( 'string!BALANCING_ACT/mysteryObjects' );
  const peopleString = require( 'string!BALANCING_ACT/people' );

  // constants
  const TITLE_FONT = new PhetFont( 16 );

  function MassCarousel( model, modelViewTransform, options ) {

    options = merge( {

      // we do our own layout
      itemsPerPage: 1,

      // lightweight look for the buttons since the user must drag items across the buttons
      buttonColor: null,
      buttonStroke: null,

      tandem: Tandem.REQUIRED
    }, options );

    // Create the kit node for creating brick stacks of various sizes.
    const brickCreatorKit = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new BrickStackCreatorNode( 1, model, modelViewTransform, { tandem: options.tandem.createTandem( 'brickStackCreatorNode1' ) } ),
                      new BrickStackCreatorNode( 2, model, modelViewTransform, { tandem: options.tandem.createTandem( 'brickStackCreatorNode2' ) } )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      ...BAQueryParameters.stanford ? [] : [ new BrickStackCreatorNode( 3, model, modelViewTransform, { tandem: options.tandem.createTandem( 'brickStackCreatorNode3' ) } ) ],
                      new BrickStackCreatorNode( 4, model, modelViewTransform, { tandem: options.tandem.createTandem( 'brickStackCreatorNode4' ) } )
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
    const peopleKit1 = new Node(
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
    const peopleKit2 = new Node(
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
    const mysteryMassesKit1 = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 0, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode0' ) } ),
                      new MysteryMassCreatorNode( 1, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode1' ) } )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 2, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode2' ) } ),
                      new MysteryMassCreatorNode( 3, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode3' ) } )
                    ],
                    spacing: 20
                  } )
              ],
              spacing: 5
            } ) ]
      } );

    // Create the 2nd kit node for mystery masses.
    const mysteryMassesKit2 = new Node(
      {
        children: [
          new VBox(
            {
              children: [
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 4, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode4' ) } ),
                      new MysteryMassCreatorNode( 5, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode5' ) } )
                    ],
                    spacing: 20

                  } ),
                new HBox(
                  {
                    children: [
                      new MysteryMassCreatorNode( 6, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode6' ) } ),
                      new MysteryMassCreatorNode( 7, model, modelViewTransform, { tandem: options.tandem.createTandem( 'mysteryMassCreatorNode7' ) } )
                    ],
                    spacing: 20
                  } )
              ],
              spacing: 5
            } ) ]
      } );

    const elements = [
      {
        title: new Text( bricksString, { font: TITLE_FONT } ),
        content: brickCreatorKit
      },
      ...BAQueryParameters.stanford ? [] : [ {
        title: new Text( peopleString, { font: TITLE_FONT } ),
        content: peopleKit1
      },
        {
          title: new Text( peopleString, { font: TITLE_FONT } ),
          content: peopleKit2
        } ],
      {
        title: new Text( mysteryObjectsString, { font: TITLE_FONT } ),
        content: mysteryMassesKit1
      },
      {
        title: new Text( mysteryObjectsString, { font: TITLE_FONT } ),
        content: mysteryMassesKit2
      }
    ];

    // Create the actual kit selection node.
    let maxHeight = 0;
    for ( let i = 0; i < elements.length; i++ ) {
      const element = elements[ i ];
      const height = element.title.height + element.content.height;
      if ( height > maxHeight ) {
        maxHeight = height;
      }
    }

    const pageAlignGroup = new AlignGroup(); // Align all pages to the top
    const titleAlignGroup = new AlignGroup(); // Align all titles to the top
    const contentAlignGroup = new AlignGroup(); // Align contents to the center

    const pages = elements.map( element => {
      const vbox = new VBox( {
        spacing: 5,
        children: [ titleAlignGroup.createBox( element.title ), contentAlignGroup.createBox( element.content ) ]
      } );
      return pageAlignGroup.createBox( vbox, {
        yAlign: 'top'
      } );
    } );
    Carousel.call( this, pages, options );
  }

  balancingAct.register( 'MassCarousel', MassCarousel );

  return inherit( Carousel, MassCarousel );
} );

