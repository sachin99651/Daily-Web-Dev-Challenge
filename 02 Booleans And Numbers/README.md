# 🔢 Module 02: Booleans and Numbers

## 📝 Overview
This module explores JavaScript's mathematical capabilities and logical truth values. I built a **MathBot** to practice using arithmetic operators, comparison operators, and Boolean logic—the foundation for decision-making in programming.

## 📂 Project: MathBot.js
The MathBot is a logic-based script that processes numerical data and returns Boolean evaluations.

### 🛠️ Key Concepts Mastered
* **Arithmetic Operators:** * Used `+`, `-`, `*`, and `/` for standard calculations.
    * Mastered the **Modulus Operator (`%`)** to find remainders (crucial for logic like checking even/odd numbers).
    * Practiced the **Exponentiation Operator (`**`)** for power calculations.
* **Comparison Operators:** * Used `>`, `<`, `>=`, and `<=` to evaluate relationships between numbers.
    * Learned the importance of **Strict Equality (`===`)** over loose equality (`==`) to avoid type-coercion bugs.
* **Boolean Data Type:**
    * Working with `true` and `false` values.
    * Understanding how comparisons automatically result in Boolean outputs.
* **The `Math` Object:**
    * Explored `Math.random()` for generating numbers and `Math.floor()` / `Math.round()` for handling decimals.

## 💻 Logic Example
```javascript
let mySteps = 25000;
let goal = 30000;
let goalReached = mySteps >= goal; // Results in a Boolean (false)
console.log("Goal Reached: " + goalReached);