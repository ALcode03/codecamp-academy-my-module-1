// Author; Cristian Camilo Cortes Ortiz <Cristianco9>

// Parent class
class Person {

    constructor(data) {
        this.fullName = data.fullName;
        this.passportNumber = data.passportNumber;
        this.nationality = data.nationality;
    }

    // Protected method
    _generateReservationCode() {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        return `FlY-${randomNumber}`;
    }
}

// Child class
class Passenger extends Person {

    constructor(data) {
        super(data);
        this.ticketClass = data.ticketClass;
        this.reservations = [];
    }

    // Private method
    #validateFlightData(flight) {
        return (
            flight.origin &&
            flight.destination &&
            flight.basePrice > 0 &&
            flight.availableSeats > 0
        );
    }

    // Private method
    #calculateTicketPrice(basePrice) {

        const multiplier = {
            economy: 1,
            business: 1.8,
            firstClass: 2.5
        };

        return basePrice * multiplier[this.ticketClass];
    }

    // Public method
    bookFlight(data) {

        const flight = {
            origin: data.origin,
            destination: data.destination,
            basePrice: data.basePrice,
            availableSeats: data.availableSeats
        };

        if(!this.#validateFlightData(flight)) {
            return "Invalid flight data.";
        }

        const finalPrice = this.#calculateTicketPrice(data.basePrice);

        const row = Math.floor(Math.random() * 30) + 1; // [1;29]

        const seatLetters = ["A", "B", "C", "D", "E", "F"];

        const seatLetter = seatLetters[
            Math.floor(Math.random() * seatLetters.length) // [0; 5]
        ];

        const seatNumber = `${row}${seatLetter}`;

        const reservation = {
            reservationCode : this._generateReservationCode(),
            origin: data.origin,
            destination: data.destination,
            ticketClass: this.ticketClass,
            seatNumber,
            finalPrice,
            createdAt: new Date()
        };

        this.reservations.push(reservation);

        return reservation;
    }

    // Public method
    cancelReservation(reservationCode) {

        const index = this.reservations.findIndex(
            reservation => reservation.reservationCode === reservationCode
        );

        if (index === -1) {
            return "Reservation not found.";
        }

        this.reservations.splice(index, 1);

        return "reservation canceled successfully";
    }

    // Public method
    showReservations() {
        return this.reservations;
    }

    // Static meth
    static calculateBaggageFee(weight) {
        if (isNaN(weight) || weight < 0) {
            return null;
        } else if ( weight <= 20){
            return 0;
        } else if (weight <= 30) {
            return 50;
        } else {
            return 100;
        }
    }

    // Static method
    static convertHours(hours) {
        return hours * 60;
    }
}

// Object creation
const tonyStark = {
    fullName: "Anthony Edwards Stark",
    passportNumber: 103435344532,
    nationality: "American",
    ticketClass: "firstClass"
};

const passenger1 = new Passenger(tonyStark);

const flightData = {
    origin: "New york",
    destination: "London",
    basePrice: 123,
    availableSeats: 2
};

console.log("**********************************************");
console.log("Passenger");
console.log(passenger1);
console.log(typeof(passenger1));
console.log("**********************************************");
console.log("Reservation");
const reservation1 = passenger1.bookFlight(flightData)
console.log(reservation1);
console.log(typeof(reservation1));
console.log("**********************************************");
console.log(passenger1.showReservations());
console.log("**********************************************");
console.log("Calculate the baggage fee:");
console.log(Passenger.calculateBaggageFee(20));
console.log("**********************************************");
console.log("Convert 6.3 hours fly to minutes:");
console.log(Passenger.convertHours(6.3), " Minutes");