/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Student Grade Analyzer
*/

// Initial dataset
let grades = [72, 85, 90, 66, 58, 79, 91];

// 1. Print the total numbers of grades
console.log(`\nThe total grades: ${grades.length}`);

// 2. Add a new grade (88)
grades.push(88);
console.log(`\nGrades after adding 88: ${grades}`);

// 3. Remove the last grade
let removedGrade = grades.pop();
console.log(`\nRemoved last grade: ${removedGrade}`);

// 4. Print all grades
console.log("\nList of grades:");
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1} : ${grades[i]}`);
}

// Variables for calculation
let sum = 0;
let highestGrade = grades[0];
let passedStudents = 0;

// 5-9. Process grades
for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    // Calculate sum
    sum += grade;

    // Find highest grade
    if(grade > highestGrade) {
        highestGrade = grade;
    }

    // Count passed students
    if (grade >= 70) {
        passedStudents++;
    }
}

// 5. Print sum of grades
console.log(`\nSum of grades: ${sum}`);

// 6. Calculate and print average
let average = sum / grades.length;
console.log(`\nAverage grade: ${average}`);

// 7. Print highest grade
console.log(`\nHighest grade: ${highestGrade}`);

// 8-9. Print number of students who passed
console.log(`\nStudents passed: ${passedStudents}`);


