# Programming Challenge: Username Validation System

## Problem Introduction

You are developing a simple system that validates usernames during user registration.

The system stores a list of usernames in a **one-dimensional array**, where each 
element represents a username submitted by a user.

A valid username must follow these rules:

* Must be at least **5 characters long**
* Must not contain **spaces**

---

## Example Input

```javascript
const usernames = ["john", "alice123", "bob smith", "carol", "david_99"];
```

---

## Task

Using JavaScript, analyze the array and:

1. Identify which usernames are **valid**
2. Identify which usernames are **invalid**
3. Print each username along with its validation result

---

## Expected Output

```
john → invalid
alice123 → valid
bob smith → invalid
carol → valid
david_99 → valid
```

---

## Requirements

* Use a **single loop** to traverse the array
* Do not use functions
* Do not use advanced methods like `filter()` or `map()`
* Access elements using `array[index]`

---

## Learning Objectives

* Work with **strings inside arrays**
* Apply **conditional validation logic**
* Practice iteration over one-dimensional arrays
* Combine multiple conditions in decision-making

---

## Hint

You can use:

* `.length` to check the size of the string
* `.includes(" ")` to detect spaces
