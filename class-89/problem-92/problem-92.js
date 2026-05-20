// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Parent class
class User {

    constructor(data) {
        this.fullName = data.fullName;
        this.studentId = data.studentId;
    }

    // Protected method
    _generateBorrowCode() {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        return `BRW-${randomNumber}`; // BRW-7324
    }
}

// Child class
class Student extends User {

    constructor(data) {
        super(data);
        this.borrowedBooks = [];
    }

    //Private method
    #validateBook(book) {
        return (
            book.title &&
            book.author &&
            book.copies > 0
        );
    }

    // Public method
    borrowBook(data) {

        const book = {
            title: data.title,
            author: data.author,
            copies: data.copies
        };

        if (!this.#validateBook(book)) {
            return "Invalid book information.";
        }

        const borrowedBook = {
            borrowCode: this._generateBorrowCode(),
            title: data.title,
            author: data.author,
            borrowDate: new Date()
        };

        this.borrowedBooks.push(borrowedBook);

        return `${data.title} borrowed successfully.`;
    }

    // Private Method
    #getBookBorrowCode(bookTitle) {

        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (
                bookTitle.toLowerCase() === 
                this.borrowedBooks[i].title.toLowerCase()
            ) {
                return this.borrowedBooks[i].borrowCode;
            } else {
                return -1;
            }
        }
    }

    // Public method
    returnBook(bookTitle) {

        const bookBorrowCode = this.#getBookBorrowCode(bookTitle);

        if (bookBorrowCode === -1) {
            return "Book not found.";
        }
        const index = this.borrowedBooks.findIndex(
            book => book.borrowCode === bookBorrowCode
        );

        if (index === -1) {
            return "Borrow record not found.";
        }

        this.borrowedBooks.splice(index, 1);

        return "Book returned successfully.";
    }

    // Public method
    showBorrowedBooks() {
        return this.borrowedBooks;
    }

    // Static method
    static calculateLateFee(daysLate) {
        return daysLate * 2;
    }
}

// Object creation
const jimmy = new Student(
    {
        fullName: "James Isaac Neutron",
        studentId: 2134231432432342
    }
);

console.log('*********************************');
console.log(jimmy);
console.log(typeof(jimmy));
console.log('*********************************');
console.log(jimmy.borrowBook(
    {
        title: "Clean Code",
        author: "Robert c. Martin",
        copies: 3
    }
));
console.log('*********************************');
console.log(jimmy.showBorrowedBooks());
console.log('*********************************');
console.log(jimmy.returnBook("Clean Code"));
console.log('*********************************');
console.log(`Delay days fee: $${Student.calculateLateFee(8)} USD.`);
