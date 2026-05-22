# Moon Orbit Animation Project

This project is a web-based **Moon Orbit Animation** created as part of a CSS animations and layout lab. It uses pure HTML and CSS to build a minimalist, looping celestial simulation of the Moon rotating around the Earth in deep space.

## Features

*   **Continuous Keyframe Animation**: Drives a complete, 360-degree rotation (`0%` to `360deg`) on the orbital plane container using an infinite, linear timing profile.
*   **Layered Absolute Overlay Positioning**: Uses standard absolute layouts to keep the central planet, orbit pathway ring, and satellite perfectly stacked together on the canvas.
*   **Combined Transform Alignment**: Handles a common CSS issue where rotation overwrites layout centering by combining both properties (`rotate()` and `translate(-50%, -50%)`) inside a single `@keyframes` workspace.
*   **Luminous Planetary Atmospheric Glows**: Implements custom CSS `box-shadow` properties on the planet and satellite shapes to mimic soft, glowing light scattering in vacuum space.
*   **Dashed Radial Trajectory Guide**: Uses a light, semi-transparent dashed border overlay (`rgba(255, 255, 255, 0.2)`) along a circular container to display a realistic orbital path.

## Code Structure

### HTML Components
*   `<div class="space">`: The parent canvas box that acts as the bounding grid framework for the animation workspace.
*   `<div class="earth">`: Represents the central planet body, complete with dimensional color fields and atmospheric glows.
*   `<div class="orbit">`: The primary animated mechanical track container that actively rotates over time.
*   `<div class="moon">`: Represents the lunar satellite body, absolute-positioned directly along the top rim edge of the rotating track.

### CSS Styling
*   **Flexbox Grid Centering**: Centers the overall display area directly within the viewer's window by setting `display: flex`, `justify-content: center`, and `align-items: center` on the document body.
*   **Geometric Shapes**: Converts flat structural elements into perfect circular celestial spheres using full `border-radius: 50%` configurations.
*   **Cosmic Color Palette**: Employs deep space tones, including `#0b0f19` (Midnight Blue Void), `#2575fc` (Electric Blue Planet), and `#f4f4f4` (Soft Off-White Crust).

## Usage

To view the animation loop, save the HTML markup source as `index.html` and the companion cascading styles code as `styles.css` within a single working folder. Then, launch `index.html` inside any modern desktop or mobile web browser.

## Technical Details

*   **Core Animation Timing**: `5s` cycle duration with a persistent `linear` velocity track.
*   **Canvas Grid Bounds**: Main space wrapper locked at `200px` by `200px`.
*   **Planetary Diameters**:
    *   Earth Element: `100px`
    *   Moon Element: `30px`
*   **Glow Strengths**: Blue structural halo offset at `20px` radius; White lunar glow offset at `10px` radius.
