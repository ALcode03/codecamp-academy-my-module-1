# OOP Code Challenge: Access Modifiers in a Hospital Patient Management System

## Problem Description

A hospital is developing a **Patient Management System** to monitor patients, 
store medical information, and manage appointments.

As a software engineer, your task is to design a system using 
**Object-Oriented Programming (OOP)** principles in **JavaScript**, applying:

* Public methods
* Private methods
* Protected methods (by convention)
* Static methods
* Encapsulation
* Inheritance

You must create a class system that models how a hospital manages patient information.

## Requirements

### 1. Create a Parent Class: `Person`

The class should contain:

#### Properties

* `fullName`
* `age`
* `identificationNumber`

#### Protected Method (Convention)

Create a protected method:

```javascript
_generateMedicalCode()
```

This method should return a random hospital code.

Example:

```text
MED-4589
```

This method should only be used internally or by child classes.

---

### 2. Create a Child Class: `Patient`

The class should inherit from `Person`.

#### Additional Properties

* `disease`
* `hasAppointment`
* `medicalCode`

#### Private Method

Create a private method:

```javascript
#validatePatientAge()
```

Requirements:

* Return `true` if age is greater than 0.
* Return `false` otherwise.

#### Public Methods

### `registerPatient()`

Requirements:

* Use `_generateMedicalCode()`.
* Use `#validatePatientAge()`.
* Assign a generated medical code.
* Return a registration success message.

### `scheduleAppointment()`

Requirements:

* Change appointment status to `true`.
* Return a success message.

### `showPatientInformation()`

Requirements:

Return all patient information inside an object.

---

### 3. Create a Static Method

Inside `Patient`, create:

```javascript
static calculateBirthYear(currentYear, age)
```

This method should:

Return the estimated year of birth.

Example:

```javascript
Patient.calculateBirthYear(2026, 30)
```

Output:

```text
1996
```

---

## Expected Concepts to Apply

Students must correctly apply:

* Classes
* Constructors
* Inheritance (`extends`)
* Public methods
* Private methods (`#`)
* Protected methods (`_`)
* Encapsulation
* Static methods
* Object creation

---

# Expected Output

```text
Patient registered successfully. Medical code: MED-4589

Appointment scheduled successfully.

{
  fullName: 'Maria Rodriguez',
  age: 32,
  identificationNumber: '1002456789',
  disease: 'Flu',
  hasAppointment: true,
  medicalCode: 'MED-4589'
}

1994
```

---

# Reflection Questions

1. Why should `#validatePatientAge()` be private?

2. Why is `_generateMedicalCode()` protected instead of public?

3. Why does `calculateBirthYear()` use `static`?

4. What OOP principle is being applied when internal validation logic is hidden?

5. How does inheritance help reduce duplicated code in this system?

6. What could happen if users directly modified medical codes?

7. How does this exercise simulate a real hospital software system?
