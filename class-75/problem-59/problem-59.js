/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Island Detection in a Grid
*/

const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1]
];

let islandCount = 0;

// Directions up, down, left, right
const directions = [
    [-1, 0],
    [1, 0],
    [0,-1],
    [0,1]
];


for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[i].length; j++) {

        if (grid[i][j] === 1) {
            islandCount++;
        }

        // Use stack to simulate DFS
        const stack = [[i,j]];

        while (stack.length > 0) {
            const [row, col]  = stack.pop();

            // Boundary + visited checks
            if (
                row < 0 ||
                col < 0 ||
                row >= grid.length ||
                col >= grid.length ||
                grid[row][col] === 0
            ) {
                continue;
            }

            // Mark as visited
            grid[row][col] = 0;

            // Add neighbors to stack
            for (let d = 0; d < directions.length; d++) {
                const newRow = row + directions[d][0];
                const newCol = col + directions[d][1];
                stack.push([newRow, newCol]);
            }
        }
    }
}

console.log(`Number of islands: ${islandCount}`);
