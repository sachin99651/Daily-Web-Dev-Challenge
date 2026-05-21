This project is a web-based **Balance Sheet** created as part of a semantic HTML and CSS styling lab. It demonstrates advanced CSS layouts, clean financial data presentation, strict accessibility compliance, and unique hard-line linear gradients for row background styling.

## Features

* **Financial Data Presentation**: Displays an organized look at financial metrics across three years (2019, 2020, and 2021) broken down into Assets, Liabilities, and Net Worth.
* **Accessible Design**: Uses an `.sr-only` class to hide descriptive layout texts from visual view while keeping them fully readable by screen readers. Key decorative header elements are explicitly isolated with `aria-hidden="true"`.
* **Sticky Time Navigation**: The year indicator panel (`#years`) uses `position: sticky` to stay locked at the top of the viewport when scrolling through deep financial details.
* **Double Underline Accounting Formatting**: Generates traditional double-underlines on final rows using `border-bottom: 4px double #0a0a23` to accurately reflect accounting standards.
* **Row-Level Visual Fixes**: Leverages subtle background color changes on hovered total items and custom `linear-gradient` backgrounds to segment individual records cleanly.

## Code Structure

### HTML Components
* `<main>` & `<section>`: Define structural semantic wrapper boundaries for document structure.
* `#years`: Houses the visual calendar-year headers mapping above columns.
* `<table>`: Independent modular tables map financial blocks (Assets, Liabilities, Net Worth).
* `<caption>`: Provides descriptive accessible headings for individual data matrices.
* `<span class="description">`: Displays italicized inline accounting item context.

### CSS Styling
* **Layout Engine**: Combines absolute positioning, explicit element dimensions, and Flexbox (`display: flex`) for high-precision content alignments.
* **Typography Hierarchies**: Leverages relative sizing (`rem`, `em`, percentages) alongside custom italicizations for current financial years.
* **Gradient Mechanics**: Employs hard-stop `linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem)` declarations across data rows to produce custom zebra-striping without excess DOM overhead.

## Usage

To view the balance sheet project, ensure both your HTML file and `styles.css` file are located in the exact same directory, then open the HTML file inside any modern web browser.

## Technical Details

* **Font Family**: Sans-serif system default
* **Core Structure Constraints**: 
  * Container Width: `max-width: 40rem`
  * Row Data Spacing Heights: `1.845rem`
* **Theme Palette**: Clean finance-classic color scheme featuring `#0a0a23` (Deep Blue), `#356eaf` (Muted Accent Blue), and `#dfdfe2` (Soft Gray).
"""

with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)
print("File written successfully.")