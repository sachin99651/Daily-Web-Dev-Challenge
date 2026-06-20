# Balance Sheet Project

This project is a web-based **Balance Sheet** simulation created as part of an advanced semantic HTML and CSS styling lab. It demonstrates clean financial data presentation, strict accessibility compliance, sticky navigation patterns, and unique hard-line linear gradients for row background styling.

## 🚀 Features

* **Financial Data Presentation**: Displays a highly organized look at financial metrics across three consecutive years (2019, 2020, and 2021) broken down into Assets, Liabilities, and Net Worth.
* **Accessible Design**: Uses a specialized `.sr-only` utility class to hide descriptive layout texts from visual view while keeping them fully readable by assistive screen readers. Key decorative header elements are explicitly isolated using `aria-hidden="true"`.
* **Sticky Time Navigation**: The year indicator panel (`#years`) leverages `position: sticky;` and a high `z-index` to stay locked at the top of the viewport when scrolling through deep financial details.
* **Double Underline Accounting Formatting**: Generates traditional financial double-underlines on final totals rows using `border-bottom: 4px double #0a0a23;` to accurately reflect standard accounting presentation rules.
* **Row-Level Visual Styling**: Leverages subtle background color shifts on hovered summary items alongside custom hard-stop gradients to segment individual records cleanly.

---

## 📁 Code Structure

### HTML Components
* `<main>` & `<section>`: Define structural semantic wrapper boundaries for clean document parsing.
* `#years`: Houses the visual calendar-year headers mapping above columns.
* `<table>`: Manages independent modular tables representing distinct financial data categories (Assets, Liabilities, and Net Worth).
* `<caption>`: Provides descriptive, accessible headings for individual data matrices to optimize screen reader navigation.
* `<span class="description">`: Displays italicized inline accounting item context for specific line items.

### CSS Styling
* **Layout Engine**: Combines absolute positioning, explicit element dimensions, and Flexbox (`display: flex;`) for high-precision content distribution and alignment.
* **Typography Hierarchies**: Leverages relative scaling units (`rem`, `em`, and percentages) alongside custom typography treatments for the current financial cycles.
* **Gradient Mechanics**: Employs hard-stop `linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem)` declarations across data rows to produce custom zebra-striping backgrounds without adding excess DOM elements.

---

## 🛠️ Built With

* **HTML5**: Structured semantic markup utilizing `<table>`, `<caption>`, `<thead>`, `<tbody>`, and descriptive metadata layout elements.
* **CSS3**: Layout properties incorporating sticky positioning matrices, Flexbox layouts, explicit double-borders, and background gradient manipulations.

---

## 📂 File Structure

```text
├── index.html   # Main semantic markup containing the structured financial tables
└── styles.css   # Main stylesheet defining variables, sticky rules, and gradient striping
