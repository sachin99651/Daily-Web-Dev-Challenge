# freeCodeCamp: Responsive Web Design - Personal Portfolio

This repository contains my solution to the final **Personal Portfolio project** required for the freeCodeCamp Responsive Web Design certification. The objective of this project is to build a complete, functional single-page portfolio that meets strict layout, navigation, and responsiveness testing criteria.

---

## 🎯 freeCodeCamp Project Requirements Met

* **Welcome Section:** Includes a hero banner with an `id="welcome-section"` and an `<h1>` heading that fills the full viewport height (`100vh`).
* **Projects Grid:** Features a designated work section (`id="project-section"`) housing multiple `class="project-tile"` components that dynamically rearrange.
* **Fixed Navigation:** Implements a persistent navbar (`id="navbar"`) at the top of the viewport that contains links to quickly jump between sections.
* **Profile Integration:** Includes a secure target-anchored link (`id="profile-link"`) that opens my official GitHub profile in a new browser tab.

---

## 🚀 Features

* **Sleek Dark Aesthetic:** Implements global CSS custom properties (`:root` variables) for scalable theme management.
* **Fluid Layouts:** Uses CSS Grid with `auto-fit` and `minmax()` parameters to automatically balance card positions without hardcoding rigid widths.
* **Modern CSS Enhancements:** Enhances the UI using `scroll-behavior: smooth` for effortless user navigation, along with `backdrop-filter: blur` on the navigation bar.
* **Fully Responsive:** Custom media queries scale down typography and stack the navigation menu links beautifully on compact screens.

---

## 🛠️ Technologies Used

* **HTML5:** Structuring clean layouts using semantic markup (`<nav>`, `<header>`, `<section>`).
* **CSS3:** Custom properties, Flexbox, CSS Grid, absolute/fixed positioning, transitions, and responsive media breakpoints.

---

## 📂 File Structure

```text
├── index.html   # Main markup containing the hero banner and project tiles
└── styles.css   # Main stylesheet defining variables, layout grids, and media queries