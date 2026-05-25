# Game Settings Panel Project

This project is a web-based **Game Settings Panel** created as part of an advanced forms and interactive UI element customization lab. It demonstrates how to style native form controls using pure CSS overrides, modify user input behaviors, and configure custom styling states without relying on JavaScript dependencies.

## Features

* **Custom Checkbox Overrides**: Utilizes the CSS `appearance: none` property to strip away default operating system styling on checkbox inputs, paving the way for a fully custom design.
* **Pure CSS Interactive States**: Leverages pseudo-classes like `:checked` to dynamically morph element background fills and border weights once a user clicks or toggles an option.
* **Pseudo-Element Checkmarks**: Uses a generated dynamic `::after` pseudo-element to inject a custom bold checkmark symbol (`"✓"`) directly into active inputs, centering it cleanly with line-height adjustments.
* **Tactile Hover Feedbacks**: Implements a uniform `transition: all 0.3s` duration combined with `cursor: pointer` triggers across selection labels to improve the overall tactile feel.
* **Clean Settings Layout Grid**: Arranges settings selections as distinct block elements with explicit right margins (`margin-right: 15px`), perfectly aligning the text prompts with the checkbox indicators.

## Code Structure

### HTML Components
* `<div class="settings-card">`: Acts as the centered visual control board container, complete with curved corners and shadow styling.
* `<label>`: Text description wrappers mapping settings fields (Sound Effects, Background Music, Hard Mode, Haptic Feedback). Wrapping inputs directly inside labels expands the active clickable hit area.
* `<input type="checkbox" />`: Native data toggle nodes stripped down and custom-rebuilt via style properties.

### CSS Styling
* **Layout Adjustments**: Centers the global canvas framework using viewport heights (`100vh`) paired with structural `margin: auto` controls.
* **Custom Geometric Sizing**: Locks individual checkbox sizes to a distinct square profile (`width: 20px`, `height: 20px`) and softens the edges using a subtle `border-radius: 4px`.
* **Consistent Vertical Alignment**: Leverages `vertical-align: middle` on standard inputs to ensure checkboxes line up with text descriptions across different devices.

## Usage

To use this game settings panel interface, place the provided markup structure inside a file named `index.html` and save the styling properties as `styles.css` in the exact same directory. Then, launch `index.html` inside any modern desktop or mobile web browser.

## Technical Details

* **Layout Constraints**: Panel box width limited to a maximum of `250px`.
* **State Animation Profile**: Smooth `0.3s` complete style transition loop.
* **Core Palette Coordinates**:
    * Global Background Canvas: `#f0f0f0` (Light Gray)
    * Interactive Border Frame: `#f1be32` (Gold Amber)
    * Active Checked Fill: `#f1be32` (Gold Amber)
    * Active Checked Border: `#e2a60d` (Dark Amber Accent)