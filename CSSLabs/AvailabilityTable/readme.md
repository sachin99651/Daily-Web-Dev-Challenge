# Availability Table Project

This project is a web-based **Availability Table** created as part of a CSS styling lab. It demonstrates the use of CSS variables, advanced layouts, and hard-line linear gradients to create a functional and visually appealing data visualization tool.

## 🚀 Features

* **Responsive Table Design**: Uses a clean, centered layout with a modern dark theme.
* **Dynamic Coloring**: Leverages CSS custom properties (variables) to efficiently manage a color palette for different availability levels.
* **Visual Hierarchy**: Employs distinct border styles—solid for full hours and dashed for half-hour transitions—to significantly improve readability.
* **CSS Gradient Legend**: Features a custom-built legend using a `linear-gradient` with hard color stops to represent the availability scale clearly.

---

## 📁 Code Structure

### HTML Components
* `<table>`: The main container for the schedule data.
* `<thead>`: Defines the column headers for the days of the week.
* `<tbody>`: Contains the time slots and data cells (`<td>`).
* `<div id="legend">`: Provides a visual key for the color-coded availability cells.

### CSS Styling
* **Custom Variables**: Defined in the `:root` selector for easy maintenance of colors and border styles.
* **Dark Mode**: Implemented via `background-color: #121212` on the body element for a sleek, modern aesthetic.
* **Gradient Logic**: The legend uses a `90deg` linear gradient with specific percentage stops to create distinct blocks of color without blurring.

---

## 🛠️ Usage

To view the project locally:
1. Ensure both the `index.html` and `styles.css` files are saved in the same directory.
2. Open `index.html` in any modern web browser.

---

## ⚙️ Technical Details

* **Font Family**: Sans-serif
* **Primary Border Styles**:
    * `--solid-border`: `2px solid #ffffff`
    * `--dashed-border`: `2px dashed #aaaaaa`
* **Color Scale**: Six distinct colors ranging from dark blue (`--color0`) to bright teal (`--color5`).
