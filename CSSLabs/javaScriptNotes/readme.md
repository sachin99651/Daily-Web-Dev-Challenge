# Technical Documentation Page - JavaScript

This project is a functional, single-page **Technical Documentation Webpage** designed to provide clear, accessible information about JavaScript fundamentals. It focuses on implementing a split-view side-navigation layout and ensuring full responsiveness across shifting device screens.

## 🚀 Features

* **Fixed Side Navigation**: Features a persistent, multi-link sidebar (`id="navbar"`) on desktop viewports that allows for instant anchoring and jumping to different documentation headers.
* **Media Query Breakpoints**: The layout automatically switches from a side-by-side desktop grid to a cleanly stacked vertical column view on viewport sizes smaller than `815px`.
* **Semantic HTML5 Construction**: Leverages structural layout tags, explicitly assigning a primary `<nav>` sidebar chassis alongside independent `<section>` nodes mapped with corresponding `class="main-section"` properties.
* **Scroll-Safe Code Snippets**: Custom-styles inline and block `<code>` fragments, enforcing an explicit horizontal scroll container boundary (`overflow-x: scroll;`) to preserve the indentation of raw programming scripts.

---

## 📁 Code Structure

### HTML Components
* `<nav id="navbar">`: The navigation backbone containing anchor links (`class="nav-link"`) to quickly route viewports to specific topics.
* `<main id="main-doc">`: The primary content container hosting the full body of technical articles.
* `<section class="main-section">`: Modular text blocks organized with unique, cross-linked matching `id` values.
* `<header>`: Nested inside each section node to establish clean technical subtitle hierarchies.

### CSS Styling
* **Desktop Split Layout**: Anchors the sidebar to the left viewport rim using `position: fixed;`, allocating the remaining screen horizontal real estate to the primary scrolling content field via explicit margins.
* **Typographic Readability**: Combines monospaced fonts for technical scripts with readable sans-serif text blocks, adjusting line-height matrices for clean reading.
* **Responsive Layout Shifts**: Alters layout properties within breakpoints to scale down element widths and heights on compact tablet and mobile viewports.

---

## 🛠️ Technical Skills Applied

### Responsive Design
The project uses a CSS Media Query to dynamically transform the desktop layout framework for mobile users, seamlessly moving the fixed navigation sidebar from the left edge to the top of the viewport stack:

```css
@media (max-width: 815px) {
  #navbar {
    position: relative;
    width: 100%;
    max-height: 275px;
    border-right: none;
    border-bottom: 2px solid #dfdfe2;
  }
}
