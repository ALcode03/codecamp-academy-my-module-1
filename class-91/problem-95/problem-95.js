// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Parent class
class Person {

    constructor(data) {
        this.fullName = data.fullName;
        this.customerId = data.customerId;
        this.country = data.country;
    }

    // Protected method
    _generateShipmentCode() {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        return `SHP-${randomNumber}`;
    }
}

// Child class
class Customer extends Person {

    constructor(data) {
        super(data);
        this.membershipLevel = data.membershipLevel;
        this.shipments = [];
    }

    // Private method
    #validateShipment(shipment) {
        return (
            shipment.packageName &&
            shipment.weight > 0 &&
            shipment.distance > 0 &&
            shipment.basePricePerKm > 0
        );
    }

    // Private method
    #calculateDiscount(total) {

        const discounts = {
            standard: 0,
            premium: 0.10,
            vip: 0.20
        }

        const discount = discounts[this.membershipLevel] || 0;
        return total - (total * discount);
    }

    // Public method
    createShipment(data) {

        const shipment = {
            packageName: data.packageName,
            weight: data.weight,
            distance: data.distance,
            basePricePerKm: data.basePricePerKm
        };

        if(!this.#validateShipment(shipment)) {
            return "Invalid shipment information.";
        }

        const distanceCost = data.distance * data.basePricePerKm;
        
        const weightCost = data.weight * 2;

        const priorityCosts = {
            standard: 0,
            express: 50,
            urgent: 100
        };

        const priorityCost = priorityCosts[data.shippingPriority] || 0;

        let subtotal = distanceCost + weightCost + priorityCost;

        const insuranceCost = data.insured
            ? subtotal * 0.10
            : 0;

        subtotal += insuranceCost;

        const totalCost = this.#calculateDiscount(subtotal);

        const newShipment = {
            shipmentCode: this._generateShipmentCode(),
            packageName: data.packageName,
            weight: data.weight,
            distance: data.distance,
            shippingPriority: data.shippingPriority,
            insured: data.insured,
            totalCost,
            createdAt: new Date().toLocaleString('en-US', 
                { timeZone: "Africa/Lagos" }
            )
        };

        this.shipments.push(newShipment);

        return newShipment;
    }

    // Public method
    reportLateDelivery(data) {

        const shipment = this.shipments.find(
            shipment => shipment.shipmentCode === data.shipmentCode
        );

        if(!shipment) {
            return "Shipment not found.";
        }

        const penalty = data.daysLate * 25;

        return {
            shipmentCode: data.shipmentCode,
            daysLate: data.daysLate,
            penalty
        };
    }

    // Public method
    showShipments() {
        return this.shipments;
    }

    // Static method
    static convertKilos(kg) {
        let pounds = kg * 2.20462
        pounds.toFixed(3);
        return pounds;
    }

    // Static method
    static calculateAverageCost(costs) {

        const total = costs.reduce((sum, cost) => sum + cost, 0);
        return total / costs.length;
    }
}

// Object creation
const customer1 = new Customer(
    {
        fullName: "Tony Stark",
        customerId: 34221313443,
        country: "United State",
        membershipLevel: "premium"
    }
);

console.log('**********************************');
console.log("Type of customer1: ", typeof(customer1));
console.log('**********************************');
console.log(customer1);
console.log('**********************************');

const shipment = customer1.createShipment(
    {
        packageName: "Industrial Drone Parts",
        weight: 35,
        distance: 400,
        basePricePerKm: 0.8,
        shippingPriority: "express",
        insured: true
    }
);

console.log("Type of shipment: ", typeof(shipment));
console.log('**********************************');
console.log(shipment);
console.log('**********************************');
console.log("Shipment history:");
console.log(customer1.showShipments());
console.log('**********************************');
console.log("Report late delivery:");
console.log(customer1.reportLateDelivery(
    {
        shipmentCode: shipment.shipmentCode,
        daysLate: 3
    }
));
console.log('**********************************');
console.log("10 kilograms to pounds: ", Customer.convertKilos(10));
console.log('**********************************');
const shippings = [100, 230, 190, 300, 50, 90, 580, 200, 450, 30];
console.log("Calculate average shipping cost: ", shippings);
console.log("$",Customer.calculateAverageCost(shippings), "USD.");