# 🔄 Module 10: JavaScript Fundamentals – JavaScript & Accessibility (a11y)

## 📌 Overview
This module bridges the gap between dynamic scripting and inclusive web design: **JavaScript and Accessibility (a11y)**. I am learning how to build interactive elements that are completely functional for users relying on screen readers, keyboard-only navigation, or other assistive technologies. Ensuring that dynamic MERN stack applications remain fully accessible is a core requirement for modern, professional web development.

---

## 📂 Key Labs & Exercises

* **semanticDom.js**: Managing focus and structural markup when updating the DOM dynamically.
* **keyboardNavigation.js**: Implementing full keyboard support (`Tab`, `Enter`, `Space`, and Arrow keys) for custom UI widgets.
* **focusManagement.js**: Directing the browser's focus explicitly when modals open, drawers expand, or content changes.
* **ariaAttributes.js**: Dynamically toggling `aria-expanded`, `aria-hidden`, and `aria-checked` states using JavaScript.
* **accessibleForms.js**: Handling dynamic form validation errors and linking them clearly to inputs using `aria-describedby`.
* **screenReaderAnnouncements.js**: Utilizing `aria-live` regions (`polite` vs `assertive`) to announce updates without disrupting the user.
* **accessibleModals.js**: Building a completely compliant modal popup featuring focus trapping and `Escape` key closure.

---

## 🛠️ Concepts Mastered

* **Keyboard Operability**: Ensuring all interactive elements are reachable and triggering tasks using standard keyboard expectations.
* **Focus Trapping**: Confining keyboard focus within active overlays (like dialogs or side menus) to prevent background navigation errors.
* **ARIA (Accessible Rich Internet Applications)**: Modifying semantic structural states programmatically when custom components change appearance.
* **Live Announcements**: Informing screen reader users of asynchronous state updates, network alerts, or content refreshes dynamically.
* **Reducing Animation Impacts**: Writing scripts that respect user preferences by checking `matchMedia('(prefers-reduced-motion)')`.

---

## 🚀 Key Syntax: Dynamic Accessibility Control

We can use JavaScript to keep assistive states synchronized with the user interface during interactions.

```javascript
// Selecting elements for an accessible disclosure toggle
const toggleButton = document.querySelector(".btn-toggle");
const contentPanel = document.querySelector(".panel-content");

toggleButton.addEventListener("click", () => {
  // Read current expanded state (returns a string "true" or "false")
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  
  // Toggle the state logically
  toggleButton.setAttribute("aria-expanded", !isExpanded);
  
  // Synchronize the visibility of the target panel
  if (isExpanded) {
    contentPanel.classList.add("hidden");
    contentPanel.setAttribute("aria-hidden", "true");
  } else {
    contentPanel.classList.remove("hidden");
    contentPanel.setAttribute("aria-hidden", "false");
  }
});

// Managing focus explicitly for an open modal overlay
function openModal(modalElement) {
  modalElement.classList.add("is-active");
  
  // Target the primary focusable element inside the modal immediately
  const closeButton = modalElement.querySelector(".btn-close");
  if