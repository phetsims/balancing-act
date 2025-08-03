// Copyright 2013-2025, University of Colorado Boulder

/**
 * Base class for all objects that can be placed on the balance.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import optionize from '../../../../phet-core/js/optionize.js';
import PhetioObject, { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import IOType from '../../../../tandem/js/types/IOType.js';
import ReferenceIO from '../../../../tandem/js/types/ReferenceIO.js';
import balancingAct from '../../balancingAct.js';

// constants
const MIN_ANIMATION_VELOCITY = 3; // In meters/sec.
const MAX_REMOVAL_ANIMATION_DURATION = 0.75; // In seconds.

type SelfOptions = {
  // Currently no self options
};

export type MassOptions = SelfOptions & PhetioObjectOptions;

export default class Mass extends PhetioObject {

  // Indicates whether this mass is currently user controlled, i.e. being moved around by the user.
  public readonly userControlledProperty: Property<boolean>;

  // Contains the position in model space.  By convention for this simulation, the position of a
  // mass is the center bottom of the model object.
  public readonly positionProperty: Property<Vector2>;

  // Contains the rotation angle, in radians, of the model element.  By convention for this simulation,
  // the point of rotation is considered to be the center bottom of the model element.
  public readonly rotationAngleProperty: Property<number>;

  // Tracks whether this mass is on the plank, changes to which may initiate changes in the visual
  // depiction of the mass.
  public readonly onPlankProperty: Property<boolean>;

  // Indicates whether this model element is currently animating.  At the time of this writing,
  // the only animation supported is a simple linear motion to a preset point.
  public readonly animatingProperty: Property<boolean>;

  // Externally used (i.e. public) attributes that don't need to be properties.
  public readonly massValue: number;
  public animationDestination: Vector2 | null;
  public animationMotionVector: Vector2 | null;
  public animationScale: number;
  public expectedAnimationTime: number;
  public readonly isMystery: boolean;

  // This property is used to keep track of a function that is used to
  // add/remove this mass from a list of user-controlled masses.
  public userControlledMassesUpdater: ( ( userControlled: boolean ) => void ) | null;

  // Since not all objects are symmetrical, some may need to have an offset
  // that indicates where their center of mass is when placed on a balance.
  // This is the horizontal offset from the center of the shape or image.
  public centerOfMassXOffset: number;

  public constructor( massValue: number, initialPosition: Vector2, isMystery: boolean, providedOptions?: MassOptions ) {

    const options = optionize<MassOptions, SelfOptions, PhetioObjectOptions>()( {
      tandem: Tandem.REQUIRED,
      phetioType: ReferenceIO( IOType.ObjectIO ),
      phetioState: false
    }, providedOptions );

    // instrumented so it can be phetioDynamicElement: true for PhetioGroups
    super( options );

    this.userControlledProperty = new Property( false );
    this.positionProperty = new Property( initialPosition );
    this.rotationAngleProperty = new Property( 0 );
    this.onPlankProperty = new Property( false );
    this.animatingProperty = new Property( false );

    this.massValue = massValue;
    this.animationDestination = null;
    this.animationMotionVector = null;
    this.animationScale = 1;
    this.expectedAnimationTime = 0;
    this.isMystery = isMystery;

    this.userControlledMassesUpdater = null;
    this.centerOfMassXOffset = 0;
  }

  public override dispose(): void {
    this.userControlledProperty.unlinkAll();
    super.dispose();
  }

  public reset(): void {
    this.userControlledProperty.reset();
    this.positionProperty.reset();
    this.rotationAngleProperty.reset();
    this.onPlankProperty.reset();
    this.animatingProperty.reset();
  }

  /**
   * @param translationVector
   */
  private translate( translationVector: Vector2 ): void {
    this.positionProperty.set( this.positionProperty.get().plus( translationVector ) );
  }

  public getMiddlePoint(): Vector2 { throw new Error( 'getMiddlePoint should be implemented in descendant types.' ); }

  public initiateAnimation(): void {

    // Calculate velocity.  A higher velocity is used if the model element has a long way to travel, otherwise it
    // takes too long.
    const position = this.positionProperty.get();
    const velocity = Math.max(
      position.distance( this.animationDestination! ) / MAX_REMOVAL_ANIMATION_DURATION,
      MIN_ANIMATION_VELOCITY
    );
    this.expectedAnimationTime = position.distance( this.animationDestination! ) / velocity; // In seconds.

    // Calculate the animation motion vector.
    this.animationMotionVector = new Vector2( velocity, 0 );
    const animationAngle = Math.atan2(
      this.animationDestination!.y - position.y,
      this.animationDestination!.x - position.x
    );

    this.animationMotionVector = this.animationMotionVector.rotated( animationAngle );

    // Update the property that tracks the animation state.
    this.animatingProperty.set( true );
  }

  /**
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    if ( this.animatingProperty.get() ) {

      // Do a step of the linear animation towards the destination.
      if ( this.positionProperty.get().distance( this.animationDestination! ) >= this.animationMotionVector!.magnitude * dt ) {

        // Perform next step of animation.
        this.translate( this.animationMotionVector!.times( dt ) );
        this.animationScale = Math.max( this.animationScale - ( dt / this.expectedAnimationTime ) * 0.9, 0.1 );
      }
      else {

        // Close enough - animation is complete.
        this.positionProperty.set( this.animationDestination! );
        this.animatingProperty.set( false );
        this.animationScale = 1;
      }
    }
  }

  public createCopy(): Mass { throw new Error( 'createCopy should be implemented in descendant types.' ); }
}

balancingAct.register( 'Mass', Mass );