# CSS House Painting Project

This project uses HTML and CSS to render a stylized house. It focuses on mastering the relationship between parent and child elements through the use of CSS positioning.

## Core Concepts

*   **Parent-Child Positioning**: The `#house` div is set to `position: relative`, acting as the "anchor" for all internal components (windows, door, roof) which are set to `position: absolute`.
*   **Layering (Z-Index)**: The `#chimney` uses `z-index: -1` to appear behind the house structure, ensuring a realistic overlapping effect.
*   **Coordinate Management**: The use of `top`, `bottom`, `left`, and `right` properties demonstrates how to precisely place UI elements within a fixed-size container.

## HTML Structure

The structure is simple and semantic for a CSS drawing:
- `#house`: The main building frame.
    - `#chimney`: Placed at the top with a negative offset.
    - `#roof`: Styled as a rectangular topper (can be further refined into a triangle).
    - `#window-1` & `#window-2`: Symmetrical window elements.
    - `#door`: Positioned at the bottom center of the house.

## Technical Styling Highlights

### The Building Frame
The house uses a fixed width and height with a dark aesthetic, providing a solid background for the windows and door:
```css
#house {
  position: relative;
  width: 500px;
  height: 400px;
  background-color: #2c3e50;
}
