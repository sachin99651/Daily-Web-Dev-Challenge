# 🔄 Module 08: JavaScript Fundamentals – Higher-Order Functions & Callbacks

## 📌 Overview
This module explores advanced functional programming concepts in JavaScript: **Higher-Order Functions** and **Callbacks**. I am learning how to treat functions as first-class citizens by passing them as arguments, returning them from other functions, and leveraging built-in array methods. Mastering these concepts is essential for handling asynchronous operations, processing data collections, and writing clean, declarative code.

---

## 📂 Key Labs & Exercises

*   **firstClassFunctions.js**: Treating functions as values by assigning them to variables and storing them in objects.
*   **callbackBasics.js**: Passing a function as an argument to another function to control execution flow.
*   **higherOrderIntro.js**: Creating custom functions that accept or return other functions.
*   **anonymousCallbacks.js**: Using inline anonymous functions and arrow functions as immediate callbacks.
*   **arrayMap.js**: Transforming every element in an array and returning a new array of the same length.
*   **arrayFilter.js**: Evaluating array elements against a condition and returning a filtered subset.
*   **arrayReduce.js**: Accumulating array values into a single output (e.g., a sum, an object, or a collapsed array).
*   **forEachMethod.js**: Iterating over arrays efficiently without writing traditional `for` loops.
*   **abstractionChallenge.js**: Hiding implementation details by abstracting repetitive logic into reusable utility functions.

---

## 🛠️ Concepts Mastered

*   **First-Class Citizens**: Understanding that functions in JavaScript can be manipulated just like strings, numbers, or objects.
*   **Callback Mechanism**: Executing a function only *after* another specific task or calculation has been completed.
*   **Declarative vs. Imperative**: Shifting from telling the program *how* to loop (imperative) to telling it *what* to achieve using array methods (declarative).
*   **Immutability**: Utilizing methods like `.map()` and `.filter()` to return fresh data instances instead of mutating original source arrays.
*   **Chaining Methods**: Combining multiple higher-order array methods together sequentially to process complex data efficiently.

---

## 🚀 Key Syntax: Higher-Order Functions & Callbacks

A **Higher-Order Function** is any function that receives another function as an argument, returns a function, or both. The function passed inside is the **Callback**.

```javascript
// Callback Function
const double = (number) => number * 2;

// Higher-Order Function using a built-in array method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(double);

console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

// Custom Higher-Order Function Example
function processUser(username, callback) {
  const formattedName = username.trim();
  return callback(formattedName);
}

const directGreeting = processUser("   Sachin   ", (name) => `Welcome back, ${name}!`);
console.log(directGreeting); 
// Output: Welcome back, Sachin!
