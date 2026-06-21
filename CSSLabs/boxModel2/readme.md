# Confidential Email Project

This project is a web-based **Confidential Email** interface created as part of a semantic HTML and CSS styling lab. It demonstrates an immersive espionage-themed interface featuring text redaction through CSS filters, custom element transformations, and a rigid dark-mode layout.

## 🚀 Features

* **Immersive Secret Agent Theme**: Utilizes a monospace layout with a dark color palette, a retro console font, and distinct stamped classification labels to simulate a classified briefing interface.
* **CSS Text Redaction**: Implements a dedicated `.blurred` class that actively sanitizes sensitive data by making the text transparent (`color: transparent;`), applying a solid dark background color block, and layer-blurring the element.
* **Data Leakage Prevention**: Features `user-select: none;` on redacted inline text blocks to safely prevent users from highlighting, selecting, or copying hidden text out of the document viewport.
* **Dynamic Stamp Rotations**: Employs distinct `transform: rotate();` angles (`-10deg` and `5deg`) on inline-block headers to mirror authentic, off-center ink-stamped classification markings.
* **Centered Desktop Framing**: Wraps the document template inside a fixed-width container centered within the viewport via Flexbox parent layout controls (`display: flex; justify-content: center;`).

---

## 📁 Code Structure

### HTML Components
* `<main id="email">`: The primary message panel hosting text data, borders, and deep terminal background rules.
* `<div id="confidential">` & `<div id="top-secret">`: Modular layout labels serving as stylized classification warning stamps.
* `<span class="blurred">`: Inline wrapper segments hiding highly sensitive data strings like mission operations, locations, and asset names.

### CSS Styling
* **Document Grid Metrics**: Configures rigid structural limits using an explicit sizing layout (`width: 500px;`) combined with `box-sizing: border-box;` to balance internal padding distributions flawlessly.
* **Text Formatting**: Enhances scannability using the terminal-style `'Courier New'` monospace font family paired with an elongated `1.6` line-height for legible message reading.
* **Distinct Warning Alerts**: Assigns highly visible warning colors—bright red (`#ff4444`) for critical confidentiality and deep yellow-gold (`#ffcc00`) for top-secret operational alerts.

---

## 🛠️ Built With

* **HTML5**: Structured semantic markup utilizing `<main>`, `<div>`, and inline `<span>` text elements.
* **CSS3**: Layout styling utilizing Flexbox alignment properties, text shadows, custom text selection blockers, rotation transforms, and pixel-blur filter layers.

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding for the terminal email message
└── styles.css   # Main design rules containing redaction filters and stamped rotation vectors
