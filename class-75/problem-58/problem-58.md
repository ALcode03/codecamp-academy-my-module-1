# Programming Challenge: Smart Parking Lot Grid

## Context

You are building a feature for a **smart parking system** used in a multi-level
parking building. The system keeps track of parking availability in real time 
using a **two-dimensional array (multidimensional array)**.

This data structure models the parking building as a grid:

* Each **row** represents a **level (floor)** of the parking building.
* Each **column** represents a **parking spot** within that level.
* Each cell contains a value indicating whether the spot is occupied or available.

### Data Representation

* `1` → The parking spot is **occupied**
* `0` → The parking spot is **available**

### Example Input

```javascript
const parking = [
  [1, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 0, 1]
];
```

### Visual Model

| Level \ Spot | 0 | 1 | 2 | 3 |
| ------------ | - | - | - | - |
| 0            | 1 | 0 | 0 | 1 |
| 1            | 1 | 1 | 0 | 0 |
| 2            | 0 | 0 | 0 | 1 |

Interpretation:

* Level 0, Spot 1 → Available (`0`)
* Level 1, Spot 0 → Occupied (`1`)
* Level 2, Spot 2 → Available (`0`)

---

## Task

Write a JavaScript program that **finds the first available parking spot** 
in the grid.

### Requirements

1. Traverse the parking grid **row by row** (top to bottom).
2. Within each row, traverse **left to right**.
3. Identify the **first occurrence of an available spot (`0`)**.
4. As soon as the first available spot is found:

   * Print its **level (row index)**
   * Print its **spot (column index)**
5. **Stop the search immediately** after finding the first available spot.

### Expected Output

```
First available spot found at:
Level: 0
Spot: 1
```

---

## Edge Case

If no available spot exists in the entire parking grid, print:

```
No available parking spots
```

---

## Constraints

* You must use **nested loops** to traverse the multidimensional array.
* You must access elements using: `array[row][column]`.
* Do **not** flatten the array or use advanced array methods (e.g., `flat`, `reduce`).
* Use control flow (`break`) to stop the search efficiently.

---

## Learning Objectives

By completing this challenge, you will practice:

* Traversing **multidimensional arrays (matrices)**
* Applying **conditional logic inside nested loops**
* Controlling execution flow using **break statements**
* Thinking in terms of **grid-based problem solving**

These skills are foundational for more advanced topics such as:

* Pathfinding algorithms (BFS / DFS)
* Grid-based simulations
* Game development logic
* Matrix transformations
