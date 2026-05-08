/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Library Management System
*/

const library = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        pages: 464,
        available: true,
        genres: ["Programming", "Software Engineering"]
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        year: 1999,
        pages: 352,
        available: true,
        genres: ["Programming", "Technology"]
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        pages: 320,
        available: false,
        genres: ["Productivity", "Self Improvement"]
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        year: 2008,
        pages: 176,
        available: true,
        genres: ["Programming", "JavaScript"]
    },
    {
        title: "Design Patterns",
        author: "Erich Gamma",
        year: 1994,
        pages: 395,
        available: false,
        genres: ["Software Engineering", "Architecture"]
    }
];

// 1. Display all books
const displayBooks = () => {
    library.forEach(book => {
        console.log(`${book.title} - ${book.author}`);
    });
};

// 2. Get available books
const getAvailableBooks = () => {
    return library.filter(book => book.available);
};

// 3. Find book by title
const findBookByTitle = (title) => {
    return library.find(book => 
        book.title.toLowerCase() === title.toLowerCase()
    );
};

// 4. Calculate total pages
const calculateTotalPages = () => {
    return library.reduce(
        (total, book) => total + book.pages, 0
    );
};

// 5. Add new book
const addBook = (book) => {
    library.push(book);
};

// Testing the functions

console.log("*********************************");
displayBooks();
console.log("*********************************");
console.log("Available Books:");
console.log(getAvailableBooks());
console.log("*********************************");
console.log("Find a Book:");
console.log(findBookByTitle("Clean Code"));
console.log("*********************************");
console.log("Total pages:");
console.log(calculateTotalPages());
console.log("*********************************");
console.log("Add a new Book:");
addBook({
    title: "Refactoring",
    author: "Martin Fowler",
    year: 1999,
    pages: 448,
    available: true,
    genres: ["Programming", "Software Engineering"]
});
console.log("*********************************");
console.log("Updated Library:");
console.log(library);
console.log("*********************************");
