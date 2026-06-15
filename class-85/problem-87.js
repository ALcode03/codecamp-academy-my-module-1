/*
    Author: ALEXANDRA KEDJU <ALcode03>
    Smart Restaurant Ordering System
*/

// Parent Class
class Meal {

    constructor(name, price, category) {

        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Display Meal Information
    showInformation() {

        return `
=================================
Meal Name : ${this.name}
Price     : $${this.price}
Category  : ${this.category}
=================================
`;
    }

    // Generic Meal Preparation
    prepareMeal() {

        return "Preparing meal...";
    }
}

// Burger Class
class Burger extends Meal {

    constructor(name, price, category, hasCheese) {

        super(name, price, category);

        this.hasCheese = hasCheese;
    }

    // Overriding Method
    prepareMeal() {

        return "Grilling burger and preparing ingredients.";
    }
}

// Pizza Class
class Pizza extends Meal {

    constructor(name, price, category, size) {

        super(name, price, category);

        this.size = size;
    }

    // Overriding Method
    prepareMeal() {

        return "Baking pizza in the oven.";
    }
}

// Salad Class
class Salad extends Meal {

    constructor(name, price, category, dressing) {

        super(name, price, category);

        this.dressing = dressing;
    }

    // Overriding Method
    prepareMeal() {

        return "Preparing fresh vegetables and adding dressing.";
    }
}

// Dessert Class
class Dessert extends Meal {

    constructor(name, price, category, preparationTime) {

        super(name, price, category);

        this.preparationTime = preparationTime;
    }

    // Overriding Method
    prepareMeal() {

        return `Preparing dessert. Estimated time: ${this.preparationTime} minutes.`;
    }

    // Method to calculate discount
    calculateDiscount() {

        const discount = this.price * 0.10;

        const finalPrice = this.price - discount;

        return `
=================================
Original Price : $${this.price}
Discount       : $${discount}
Final Price    : $${finalPrice}
=================================
`;
    }
}

// Creating Objects
// Burger Object
const burger = new Burger(
    "Cheese Burger",
    15,
    "Burger",
    true
);


// Pizza Object
const pizza = new Pizza(
    "Pepperoni Pizza",
    25,
    "Pizza",
    "Large"
);


// Salad Object
const salad = new Salad(
    "Greek Salad",
    12,
    "Salad",
    "Caesar Dressing"
);


// Dessert Object
const dessert = new Dessert(
    "Chocolate Cake",
    10,
    "Dessert",
    5
);

// Storing Objects in Array
const menu = [burger, pizza, salad, dessert];


// Restaurant Menu System
console.log(`
=================================
       RESTAURANT MENU
=================================
`);


// Applying Polymorphism
for (const meal of menu) {

    // Display Meal Information
    console.log(meal.showInformation());

    // Same Method
    // Different Behavior
    console.log(meal.prepareMeal());

    console.log("---------------------------------");
}

// Dessert Discount
console.log(`
=================================
      DESSERT DISCOUNT
=================================
`);

console.log(dessert.calculateDiscount());

// Customer Order Simulation
console.log(`
=================================
   CUSTOMER ORDER SIMULATION
=================================
`);

const customerOrder = [pizza, burger];

let total = 0;

for (const order of customerOrder) {

    console.log(`
Customer ordered : ${order.name}
Price            : $${order.price}
`);

    total += order.price;
}

console.log(`
=================================
Total Bill : $${total}
=================================
`);