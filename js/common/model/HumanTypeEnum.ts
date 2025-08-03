// Copyright 2023-2025, University of Colorado Boulder

/**
 * HumanTypeEnum identifies the human mass type.
 *
 * @author Luisa Vargas
 */

import LocalizedImageProperty from '../../../../joist/js/i18n/LocalizedImageProperty.js';
import Enumeration from '../../../../phet-core/js/Enumeration.js';
import EnumerationValue from '../../../../phet-core/js/EnumerationValue.js';
import balancingAct from '../../balancingAct.js';
import BalancingActImages from '../../BalancingActImages.js';

export class HumanTypeEnum extends EnumerationValue {

  public static readonly BOY = new HumanTypeEnum(
    BalancingActImages.boyStandingImageProperty,
    BalancingActImages.boySittingImageProperty );

  public static readonly GIRL = new HumanTypeEnum(
    BalancingActImages.girlStandingImageProperty,
    BalancingActImages.girlSittingImageProperty );

  public static readonly MAN = new HumanTypeEnum(
    BalancingActImages.manStandingImageProperty,
    BalancingActImages.manSittingImageProperty );

  public static readonly WOMAN = new HumanTypeEnum(
    BalancingActImages.womanStandingImageProperty,
    BalancingActImages.womanSittingImageProperty );

  public static readonly enumeration = new Enumeration( HumanTypeEnum );

  public constructor(
    public readonly standingImageProperty: LocalizedImageProperty,
    public readonly sittingImageProperty: LocalizedImageProperty
  ) {
    super();
  }
}

balancingAct.register( 'HumanTypeEnum', HumanTypeEnum );
export default HumanTypeEnum;