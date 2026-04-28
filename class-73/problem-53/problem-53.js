/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Inventory Analyzer
*/

// Initial dataset
let prices = [120, 85, 60, 150, 45, 200, 95];

// 1. Print total number of products
console.log(`\nTotal products: ${prices.length}`);

// 2. Add two new products prices
prices.push(70);
prices.push(100);

console.log(`\nPrices after adding new products:$ ${prices}`);

// 3. Remove the last product price
const removedPrice = prices.pop();
console.log(`\NRemoved last prices: ${removedPrice}`);

// 4. Print all products prices
console.log(`\nInventory prices:`);

for (let i = 0; i < prices.length; i++) {
    console.log(`Product ${i + 1}: ${prices[i]}`);    
}

// Variables for analysis
let totalValue = 0;
let maxPrice = prices[0];
let minPrice = prices[0];
let productsAbove100 = 0;

// 5-10. Analyze the inventory
for (let i = 0; i < prices.length; i++) { 
    const price = prices[i];

    // Calculate total inventory value
    totalValue += price;

    // Find most expensive product
    if(price > maxPrice) {
        maxPrice = price;
    }

    // Find cheapest product
    if(price < minPrice) {
        minPrice = price;
    }

    // Count products above $100
    if (price > 100) {
        productsAbove100++;
    }
}

// 5. Print total inventory value
console.log(`\nTotal inventory value: ${totalValue}`);

// 6. Calculate and print average price
const averagePrice = totalValue / prices.length;
console.log(`Average price: ${averagePrice}`);

// 7. Print most expensive product
console.log(`Most expensive product: ${maxPrice}`);

// 8. Print most cheapest product
console.log(`Most cheapest product: ${minPrice}`);

// 9. Print number of products above $100USD
console.log(`products above $100: ${productsAbove100}`);
