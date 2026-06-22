# Colored Boxes Project

This project is a web-based **Color Palettes Grid** created as part of a CSS fundamentals and colors lab module. It demonstrates the implementation of multiple core CSS color format declarations alongside basic element structural layouts using HTML and Flexbox.

## 🚀 Features

* **Multi-Format Color Declarations**: Explores and implements four different syntax rules to assign custom background colors to UI elements:
    * **Hexadecimal Color Code**: `.color1` uses `#CA0000` (Deep Crimson Red).
    * **RGB System Notation**: `.color2` uses `rgb(0, 200, 0)` (Vibrant Green).
    * **Named Color Keyword**: `.color3` uses `gold`.
    * **HSL Color Vector**: `.color4` uses `hsl(210, 70%, 50%)` (Sky Blue).
* **Flexbox Alignment Chassis**: Arranges the separate graphical boxes horizontally inside a shared parent container (`.color-grid`) using standard CSS Flexbox alignment configurations.
* **Modern Box Styling**: Applies subtle design treatments to individual blocks, including dynamic layout constraints and smooth edge curving via the `border-radius` property.

---

## 📁 Code Structure

### HTML Components
* `<div class="color-grid">`: The parent wrapper container that establishes the flexible layout matrix context.
* `<div class="color-box">`: Modular element classes representing individual layout color blocks.

### CSS Styling
* **Chassis Dimensioning**: Binds container elements to uniform dimensions (`width: 100%;`, `height: 200px;`) while keeping components perfectly spaced via standard `margin` boundaries.
* **Border Radii Controls**: Applies uniform `border-radius: 10px;` adjustments to smooth out sharp box corners into sleek, modern squares.
* **Neutral Backdrop**: Sets up a light neutral `#f4f4f4` base body fill to provide high-contrast background clarity for the colored blocks.

---

## 🛠️ Built With

* **HTML5**: Clean structure utilizing structured component divisions (`<div>` tags) to handle element grouping.
* **CSS3**: Layout design utilizing Flexbox configuration, custom corner styling, and multi-format color declarations (Hex, RGB, HSL, Named Keywords).

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding containing the flexible grid cells
└── styles.css   # Main stylesheet defining layout limits, dimensions, and color spaces
