# Programming Challenge: Island Detection in a Grid

## Context

You are working on a system for analyzing satellite images of terrain. The 
terrain is represented as a **two-dimensional grid**, where each cell indicates 
whether it is land or water.

* `1` → Land
* `0` → Water

An **island** is defined as a group of connected land cells (`1`s) that are 
connected **horizontally or vertically** (not diagonally).

---

## Example Input

```javascript
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1]
];
```

---

## Visual Representation

|   | 0 | 1 | 2 | 3 | 4 |
| - | - | - | - | - | - |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 0 | 1 |
| 3 | 0 | 0 | 0 | 1 | 1 |

---

## Task

Write a JavaScript program to **count the total number of islands** in the grid.

### Rules

* Cells are connected **only horizontally and vertically**.
* Diagonal connections do **not** count.
* Each group of connected `1`s forms a single island.

---

## Expected Output

```
Number of islands: 3
```

---

## Constraints

* You must traverse the grid using nested loops.
* You must avoid counting the same land cell more than once.
* You may modify the grid or use an auxiliary structure to track visited cells.

---

## Learning Objectives

This problem introduces key concepts used in advanced algorithms:

* Grid traversal
* Depth-First Search (DFS) or Breadth-First Search (BFS)
* Handling visited nodes
* Problem decomposition in 2D space

---

## Hint

When you find a land cell (`1`), explore all connected land cells and mark them 
as visited so they are not counted again.
