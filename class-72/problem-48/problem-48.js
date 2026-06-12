/*
    Author:  ALEXANDRA KEDJU <ALcode03>
    Solution: Managing a Shopping Cart with Arrays
*/

let cart = ["Milk", "Bread", "Eggs", "Cheese"];

// 1. Print the total number of product in the cart
console.log("\n***********************************************");
console.log(`Total products in cart: ${cart.length}`);
console.log("***********************************************");
// 2. Add a new product "apples" to the cart
// Method push() => add a new item in the last position of the list
// Function that receive as parameter the new element
cart.push("Apples");
console.log("\n***********************************************");
console.log(`Cart after adding Apples: ${cart}`);
console.log(`Total products in cart: ${cart.length}`);
console.log("***********************************************");

// 3. Remove the last product from the cart
// Method pop() => Remove the item in the last position of the list
// Function don't receive as parameter the element to delete, by
// default delete always the last element
cart.pop();
console.log("\n***********************************************");
console.log(`Cart after removing the last product: ${cart}`);
console.log("***********************************************");

// 4. Print the first product from the cart
console.log("\n***********************************************");
console.log(`First product in the cart: ${cart[0]}`);
console.log("***********************************************");

// 5. Print the last product from the cart
console.log("\n***********************************************");
console.log(`last product in the cart: ${cart[cart.length - 1]}`);
console.log("***********************************************");

// 6. Display all products in the cart using a loop
console.log("\n***********************************************");
console.log(`Products in the cart:`);

for (let i = 0; i < cart.length; i++) {
    console.log(`product: ${i + 1} = ${cart[i]}`);
    console.log("\n+++++++++++++++++++++++++++++++++++++++++++++++");
}
console.log("***********************************************");
