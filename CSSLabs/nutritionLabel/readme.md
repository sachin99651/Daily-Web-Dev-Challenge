# Nutrition Label Project

This project is a CSS-intensive exercise to recreate a standard US Nutrition Facts label. It focuses on precise typography, varied border weights, and complex alignment using Flexbox.

## Features

*   **Precise Typography**: Uses "Open Sans" with specific weights (up to 800) to replicate the bold look of official labels.
*   **Variable Dividers**: Implements different "divider" classes (`small`, `medium`, `large`) using background colors and heights to create the standard visual hierarchy found on food packaging.
*   **Flexbox Alignment**: Extensive use of `justify-content: space-between` to align nutrient names with their corresponding daily values.
*   **Nested Indentation**: Uses custom classes (`indent` and `double-indent`) to represent sub-nutrients like Saturated Fat and Added Sugars.

## Technical Skills Applied

### Box Model & Sizing
The project uses `box-sizing: border-box` and relative units (`rem`, `em`) to ensure padding and borders are handled correctly within the fixed 270px width of the label.

### CSS Selectors
The project utilizes the `:not()` pseudo-class to apply borders selectively, keeping the HTML clean:
```css
.daily-value p:not(.no-divider) {
  border-bottom: 1px solid #888989;
}
