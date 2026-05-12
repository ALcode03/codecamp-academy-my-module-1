## Problem 83
# OOP Problem: Online Shopping Cart System Using Classes in JavaScript

## Problem Description

An online store wants to create a simple system to manage a customer's shopping cart.

As a software developer, your task is to build this system using 
**Object-Oriented Programming (OOP)** in JavaScript.

The system must represent a **Shopping Cart** as an object.

Each shopping cart should store product information and allow customers to 
manage their purchases.

## Requirements

Create a class named `ShoppingCart`.

The shopping cart must contain the following properties:

* Customer name
* Product name
* Product price
* Product quantity

The class must include the following methods:

### `addProducts(quantity)`

This method should:

* Add products to the cart
* Increase the quantity of products
* Display a success message

### `removeProducts(quantity)`

This method should:

* Remove products from the cart
* Prevent removing more products than available
* Display an error message if the quantity is invalid

### `calculateTotal()`

This method should:

* Calculate the total purchase value

### `showCartInfo()`

This method should display:

* Customer name
* Product name
* Product price
* Quantity
* Total price

---

## Example Scenario

Create a shopping cart for the following customer:

```text
Customer Name: Cristian Cortes
Product: Mechanical Keyboard
Price: $120
Quantity: 2
```

Then perform the following actions:

1. Add `1` more product.
2. Remove `1` product.
3. Try to remove `5` products.
4. Show the updated cart information.

### Expected Behavior

* The first addition should succeed.
* The first removal should succeed.
* The second removal should fail because there are not enough products in the cart.
* The final cart information should display the correct quantity and total price.

---

## Instructions

* Use a **class**.
* Use a **constructor**.
* Create all required **properties**.
* Implement all required **methods**.
* Create at least **one object** using the `new` keyword.
* Test the object by calling all methods.
* Display results using `console.log()`.

---

## Goal

The purpose of this exercise is to practice the following OOP concepts:

* Classes
* Constructors
* Properties
* Methods
* Object creation
* Object interaction
* Updating object state
* Conditional logic inside methods
* Real-world problem modeling using Object-Oriented Programming
