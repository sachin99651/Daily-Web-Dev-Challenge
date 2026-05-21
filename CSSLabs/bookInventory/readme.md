# Book Inventory Project

This project is a web-based **Book Inventory** log created as part of a custom semantic HTML and CSS styling module. It features a beautifully themed personal reading tracker utilizing custom Google Fonts, CSS variables, gradient accents, and dynamic layout designs to visually catalog books by reading status and ratings.

## Features

*   **Custom Typography & Aesthetic Theme**: Combines `Playfair Display` for elegant serif headings with `DM Mono` for clean, data-focused monospace text, resting on a warm parchment-style background canvas.
*   **Status-Based Zebra Striping**: Implements dynamic row highlights via delicate background gradients tailored to the book's reading state:
    *   **Read**: Soft Sage Green (`--sage`) gradient layout.
    *   **In Progress**: Warm Gold (`--gold`) gradient layout.
    *   **To Read**: Classic Deep Navy (`--navy`) gradient layout.
*   **Custom Built Dot-Rating Matrix**: Leverages pure CSS selector rules (`:nth-child`) and 135-degree linear gradients to programmatically fill rating indicators based on assigned element classes (`one`, `two`, or `three`).
*   **Responsive Data Grid Wrapper**: Houses the document inventory table inside a sleek `.table-wrap` container built with responsive max-widths, high-depth box shadows, and thin borders.
*   **Interactive Row Feedback**: Embedded transition rules naturally scale row brightness (`filter: brightness(.95)`) down upon interactive mouse-hover events.

## Code Structure

### HTML Components
*   `<h1>` & `<p class="subtitle">`: Build an elegant centered page header complete with a linear-gradient underline indicator pseudo-element.
*   `<table>`: The structured reading database displaying Title, Author, Category, Status, and Rate.
*   `<span class="status">`: Custom blocks mapping readable status states inline.
*   `<span class="rate">`: Container holds structural tracking circles acting as rating slots.
*   `<div class="legend">`: A quick-glance visual map displaying color dots and status representations.

### CSS Styling
*   **Root Variables Palette**: Configures uniform design architecture via defined variables (`--ink`, `--paper`, `--cream`, `--gold`, `--rust`, `--sage`, `--navy`) for efficient maintenance.
*   **Complex Radial Backgrounds**: Utilizes dual overlapping `radial-gradient` vectors positioned at contrasting angles to create a subtle ambient lighting tone on the page body.
*   **Precise Content Alignment**: Implements flexible text alignments, item adjustments (`vertical-align: middle`), letter spacings, uppercase tracking, and custom box-sizing across the document canvas.

## Usage

To run the Book Inventory platform, save both the provided HTML source and the code snippet companion as `index.html` and `styles.css` respectively within a single directory, then open `index.html` in your web browser.

## Technical Details

*   **Typography**: *Playfair Display* (Serif), *DM Mono* (Monospace)
*   **Sizing Constraints**: 
    *   Maximum Grid Width: `1000px`
    *   Status Badge Heights: `28px`
    *   Rating Indicator Dimensions: `10px` x `10px`
*   **Interactive Controls**: Smooth `0.15s` hover filtering transition properties.