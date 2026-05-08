# Challenge: Hospital Patient Management System

## Problem Description

A hospital needs a small system to manage patient information using JavaScript.

The system must store information about patients and allow hospital staff to 
perform basic operations such as:

* Viewing patients
* Finding patients by identification number
* Counting admitted patients
* Calculating total hospitalization costs
* Adding new patients

Your task is to develop this system using:

* Objects
* Arrays
* Classic JavaScript functions (`function` keyword)

This challenge simulates how hospitals organize and process patient information 
in real systems.

---

# Requirements

## Step 1 — Create the Patients Array

Create an array called `patients` containing at least 5 patient objects.

Each patient object must follow this structure:

```javascript
{
  name: "John Doe",
  id: "PT1001",
  age: 45,
  diagnosis: "Pneumonia",
  hospitalizationCost: 3500,
  admitted: true
}
```

---

# Step 2 — Create Functions

## 1. Display All Patients

Create a function that displays:

* Patient name
* Diagnosis
* Admission status

for every patient.

---

## 2. Find Patient by ID

Create a function that receives a patient ID and returns the matching patient.

---

## 3. Count Admitted Patients

Create a function that returns how many patients are currently admitted.

---

## 4. Calculate Total Hospitalization Costs

Create a function that calculates the total hospitalization costs of all patients.

---

## 5. Add a New Patient

Create a function that adds a new patient object into the patients array.

---

## 6. Get Patients by Diagnosis

Create a function that returns all patients with a specific diagnosis.

---

# Expected Learning Objectives

By completing this challenge, students will practice:

* Structuring data with objects
* Managing collections with arrays
* Creating reusable classic functions
* Searching and filtering data
* Solving real-world programming problems

---

# Example Output

```javascript
Michael Johnson - Pneumonia - Admitted: true
Sarah Williams - Fracture - Admitted: false
David Brown - Diabetes - Admitted: true
Emma Davis - Migraine - Admitted: false
James Wilson - Hypertension - Admitted: true

Find Patient:
{
  name: 'David Brown',
  id: 'PT1003',
  age: 60,
  diagnosis: 'Diabetes',
  hospitalizationCost: 4100,
  admitted: true
}

Admitted Patients:
3

Total Hospitalization Costs:
13500
```

---

# Important Note

Focus on writing:

* Clean code
* Reusable functions
* Descriptive variable names
* Well-structured objects
* Readable output

This challenge reflects how healthcare systems manage patient information in 
real applications.
