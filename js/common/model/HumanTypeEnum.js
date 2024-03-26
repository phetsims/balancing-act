// Copyright 2023-2024, University of Colorado Boulder

/**
 * HumanTypeEnum identifies the human mass type.
 *
 * @author Luisa Vargas
 */

import EnumerationValue from '../../../../phet-core/js/EnumerationValue.js';
import balancingAct from '../../balancingAct.js';
import Enumeration from '../../../../phet-core/js/Enumeration.js';
import BalancingActImages from '../../BalancingActImages.js';

export class HumanTypeEnum extends EnumerationValue {

  static BOY = new HumanTypeEnum(
    BalancingActImages.boyStandingImageProperty,
    BalancingActImages.boySittingImageProperty );

  static GIRL = new HumanTypeEnum(
    BalancingActImages.girlStandingImageProperty,
    BalancingActImages.girlSittingImageProperty );

  static MAN = new HumanTypeEnum(
    BalancingActImages.manStandingImageProperty,
    BalancingActImages.manSittingImageProperty );

  static WOMAN = new HumanTypeEnum(
    BalancingActImages.womanStandingImageProperty,
    BalancingActImages.womanSittingImageProperty );

  static enumeration = new Enumeration( HumanTypeEnum );

  /**
   * @param standingImageProperty
   * @param sittingImageProperty
   */
  constructor( standingImageProperty, sittingImageProperty ) {
    super();
    this.standingImageProperty = standingImageProperty;
    this.sittingImageProperty = sittingImageProperty;
  }
}

balancingAct.register( 'HumanTypeEnum', HumanTypeEnum );
export default HumanTypeEnum;