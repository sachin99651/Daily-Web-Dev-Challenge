# CSS House Painting Project

This project uses HTML and CSS to render a stylized house. It focuses on mastering the structural relationship between parent and child elements through the practical application of CSS positioning.

## 🚀 Core Concepts

* **Parent-Child Positioning**: The `#house` container is set to `position: relative;`, acting as the coordinate anchor for all internal architectural components (windows, door, roof) which are positioned via `position: absolute;`.
* **Layering (Z-Index)**: The `#chimney` element utilizes `z-index: -1;` to render cleanly behind the main house structure, creating a realistic overlapping depth effect.
* **Coordinate Management**: Uses explicit `top`, `bottom`, `left`, and `right` properties to demonstrate precise, pixel-perfect placement of layout components within a fixed-size container.

---

## 📁 HTML Structure

The markup follows a nested hierarchy designed specifically for strict structural rendering:
* `#house` (The main building frame and positioning anchor)
    * `#chimney` (Placed at the top edge with a negative layer offset)
    * `#roof` (Styled as a structural topper for the layout)
    * `#window-1` & `#window-2` (Symmetrical window elements placed on the facade)
    * `#door` (Positioned precisely at the bottom center of the house container)

---

## 🛠️ Technical Styling Highlights

### The Building Frame
The main house container uses fixed dimensions with a deep background color, providing a high-contrast foundation for the absolute-positioned windows and doors:

```css
#house {
  position: relative;
  width: 500px;
  height: 400px;
  background-color: #2c3e50;
}
