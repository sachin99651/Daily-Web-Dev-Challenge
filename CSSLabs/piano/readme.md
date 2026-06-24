# freeCodeCamp: Responsive Web Design - Piano Lab
This repository contains my solution to the **Piano Project** from the freeCodeCamp Responsive Web Design certification modules. The project focuses on utilizing CSS absolute and relative positioning, pseudo-elements, and responsive media queries to create a beautifully centered, visually accurate musical keyboard layout.
---
## 🚀 Features
* **Semantic HTML5 Construction**: Structures the keyboard layout using standard element divisions (`<div>` tags) to handle keys and organizational sub-groups cleanly.
* **CSS Pseudo-Elements Layering**: Utilizes `::after` selectors on specific key tokens to render the overlaying black keys efficiently without altering the underlying HTML DOM structure.
* **Fluid & Responsive Layout**: Employs CSS media queries to seamlessly scale the musical keyboard chassis down across mobile, tablet, and desktop viewports.
* **Predictable Box-Sizing Reset**: Implements global `box-sizing: border-box;` parameters to simplify dimensional calculations, preventing key padding or borders from expanding the elements out of alignment.
---
## 🛠️ Technologies Used
* **HTML5**: Structuring the interactive keys framework, grouping wrappers, and header logos.
* **CSS3**: Layout design rules utilizing relative/absolute tracking systems, float alignment clears, hover pseudo-classes, and responsive media breakpoints.
---
## 📱 Responsive Breakpoints
The design scales smoothly across three main device categories using targeted media query breakpoints:

| Device Type | Viewport Range | Key Structural Adjustments |
| :--- | :--- | :--- |
| **Desktop** | `1200px` and above | Full size profile (`992px` piano container chassis width) |
| **Tablet** | `769px` to `1199px` | Scaled intermediate size (`675px` piano container chassis width) |
| **Mobile** | Up to `768px` | Compact layout (`358px` container width) and reduced logo dimensions |

---
## 📂 File Structure
```text
├── index.html   # Main HTML markup representing the piano chassis, black keys, and white keys
└── styles.css   # Main design sheet defining relative/absolute layouts, positions, and query blocks
