/*
    Author: Cristian Camilo Cortes Ortiz <Cristianco9>
    Problem: Calculates the final grade base on weight scores
*/

/**
 * Calculates the final grade based on weighted scores
 * @param {number} examScore 
 * @param {number} projectScore 
 * @param {number} participationScore 
 * @returns {number}
 */
function calculateFinalGrade(examScore, projectScore, participationScore) {

    const finalGrade = 
    (examScore * 0.5) + (projectScore * 0.3) + (participationScore * 0.2);

    return finalGrade;
}

/**
 * Determines if the student passed or failed
 * @param {number} finalGrade 
 * @returns {string}
 */
function getStudentStatus(finalGrade) {

    if(finalGrade >= 60) {
        return "Passed";
    }

    return "failed";
}

/**
 * Display the student final grade and if he passed ir failed
 * @param {number} studentGrade 
 * @param {number} studentStatus 
 */
function displayStudentData(studentGrade, studentStatus) {
    console.log(`
    \n
    ***********************************
    Final grade:    ${studentGrade}
    Status:         ${studentStatus}
    ***********************************
    `);
}

// Example usage
const examScore = 80;
const projectScore = 70;
const participationScore = 90;

const finalGrade = calculateFinalGrade(examScore, projectScore, participationScore);

const status = getStudentStatus(finalGrade);
displayStudentData(finalGrade, status);

const student2Grade = calculateFinalGrade(78, 55, 30);
const student2Status = getStudentStatus(student2Grade);
displayStudentData(student2Grade, student2Status);

const student3Grade = calculateFinalGrade(38, 65, 50);
const student3Status = getStudentStatus(student3Grade);
displayStudentData(student3Grade, student3Status);
