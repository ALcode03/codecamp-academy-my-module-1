# Challenge: Product Inventory Analyzer

## Introduction

In this challenge, you will build a **Product Inventory Analyzer** using JavaScript 
arrays. Inventory systems are commonly used in warehouses, stores, and e-commerce 
platforms to track available products, update inventory levels, and analyze product 
data.

Your task is to simulate a simple **inventory management and analysis system**. 
You will manipulate a list of product prices and perform several operations to 
generate useful statistics about the inventory.

This challenge increases the difficulty compared to previous exercises because 
it requires you to:

* Modify arrays dynamically
* Iterate through data collections
* Perform numerical calculations
* Track minimum and maximum values
* Count elements that satisfy a condition

These types of operations are very common in real-world software systems that 
process datasets.

---

## Problem Description

A small online store stores the prices of its products in the following array:

```javascript
let prices = [120, 85, 60, 150, 45, 200, 95];
```

Using this array, write a JavaScript program that performs the following tasks.

---

## Tasks

1. Print the **total number of products** in the inventory.
2. Add two new product prices: `70` and `180`.
3. Remove the **last product price** from the array.
4. Print all product prices using a loop with the format:

```
Product 1: $120
Product 2: $85
...
```

5. Calculate and print the **total value of all products**.
6. Calculate and print the **average product price**.
7. Find and print the **most expensive product price**.
8. Find and print the **cheapest product price**.
9. Count how many products cost **more than $100**.
10. Print the number of products that cost **more than $100**.

---

## Expected Output Structure

```
Total products: ...
Inventory prices:
Product 1: $...
Product 2: $...
...

Total inventory value: ...
Average price: ...
Most expensive product: ...
Cheapest product: ...
Products above $100: ...
```

---

## Hints

Hint 1

Use the `length` property to determine the number of products in the array.

Hint 2

Use `push()` to add new prices to the array.

Hint 3

Use `pop()` to remove the last element.

Hint 4

Use a variable like `let total = 0;` to accumulate the sum of prices during a loop.

Hint 5

Track the highest and lowest values using variables such as:

```javascript
let maxPrice = prices[0];
let minPrice = prices[0];
```

Update them while iterating through the array.

Hint 6

Use a counter variable to count how many products have prices greater than `$100`.
