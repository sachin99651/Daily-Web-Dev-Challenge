# Day 2: Advanced String Manipulation & Data Types

## 📝 Description
Today's lab focused on modern JavaScript string features and the nuances of data types. I moved away from simple concatenation to using **Template Literals** and explored how to access specific characters in a string using indices.

## 🛠️ Concepts Learned
* **Template Literals:** Using backticks (`` ` ``) and `${}` for **String Interpolation**, making code much more readable.
* **Bracket Notation:** Accessing specific characters using `string[index]`.
* **String Properties & Methods:** * `.length`: Finding the total number of characters.
    * `.indexOf()`: Locating the position of a substring (and learning that it returns `-1` if the string isn't found).
* **Dynamic Typing:** Understanding how JavaScript handles types at runtime.
* **The `typeof null` Bug:** Learned that `typeof null` returns `"object"`, which is a famous historical bug in JavaScript.

## 💻 Code Example
```javascript
const subject = "JavaScript";
const lastChar = subject[subject.length - 1]; // Dynamically getting 't'