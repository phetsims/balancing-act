// Copyright 2023, University of Colorado Boulder

/**
 * HumanTypeEnum identifies the human mass type.
 *
 * @author Luisa Vargas
 */

import MappedProperty from '../../../../axon/js/MappedProperty.js';
import EnumerationValue from '../../../../phet-core/js/EnumerationValue.js';
import balancingAct from '../../balancingAct.js';
import Enumeration from '../../../../phet-core/js/Enumeration.js';
import PreferencesModelSingleton from '../PreferencesModelSingleton.js';

class HumanTypeEnum extends EnumerationValue {

  static BOY = new HumanTypeEnum( 'boy' );
  static GIRL = new HumanTypeEnum( 'girl' );
  static MAN = new HumanTypeEnum( 'man' );
  static WOMAN = new HumanTypeEnum( 'woman' );

  static enumeration = new Enumeration( HumanTypeEnum );

  /**
   * @param {string} humanType
   */
  constructor( humanType ) {
    super();
    this.standingImageProperty = new MappedProperty( PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty, {
      map: portrayal => {
        if ( humanType === 'boy' ) {
          return portrayal.boyStanding;
        }
        else if ( humanType === 'girl' ) {
          return portrayal.girlStanding;
        }
        else if ( humanType === 'man' ) {
          return portrayal.manStanding;
        }
        else {
          assert && assert( humanType === 'woman', 'Human type must be boy, girl, man, or woman but it is ', humanType );
          return portrayal.womanStanding;
        }
      }
    } );

    this.sittingImageProperty = new MappedProperty( PreferencesModelSingleton.localizationModel.regionAndCulturePortrayalProperty, {
      map: portrayal => {
        if ( humanType === 'boy' ) {
          return portrayal.boySitting;
        }
        else if ( humanType === 'girl' ) {
          return portrayal.girlSitting;
        }
        else if ( humanType === 'man' ) {
          return portrayal.manSitting;
        }
        else {
          assert && assert( humanType === 'woman', 'Human type must be boy, girl, man, or woman but it is ', humanType );
          return portrayal.womanSitting;
        }
      }
    } );
  }
}

balancingAct.register( 'HumanTypeEnum', HumanTypeEnum );
export default HumanTypeEnum;