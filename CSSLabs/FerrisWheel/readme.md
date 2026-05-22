# Ferris Wheel Project

This project is a web-based, animated **Ferris Wheel** simulation built as part of a semantic HTML and advanced CSS animation lab. It uses pure HTML and CSS to create a multi-layered structure with synchronized keyframe animations, structural mathematical alignments, and interactive color shifts.

## Features

*   **Fluid CSS Keyframe Animations**: Drives a continuous, full-circle structural rotation (`0%` to `360deg`) on the entire wheel layout using an infinite, linear timing loop.
*   **Gravity-Compensated Cabins**: Employs a counter-rotational animation strategy on individual passenger units (`0%` to `-360deg`). This ensures the cabins stay upright and look like they are reacting naturally to gravity as the main structure spins.
*   **Dynamic Background Color Shifting**: Uses keyframe intervals (`0%`, `25%`, `50%`, `75%`, `100%`) within the cabin sub-animation to cycle background colors from bold red to warm yellow and vibrant purple.
*   **Rotational Spoke Matrices**: Positions six distinct geometric lines precisely across the center of the wheel container by locking their shared `transform-origin` coordinates to `0% 0%` and applying staggered 60-degree rotation offsets.
*   **Mathematical Layout Placement**: Maps six distinct passenger cabins in a symmetrical ring using strict percentage layout positions (`top`, `left`, and `right`) alongside a shared `50% 0%` structural rotation anchor.

## Code Structure

### HTML Components
*   `<div class="wheel">`: The outer structural circle acting as the main chassis and core rotating container.
*   `<span class="line">`: Flat structural bars mapping across the center axis to build the spokes of the wheel.
*   `<div class="cabin">`: Component elements serving as individual passenger seats that travel and rotate along the wheel's edge.

### CSS Styling
*   **Responsive Vector Sizing**: Leverages viewport-width units (`55vw`) for fluid rendering, backed by absolute boundaries (`max-width: 500px`) to prevent the graphic from growing too large on wider desktop screens.
*   **Advanced Selector Mechanics**: Uses structural `:nth-of-type()` layout filters to easily target specific spokes and cabins for isolated rotation or absolute positioning.
*   **Precision Absolute Positioning**: Anchors lines and shapes using absolute coordinate overlays paired with smooth `ease-in-out` timing profiles to mimic the physical weight changes of a theme park ride.

## Usage

To run the animated Ferris Wheel, save the provided HTML source structure as `index.html` and the companion styling declarations as `styles.css` in the same directory. Then, open `index.html` inside any modern web browser to watch the animation run.

## Technical Details

*   **Core Animation Loop Duration**: `10s` (Infinite iteration)
*   **Spoke Rotational Intervals**: Staggered increments of `60deg` (ranging from `0deg` to `300deg`)
*   **Chassis Bounds**: Round circle layout (`border-radius: 50%`) with max limits locked at `500px` by `500px`.
*   **Animation Profiles**:
    *   Main Wheel Structure: Continuous `linear` speed profile.
    *   Passenger Cabins: Varied `ease-in-out` speed profile with automatic background adjustments.
