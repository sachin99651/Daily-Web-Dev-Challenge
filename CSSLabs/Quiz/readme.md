# freeCodeCamp: Accessibility Quiz Project

This repository contains my solution to the **Accessibility Quiz project**, completed as part of the freeCodeCamp Responsive Web Design certification modules. The core focus of this lab is to master the implementation of accessible web patterns, ensuring forms and digital layouts remain usable for assistive technologies like screen readers.

---

## 🎯 Accessibility (a11y) Features Met

* **Screen Reader Optimization**: Integrates a specialized `.sr-only` utility class to strictly target and supply mandatory contextual cues to screen readers while keeping them hidden visually.
* **Semantic ARIA Landmarks**: Uses distinct landmark mappings (`role="region"` paired with corresponding `aria-labelledby` definitions) to allow effortless section navigation for keyboard-based users.
* **Explicit Form Labeling**: Pairs all interactive form targets cleanly using standard `for` and matching `id` bindings to optimize input target focus areas.
* **Motion Sensitivity Handlers**: Implements an explicit `@media (prefers-reduced-motion: no-preference)` structural wrapper to only enable smooth scroll animations for users who haven't requested reduced animation profiles.

---

## 🚀 Technical Highlights

### Semantic Form Grouping
Employs standard `<fieldset>` containers alongside informative `<legend>` element captions to organize distinct radio selection networks:

* Wraps target option blocks structurally within unordered lists (`<ul class="answers-list">`) to enable clean grid parsing.
* Incorporates fallback select list placeholders (`value=""`) marked with `required` properties to ensure accurate submission safety validation.

### Precision Layout Management
* **Responsive Component Constraints**: Leverages clean, dynamic sizing wrappers (`max(10rem, 18vw)` and `min(5vw, 1.2em)`) to ensure components scale fluidly without clipping text content.
* **Flexbox Element Alignments**: Powers the persistent navigation header bar via Flexbox layout constraints (`justify-content: space-between; align-items: center;`).
* **Interactive States**: Integrates explicit `:hover` and pointer feedback modifications on core navigation items to enhance user experience.

---

## 🛠️ Built With

* **HTML5**: Semantic tags including `<header>`, `<main>`, `<section>`, `<nav>`, `<fieldset>`, `<legend>`, and `<footer>`.
* **CSS3**: Layout styling utilizing Flexbox architecture, custom typography, form spacing adjustments, and media queries for motion preferences.

---

## 📂 File Structure

```text
├── index.html   # Semantic markup structure containing accessible form fields
└── styles.css   # Main stylesheet defining accessible view utilities and design variables
