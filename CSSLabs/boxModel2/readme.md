# Confidential Email Project

This project is a web-based **Confidential Email** interface created as part of a semantic HTML and CSS styling lab. It demonstrates an immersive espionage-themed interface featuring text redaction through CSS filters, custom element transformations, and a rigid dark-mode layout.

## Features

*   **Immersive Secret Agent Theme**: Utilizes a monospace layout with a dark color palette, a retro console font, and distinct stamped classification labels to simulate a classified military briefing interface.
*   **CSS Text Redaction**: Implements a dedicated `.blurred` class that actively sanitizes sensitive data by making text transparent (`color: transparent`), applying a solid dark background color block, and layer-blurring the element.
*   **Data Leakage Prevention**: Features `user-select: none` on redacted inline text blocks to safely prevent users from highlighting, selecting, or copying the hidden text out of the document viewport.
*   **Dynamic Stamp Rotations**: Employs distinct `transform: rotate()` angles (-10 degrees and 5 degrees) on inline-block headers to mirror off-center, ink-stamped classification markings.
*   **Centered Desktop Framing**: Wraps the document template inside a fixed-width container centered within the viewport via Flexbox parent layout controls (`display: flex; justify-content: center;`).

## Code Structure

### HTML Components
*   `<main id="email">`: The primary message panel hosting text, borders, and dark terminal background rules.
*   `<div id="confidential">` & `<div id="top-secret">`: Modular layout labels serving as stylized classification warning stamps.
*   `<span class="blurred">`: Inline wrapper segments wrapping highly sensitive data strings like mission operations, locations, and asset names.

### CSS Styling
*   **Document Grid Metrics**: Configures rigid structural limits using an explicit sizing layout (`width: 500px`) combined with `box-sizing: border-box` to perfectly balance internal padding distributions.
*   **Text Formatting**: Enhances scannability using the terminal-style `'Courier New'` monospace font family paired with an elongated `1.6` line-height for legible message reading.
*   **Distinct Warning Alerts**: Assigns highly visible warning colors—bright red (`#ff4444`) for critical confidentiality and a deep yellow-gold (`#ffcc00`) for high-security alerts.

## Usage

To view the confidential email interface, ensure both your HTML file and `styles.css` file are located in the exact same directory, then launch the HTML file inside any modern web browser.

## Technical Details

*   **Font Family**: 'Courier New', Courier, Monospace
*   **Layout Constraints**:
    *   Container Width: `500px`
    *   Container Border: `2px solid #333`
*   **Redaction Strength**: `blur(3px)`
*   **Theme Palette**: High-contrast dark mode featuring `#121212` (Deep Space Body), `#1e1e1e` (Terminal Background), and `#e0e0e0` (Crisp Light-Gray Text).