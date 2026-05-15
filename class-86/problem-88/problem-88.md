# JavaScript OOP Math Challenge

## Problem: Geometry Area Calculator System

A construction company needs software to calculate the area of different 
geometric figures for architectural planning.

Since every geometric figure calculates its area differently, the company wants 
a flexible system using **Object-Oriented Programming (OOP)**, **inheritance**, 
and **polymorphism in JavaScript**.

As a software developer, your task is to model the system so that new shapes can 
easily be added in the future.

---

# Requirements

## 1. Create a Parent Class

Create a parent class called:

```js
Shape
```

The class must include the following property:

* `name`

Create the following methods:

### `showInformation()`

This method must display the shape name.

Example:

```text
Shape: Rectangle
```

---

### `calculateArea()`

This method must exist in the parent class.

At the parent level, display:

```text
Area calculation not implemented.
```

---

## 2. Create Child Classes

### Rectangle

Create a child class called:

```js
Rectangle
```

Properties:

* `width`
* `height`

Override:

```js
calculateArea()
```

Formula:

Area = width × height

Example:

```text
Rectangle area: 50
```

---

### Circle

Create a child class called:

```js
Circle
```

Property:

* `radius`

Override:

```js
calculateArea()
```

Formula:

Area = π × radius²

Example:

```text
Circle area: 78.54
```

---

### Triangle

Create a child class called:

```js
Triangle
```

Properties:

* `base`
* `height`

Override:

```js
calculateArea()
```

Formula:

Area = (base × height) / 2

Example:

```text
Triangle area: 30
```

---

## 3. Create Objects

Create:

* One `Rectangle` object
* One `Circle` object
* One `Triangle` object

You may choose your own values.

---

## 4. Store the Objects in an Array

Create an array called:

```js
shapes
```

Store all shape objects.

---

## 5. Apply Polymorphism

Loop through the array.

For each shape:

1. Show the shape information.
2. Call:

```js
calculateArea()
```

The same method call must calculate the area differently depending on the object.

---

## Expected Output

```text
-------------------
Shape: Rectangle
Rectangle area: 50

-------------------
Shape: Circle
Circle area: 78.54

-------------------
Shape: Triangle
Triangle area: 30
```

---

## Concepts Practiced

Students will practice:

* Classes
* Constructors
* Objects
* Inheritance
* `extends`
* `super()`
* Method overriding
* Polymorphism
* Arrays
* Loops
* Mathematical formulas
* Using `Math.PI`
* Using exponentiation (`**`)