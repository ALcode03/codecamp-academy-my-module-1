# Challenge: Student Performance Analysis with Arrow Functions

## Problem Description

A school wants to analyze the performance of its students using JavaScript. 
The system stores information about students, including their names, grades, 
and attendance percentages.

Your task is to use **arrow functions** and array methods to process the data 
and generate useful information.

---

## Input Data

```javascript
const students = [
  {
    name: "Alice",
    grade: 95,
    attendance: 98
  },
  {
    name: "Bob",
    grade: 67,
    attendance: 80
  },
  {
    name: "Charlie",
    grade: 88,
    attendance: 92
  },
  {
    name: "Diana",
    grade: 45,
    attendance: 70
  },
  {
    name: "Eve",
    grade: 76,
    attendance: 85
  }
];
```

---

## Requirements

Using **arrow functions**, complete the following tasks:

1. Create a new array containing only students with grades greater than or equal to `70`.
2. Create another array containing only the names of approved students.
3. Calculate the average grade of all students.
4. Find the student with the highest grade.
5. Create a new array with the following structure:

```javascript
{
  name: "Student Name",
  status: "Approved" or "Failed"
}
```

A student is considered approved if their grade is `70` or higher.

---

## Expected Learning Objectives

By solving this challenge, students will practice:

* Arrow function syntax
* `filter()`
* `map()`
* `reduce()`
* Real-world data processing
* Functional programming concepts in JavaScript

---

# Expected Output

```javascript
Approved Students: [
  { name: 'Alice', grade: 95, attendance: 98 },
  { name: 'Charlie', grade: 88, attendance: 92 },
  { name: 'Eve', grade: 76, attendance: 85 }
]

Approved Names: [ 'Alice', 'Charlie', 'Eve' ]

Average Grade: 74.2

Top Student: {
  name: 'Alice',
  grade: 95,
  attendance: 98
}

Student Status: [
  { name: 'Alice', status: 'Approved' },
  { name: 'Bob', status: 'Failed' },
  { name: 'Charlie', status: 'Approved' },
  { name: 'Diana', status: 'Failed' },
  { name: 'Eve', status: 'Approved' }
]
```