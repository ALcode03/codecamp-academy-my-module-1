// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Parent class
class Shape {

    constructor(name) {
        this.name = name;
    }

    showInformation() {
        return `Shape: ${this.name}`;
    }

    calculateArea() {
        return "Area calculation not implemented.";
    }
}

// Child class
class Rectangle extends Shape {

    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        const area = this.width * this.height;
        return `Rectangle area: ${area}`;
    }
}

class Circle extends Shape {

    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        const area = Math.PI * (this.radius ** 2);
        return `Circle area: ${area}`;
    }
}

class Triangle extends Shape {

    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        const area = (this.base * this.height) / 2;
        area.toFixed(2);
        return `Triangle area: ${area}`;
    }
}

// Creating the objects
const rectangle = new Rectangle(10, 5);
const circle = new Circle(5);
const triangle = new Triangle(12, 5);

// Array of objects
const shapes = [rectangle, circle, triangle];

// Apply a loop to display the shapes information
console.log("+++++++++++++++++++++++++++++++");
for (const shape of shapes) {
    console.log(shape.showInformation());
    console.log(shape.calculateArea());
    console.log("+++++++++++++++++++++++++++++++");
}