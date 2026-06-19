# Responsive Magazine Project

This project is a high-level CSS layout exercise that recreates a professional magazine article. It focuses on advanced CSS Grid techniques, typography hierarchy management, and creating complex, multi-column layouts that remain fully responsive.

## 🚀 Key Features

* **Advanced CSS Grid Layout**: Uses a sophisticated 3-column grid structure with `minmax()` track functions to create flexible grid gutters and a beautifully constrained content area.
* **Typography Pairing**: Combines 'Anton' for bold headlines, 'Raleway' for clean subtitles, and 'Baskervville' for body text to mimic a high-end, editorial print aesthetic.
* **Responsive Multi-Column Text**: Implements the CSS Multi-column Layout module using the `column-width` property, allowing long-form body text to automatically divide into columns based on the screen width.
* **Typographic Artistry**: Utilizes the `::first-letter` pseudo-element for custom drop caps, along with `::before` and `::after` pseudo-elements to style blockquotes automatically.
* **Complex Image Gallery Mosaic**: Features an `image-wrapper` layout utilizing an inner CSS Grid with custom `grid-column` and `grid-row` spans to build a professional photo mosaic.

---

## 📁 Code Structure

### HTML Components
* `<main>`: Houses the core article framework and enforces structured grid sections.
* `<header class="heading">`: Contains the stylized magazine logo, main title, and subtitle text.
* `<section class="text">`: Groups the multi-column article paragraphs, inline quotes, and typographic elements.
* `<aside class="image-wrapper">`: The mosaic container managing individual layout photos and graphic tiles.

### CSS Styling
* **Grid Partitioning**: Employs explicit template definitions to keep text containers running symmetrically alongside structural imagery.
* **Font Scaling Foundation**: Scales down root rules to simplify typography calculation across custom media query breakpoints.
* **Pseudo-Class Fine Tuning**: Isolates unique structural patterns, including a dark theme palette overlay, using standard element filters.

---

## 🛠️ Technical Skills Applied

### 62.5% Font Scaling
The project sets the root font size to `62.5%` on the `html` element. This scales the browser's default `16px` font size down to `10px`, making responsive `rem` unit math incredibly simple to calculate (`1.6rem = 16px`, `2.4rem = 24px`, etc.):

```css
html {
  font-size: 62.5%; /* 1rem = 10px */
}
