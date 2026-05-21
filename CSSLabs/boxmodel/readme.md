# Rothko Painting Project

This project is a web-based tribute to Mark Rothko's abstract expressionist art, created as a CSS styling and layout lab. It uses pure HTML and CSS to simulate a textured, framed canvas with blurred geometric shapes that mimic the soft edges of mid-century color-field paintings.

## Features

*   **Abstract Canvas Simulation**: Recreates Rothko's famous style using three distinct, stacked HTML color blocks (`.one`, `.two`, and `.three`) inside a centralized canvas container.
*   **Realistic Art Framing**: Wraps the art installation in an outer `.frame` element using a thick solid black border and generous internal padding to separate the artwork from the page margins.
*   **Soft Edges & Textures**: Employs structural CSS blur filters (`filter: blur()`) at both the individual element and global canvas levels to capture the characteristic organic, bleeding paint boundaries.
*   **Glowing Ambient Depth**: Implements color-matched box shadows on each shape layer to mimic deep, layered paint on textile canvas.
*   **Organic Imperfections**: Utilizes tiny CSS rotations (`transform: rotate()`) and uneven border-radii (such as `30px 25px 60px 12px` on the bottom block) to break rigid digital geometry and give the blocks a human, hand-painted feel.

## Code Structure

### HTML Components
*   `<div class="frame">`: Acts as the heavy, dark wooden physical outer picture frame surrounding the gallery piece.
*   `<div class="canvas">`: The backing boards hosting the deep background color scheme and bounding structural blurs.
*   `<div class="one">`, `.two`, `.three`: Distinct block layers stacked vertically to build the primary color composition.

### CSS Styling
*   **Dimensions & Offsets**: Blends explicit absolute pixel values (`500px` by `600px` canvas sizing) with adaptive relative sizing rules (`width: 91%`, `height: 28%` on block three) to scale sections proportionally.
*   **Centered Flow Layouts**: Uses auto-margin properties (`margin: 20px auto`) inside a hidden-overflow window to seamlessly center the art pieces inside their frames.
*   **Dynamic Color Palette**: Employs deep earth tones and rich, warm pigments, including rusty orange, deep maroon, crimson red, and an ochre-brown backing layer.

## Usage

To view the painting, make sure your HTML file and `styles.css` file are located together in the same directory, then launch the HTML document in any modern web browser.

## Technical Details

*   **Canvas Grid Proportions**: `500px` wide by `600px` high.
*   **Outer Frame Border**: `50px solid black`.
*   **Visual Filters**: Multi-stage blurring values ranging between `1px` and `2px`.
*   **Color Composition Codes**:
    *   Canvas Background: `#4d0f00` (Dark Mahogany)
    *   Top Shape (`.one`): `#efb762` (Warm Ochre)
    *   Middle Shape (`.two`): `#8f0401` (Deep Madder Red)
    *   Bottom Shape (`.three`): `#b20403` (Bright Crimson)