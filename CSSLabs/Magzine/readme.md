# Responsive Magazine Project

This project is a high-level CSS layout exercise that recreates a professional magazine article. It focuses on advanced CSS Grid techniques, typography management, and creating complex, multi-column layouts that remain fully responsive.

## Key Features

*   **Advanced CSS Grid**: Uses a sophisticated 3-column main grid with `minmax` functions to create flexible "gutters" and a fixed-width content area.
*   **Typography Pairing**: Combines 'Anton' (headlines), 'Raleway' (subtitles), and 'Baskervville' (body text) for a high-end editorial aesthetic.
*   **Responsive Multi-Column Text**: Implements the `column-width` property, allowing body text to automatically split into columns based on screen size.
*   **CSS Artistry**: Uses `::first-letter` for drop caps and `::before`/`::after` pseudo-elements to automatically style quotes.
*   **Complex Image Gallery**: Features an `image-wrapper` using a grid with specific `grid-column` spans to create a mosaic-style layout.

## Technical Skills Applied

### 62.5% Font Scaling
The project sets the root font size to `62.5%`, which makes `1rem` exactly equal to `10px`. This makes calculating responsive sizes much easier:
```css
html {
  font-size: 62.5%; /* 1rem = 10px */
}