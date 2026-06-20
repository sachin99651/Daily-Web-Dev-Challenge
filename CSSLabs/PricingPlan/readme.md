# CSS Flexbox Pricing Plans
A clean, modern, dark-themed pricing component layout built to demonstrate the powerful structural capabilities of CSS Flexbox. This project focuses on handling item ordering, flexible sizing distributions, and multi-line card wrapping across responsive viewports.
---
## 🚀 Features
* **Dual-Layer Flexbox Architecture**: Uses Flexbox on the parent container for overall layout alignment and within each individual card for uniform vertical spacing.
* **Controlled Growth Elements**: Implements explicit `flex-grow` parameters on key options (like the Pro plan) to give them visual emphasis and layout dominance.
* **Explicit Visual Ordering**: Utilizes the CSS `order` property to dynamically rearrange columns regardless of their original sequence in the HTML markup.
* **Clean Dark UI**: Employs a modern aesthetic leveraging deep grays, subtle element highlights, high-contrast text typography, and balanced teal-blue accent borders.
---
## 🛠️ Built With
* **HTML5**: Well-structured semantic templates showcasing basic, pro, and premium feature tiers.
* **CSS3 Flexbox**: Managing components using fundamental properties like `display: flex;`, `flex-wrap: wrap;`, `justify-content: space-between;`, `order`, and `flex-grow`.
---
## 📐 Key Layout Mechanics
The design relies on several strict structural Flexbox properties to distribute the pricing models across screen spaces effectively:

| Selector | Core Flexbox Property | Intended Layout Behavior |
| :--- | :--- | :--- |
| `.pricing-container` | `display: flex; flex-wrap: wrap;` | Houses layout cards side-by-side and allows seamless multi-row wrapping on compact mobile viewports. |
| `.pricing-card` | `flex-direction: column; justify-content: space-between;` | Stacks titles, features, and price values vertically with perfectly equal space distribution. |
| `.pricing-card` | `flex: 0 0 200px;` | Dictates a clean starting base footprint width of `200px` while preventing baseline elements from shrinking. |
| `.pro-plan` | `flex-grow: 2;` | Instructs the featured middle column to expand twice as fast as its neighbors to capture remaining container width. |

---
## 📂 File Structure
```text
├── index.html   # HTML5 scaffolding for basic, pro, and premium features
└── styles.css   # Main design parameters including spacing resets and flex variables
