# Playing Cards Lab Project

This project is a web-based **Playing Cards Layout** created as part of an advanced CSS Flexbox alignment and structural positioning lab. It demonstrates clean multi-axis item positioning, independent flex alignments, and responsive grids to render realistic poker-style playing cards using pure HTML and CSS.

## Features

*   **Advanced Flexbox Matrix Architecture**: Leverages standard Flexbox configurations across different nesting depths—managing the page container, the multi-column internal card grid, and the vertical suit-stacking mechanics simultaneously.
*   **Independent Cross-Axis Alignment**: Utilizes distinct `align-self` rule values to precisely distribute structural rank indicators across separate corners without hardcoded positional offsets:
    *   **Top-Left Rank**: Locks tightly to the upper layout rim via `flex-start`.
    *   **Center Symbol Cluster**: Anchors seamlessly in the geographic middle via `center`.
    *   **Bottom-Right Rank**: Drops completely to the lower layout edge via `flex-end`.
*   **Rotated Bottom Indices**: Employs a `transform: rotate(180deg)` structural modification rule explicitly on the lower-right indices to naturally recreate the inverted upside-down layout of physical playing cards.
*   **Theme and Suit Coloring**: Dynamically switches typography text color profiles between crisp charcoal neutral (`#333`) and vivid crimson red (`#e74c3c`) using secondary modifier classes (`.red`) based on the active suit type.
*   **Fluid Flow Grid Wrappers**: Configures automatic, multi-row flex wrapping (`flex-wrap: wrap`) paired with custom element spacing gaps (`gap: 20px`) to preserve uniform layout safety across multiple screen form factors.

## Code Structure

### HTML Components
*   `<main id="playing-cards">`: The primary outer gallery viewport container that balances responsive card wrap distributions.
*   `<div class="card">`: Recreates the individual physical card templates, handling the white surface backgrounds, margins, and curved border footprints.
*   `<div class="left">` & `<div class="right">`: Houses duplicating textual suit ranks (Ace of Spades, King of Hearts, Queen of Diamonds) displayed in the margin corners.
*   `<div class="middle">`: Core canvas box handling the specific multi-item layout grids for central suit symbols.

### CSS Styling
*   **Centering Mechanics**: Anchors the root wrapper element directly in the middle of the user's viewport by pairing a flex display with full-height view properties (`min-height: 100vh`).
*   **Dimensional Shadows**: Applies soft dark blur drop-shadow overlays (`rgba(0,0,0,0.5)`) below the card surfaces to add visual depth against the dark background.
*   **Relative Font Resizing**: Combines readable relative sizes (`1.2rem` text for indexing indicators) with magnified outputs (`2.5rem` for primary central icons) to generate a clear visual hierarchy.

## Usage

To view the playing cards layout, make sure your HTML script and `styles.css` file are located in the exact same workspace directory, then run the HTML document inside any modern web browser.

## Technical Details

*   **Font Typography**: 'Segoe UI', Tahoma, Geneva, Verdana, Sans-serif system default.
*   **Card Proportions**: `150px` width by `220px` height.
*   **Corner Radii**: Rounded profiles secured at `10px`.
*   **Palette Coordinates**: Dark void backdrop (`#1a1a1a`), Clean paper face (`#ffffff`), Core index ink (`#333`), Red suit hue (`#e74c3c`).
