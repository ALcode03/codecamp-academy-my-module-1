# Challenge: Online Store Inventory System with Arrow Functions

## Problem Description

An online technology store needs a small system to analyze its inventory products 
using JavaScript.

Each product contains:

* Product name
* Category
* Price
* Quantity in stock
* Availability status

Your task is to use **arrow functions** together with array methods to process 
the inventory information and generate useful reports.

---

## Input Data

```javascript
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
```

---

## Requirements

Using **arrow functions**, solve the following tasks:

1. Create a new array containing only products that are available.
2. Create an array containing only the product names.
3. Calculate the total value of the inventory using the formula:

```javascript
price * stock
```

4. Find the most expensive product.
5. Create a simplified array with the following structure:

```javascript
{
  name: "Product Name",
  inStock: true or false
}
```

6. Count how many products are out of stock.

---

## Expected Learning Objectives

By completing this challenge, students will practice:

* Arrow function syntax
* `filter()`
* `map()`
* `reduce()`
* Data transformation
* Real-world inventory analysis

---

# Expected Output

```javascript
Available Products: [
  {
    name: 'MacBook Air M2',
    category: 'Laptop',
    price: 1200,
    stock: 5,
    available: true
  },
  {
    name: 'Logitech MX Master 3',
    category: 'Accessories',
    price: 120,
    stock: 15,
    available: true
  },
  {
    name: 'Samsung Odyssey G5',
    category: 'Monitor',
    price: 350,
    stock: 3,
    available: true
  }
]

Product Names: [
  'MacBook Air M2',
  'iPhone 15',
  'Logitech MX Master 3',
  'Samsung Odyssey G5',
  'PlayStation 5'
]

Inventory Value: 8850

Most Expensive Product: {
  name: 'MacBook Air M2',
  category: 'Laptop',
  price: 1200,
  stock: 5,
  available: true
}

Stock Status: [
  { name: 'MacBook Air M2', inStock: true },
  { name: 'iPhone 15', inStock: false },
  { name: 'Logitech MX Master 3', inStock: true },
  { name: 'Samsung Odyssey G5', inStock: true },
  { name: 'PlayStation 5', inStock: false }
]

Out of Stock Products: 2
```
