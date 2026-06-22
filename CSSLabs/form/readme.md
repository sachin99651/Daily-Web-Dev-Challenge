# Registration Form Project

This project is a web-based **Registration Form** created as part of an advanced semantic HTML forms and accessible CSS styling module. It features clean grouping matrices, complex field validations, and custom-styled input surfaces tailored for an efficient user registration workflow.

## 🚀 Features

* **Strict Semantic Form Grouping**: Organizes form categories systematically using separate `<fieldset>` containers to break input zones cleanly into personal data, account types, and supplementary profile files.
* **Diverse Native Form Inputs**: Combines a wide matrix of web form elements to optimize data collection, capturing input through free text fields, explicit radio selections, file pickers, numerical age inputs with constraints (`min="13" max="120"`), drop-down menus, and multiline text areas.
* **Regex Security Constraints**: Enforces a strict security profile directly on the password field using the built-in HTML `pattern="[a-z0-5]{8,}"` attribute, requiring a minimum of eight characters composed exclusively of lowercase letters and numbers from 0 to 5.
* **Responsive Layout Fluidity**: Dictates a highly responsive central form width wrapper (`width: 60vw;`) constrained between explicit safety boundaries (`min-width: 300px;` and `max-width: 500px;`) to preserve a pristine presentation on any device screen.
* **Custom Overrides for Inline Form Elements**: Uses a dedicated `.inline` configuration class to override default full-width block behaviors on radio and checkbox controls (`width: unset;`), ensuring they sit perfectly aligned next to their text labels.

---

## 📁 Code Structure

### HTML Components
* `<form>`: Configured with standard transmission properties mapping data destination routes via `method="post"` and explicit `action` endpoints.
* `<legend>`: Injects accessible field headers explicitly over the segmented radio account matrices to organize inner choices.
* `<label for="...">`: Leverages cross-linked structural identifier attributes that tie label elements to explicit input `id` attributes, optimizing target tap areas and improving compatibility with assistive screen readers.
* `<textarea>` & `<select>`: Custom multi-row feedback controls containing descriptive placeholder hints.

### CSS Styling
* **Global Typography Theme**: Applies a comprehensive dark theme across the main page body using a crisp off-white font face color (`#f5f6f7`) set against a rich deep navy hue canvas backdrop (`#1b1b32`).
* **Sleek Fieldset Partitions**: Strips away default browser fieldset outlines (`border: none;`) and replaces them with an elegant accounting-style bottom border separator (`3px solid #3b3b4f;`), while using the `:last-of-type` pseudo-class to cleanly suppress the divider line on the final group block.
* **Consistent Input Surfaces**: Builds a cohesive, high-contrast terminal theme by replacing light native input backgrounds with rich dark fields (`#0a0a23`) framed by subtle, clean borders.

---

## 🛠️ Built With

* **HTML5**: Structured semantic templates utilizing `<form>`, `<fieldset>`, `<legend>`, `<label>`, and specialized inputs to optimize data capture.
* **CSS3**: Visual design rules using fluid layout parameters, pattern validation styles, property overrides, and structural element isolation rules.

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding containing the grouped accessible inputs
└── styles.css   # Main design parameters defining theme variables, field borders, and button elements
