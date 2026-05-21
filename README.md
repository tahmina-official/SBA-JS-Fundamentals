📊 Learner Performance Data Processor (JavaScript)
📌 Overview

This project processes course, assignment, and learner submission data using JavaScript.

It calculates each learner’s assignment scores, applies late penalties, excludes future assignments, and computes weighted averages.

The program demonstrates core JavaScript fundamentals including loops, conditionals, functions, objects, and error handling.

🚀 Features
✔ Validates course and assignment group relationship
✔ Processes learner submissions dynamically
✔ Excludes assignments not yet due
✔ Applies 10% late submission penalty
✔ Calculates weighted averages correctly
✔ Handles invalid or missing data safely
✔ Uses error handling (try/catch)
✔ Uses multiple loop types and control statements (break, continue)
🧠 Main Function
getLearnerData(course, assignmentGroup, learnerSubmissions)
📥 Parameters
course → Course information object
assignmentGroup → Assignment group data
learnerSubmissions → Array of learner submissions
📤 Returns

An array of learner objects in this format:

{
  id: number,
  avg: number,
  assignment_id: percentage
}
⚙️ Grading Rules
⏳ Future Assignments

Assignments with due dates in the future are excluded from processing.

⛔ Late Submission Penalty

If submission is late:

score = score - (points_possible × 0.1)
📊 Weighted Average Formula
avg = total earned points ÷ total possible points
🧩 JavaScript Concepts Used
Variables (let, const)
Objects and arrays
Functions
Conditional statements (if / else)
Loops (for...of, for...in)
Loop control (break, continue)
Error handling (try/catch)
Data validation
Date comparison
▶️ How to Run
Install Node.js
Save file as index.js
Run:
node index.js
📌 Example Output
[
  {
    id: 125,
    "1": 0.94,
    "2": 1,
    avg: 0.985
  },
  {
    id: 132,
    "1": 0.78,
    "2": 0.833,
    avg: 0.82
  }
]
🎯 Notes
All data is processed dynamically (no hardcoded results)
Invalid data is safely handled using try/catch
Code is structured for readability and maintainability

🎯 Purpose

This project was created as part of a JavaScript fundamentals assessment to demonstrate practical problem-solving and data-processing skills using core JavaScript concepts.

## 👩‍💻 Author

**Tahmina Akter**