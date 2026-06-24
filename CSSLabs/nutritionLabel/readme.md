# Nutrition Label Project

This project is a CSS-intensive illustration that perfectly recreates a standard US Nutrition Facts label. It focuses on high-precision typography pairings, variable layout divider weights, nested hierarchical margins, and complex alignment distributions using CSS Flexbox.

## 🚀 Features

* **Precise Typography Control**: Employs the "Open Sans" font family with highly calculated weights (ranging up to `800` for the boldest elements) to mirror the exact, heavy typographic footprint of official food packaging.
* **Variable Visual Dividers**: Implements separate, modular divider utility classes (`.small-heading`, `.medium-heading`, `.large-heading`) utilizing explicit heights and background colors to establish a clean visual structural hierarchy.
* **Flexbox Alignment Mechanics**: Relies heavily on Flexbox alignment properties (`display: flex; justify-content: space-between;`) to align nutrient titles flush-left while keeping their corresponding percentages anchored flush-right.
* **Nested Structural Indentation**: Leverages custom indendation classes (`.indent` and `.double-indent`) to shift sub-nutrients (like Saturated Fat, Dietary Fiber, and Added Sugars) horizontally to represent accurate nutritional relationships.

---

## 📁 Code Structure

### HTML Components
* `<div class="label">`: The primary parent container that wraps the layout, anchoring the visual boundaries to standard label dimensions.
* `<header>`: Houses the primary title blocks, standard servings data, and the calories indicator.
* `<div class="daily-value">`: The main grid infrastructure grouping individual macro and micronutrient rows.
* `<span>` & `<b>`: Inline tags selectively mixed to shift font weights between bold metrics and light descriptive text units.

### CSS Styling
* **The Box Model Foundation**: Enforces universal `box-sizing: border-box;` resets to ensure padding widths do not widen or distort the rigid label width.
* **Micro-Spacing Utilities**: Fine-tunes margins and padding layers to eliminate gaps and pack structural elements tightly against each other.
* **Clean Text Layouts**: Eliminates text decoration properties while implementing uppercase tracking parameters across primary visual dividers.

---

## 🛠️ Technical Skills Applied

### Box Model & Sizing
The project locks layout definitions to relative units (`rem`, `em`) packed inside a fixed `270px` baseline width layer to preserve a scalable structure across varying viewport layouts.

### Advanced CSS Selectors
The project utilizes the `:not()` functional pseudo-class to apply bottom borders selectively, maintaining clean, scalable stylesheets without cluttering the HTML markup with presentation rules:

```css
.daily-value p:not(.no-divider) {
  border-bottom: 1px solid #888989;
}
