# 🔄 Module 04: JavaScript Fundamentals – Arrays & Data Collections

## 📌 Overview
This module focuses on JavaScript's primary ordered data structure: **Arrays**. I am learning how to store, access, modify, and manage linear collections of data. Mastering array manipulation, basic indexing, and built-in structural methods is foundational for keeping data organized before stepping into complex data flows and state management.

---

## 📂 Key Labs & Exercises

* **arrayBasics.js**: Declaring arrays, using bracket notation, and understanding zero-based indexing.
* **arrayLength.js**: Utilizing the `.length` property to track elements and dynamically target the last item.
* **pushAndPop.js**: Modifying the end of an array by adding (`push`) and removing (`pop`) items.
* **shiftAndUnshift.js**: Managing elements at the beginning of an array using `shift` and `unshift`.
* **accessingData.js**: Updating multi-dimensional (nested) arrays using chained brackets.
* **basicSlicing.js**: Extracting portions of a collection without mutating the original structure.
* **shoppingList.js**: Building a practical, nested data collection to simulate a retail checklist.

---

## 🛠️ Concepts Mastered

* **Zero-Based Indexing**: Accessing explicitly targeted items using position pointers where the first element begins strictly at index `0`.
* **Stack & Queue Operations**: Mimicking real-world data flows by adding or stripping elements from both endpoints of a collection.
* **Array Mutability**: Modifying values directly within an existing array structure without changing its variable reference.
* **Nested Collections**: Constructing and traversing multi-dimensional structures (arrays inside arrays) to represent complex data rows.

---

## 🚀 Key Syntax: Array Operations

Arrays let us store multiple values inside a single variable and manipulate them dynamically.

```javascript
// Initializing a standard array
const techStack = ["MongoDB", "Express", "React"];

// Adding an item to the end (Push)
techStack.push("Node.js"); 
// techStack is now: ["MongoDB", "Express", "React", "Node.js"]

// Modifying an element via its zero-based index
techStack[0] = "MERN Stack";

// Accessing the last element dynamically using the length property
const lastIndex = techStack.length - 1;
console.log(techStack[lastIndex]); 
// Output: Node.js

// Multi-dimensional Array Example
const userRoles = [
  ["Sachin", "Admin"],
  ["Alex", "Editor"]
];
console.log(userRoles[0][1]); 
// Output: Admin