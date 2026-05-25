# Colored Boxes Layout Project

This project is a web-based **Colored Boxes Layout** created as part of an advanced CSS Flexbox architecture and grid alignment lab. It demonstrates how to control element rendering structures through multi-axis wrapping alignments, variable sizing controls, and programmatic item reordering properties without modifying the original HTML markup sequence.

## Features

* **Non-Linear Element Reordering**: Leverages the CSS `order` property to override the standard HTML document flow. This rearranges the visual display sequence of the cards into a custom order (`box2`, `box1`, `box3`, `box4`, `box5`, `box6`) completely through stylesheets.
* **Dynamic Flex Sizing Distributions**: Combines distinct flex grow and shrink parameters to create an adaptive card matrix:
    * **Proportional Expansion**: `box1` and `box6` feature `flex-grow: 1`, allowing them to stretch and absorb extra remaining space along the row axis.
    * **Prioritized Shrinking**: `box3` uses `flex-shrink: 3`, meaning it contracts three times faster than surrounding peer boxes when horizontal boundaries collapse.
* **Multi-Row Cross-Axis Distribution**: Employs `flex-wrap: wrap` paired with an explicit canvas constraint (`height: 600px`) and `align-content: space-evenly` to cleanly space rows out along the vertical axis.
* **Dual-Layer Flex Nesting**: Uses a secondary `display: flex` with `flex-direction: column` inside the individual box items to center textual headers (`h2`) and color description text labels flawlessly.

## Code Structure

### HTML Components
* `<div class="flex-container">`: The primary parent layout canvas, constraining width distributions and organizing row wrapping workflows.
* `<div class="box">`: Modular element blocks housing text, borders, colors, and specific dimensions.
* `<h2>` & `<p>`: Text elements centered inside each block component.

### CSS Styling
* **Centering Mechanics**: Uses `margin: 20px auto` to keep the primary container aligned in the middle of the user's screen.
* **Sizing Boundaries**: Secures item basis lengths using a strict short-hand property (`flex: 0 0 150px`) paired with an upper ceiling threshold (`max-height: 120px`).
* **Vibrant Pastel Palette**: Maps distinct hex identities across individual blocks, including `#f16e79` (Soft Coral Red), `#f4a261` (Sandy Orange), `#ffd166` (Sun Yellow), `#4caf50` (Leaf Green), `#457b9d` (Steel Blue), and `#3f51b5` (Classic Indigo).

## Usage

To examine this layout project, save the provided HTML source structure as `index.html` and the corresponding styles code snippet as `styles.css` within a single project folder. Then, open `index.html` using any modern web browser.

## Technical Details

* **Primary Wrapper Constraints**: Width restricted to `70%` of the viewport with a fixed height of `600px`.
* **Individual Box Base Width**: `150px`
* **Base Typography Scaling**: `1.125rem` (Bold weight formatting)
* **Outer Structural Padding**: Consistent `10px` tracking thresholds across parent grids.