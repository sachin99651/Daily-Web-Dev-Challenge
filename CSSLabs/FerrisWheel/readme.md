# Ferris Wheel Project

This project is a web-based, animated **Ferris Wheel** simulation built as part of an advanced CSS animation lab. It uses pure HTML and CSS to create a multi-layered structure featuring synchronized keyframe animations, precise geometric alignments, and interactive color shifts.

## 🚀 Features

* **Fluid CSS Keyframe Animations**: Drives a continuous, full-circle structural rotation (`0%` to `360deg`) on the main wheel container using an infinite, linear timing loop.
* **Gravity-Compensated Cabins**: Employs a counter-rotational animation strategy on individual passenger units (`0%` to `-360deg`). This ensures the cabins remain upright, reacting naturally to gravity as the main structure spins.
* **Dynamic Background Color Shifting**: Uses keyframe intervals (`0%`, `25%`, `50%`, `75%`, `100%`) within the cabin animations to smoothly cycle background colors from bold red to warm yellow and vibrant purple.
* **Rotational Spoke Matrices**: Positions six distinct geometric lines precisely across the center of the wheel container by setting a shared `transform-origin` and applying staggered 60-degree rotational offsets.
* **Mathematical Layout Placement**: Maps six distinct passenger cabins in a symmetrical ring using absolute positioning properties alongside structural rotation anchors.

---

## 📁 Code Structure

### HTML Components
* `<div class="wheel">`: The outer structural circle acting as the main chassis and core rotating container.
* `<span class="line">`: Flat structural bars mapping across the center axis to form the spokes of the wheel.
* `<div class="cabin">`: Component elements serving as individual passenger seats that travel and counter-rotate along the wheel's edge.

### CSS Styling
* **Responsive Vector Sizing**: Leverages viewport-width units (`55vw`) for fluid rendering, backed by absolute boundaries (`max-width: 500px`) to preserve layout integrity on wider desktop screens.
* **Advanced Selector Mechanics**: Uses structural `:nth-of-type()` pseudo-classes to easily target specific spokes and cabins for isolated rotation and absolute placement.
* **Precision Timing Profiles**: Anchors lines and shapes using absolute coordinate overlays paired with smooth speed curves to mimic the physical weight changes of a mechanical theme park ride.

---

## 🛠️ Usage

To run the animated Ferris Wheel locally:
1. Save the HTML source structure as `index.html` and the companion styling declarations as `styles.css` in the same directory.
2. Open `index.html` inside any modern web browser to watch the animation run.

---

## ⚙️ Technical Details

* **Core Animation Loop Duration**: `10s` (Infinite iteration)
* **Spoke Rotational Intervals**: Staggered increments of `60deg` (ranging from `0deg` to `300deg`)
* **Chassis Bounds**: Perfectly circular layout (`border-radius: 50%`) with max dimensions locked at `500px` by `500px`.
* **Animation Profiles**:
    * **Main Wheel Structure**: Continuous `linear` speed profile for uniform rotation.
    * **Passenger Cabins**: Varied `ease-in-out` speed profile with automated background color adjustments.
