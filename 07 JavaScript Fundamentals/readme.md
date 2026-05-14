# 🔄 Module 07: JavaScript Fundamentals – Functions & Logic

## 📌 Overview
This module focuses on the building blocks of reusable logic: **Functions**. I am learning how to wrap code into organized structures that can be executed on demand. Mastering functions, scope, and conditional logic is essential for handling user interactions in web applications and managing state in complex JavaScript environments.

---

## 📂 Key Labs & Exercises

*   **basicFunctions.js**: Defining and calling reusable blocks of code.
*   **parametersArguments.js**: Passing data into functions to make them dynamic.
*   **returnStatement.js**: Capturing values from functions to use elsewhere in the program.
*   **globalVsLocalScope.js**: Understanding variable visibility and how to avoid naming conflicts.
*   **booleanLogic.js**: Working with `true` and `false` values to drive decision-making.
*   **ifElseStatements.js**: Executing different code paths based on specific conditions.
*   **switchStatements.js**: Using an efficient alternative to multiple `if...else` blocks for many options.
*   **countingCards.js**: Building a card-counting function using logic and cumulative variables.
*   **golfCode.js**: Implementing a multi-condition scoring system.
*   **logicalOperators.js**: Combining conditions using AND (`&&`), OR (`||`), and NOT (`!`).

---

## 🛠️ Concepts Mastered

*   **Reusable Code**: Writing functions once and calling them multiple times to keep code DRY (Don't Repeat Yourself).
*   **Scope Hierarchy**: Differentiating between global variables and variables localized within a function.
*   **Comparison Operators**: Using strict equality (`===`) and inequality (`!==`) to compare data types accurately.
*   **Flow Control**: Directing the program's path using nested conditionals and logical chains.
*   **Return Values**: Understanding that every function returns `undefined` unless a `return` statement is specified.

---

## 🚀 Key Syntax: Function Declaration

Functions allow you to store a series of steps and execute them whenever needed by "invoking" or "calling" the function name.

```javascript
// Function Declaration
function greetDeveloper(name) {
  const message = "Hello, " + name + "! Ready to code?";
  return message;
}

// Function Call
const greeting = greetDeveloper("Sachin");
console.log(greeting); 
// Output: Hello, Sachin! Ready to code?
