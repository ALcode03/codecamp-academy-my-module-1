/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Students Performance
*/

const students = [
    {
        name: "Alice",
        grade: 95,
        attendance: 98
    },
    {
        name: "Bob",
        grade: 67,
        attendance: 80
    },
    {
        name: "Charlie",
        grade: 88,
        attendance: 92
    },
    {
        name: "Diana",
        grade: 45,
        attendance: 70
    },
    {
        name: "Eve",
        grade: 76,
        attendance: 85
    }
];


// 1. Approved students
const approvedStudents = students.filter(
    student => student.grade >= 70
);

// 2. Names of approved students
const approvedNames = approvedStudents.map(
    student => student.name
);

// 3. Average grade
const averageGrade = students.reduce(
    (sum, student) => sum + student.grade, 0
) / students.length;

// 4. Student with highest grade
const topStudent = students.reduce(
    (best, current) => 
        current.grade > best.grade ? current : best
);

// 5. Student status list
const studentStatus = students.map( student => ({
    name: student.name,
    status: student.grade >= 70 ? "Approved" : "Failed"
}));

// Output
console.log("***************************");
console.log("Approved Students:");
console.log(approvedStudents);
console.log("***************************");
console.log("Approved Names:");
console.log(approvedNames);
console.log("***************************");
console.log("Average grade:");
console.log(averageGrade);
console.log("***************************");
console.log("Top Student:");
console.log(topStudent);
console.log("***************************");
console.log("Student Status:");
console.log(studentStatus);
console.log("***************************");
