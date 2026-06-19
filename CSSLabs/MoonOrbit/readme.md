# Moon Orbit Animation Project

This project is a web-based **Moon Orbit Animation** created as part of an advanced CSS animations and layout lab. It uses pure HTML and CSS to build a minimalist, looping celestial simulation of the Moon orbiting the Earth in deep space.

## 🚀 Features

* **Continuous Keyframe Animation**: Drives a complete, 360-degree rotation (`0%` to `360deg`) on the orbital plane container using an infinite, linear timing profile.
* **Layered Absolute Positioning**: Uses standard absolute layouts to keep the central planet, orbit pathway ring, and satellite perfectly centered and stacked on the canvas.
* **Combined Transform Alignment**: Solves the common CSS issue where a rotation overwrites layout centering by combining both properties (`transform: translate(-50%, -50%) rotate();`) inside a single `@keyframes` workspace.
* **Luminous Atmospheric Glows**: Implements custom CSS `box-shadow` properties on the celestial bodies to mimic soft, glowing light scattering in the vacuum of space.
* **Dashed Radial Trajectory Guide**: Uses a light, semi-transparent dashed border overlay (`rgba(255, 255, 255, 0.2)`) along a circular layout container to display a clean orbital track.

---

## 📁 Code Structure

### HTML Components
* `<div class="space">`: The parent canvas wrapper that acts as the bounding coordinate framework for the animation workspace.
* `<div class="earth">`: Represents the central planet body, complete with dimensional color fields and atmospheric glows.
* `<div class="orbit">`: The primary animated mechanical track container that actively rotates over time.
* `<div class="moon">`: Represents the lunar satellite body, absolute-positioned directly along the top outer edge of the rotating track.

### CSS Styling
* **Flexbox Grid Centering**: Centers the overall cosmic canvas directly within the viewer's window by setting `display: flex;`, `justify-content: center;`, and `align-items: center;` on the document body.
* **Geometric Shapes**: Converts flat structural elements into perfect circular celestial spheres using full `border-radius: 50%;` configurations.
* **Cosmic Color Palette**: Employs high-contrast space tones, including `#0b0f19` (Midnight Blue Void), `#2575fc` (Electric Blue Planet), and `#f4f4f4` (Soft Off-White Crust).

---

## 🛠️ Usage

To view the animation loop locally:
1. Save the HTML markup source as `index.html` and the companion cascading styles code as `styles.css` within a single working folder.
2. Launch `index.html` inside any modern desktop or mobile web browser.

---

## ⚙️ Technical Details

* **Core Animation Timing**: `5s` loop cycle duration with a persistent `linear` velocity tracking profile.
* **Canvas Grid Bounds**: Main space layout frame locked at `200px` by `200px`.
* **Planetary Diameters**:
    * **Earth Element**: `100px`
    * **Moon Element**: `30px`
* **Glow Strengths**: Blue structural planetary halo offset at a `20px` radius; white lunar glow offset at a `10px` radius.
