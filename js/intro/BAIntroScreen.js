// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Intro' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import Image from '../../../scenery/js/nodes/Image.js';
import introIconSmall from '../../images/intro-icon-small_png.js';
import introIcon from '../../images/intro-icon_png.js';
import balancingActStrings from '../balancing-act-strings.js';
import balancingAct from '../balancingAct.js';
import BAIntroModel from './model/BAIntroModel.js';
import BAIntroView from './view/BAIntroView.js';

const introString = balancingActStrings.intro;


function BAIntroScreen( tandem ) {

  const options = {
    name: introString,
    homeScreenIcon: new Image( introIcon ),
    navigationBarIcon: new Image( introIconSmall ),
    tandem: tandem
  };

  Screen.call( this,
    function() { return new BAIntroModel( tandem.createTandem( 'model' ) ); },
    function( model ) { return new BAIntroView( model, tandem.createTandem( 'view' ) ); },
    options );
}

balancingAct.register( 'BAIntroScreen', BAIntroScreen );

inherit( Screen, BAIntroScreen );
export default BAIntroScreen;