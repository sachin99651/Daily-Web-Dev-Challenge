# Penguin Character Illustration Project

This project is an interactive, animated **CSS Penguin Illustration** created as part of an advanced vector graphics and keyframe layout module. It uses semantic HTML elements and modular CSS declarations to build a complete outdoor winter scene featuring a stylized cartoon penguin character.

## 🚀 Features

* **Complex Character Vectoring**: Forms the penguin's features—including layered eyelids, multi-part blushing cheek circles, an offset interlocking beak, and flippers—using precisely calculated `border-radius` shaping matrices.
* **Dynamic CSS Interaction**: Implements a smooth 1-second `:active` transition utility that scales the entire penguin up by 150% (`transform: scale(1.5)`) upon a mouse click or hold, while changing the screen pointer to a `not-allowed` indicator.
* **Keyframe Wave Animation**: Features a 3-second looping keyframe workspace (`@keyframes wave`) on the left flipper using staggered percentage intervals (`10%`, `20%`, `30%`, `40%`) alongside flipped coordinate mirrors (`scaleX(-1)`) to simulate a natural greeting gesture.
* **Layered Environmental Depth**: Establishes strict forward-to-back sorting hierarchies across the canvas using relative and absolute `z-index` properties. This groups the components cleanly: background sun, background mountain (`z-index: 1`), foreground mountain (`z-index: 2`), layout ice ground (`z-index: 3`), and the interactive character (`z-index: 4`).
* **Pseudo-Element Shading Layer**: Leverages a `::before` pseudo-element overlay on the penguin's lower torso to cast an automatic 70% opacity skin tint over the underbelly area for realistic lighting depth.

---

## 📁 Code Structure

### HTML Components
* `<div class="left-mountain">` & `.back-mountain`: Provide backdrop environmental geometry using custom skew and 45-degree rotational adjustments.
* `<div class="sun">`: A simple circular layout positioned accurately using absolute top-right coordinate boundaries.
* `<div class="penguin-head">` & `.penguin-body`: Serve as primary structural canvas cells that house child face elements and graphic components.
* `<div class="shirt">`: Injects a customized typography block mapping a text badge and a Unicode heart icon over the upper torso layout.

### CSS Styling
* **Root Theme Properties**: Organizes universal color settings using semantic custom variables (`--penguin-face: white;`, `--penguin-beak: orange;`, and `--penguin-skin: gray;`) for easy maintenance.
* **Global Layout Boundaries**: Sets up a lock on the viewport (`width: 100%;`, `height: 100vh;`) with an `overflow: hidden;` declaration to clip accidental scrolling offsets.
* **Complex Color Traverses**: Blends multiple linear color stops (like `rgb(134, 133, 133) 0%`, `rgb(234, 231, 231) 25%`, and `white 67%`) inside 45-degree and 90-degree vector gradients to give the environment realistic lighting gradients.

---

## 🛠️ Usage

To display this animated graphic illustration locally:
1. Save the markup structure as `index.html` and the accompanying stylesheet properties as `styles.css` within a single working folder.
2. Open `index.html` inside any standard modern web browser.

---

## ⚙️ Technical Details

* **Canvas Element Proportions**: Character bounded inside a `300px` by `300px` reference window.
* **Animation Profiling**: Loop timeline set to `3s` with a constant `linear` configuration for smooth repetition.
* **Active Scaling Modifiers**: `1.5` magnification coefficient bound to a `1s ease-in-out` transitional timing curve.
