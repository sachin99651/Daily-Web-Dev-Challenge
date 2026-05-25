# Registration Form Project

This project is a web-based **Registration Form** created as part of an advanced semantic HTML forms and accessible CSS styling module. It features clean grouping, complex field validations, and custom styled input surfaces tailored for an efficient user registration workflow.

## Features

* **Strict Semantic Form Grouping**: Organizes form categories systematically using separate `<fieldset>` containers to break input zones cleanly into personal data, account types, and supplementary media files.
* **Diverse Native Form Inputs**: Combines a wide matrix of web form inputs to optimize data collection, capturing items through free text fields, explicit radio selections, file pickers, numerical age inputs with constraints (`min="13" max="120"`), drop-down options, and multiline text areas.
* **Regex Security Constraints**: Enforces a strict security profile right on the password field using the built-in HTML `pattern="[a-z0-5]{8,}"` attribute, requiring a minimum of eight characters composed exclusively of lowercase letters and numbers from 0 to 5.
* **Responsive Layout Fluidity**: Dictates a highly responsive central form width wrapper (`width: 60vw`) constrained between explicit safety limits (`min-width: 300px` and `max-width: 500px`) to preserve a pristine presentation on any device screen.
* **Custom Overrides for Inline Form Elements**: Uses a dedicated `.inline` configuration class to override default full-width block behaviors on radio and checkbox controls (`width: unset`), ensuring they sit next to their text labels with perfect vertical alignments.

## Code Structure

### HTML Components
* `<form>`: Configured with standard transmission properties mapping data destination routes via `method="post"` and `action` endpoints.
* `<legend>`: Injects accessible field headers explicitly over the segmented radio account matrix.
* `<label for="...">`: Leverages cross-linked structural identifier attributes that tie label elements to explicit input IDs, optimizing tap areas and improving compatibility with assistive screen readers.
* `<textarea>` & `<select>`: Custom multi-row feedback controls containing descriptive placeholder hints.

### CSS Styling
* **Global Typography Theme**: Applies a comprehensive dark theme across the main page body using a crisp off-white font face color (`#f5f6f7`) set against a rich deep navy hue canvas backdrop (`#1b1b32`).
* **Sleek Fieldset Partitions**: Strips away default browser fieldset outlines (`border: none`) and replaces them with an elegant accounting-style bottom border separator (`3px solid #3b3b4f`), while using the `:last-of-type` selector rule to cleanly suppress the divider line on the final group block.
* **Consistent Input Surfaces**: Builds a cohesive, high-contrast terminal theme by replacing light native input surfaces with rich dark background fields (`#0a0a23`) framed by subtle borders.

## Usage

To utilize this registration panel template, bundle the provided markup elements inside an index file named `index.html` and save the accompanying cascade rules as `styles.css` in the exact same workspace directory. Then, open `index.html` inside any modern web browser.

## Technical Details

* **Typography Structure**: Tahoma system font family configured at a `16px` base line scale.
* **Form Dimension Settings**: Responsive fluid flow spanning `60vw` with hard stops locked between `300px` and `500px`.
* **Submit Action Buttons**: Centered layout utilizing `width: 60%` backed by a large text adjustment (`font-size: 1.1rem`).
* **Theme Palette Coordinates**:
    * Global Page Canvas: `#1b1b32` (Midnight Charcoal)
    * Form Fields Infield Fills: `#0a0a23` (Deep Obsidian Blue)
    * Group Partition Borders: `#3b3b4f` (Muted Slate Accent)
    * Text Anchor Links: `#dfdfe2` (Platinum Gray)