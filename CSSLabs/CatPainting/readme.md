# CSS Cat Painting Project

This project is a creative CSS illustration of a cat's face. It demonstrates how to use "Pure CSS" techniques—creating shapes and features using only HTML `<div>` elements and CSS properties, without any external image files or SVGs.

## 🚀 Core Concepts

* **Absolute Positioning**: Almost every feature (eyes, nose, whiskers) uses `position: absolute;` to be placed precisely within the parent `.cat-head` container.
* **Border Magic**: The ears and nose are created using the **CSS Triangle** technique, where specific borders are set to `transparent` while one side is given color and width.
* **Transformations**: Properties like `transform: rotate();` are used to give the eyes expression and to angle the whiskers and ears naturally.
* **Border Radius Properties**: Custom `border-radius` values are applied to create the organic, curved shapes of the head, pupils, and inner eyes.

---

## 📁 HTML Structure

The project follows a hierarchical nesting structure to maintain clean layout relationships:
* `.cat-head` (The main container)
    * `.cat-ears` (Contains the left and right ear structures)
    * `.cat-eyes` (Contains the pupils and highlights)
    * `.cat-nose` (A single triangle-based shape)
    * `.cat-mouth` (Uses curved borders to create a smile)
    * `.cat-whiskers` (Symmetry-based lines for the left and right sides)

---

## 🛠️ Technical Styling Highlights

### Shaping with Borders
The ears are constructed using large border properties with zero width and height to form perfect triangles:

```css
.cat-ear {
  width: 0;
  height: 0;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 70px solid #5e5e5e;
}
