# Game Settings Panel Project

This project is a web-based **Game Settings Panel** created as part of an advanced forms and interactive UI element customization lab. It demonstrates how to style native form controls using pure CSS overrides, modify user input behaviors, and configure custom styling states without relying on heavy JavaScript dependencies.

## 🚀 Features

* **Custom Checkbox Overrides**: Utilizes the CSS `appearance: none;` property to strip away default operating system styling on checkbox inputs, paving the way for a fully customized visual design.
* **Pure CSS Interactive States**: Leverages pseudo-classes like `:checked` to dynamically morph element background fills and border weights once a user toggles an option.
* **Pseudo-Element Checkmarks**: Uses a generated dynamic `::after` pseudo-element to inject a custom bold checkmark symbol (`"✓"`) directly into active inputs, centering it cleanly with explicit line-height and alignment configurations.
* **Tactile Hover Feedback**: Implements a uniform `transition: all 0.3s;` duration combined with `cursor: pointer;` triggers across selection labels to greatly improve the tactile feel of the interface.
* **Clean Settings Layout**: Arranges settings selections as distinct block elements with explicit margins (`margin-right: 15px;`), perfectly aligning the text prompts with the custom checkbox indicators.

---

## 📁 Code Structure

### HTML Components
* `<div class="settings-card">`: Acts as the centered visual control board container, complete with curved corners and prominent container shadows.
* `<label>`: Text description wrappers mapping settings options (Sound Effects, Background Music, Hard Mode, Haptic Feedback). Wrapping inputs directly inside labels expands the active clickable target hit area.
* `<input type="checkbox" />`: Native data toggle nodes stripped down and custom-rebuilt via stylesheet properties.

### CSS Styling
* **Layout Adjustments**: Centers the global canvas framework cleanly inside the screen viewport by leveraging viewport heights (`100vh`) paired with structural flex or auto-margin controls.
* **Custom Geometric Sizing**: Locks individual checkbox sizes to a distinct square profile (`width: 20px;`, `height: 20px;`) and softens the sharp corners using a subtle `border-radius: 4px;`.
* **Consistent Vertical Alignment**: Leverages `vertical-align: middle;` on checkbox inputs to ensure they line up with text descriptions seamlessly across different device screen sizes.

---

## 🛠️ Built With

* **HTML5**: Clean structure utilizing structured component divisions (`<div>` tags) and contextual semantic labels to optimize form interaction.
* **CSS3**: Layout design utilizing custom UI appearance overrides, dynamic checked states, transition animations, and pseudo-element content injections.

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding containing the custom checkbox elements
└── styles.css   # Main design sheet defining custom inputs, hover states, and color palettes
    * Interactive Border Frame: `#f1be32` (Gold Amber)
    * Active Checked Fill: `#f1be32` (Gold Amber)
    * Active Checked Border: `#e2a60d` (Dark Amber Accent)
