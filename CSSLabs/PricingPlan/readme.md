# CSS Flexbox Pricing Plans

A clean, modern, dark-themed pricing components layout built to demonstrate the powerful structural capabilities of CSS Flexbox. This project focuses on handling item ordering, flexible sizing distributions, and multi-line card wrapping across responsive viewports.

---

## 🚀 Features

* **Dual-Layer Flexbox Architecture:** Uses Flexbox on the parent container for overall layout layout management and within each individual card for uniform vertical spacing.
* **Controlled Growth Elements:** Implements explicit `flex-grow` parameters on key options (like the Pro plan) to give them visual emphasis and dominance.
* **Explicit Visual Ordering:** Utilizes the CSS `order` property to declare explicit layouts regardless of the element hierarchy in the original HTML file structure.
* **Clean Dark UI:** Uses modern aesthetic variables including deep grays, subtle background card highlights, high-contrast text layers, and balanced teal-blue accent borders.

---

## 🛠️ Built With

* **HTML5:** Well-structured semantic templates showcasing basic, pro, and premium features.
* **CSS3 Flexbox Layout:** Managing components using properties like `display: flex`, `flex-wrap`, `justify-content`, `order`, and `flex-grow`.

---

## 📐 Key Layout Mechanics

The design relies on several strict structural flexbox requirements to distribute the pricing models across screen spaces effectively:

| Selector | Core Flexbox Property | Intended Layout Behavior |
| :--- | :--- | :--- |
| `.pricing-container` | `display: flex; flex-wrap: wrap;` | Houses layout elements side-by-side and allows seamless multi-row wrapping on compact viewports. |
| `.pricing-card` | `flex-direction: column; justify-content: space-between;` | Stacks title headings, features, and price values vertically with absolute equal distribution. |
| `.pricing-card` | `flex: 0 0 200px;` | Dictates a clean starting base footprint width of 200px without shrinking baseline items out of proportion. |
| `.pro-plan` | `flex-grow: 2;` | Instructs the middle column option to expand twice as fast as neighbors to swallow remaining container widths. |

---

## 📂 File Structure

```text
├── index.html   # HTML5 scaffolding for basic, pro, and premium features
└── styles.css   # Main design parameters including spacing resets and flex variables