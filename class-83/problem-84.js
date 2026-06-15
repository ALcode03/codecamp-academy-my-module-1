/*
    Author: ALEXANDRA KEDJU <Alcode03>
    Problem: Shopping Cart System
*/

class Product {

    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class ShoppingCart {

    constructor(customerName, taxRate = 0.19, discountRate = 0) {

        this.customerName = customerName;
        this.items = [];
        this.taxRate = taxRate;
        this.discountRate = discountRate;
    }

    // Add products to cart
    addProduct(product, quantity) {

        // Validate quantity
        if (quantity <= 0 || isNaN(quantity)) {
            console.log("Invalid quantity.");
            return;
        }

        // Check stock availability
        if (quantity > product.stock) {
            console.log(`Not enough stock available for ${product.name}.`);
            return;
        }

        // Check if product already exists in cart
        const existingItem = this.items.find(
            item => item.product.name === product.name
        );

        if (existingItem) {

            existingItem.quantity += quantity;

        } else {

            this.items.push({
                product,
                quantity
            });
        }

        // Reduce stock
        product.stock -= quantity;

        console.log(`${quantity} ${product.name}(s) added to cart.`);
    }

    // Remove products from cart
    removeProduct(productName, quantity) {

        const item = this.items.find(
            item => item.product.name === productName
        );

        if (!item) {
            console.log("Product not found in cart.");
            return;
        }

        if (quantity > item.quantity) {
            console.log("Cannot remove more than cart quantity.");
            return;
        }

        // Restore stock
        item.product.stock += quantity;

        // Reduce quantity
        item.quantity -= quantity;

        // Remove item completely if quantity becomes zero
        if (item.quantity === 0) {

            this.items = this.items.filter(
                item => item.product.name !== productName
            );
        }

        console.log(`${quantity} ${productName}(s) removed from cart.`);
    }

    // Empty cart
    emptyCart() {

        // Restore stock before emptying
        this.items.forEach(item => {
            item.product.stock += item.quantity;
        });

        this.items = [];

        console.log("Cart has been emptied.");
    }

    // Calculate subtotal
    calculateSubtotal() {

        return this.items.reduce((sum, item) => {

            return sum + (item.product.price * item.quantity);

        }, 0);
    }

    // Calculate discount amount
    calculateDiscountAmount() {

        return this.calculateSubtotal() * this.discountRate;
    }

    // Calculate discounted total
    calculateDiscountedTotal() {

        return this.calculateSubtotal() - this.calculateDiscountAmount();
    }

    // Calculate tax amount
    calculateTaxAmount() {

        return this.calculateDiscountedTotal() * this.taxRate;
    }

    // Calculate final total
    calculateTotal() {

        return this.calculateDiscountedTotal() + this.calculateTaxAmount();
    }

    // Purchase summary
    purchaseSummary() {

        console.log("===== PURCHASE SUMMARY =====");

        console.log(`Customer Name: ${this.customerName}`);

        if (this.items.length === 0) {

            console.log("Cart is empty.");
            console.log("============================");

            return;
        }

        this.items.forEach(item => {

            console.log(
                `Product: ${item.product.name}`
            );

            console.log(
                `Quantity: ${item.quantity}`
            );

            console.log(
                `Unit Price: $${item.product.price}`
            );

            console.log("----------------------------");
        });

        console.log(
            `Subtotal: $${this.calculateSubtotal().toFixed(2)}`
        );

        console.log(
            `Discount (${this.discountRate * 100}%): -$${this.calculateDiscountAmount().toFixed(2)}`
        );

        console.log(
            `Tax (${this.taxRate * 100}%): +$${this.calculateTaxAmount().toFixed(2)}`
        );

        console.log(
            `Final Total: $${this.calculateTotal().toFixed(2)}`
        );

        console.log("============================");
    }
}



// TESTING THE PROGRAM
const laptop = new Product("Laptop", 1000, 5);
const phone = new Product("Phone", 500, 2);
const tablet = new Product("Tablet", 300, 3);

const cart = new ShoppingCart(
    "Nhial Cham",
    0.19, // Tax
    0.10  // Discount
);

cart.addProduct(laptop, 1);
cart.addProduct(phone, 2);
cart.addProduct(tablet, 1);
cart.addProduct(phone, 5);
cart.removeProduct("Phone", 1);
cart.purchaseSummary();
cart.emptyCart();
cart.purchaseSummary();