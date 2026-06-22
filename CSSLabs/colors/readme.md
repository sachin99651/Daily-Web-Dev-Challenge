# Colored Markers Project

This project is a realistic, three-dimensional **CSS Color Markers** illustration created as part of the freeCodeCamp Color Theory module. It explores how to blend primary color channels, combine element sub-structures, apply drop shadows, and use advanced multi-stop linear gradients to turn flat HTML sketches into lifelike skeletal objects.

## 🚀 Features

* **Advanced Linear Gradient Fills**: Simulates three-dimensional lighting, depth, and cylindrical reflections by stacking three explicit multi-stop color markers (`top`, `middle`, and `bottom` color reflections):
    * **Red Marker**: Combines dark brown-red tones and bright magenta highlights via standard `rgb()` mapping functions.
    * **Green Marker**: Implements a lush, bright green gradient reflection using traditional Hexadecimal shorthand values.
    * **Blue Marker**: Employs deep navy and bright electric cyan highlights via the Hue, Saturation, and Lightness (`hsl()`) color system.
* **Complex Element Sub-Structures**: Constructs an interlocking three-part marker body using semantic nesting rules. The marker utilizes a parent container to manage dimensions, an inline-block `.cap` component, and a translucent `.sleeve` texture layer.
* **Translucent Layer Spacing**: Implements a decorative `.sleeve` using an alpha-channel background wrapper (`rgba(255, 255, 255, 0.5)`) paired with a bold double-line left accent border (`10px double`) to emulate a textured label band.
* **Volumetric Ambient Box Shadows**: Projects realistic physical glow dimensions below each marker silhouette using specialized `rgba()` and `hsla()` box-shadow alpha masks.

---

## 📁 Code Structure

### HTML Components
* `<div class="container">`: The parent white canvas workspace that groups and balances the structural vector elements.
* `<div class="marker">`: The primary base chassis defining global sizing boundaries for individual drawing pens.
* `<div class="cap">`: An inline-block layout utility element mimicking the plastic head cap of each drawing marker.
* `<div class="sleeve">`: A secondary inner element representing the paper wrapping layered directly over the marker core body.

### CSS Styling
* **Inline-Block Layout Flow**: Switches default block behaviors on `.cap` and `.sleeve` using `display: inline-block;` to let components lock side-by-side horizontally.
* **Geometric Alignment Mechanics**: Centers drawing blocks across the page via auto-margin boundaries (`margin: 10px auto;`) paired with explicit horizontal parameters (`width: 200px;`).
* **Text Formatting**: Secures clear page readability by centering the document's introductory header text line layout inside the screen viewport.

---

## 🛠️ Built With

* **HTML5**: Structured semantic templates utilizing element divisions (`<div>` tags) to handle complex structural nesting relationships.
* **CSS3**: Layout styling utilizing multi-stop linear gradients, translucent alpha parameters, custom shadow offsets, double-border decorations, and inline-block formatting configurations.

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding containing nested marker bodies and sleeves
└── styles.css   # Main design sheet defining color matrices, lighting reflection gradients, and shadows
