/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Quadratic equations using functions
*/

/**
 * Solves a quadratic equation using the general formula
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {{discriminant: number, roots: number[] | string}}
 */
function solveQuadraticEquation(a, b, c) {

    if (a === 0) {
        return {
            discriminant: null,
            roots: "Not a quadratic equation."
        };
    }

    const discriminant = (b * b) - (4 * a * c);

    if (discriminant > 0) {

        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return {
            discriminant: discriminant,
            roots: [root1, root2]
        };
    }

    if (discriminant === 0) {
        const root = -b / (2 * a);

        return {
            discriminant: discriminant,
            roots: [root]
        }
    }

    return {
        discriminant: discriminant,
        roots: "No real solutions"
    };
}

// Test the function
const test1 = solveQuadraticEquation(1, -3, 2);
console.log(`
**********************************
Discriminant:   ${test1.discriminant}
Roots:          ${test1.roots}
**********************************
`);

const test2 = solveQuadraticEquation(0, 9, 3);
console.log(`
**********************************
Discriminant:   ${test2.discriminant}
Roots:          ${test2.roots}
**********************************
`);

const test3 = solveQuadraticEquation(3, 1, 0);
console.log(`
**********************************
Discriminant:   ${test3.discriminant}
Roots:          ${test3.roots}
**********************************
`);
