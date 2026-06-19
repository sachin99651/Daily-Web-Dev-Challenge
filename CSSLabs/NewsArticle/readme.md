# The Daily Chronicle - Newspaper Layout

This project is a CSS-focused layout exercise designed to recreate a classic newspaper broadsheet. It demonstrates advanced typography hierarchy, pseudo-element selectors, and the strategic use of relative units to create a highly readable, structured print-style design.

## 🚀 Key Features

* **Drop Cap Styling**: Utilizes the `::first-letter` pseudo-element to create a large, bold, and floated starting character for the lead paragraph.
* **Typography Hierarchy**: Pairs high-contrast font families to distinguish between the modern, striking masthead and the traditional, readable body text.
* **Newspaper Formatting**: Implements `text-align: justify;` and paragraph `text-indent` to flawlessly replicate the iconic columns of a printed broadsheet.
* **Double-Border Masthead**: Uses custom border properties (`border-bottom: 4px double;`) to establish the iconic traditional newspaper nameplate style.

---

## 📁 Code Structure

### HTML Components
* `<div class="header">`: Contains the newspaper nameplate (masthead), issue date, and price tag lines.
* `<h2 class="headline">`: Acts as the primary visual anchor for the breaking news section.
* `<p class="story">`: Implements structured paragraph tags containing the article text and editorial data.

### CSS Styling
* **Text Alignment**: Leverages justification mechanics alongside specific margin spacing to eliminate uneven text gaps.
* **Relative Sizing**: Combines `em` and `rem` scaling foundations to maintain responsive element relationships across varying viewports.
* **Pseudo-Class Overlays**: Targets isolated text segments to add drop caps and specific formatting without cluttering the HTML markup.

---

## 🛠️ Technical Skills Applied

### Advanced Typography
The project deliberately uses a mix of `em` and `rem` units to ensure a perfectly scalable and consistent typographic hierarchy:

```css
.name {
  font-size: 2rem; /* Scaled relative to the root font size */
}

.headline {
  font-size: 2em; /* Scaled relative to the container element font size */
}
