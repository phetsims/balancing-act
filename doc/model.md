# Description of the models used in "Balancing Act".

## Torque Model

The primary mathematical model for this simulation is the torque equation, which is t = r x F where t is the torque, r
is the displacement vector, and F is the force. Written on non-vector notation, the equation is t = rFsin(theta), where
theta is the angle of the force vector with respect to the displacement vector.

On a real plank with a balance point (i.e. a fulcrum) beneath it, the torque is equal when equal masses are placed at
equal distances from the center on each side, and no rotational movement will result. This is the reason that we chose
to place the pivot point of the plank just above the plank rather than beneath it. This causes the displacement vector
r, and hence the torque, to be larger for items on the right side when the plank is tilted to the left, and vice versa.
In this case, the torque only becomes equal for equal masses with equal displacement vectors when the plank is level.

## Game Ratios

In the game, the user is challenged to either balance one or more masses by placing a counter mass on the other side, or
to deduce the mass of an unknown object. In the lower game levels, the ratios of the masses are kept relatively simple,
such as 1:1, 1:2, or 2:1. For example, a challenge might have a 10kg mass on the left side and the user has to place a
5kg at the appropriate location on the right side of the plank. In this case, the 5kg mass would need to be twice as far
from the pivot point as the 10kg mass.

In height levels of the game, more difficult ratios are used, such as 1:3, 2:3, and so on.
