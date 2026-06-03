# 🔍 Module 12: JavaScript Tooling – Regular Expressions (Regex)

## 📌 Overview
This module introduces the power of **Regular Expressions (Regex)**: a highly specialized syntax used for searching, matching, and manipulating text strings. I am learning how to construct precise search patterns to validate user data (such as emails and phone numbers), extract specific substrings from large blocks of text, and perform advanced find-and-replace operations. Mastering regex is essential for writing efficient data-validation and string-parsing logic.

---

## 📂 Key Labs & Exercises

* **regexMethods.js**: Practicing the foundational JavaScript methods used to evaluate expressions (`regex.test()` and `string.match()`).
* **characterClasses.js**: Working with predefined shortcuts like `\d` (digits), `\w` (alphanumeric characters), and `\s` (whitespace).
* **anchorsAndBoundaries.js**: Enforcing strict structural boundaries within input text using the `^` (start of string) and `$` (end of string) assertions.
* **quantifierBasics.js**: Specifying exactly how many times a character or group should appear using `+`, `*`, `?`, and `{min,max}` notation.
* **searchAndReplace.js**: Utilizing advanced string replacement patterns dynamically by combining regex with `string.replace()`.
* **dataValidation/**: Constructing an isolated script block to sanitize and validate messy user inputs in real time.

---

## 🛠️ Concepts Mastered

* **Pattern Matching**: Designing precise, literal, or dynamic templates that the computer can use to scan strings rapidly.
* **Input Sanitization**: Filtering out unwanted symbols, malicious scripts, or formatting discrepancies from user submissions.
* **Regex Flags**: Adjusting engine behaviors globally across strings using the `g` (global lookups) and `i` (case-insensitive checks) parameter flags.
* **Character Sets**: Utilizing bracket definitions `[a-z]` to match specific selections or ranges of target characters effortlessly.
* **String Parsing**: Isolating and capturing targeted chunks of raw data out of large unformatted content logs or system files.

---

## 🚀 Key Syntax: Regular Expression Basics

In JavaScript, a Regular Expression can be created between two forward slashes (`/pattern/`) and paired with string methods to test or pull text.

```javascript
// 1. Defining a validation pattern for a basic Username
// Pattern explanation:
// ^      = Start of the string
// [a-z]  = Must start with a lowercase letter
// \w{3,11} = Followed by 3 to 11 alphanumeric characters (letters, numbers, or underscores)
// $      = End of the string
const usernamePattern = /^[a-z]\w{3,11}$/;

const targetUser = "sachin_dev";
const invalidUser = "1_sachin"; // Fails because it starts with a number

// Testing patterns returns a simple true/false Boolean response
console.log(`Is username valid? ${usernamePattern.test(targetUser)}`); // Output: true
console.log(`Is username valid? ${usernamePattern.test(invalidUser)}`); // Output: false


// 2. Extracting dynamic data out of raw text blocks
// Pattern explanation:
// \d{3}  = Matches exactly 3 numbers in a row
// /g     = 'Global' flag (finds all matches in the text, not just the first one)
const documentLog = "The error codes are 404, 500, and 403.";
const errorCodePattern = /\d{3}/g;

const locatedMatches = documentLog.match(errorCodePattern);
console.log("Extracted Error Codes:");
console.table(locatedMatches); // Output: ['404', '500', '403']


// 3. Cleaning up text strings using Replace protocols
// Pattern explanation:
// \s+    = Matches one or more spaces
// /g     = Replaces every instance found throughout the text
const messyInput = "Too    many    spaces    here";
const cleanOutput = messyInput.replace(/\s+/g, " ");

console.log(`Original: "${messyInput}"`);
console.log(`Sanitized: "${cleanOutput}"`); // Output: "Too many spaces here"