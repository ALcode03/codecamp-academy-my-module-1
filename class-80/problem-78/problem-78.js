/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Inventory System
*/

const products = [
    {
        name: "MacBook Air M2",
        category: "Laptop",
        price: 1200,
        stock: 5,
        available: true
    },
    {
        name: "iPhone 15",
        category: "Smartphone",
        price: 999,
        stock: 0,
        available: false
    },
    {
        name: "Logitech MX Master 3",
        category: "Accessories",
        price: 120,
        stock: 15,
        available: true
    },
    {
        name: "Samsung Odyssey G5",
        category: "Monitor",
        price: 350,
        stock: 3,
        available: true
    },
    {
        name: "PlayStation 5",
        category: "Console",
        price: 499,
        stock: 0,
        available: false
    }
];

// 1. Available products
const availableProducts = products.filter(
    product => product.available
);

// 2. Product names
const productNames = products.map(
    product => product.name
);

// 3. Total inventory Value
const inventoryValue = products.reduce(
    (total, product) => total + (product.price * product.stock), 0
);

// 4. Most expensive product
const mostExpensive = products.reduce(
    (highest, current) => current.product > highest.price ? current : highest
);

// 5. Simplified structure
const stockStatus = products.map(
    product => ({ name: product.name, inStock: product.stock > 0})
);

// 6. Count out-of-stock
const outOfStockCount = products.filter(
    product => product.stock === 0
).length;

// Output
console.log("***************************");
console.log("Available Products:");
console.log(availableProducts);
console.log("***************************");
console.log("Products names:");
console.log(productNames);
console.log("***************************");
console.log("Inventory value:");
console.log(inventoryValue);
console.log("***************************");
console.log("Most Expensive Product");
console.log(mostExpensive);
console.log("***************************");
console.log("Stock Status:");
console.log(stockStatus);
console.log("***************************");
console.log("Out of Stock Products:");
console.log(outOfStockCount);
console.log("***************************");
