# 🔢 Module 02: Booleans and Numbers

## 📝 Overview
This module explores JavaScript's mathematical capabilities and logical truth values. I built **MathBot** and **Fortune Teller** to practice arithmetic operators, comparison operators, and Boolean logic—the essential foundations for decision-making in programming.

## 📂 Project: MathBot.js
MathBot is a logic-based script that processes numerical data and returns Boolean evaluations.

### 🛠️ Key Concepts Mastered
* **Arithmetic Operators:** 
    * Used `+`, `-`, `*`, and `/` for standard calculations.
    * Mastered the **Modulus Operator (`%`)** to find remainders (crucial for logic like checking even/odd numbers).
    * Practiced the **Exponentiation Operator (`**`)** for power calculations.
* **Comparison Operators:** 
    * Used `>`, `<`, `>=`, and `<=` to evaluate relationships between numbers.
    * Learned the importance of **Strict Equality (`===`)** over loose equality (`==`) to avoid type-coercion bugs.
* **Boolean Data Type:**
    * Working with `true` and `false` values.
    * Understanding how comparisons automatically result in Boolean outputs.
* **The `Math` Object:**
    * Explored `Math.random()` for generating numbers and `Math.floor()` / `Math.round()` for handling decimals.

## 💻 Logic Example: Fortune Teller
This project uses the `Math` object to generate a random index and select a unique fortune based on conditional logic.

```javascript
const fortune1 = "1. Your cat will look very cuddly today.";
const fortune2 = "2. The weather will be nice tomorrow.";
const fortune3 = "3. Be cautious of your new neighbors.";
const fortune4 = "4. You will find a new hobby soon.";
const fortune5 = "5. It would be wise to avoid the color red today.";

// Generates a random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
