# 🔄 Module 06: JavaScript Loops & Iteration

## 📌 Overview
Loops are essential for handling repetitive logic and processing large datasets efficiently. In this module, I am learning how to control the flow of execution by repeating blocks of code until specific conditions are met. This is a critical skill for rendering dynamic data in React and processing database entries in MongoDB.

## 📂 Key Labs & Exercises
* **`forLoops.js`**: Practicing the standard `for` loop for indexed-based iteration.
* **`whileLoops.js`**: Implementing logic that runs as long as a specific condition remains true.
* **`doWhile.js`**: Ensuring a block of code runs at least once before checking the condition.
* **`arrayIteration.js`**: Combining loops with arrays to process lists of data.

## 🛠️ Concepts Mastered
- **Iteration Control:** Understanding the `initialization`, `condition`, and `increment/decrement` steps.
- **Infinite Loops:** Learning how to avoid logic errors that crash the browser.
- **Break & Continue:** Using `break` to exit loops early and `continue` to skip specific iterations.
- **Nested Loops:** Handling multi-dimensional data structures (e.g., coordinates or grids).

## 💻 Logic Pattern
```javascript
// Example: Processing a list of tasks
const tasks = ["Clean Room", "Study JavaScript", "Run 10km"];

for (let i = 0; i < tasks.length; i++) {
  console.log(`Task ${i + 1}: ${tasks[i]}`);
}