# Problem: Projectile Maximum Height Calculator

## Objective
Develop a function that calculates the maximum height reached by an object thrown 
vertically upward.

## Scenario
You are building a physics simulation module for an educational platform. When 
an object is launched vertically upward, its height over time is modeled by a 
quadratic function:

    h(t) = v₀t - (1/2)gt²

Where:
- `h(t)` is the height at time `t`
- `v₀` is the initial velocity (m/s)
- `g` is the acceleration due to gravity (9.8 m/s²)
- `t` is time in seconds

The maximum height occurs at the vertex of the parabola. The time to reach 
maximum height is given by:

    t = v₀ / g

## Requirements
1. Create a function named `calculateMaxHeight`.
2. The function must receive:
   - `initialVelocity` (number)

3. The function should:
   - Compute the time at which the object reaches maximum height
   - Compute the maximum height using the height formula
   - Return both values

4. The function must return an object containing:
   - `timeToMaxHeight`
   - `maxHeight`

## Example

### Input:
initialVelocity = 20

### Output:
timeToMaxHeight ≈ 2.04  
maxHeight ≈ 20.41