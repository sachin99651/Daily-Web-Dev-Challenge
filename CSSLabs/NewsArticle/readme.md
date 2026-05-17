# The Daily Chronicle - Newspaper Layout

This project is a CSS-focused exercise in creating a classic newspaper layout. It demonstrates advanced typography control, pseudo-elements, and the use of relative units to create a readable, structured design.

## Key Features

*   **Drop Cap Styling**: Utilizes the `::first-letter` pseudo-element to create a large, bold starting character for the lead paragraph.
*   **Typography Hierarchy**: Combines Google Fonts ('Open Sans') with traditional serif fonts ('Times New Roman') to distinguish between the masthead and the body text.
*   **Newspaper Formatting**: Implements `text-align: justify` and `text-indent` to replicate the look of a printed broadsheet.
*   **Double Border Masthead**: Uses `border-bottom: 4px double` to create the iconic traditional newspaper nameplate style.

## Technical Skills Applied

### Advanced Typography
The project uses a mix of `em` and `rem` units to ensure a scalable and consistent hierarchy:
```css
.name {
    font-size: 2rem; /* Scaled relative to the root font size */
}
.headline {
    font-size: 2em; /* Scaled relative to the container font size */
}
