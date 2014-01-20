// Copyright 2002-2014, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // Imports
  var FaceNode = require( 'SCENERY_PHET/FaceNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  /**
   * Node that represents a smiling face with the additional points gained
   * for getting the answer correct shown immediately below it.
   */
  function FaceWithScoreNode( faceDiameter, options ) {
    Node.call( this );

    this.faceNode = new FaceNode( faceDiameter, { opacity: 0.6 } );
    this.addChild( this.faceNode );

    this.pointDisplay = new Text( '',
      {
        font: new PhetFont( { size: 44, weight: 'bold', lineWidth: 1.5, fill: 'yellow' } ),
        fill: 'yellow',
        stroke: 'black',
        lineWidth: 1,
        centerX: faceDiameter * 0.4,
        bottom: faceDiameter / 2
      } );
    this.addChild( this.pointDisplay );

    // Pass options through to the parent class.
    this.mutate( options );
  }

  return inherit( Node, FaceWithScoreNode, {
    smile: function() {
      this.faceNode.smile();
    },
    frown: function() {
      this.faceNode.frown();
    },
    setScore: function( score ) {
      assert && assert( score >= 0 );
      this.pointDisplay.text = '+' + score;
    }
  } );
} );