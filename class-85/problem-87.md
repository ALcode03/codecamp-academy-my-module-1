JavaScript OOP Code Challenge Challenge: Smart Restaurant Ordering System A restaurant company wants to modernize its ordering software.

Currently, the restaurant offers different types of meals to customers, such as burgers, pizzas, and salads. Even though all meals share common characteristics, each meal behaves differently when calculating its final preparation details and customer message.

As a software developer, your task is to build a system using Object-Oriented Programming (OOP) with inheritance and polymorphism in JavaScript.

Your goal is to design a flexible system that avoids duplicated code and allows the restaurant to easily add more meal types in the future.

Business Scenario The restaurant has discovered that:

All meals have common information. Every meal can display its information. Every meal can calculate a final preparation message. However, each meal type behaves differently.

For example:

A burger may require grilling instructions.

A pizza may require baking instructions.

A salad may require fresh ingredient preparation.

Even though all meal types perform a similar action, the result is different depending on the meal.

This is where polymorphism becomes important.

Requirements Create a Parent Class Create a parent class called:

Meal

The class must contain the following properties:

name price category

Example:

Name: Pepperoni Pizza Price: $25 Category: Pizza

Add Methods to the Parent Class Create a method called:

showInformation()

This method must display the meal information.

Create another method called:

prepareMeal() This method must exist in the parent class.

However:

At the parent level, it should only display a generic message.

Example:

Preparing meal...

Create Child Classes Create the following child classes:

Burger The class must inherit from Meal.

Add a new property:

hasCheese

Override the method:

prepareMeal()

Example output:

Grilling the burger and preparing ingredients.

Pizza The class must inherit from Meal.

Add a new property:

size

Override the method:

prepareMeal()

Example output:

Baking the pizza in the oven.

Salad The class must inherit from Meal.

Add a new property:

dressing

Override the method:

prepareMeal() Example output:

Preparing fresh vegetables and adding dressing.

Create Objects Create at least:

One Burger object One Pizza object One Salad object

You may choose your own values.

Store the Objects in an Array Create an array called:

menu

The array must contain all created meal objects.

Example idea:

const menu = [burger, pizza, salad];

Apply Polymorphism Loop through the array.

For every meal object:

Display the information. Call:

prepareMeal()

Important:

You must use the same method call for every object.

Example idea:

meal.prepareMeal();

However, the behavior should automatically change depending on the object type.

This is the core objective of the challenge.

Rules You must use:

Classes Constructors Objects Inheritance (extends) super() Method overriding Polymorphism Arrays Loops

Restrictions Do NOT:

Repeat the same code unnecessarily. Create completely separate unrelated classes. Use if or switch to determine meal behavior.

The behavior must happen naturally using polymorphism.

Expected Learning Goals By completing this challenge, students should understand:

How inheritance reduces duplicated code How child classes inherit behavior How method overriding works How polymorphism changes behavior dynamically How to design scalable software systems Why OOP is useful for real-world applications

Hints Hint 1 Ask yourself:

Is a pizza a meal?

If yes, inheritance probably makes sense.

Hint 2 Think carefully about:

prepareMeal()

The method should exist in multiple classes.

But should every class implement it the same way?

Hint 3 The magic of polymorphism happens when:

someObject.prepareMeal();

calls different behaviors automatically.

Bonus Challenge If you finish early:

Add a new class called Dessert. Add a property called preparationTime. Add a method called calculateDiscount(). Display all meals using a looped restaurant menu system. Add a customer order simulation.