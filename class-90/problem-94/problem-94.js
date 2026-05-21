// Author: Cristian Camilo Cortes Ortiz

// Parent class
class Person {

    constructor(data){
        this.fullName = data.fullName;
        this.driverLicense = data.driverLicense;
        this.phoneNumber = data.phoneNumber;
    }

    // Protected method
    _generateRentalCode() {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        return `RNT-${randomNumber}`;
    }
}

// Child class
class Customer extends Person {

    constructor(data) {
        super(data);
        this.membershipLevel = data.membershipLevel;
        this.rentals = [];
    }

    // Private method
    #validateRental(vehicle) {
        return (
            vehicle.vehicleName &&
            vehicle.dailyPrice > 0 &&
            vehicle.rentalDays > 0 &&
            vehicle.fuelEfficiency > 0
        );
    }

    // Private method
    #calculateDiscount(total) {

        const discounts = {
            basic: 0,
            premium: 0.10,
            vip: 0.20
        };

        const discount = discounts[this.membershipLevel] || 0;
        
        return total - (total * discount);
    }

    // Public method
    rentVehicle(vehicleData) {

        const vehicle = {
            vehicleName: vehicleData.vehicleName,
            dailyPrice: vehicleData.dailyPrice,
            rentalDays: vehicleData.rentalDays,
            fuelEfficiency: vehicleData.fuelEfficiency
        };

        if(!this.#validateRental(vehicle)) {
            return "Invalid rental information.";
        }

        const rentalCost = vehicleData.dailyPrice * vehicleData.rentalDays;

        const fuelUsed = vehicleData.kilometers / vehicleData.fuelEfficiency;

        const fuelCost = fuelUsed * vehicleData.fuelPrice;

        const subtotal = rentalCost + fuelCost;

        const totalCost = this.#calculateDiscount(subtotal);

        const rental = {
            rentalCode: this._generateRentalCode(),
            vehicleName: vehicleData.vehicleName,
            rentalDays: vehicleData.rentalDays,
            kilometers: vehicleData.kilometers,
            rentalCost: rentalCost,
            fuelCost: fuelCost,
            totalCost: totalCost,
            createdAt: new Date()
        };

        this.rentals.push(rental);

        return rental;
    }

    // Public method
    returnVehicle(rentalCode, daysLate) {

        const rental = this.rentals.find(
            rental => rental.rentalCode === rentalCode
        );

        if(!rental) {
            return "Rental not found.";
        }

        const penalty = daysLate * 50;

        return {
            rentalCode,
            daysLate,
            penalty
        };
    }

    // Public method
    showRentalHistory() {
        return this.rentals;
    }

    // Static method
    static convertKilometersToMiles(km) {
        return km * 0.621371;
    }

    // Static method
    static calculateAverageFuelConsumption(consumptions) {
        
        const total = consumptions.reduce(
            (sum, value) => sum + value, 0
        );

        return total / consumptions.length;
    }
}

// Object creation
const customer1 = new Customer(
    {
        fullName: "Karen saints",
        driverLicense: 43254535433,
        phoneNumber: "+12344323125",
        membershipLevel: "premium"
    }
);

console.log('********************************');
console.log('********************************');
console.log(typeof(customer1));
console.log('********************************');
console.log(customer1);
console.log('********************************');

const rental1 = customer1.rentVehicle(
    {
        vehicleName: "BMW x6 4.0M",
        dailyPrice: 100,
        rentalDays: 5,
        kilometers: 350,
        fuelEfficiency: 14,
        fuelPrice: 10
    }
);

console.log('********************************');
console.log(typeof(rental1));
console.log('********************************');
console.log(rental1);
console.log('********************************');
console.log(customer1.showRentalHistory());
console.log('********************************');
console.log(customer1.returnVehicle(rental1.rentalCode, 2));
console.log('********************************');
console.log(
"100 km in miles is: ", Customer.convertKilometersToMiles(100).toFixed(3)
);
console.log('********************************');
console.log(
"The average consumption is: ",
Customer.calculateAverageFuelConsumption([12, 14, 10 ,16])
);
