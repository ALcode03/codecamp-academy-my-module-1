Code Challenge: Improve the Shopping Cart System Challenge Overview Great job building your first Shopping Cart System using Object-Oriented Programming.

Now it is time to improve your solution like real software engineers.

Your challenge is to extend the current system by implementing new features and improving the business logic.

You must analyze the problem, design the solution, and implement it using classes and methods in JavaScript.

Do not rewrite the entire system from scratch. Instead, improve the previous solution.

Challenge Requirements Your shopping cart system must now support the following new features.

Discount System Add support for discounts.

The customer should be able to receive a percentage discount on the total purchase.

Example Total purchase: $500 Discount: 10% Final total: $450

Hint Ask yourself:

Should discount be a property or calculated dynamically? Do you need a new method? How can you calculate a percentage?

Think about:

original total - discount amount

Tax Calculation The store now applies taxes to purchases.

You must calculate taxes based on the subtotal.

Example Subtotal: $100 Tax: 19% Final price: $119

Hint Ask yourself:

Should taxes be fixed or configurable? Should tax calculation happen inside another method? What happens if discounts are applied before taxes?

Think carefully about the order of calculations.

Empty Cart Feature Add a feature that allows customers to empty their cart.

Hint Ask yourself:

Which property needs to change? What should happen to the quantity? What message should be returned? Product Stock Validation The store has limited inventory.

The cart should not allow customers to add more products than available.

Example Available stock: 5 Customer tries to add: 10

Expected behavior:

Not enough stock available.

Hint Ask yourself:

Do you need a new property? Where should validation happen? Which method is responsible for adding products?

Purchase Summary Create a method that displays a detailed purchase summary.

The summary should include:

Customer name Product name Quantity Product price Subtotal Discount applied Tax applied Final total

Hint Think like a software engineer:

Instead of writing all calculations repeatedly:

Can one method call another method? Can calculations be reused?

Try to avoid duplicated logic.

Rules You must:

Use a class. Use a constructor. Add new properties if necessary. Create new methods when needed. Reuse existing methods when possible. Use conditional logic. Use console.log() to test your program.

You must not:

Hardcode values directly in methods. Duplicate calculations unnecessarily. Rewrite the whole project.

Goal This challenge is designed to help you practice:

Problem solving Object-Oriented Programming Code organization Business logic implementation Method reuse Software design thinking

Think before coding.

A good software engineer first understands the problem, then designs the solution.