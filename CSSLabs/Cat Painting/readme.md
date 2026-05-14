# CSS Cat Painting Project

This project is a creative CSS illustration of a cat's face. It demonstrates how to use "Pure CSS" techniques—creating shapes and features using only HTML `div` elements and CSS properties, without any image files or SVGs.

## Core Concepts

*   **Absolute Positioning**: Almost every feature (eyes, nose, whiskers) uses `position: absolute` to be placed precisely within the `cat-head` container.
*   **Border Magic**: The ears and nose are created using the **CSS Triangle** technique, where specific borders are set to `transparent` while one side is colored.
*   **Transformations**: Properties like `rotate()` are used to give the eyes expression and to angle the whiskers and ears naturally.
*   **Border Radiuses**: Custom `border-radius` values are used to create the organic, curved shapes of the head and the inner eyes.

## HTML Structure

The project follows a hierarchical nesting structure:
- `.cat-head`: The main container.
    - `.cat-ears`: Contains the left and right ear structures.
    - `.cat-eyes`: Contains the pupils and highlights.
    - `.cat-nose`: A single triangle-based shape.
    - `.cat-mouth`: Uses curved borders to create a smile.
    - `.cat-whiskers`: Symmetry-based lines for the left and right sides.

## Technical Styling Highlights

### Shaping with Borders
The ears are constructed using large borders and no width/height:
```css
border-left: 35px solid transparent;
border-right: 35px solid transparent;
border-bottom: 70px solid #5e5e5e;
