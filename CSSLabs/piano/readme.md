# freeCodeCamp: Responsive Web Design - Piano Lab

This repository contains my solution to the **Piano project** from the freeCodeCamp Responsive Web Design certification. The project focuses on utilizing CSS positioning, pseudo-elements, and media queries to create a responsive, visually accurate musical keyboard layout.

---

## 🚀 Features

* **Semantic HTML5:** Built using standard structured layout practices.
* **CSS Pseudo-elements:** Utilizes `::after` on specific classes to render the black keys efficiently without altering the HTML hierarchy.
* **Fluid & Responsive Layout:** Uses CSS Media Queries to seamlessly adapt the piano instrument across mobile, tablet, and desktop viewports.
* **Box-Sizing Reset:** Implements `border-box` sizing across all elements for easier, predictable spacing and layout calculations.

---

## 🛠️ Technologies Used

* **HTML5:** Structure of the piano keys and container.
* **CSS3:** Styling, positioning (`absolute`/`relative`), floating elements, and responsive breakpoints.

---

## 📱 Responsive Breakpoints

The design scales smoothly across three main device categories using media queries:

| Device Type | Viewport Range | Key Adjustments |
| :--- | :--- | :--- |
| **Desktop** | $1200\text{px}$ and above | Full size ($992\text{px}$ piano container width) |
| **Tablet** | $769\text{px}$ to $1199\text{px}$ | Scaled intermediate size ($675\text{px}$ container width) |
| **Mobile** | Up to $768\text{px}$ | Compact layout ($358\text{px}$ container width) and reduced logo size |

---

## 📂 File Structure

```text
├── index.html   # Main HTML markup for the piano and keys
└── styles.css   # Layout styling, positioning, and media queries