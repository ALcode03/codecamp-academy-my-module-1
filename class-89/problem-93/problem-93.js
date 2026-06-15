// Author: ALEXANDRA KEDJU <ALcode03>
class Person {
  constructor(fullName, email, identificationNumber) {
    this.fullName = fullName;
    this.email = email;
    this.identificationNumber = identificationNumber;
  }


  _generateStudentCode() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return `STD-${randomNumber}`;
  }
}

// CHILD CLASS

class Student extends Person {
  constructor(fullName, email, identificationNumber, career, semester) {
    super(fullName, email, identificationNumber);

    this.studentCode = null;
    this.career = career;
    this.semester = semester;
    this.courses = [];           // empty array by default
    this.isRegistered = false;   // false by default
  }

  // PRIVATE METHODS 

  #validateCourse(courseName, credits, teacher) {
    if (!courseName || credits <= 0 || !teacher) {
      return false;
    }
    return true;
  }
  #calculateTuition() {
    const costPerCredit = 120;
    const totalCredits = this.courses.reduce((sum, course) => sum + course.credits, 0);
    return totalCredits * costPerCredit;
  }

  //PUBLIC METHODS 
  registerStudent() {
    this.studentCode = this._generateStudentCode(); // uses protected method
    this.isRegistered = true;
    return `Student "${this.fullName}" successfully registered. Code: ${this.studentCode}`;
  }
  enrollCourse(courseName, credits, teacher) {
    // Step 1: Validate the course data
    if (!this.#validateCourse(courseName, credits, teacher)) {
      return `Error: Invalid course data. Make sure name, credits > 0, and teacher are provided.`;
    }

    // Step 2: Check if the student is registered
    if (!this.isRegistered) {
      return `Error: Student must be registered before enrolling in courses.`;
    }

    // Step 3 & 4: Create course object and store it
    const course = {
      courseName,
      credits,
      teacher,
      enrolledAt: new Date().toLocaleDateString(),
    };

    this.courses.push(course);

    // Step 5: Return success message
    return `Course "${courseName}" successfully added for ${this.fullName}.`;
  }

  // Removes a course by name
  dropCourse(courseName) {
    const index = this.courses.findIndex(c => c.courseName === courseName);

    if (index === -1) {
      return `Error: Course "${courseName}" not found in enrolled courses.`;
    }

    this.courses.splice(index, 1);
    return `Course "${courseName}" successfully dropped.`;
  }

  // Returns all enrolled courses
  showCourses() {
    return this.courses;
  }

  // Returns all student information as an object
  showStudentInformation() {
    return {
      fullName: this.fullName,
      email: this.email,
      identificationNumber: this.identificationNumber,
      studentCode: this.studentCode,
      career: this.career,
      semester: this.semester,
      isRegistered: this.isRegistered,
      courses: this.courses,
    };
  }
  showTuitionCost() {
    const total = this.#calculateTuition();
    return `Total tuition cost for ${this.fullName}: $${total}`;
  }

  //STATIC METHODS
  
  static convertCreditsToHours(credits) {
    return credits * 48;
  }

  // Calculates the average from an array of grades
  static calculateAverageGrade(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
  }
}


// TEST CASES

console.log("========== STUDENT 1 ==========");

const student1 = new Student(
  "Alice Mugisha",
  "alice@university.rw",
  "ID-001",
  "Computer Science",
  3
);

// Register student
console.log(student1.registerStudent());

// Enroll in courses
console.log(student1.enrollCourse("Data Structures", 4, "Prof. Uwera"));
console.log(student1.enrollCourse("Web Development", 3, "Prof. Hakizimana"));
console.log(student1.enrollCourse("Algorithms", 3, "Prof. Niyonsenga"));

// Show courses
console.log("Enrolled courses:", student1.showCourses());

// Show tuition
console.log(student1.showTuitionCost());

// Drop a course
console.log(student1.dropCourse("Algorithms"));
console.log("After dropping:", student1.showCourses());

// Show full info
console.log("Student Info:", student1.showStudentInformation());


console.log("\n========== STUDENT 2 ==========");

const student2 = new Student(
  "Bob Kamanzi",
  "bob@university.rw",
  "ID-002",
  "Business Administration",
  1
);

// Try enrolling BEFORE registering (should fail)
console.log(student2.enrollCourse("Marketing", 3, "Prof. Umulisa"));

// Now register
console.log(student2.registerStudent());

// Enroll properly
console.log(student2.enrollCourse("Marketing", 3, "Prof. Umulisa"));
console.log(student2.enrollCourse("Accounting", 4, "Prof. Gasana"));

// Try invalid course (no teacher)
console.log(student2.enrollCourse("Finance", 3, ""));

// Show tuition
console.log(student2.showTuitionCost());

// Try dropping a course that doesn't exist
console.log(student2.dropCourse("Physics"));


console.log("\n========== STATIC METHODS ==========");

// Credits to hours
console.log("3 credits =", Student.convertCreditsToHours(3), "hours");
console.log("10 credits =", Student.convertCreditsToHours(10), "hours");

// Average grade
const grades = [4.5, 3.8, 4.2];
console.log("Average grade:", Student.calculateAverageGrade(grades));