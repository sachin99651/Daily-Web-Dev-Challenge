# Technical Documentation Page - JavaScript

This project is a functional technical documentation webpage designed to provide clear, accessible information about JavaScript. It focuses on implementing a side-navigation layout and ensuring full responsiveness for mobile devices.

## Features

*   **Fixed Side Navigation**: A persistent sidebar on large screens allows for instant jumping to different sections of the documentation.
*   **Media Queries**: The layout automatically switches from a side-by-side view to a stacked column view on screens smaller than 815px.
*   **Semantic HTML5**: Uses `<nav>`, `<main>`, and `<section>` tags for better SEO and accessibility.
*   **Code Snippets**: Styled `<code>` blocks with horizontal scrolling support to maintain readability of programming logic.

## Technical Skills Applied

### Responsive Design
The project uses a CSS Media Query to transform the layout for mobile users, moving the navigation from the left side to the top of the page:
```css
@media (max-width: 815px) {
    #navbar {
        position: relative;
        width: 100%;
        max-height: 275px;
    }
}
