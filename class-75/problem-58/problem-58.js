/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Smart Parking Lot Grid
*/

const parking = [
    [1, 0, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 1]
];

let found = false;

for (let i = 0; i < parking.length; i++) {

    for (let j = 0; j < parking[i].length; j++) {
        
        if (parking[i][j] === 0) {
            console.log(`
            First available spot found at:
            Level: ${i}
            Spot: ${j}
            `);
            found = true;
            break;
        }
    } 

    if(found) {
        break;
    }
}

if(!found) {
    console.log("No available parking spots.");
    
}