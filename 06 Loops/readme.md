# 🔄 Module 06: JavaScript Loops & Iteration

## 📌 Overview
Loops are essential for handling repetitive logic and processing large datasets efficiently. In this module, I am learning how to control the flow of execution by repeating blocks of code until specific conditions are met. This is a critical skill for rendering dynamic data in React and processing database entries in MongoDB.

---

## 📂 Key Labs & Exercises

- **forLoops.js**: Practicing the standard `for` loop for index-based iteration.  
- **whileLoops.js**: Implementing logic that runs as long as a specific condition remains true.  
- **doWhile.js**: Ensuring a block of code runs at least once before checking the condition.  
- **arrayIteration.js**: Combining loops with arrays to process lists of data.  
- **forOfLoop.js**: Modern syntax for iterating over iterable objects like arrays and strings.  
- **profileLookup.js**: Using loops to search through complex objects and arrays.  
- **chunkyMonkeyAlgorithm.js**: Splitting arrays into specific lengths using loops.  
- **mutationAlgorithm.js**: Comparing string characters through iterative checks.  
- **factorial.js**: Using loops for mathematical computations.  
- **heritageLibraryCatalog.js**: Processing and filtering library data.  

---

## 🛠️ Concepts Mastered

- **Iteration Control**: Understanding initialization, condition, and increment/decrement steps.  
- **Infinite Loops**: Learning how to avoid logic errors that crash the browser.  
- **Break & Continue**:  
  - `break` → Exit loops early  
  - `continue` → Skip specific iterations  
- **Nested Loops**: Handling multi-dimensional data structures (e.g., grids, coordinates).  
- **Advanced Iteration**: Using modern methods that are cleaner and less error-prone than standard loops.  

---

## 🚀 Additional Loop Types

### 1. `for...of` Loop
Used to iterate over values of an iterable (like an Array or String). Ideal when you don't need the index.

```javascript
const colors = ["Dark Mode Gray", "Syntax Blue", "React Cyan"];

for (const color of colors) {
  console.log(color);
}