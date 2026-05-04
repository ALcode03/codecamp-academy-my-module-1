# Problem: Student Final Grade Calculator

## Objective
Design a function that calculates the final grade of a student based on three scores and determines whether the student has passed or failed.

## Requirements
1. Create a function named `calculateFinalGrade`.
2. The function must receive three parameters:
   - `examScore` (number)
   - `projectScore` (number)
   - `participationScore` (number)
3. The function should:
   - Compute the final grade using the following weights:
     - Exam: 50%
     - Project: 30%
     - Participation: 20%
   - Return the final grade.
4. Create another function named `getStudentStatus` that:
   - Receives the final grade as input.
   - Returns:
     - `"Passed"` if the grade is greater than or equal to 60
     - `"Failed"` otherwise

## Example
Input:
- examScore = 80
- projectScore = 70
- participationScore = 90

Output:
- Final Grade: 79
- Status: Passed