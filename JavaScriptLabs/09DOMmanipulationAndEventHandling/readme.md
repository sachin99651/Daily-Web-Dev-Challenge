# 🔄 Module 09: JavaScript Fundamentals – DOM Manipulation & Event Handling

## 📌 Overview
This module transitions from core JavaScript logic into browser environment interaction: **The Document Object Model (DOM)** and **Event Handling**. I am learning how to select elements, update structural content dynamically, modify styles on the fly, and respond to user inputs like clicks, keystrokes, and form submissions. Masterfully manipulating the DOM is crucial for engineering interactive, dynamic, and state-driven web applications.

---

## 📂 Key Labs & Exercises

* **domTree.js**: Visualizing the hierarchical structure of the document object model.
* **selectingElements.js**: Querying nodes using `getElementById`, `getElementsByClassName`, and `querySelectorAll`.
* **modifyingContent.js**: Altering visible text and elements via `innerText`, `textContent`, and `innerHTML`.
* **stylingElements.js**: Changing appearance dynamically by altering the `.style` property and manipulating classes with `classList.add` or `classList.toggle`.
* **creatingElements.js**: Building elements from scratch using `createElement` and appending them to the tree with `appendChild`.
* **clickEvents.js**: Binding simple interactive click listeners to button elements.
* **eventObject.js**: Utilizing the `event` parameter (`e`) to extract information such as target elements or key codes.
* **formHandling.js**: Intercepting form submissions, preventing standard browser reloads via `e.preventDefault()`, and extracting input field data.
* **eventBubbling.js**: Navigating event propagation phases and implementing event delegation strategies.

---

## 🛠️ Concepts Mastered

* **The DOM Tree**: Conceptualizing the webpage as a tree interface where every HTML tag represents a node that scripts can freely modify.
* **Dynamic UI Updates**: Constructing, appending, and purging interface components smoothly without initiating page refreshes.
* **Event Listeners**: Programming applications to wait patiently for user interaction before triggering specific execution pathways.
* **Default Event Interception**: Halting innate browser protocols—such as links executing redirects or forms refreshing pages—to process tasks locally via scripts.
* **Event Delegation**: Optimizing memory consumption and performance by registering a single event listener on a parent container rather than duplicating listeners across multiple child items.

---

## 🚀 Key Syntax: DOM Manipulation & Event Handling

The DOM allows developers to target explicit HTML tags and bind interactive logic directly to them.

```javascript
// Selecting elements from the page
const counterDisplay = document.querySelector("#counter");
const incrementButton = document.querySelector(".btn-increment");

let count = 0;

// Creating a function to handle the interaction logic
function handleIncrement() {
  count++;
  counterDisplay.textContent = count;
  
  // Conditionally updating styles via classList
  if (count >= 10) {
    counterDisplay.classList.add("achievement-unlocked");
  }
}

// Registering the Event Listener
incrementButton.addEventListener("click", handleIncrement);

// Handling form inputs cleanly
const userForm = document.querySelector("#signup-form");
userForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stops the page from reloading
  const inputField = document.querySelector("#username-input");
  console.log(`Registration submitted for: ${inputField.value}`);
});
