# OOP Problem: Bank Account System Using Classes in JavaScript

## Problem Description

A local bank wants to develop a very simple digital system to manage customer 
bank accounts.

As a software developer, your task is to create a program using 
**Object-Oriented Programming (OOP)** in JavaScript.

The system must represent a **Bank Account** as an object.

Each bank account should store important customer information and allow common 
banking operations.

### Requirements

Create a class named `BankAccount`.

Each bank account must contain the following properties:

* Account owner's name
* Account number
* Current balance
* Account type (Savings or Checking)

The class must also include the following methods:

### `deposit(amount)`

This method should:

* Add money to the account balance.
* Display a message confirming the deposit.

### `withdraw(amount)`

This method should:

* Remove money from the balance.
* Prevent withdrawals if there is not enough money.
* Display an error message if the withdrawal cannot be completed.

### `showAccountInfo()`

This method should display:

* Owner name
* Account number
* Account type
* Current balance

---

## Example Scenario

Create a bank account for:

```text
Owner: Alice Johnson
Account Number: 102938
Balance: 1000
Account Type: Savings
```

Then:

1. Deposit `$500`
2. Withdraw `$300`
3. Try to withdraw `$2000`
4. Show the updated account information

Expected behavior:

* The first deposit succeeds.
* The first withdrawal succeeds.
* The second withdrawal fails due to insufficient balance.
* The final account information reflects the correct balance.

---

# Expected Output

```text
$500 deposited successfully.
$300 withdrawn successfully.
Insufficient funds. Withdrawal denied.

Owner: Alice Johnson
Account Number: 102938
Account Type: Savings
Balance: $1200
```

---

# Concepts Practiced

By solving this problem, students practice:

* Creating classes
* Creating constructors
* Using the `this` keyword
* Creating properties
* Creating methods
* Creating objects with `new`
* Object interaction
* Conditional logic inside methods
* Updating object state