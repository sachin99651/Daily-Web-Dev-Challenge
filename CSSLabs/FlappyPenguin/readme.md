# Penguin Character Illustration Project

This project is an interactive, animated **CSS Penguin Illustration** created as part of an advanced vector graphics and keyframe layout module. It uses semantic HTML tags and modular CSS rules to build a complete outdoor winter scene featuring a stylized cartoon penguin character.

## Features

*   **Complex Character Vectoring**: Forms the penguin's features—such as eyes, layered eyelids, multi-part blushing cheek circles, an offset interlocking beak, and a rounded chin contour—using calculated `border-radius` shaping matrices.
*   **Dynamic CSS Interaction**: Implements a smooth 1-second `:active` transition utility that scales the entire penguin up by 150% (`transform: scale(1.5)`) upon a mouse click or hold, while updating the screen pointer to a `not-allowed` indicator.
*   **Keyframe Wave Animation**: Features a 3-second looping keyframe workspace (`@keyframes wave`) on the left flipper using staggered percentage rules (`10%`, `20%`, `30%`, `40%`) alongside flipped coordinate mirrors (`scaleX(-1)`) to animate a greeting gesture.
*   **Layered Environmental Depth**: Establishes strict forward-to-back sorting hierarchies across the canvas using relative and absolute `z-index` properties. This groups the components cleanly: background sun (`z-index` unassigned), background mountain (`z-index: 1`), foreground mountain (`z-index: 2`), layout ice ground (`z-index: 3`), and the interactive character (`z-index: 4`).
*   **Pseudo-Element Shading Layer**: Leverages a `::before` pseudo-element overlay on the penguin's lower torso to cast an automatic 70% opacity skin tint over the underbelly area.

## Code Structure

### HTML Components
*   `<div class="left-mountain">` & `.back-mountain`: Provide backdrop geometry using custom skew adjustments and 45-degree angle adjustments.
*   `<div class="sun">`: A simple circular layout positioned off-screen using absolute top-right coordinate boundaries.
*   `<div class="penguin-head">` & `.penguin-body`: Serve as primary structural canvas cells that house child face elements and graphic indicators.
*   `<div class="shirt">`: Injects customized typography blocks mapping a text badge and a Unicode heart icon over the upper torso layout.

### CSS Styling
*   **Root Theme Properties**: Organizes universal color settings using semantic custom variables (`--penguin-face: white`, `--penguin-picorna: orange`, and `--penguin-skin: gray`).
*   **Global Layout Boundaries**: Sets up a lock on the viewport (`width: 100%`, `height: 100vh`) with an `overflow: hidden` declaration to clip accidental scrolling offsets.
*   **Complex Color Traverses**: Blends multiple linear color stops (like `rgb(134, 133, 133) 0%`, `rgb(234, 231, 231) 25%`, and `white 67%`) inside 45-degree and 90-degree vector gradients to give the environment realistic lighting depth.

## Usage

To display this animated graphic illustration, save the markup structure as `index.html` and the accompanying stylesheet properties as `styles.css` within a single working folder. Then, open `index.html` inside any standard web browser.

## Technical Details

*   **Canvas Element Proportions**: Character bounded inside a `300px` by `300px` reference window.
*   **Animation Profiling**: Loop time set to `3s` with a constant `linear` configuration.
*   **Active Scaling Modifiers**: `1.5` magnification coefficient with a `1s ease-in-out` transitional curves.
