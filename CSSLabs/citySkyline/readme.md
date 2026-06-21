# City Skyline Illustration Project

This project is a vibrant visual vector artwork of a **City Skyline** built entirely using semantic HTML and CSS properties. Created as part of an advanced layout and responsive design module, it demonstrates depth layering, intricate window matrices through repeating linear gradients, and a dynamic night-to-day color palette switch using CSS media queries.

## 🚀 Features

* **Layered Parallax Depth**: Divides the layout into absolute-positioned background and foreground building layers (`.background-buildings` and `.foreground-buildings`) mapped with a Flexbox chassis to create a realistic architectural parallax effect.
* **Complex CSS Gradient Matrix**: Implements advanced gradient patterns to render building windows and textures without excess DOM clutter:
    * **Radial Gradient Sky**: Renders a glowing sun setting behind coordinates using precise circle radius stops.
    * **Repeating Linear Gradients**: Loops distinct building and window color variables to create multi-row window slots automatically.
* **Geometric Structural CSS Shapes**: Uses transparent border hacks (`border-left` and `border-right: transparent;`) along with custom height metrics to create vector angles, triangles, and slanted roofs.
* **Dynamic Theme Breakpoints**: Implements a media query breakpoint at `1000px` that automatically overwrites global CSS properties, switching the skyline from a vibrant pastel daytime aesthetic to a desaturated gray scale, dark atmospheric evening mode.

---

## 📁 Code Structure

### HTML Components
* `<div class="background-buildings sky">`: The background container that holds the radial gradient sky backdrop along with four distinct background towers (`.bb1` through `.bb4`).
* `<div class="foreground-buildings">`: The foreground structural layer hosting six highly detailed modern skyline architectures (`.fb1` through `.fb6`).
* `<div class="building-wrap">` & `.window-wrap`: Structural grid utilities used to align building tiers, roof setups, and window grids perfectly across the middle vertical axes.

### CSS Styling
* **Global Custom Properties**: Leverages `:root` variables to control the color schemes of buildings (`--building-color1` through `4`) and windows (`--window-color1` through `4`) from a centralized location.
* **Viewport Dimensional Lockdown**: Binds the root document body layout to strict dimensions (`100vh`, `overflow: hidden;`) to prevent viewport scrolling and preserve layout alignment.
* **Asymmetric Placements**: Uses fractional positioning variables (`position: relative; left: 10%;` and `right: 10%;`) to stagger columns and clear up repetitive visual patterns.

---

## 🛠️ Built With

* **HTML5**: Structured semantic templates utilizing clean layout wrappers and structured element cells.
* **CSS3**: Advanced visual styling using dual-stacked repeating gradients, radial background fills, geometric clip boundaries, and automated theme-switching media query rules.

---

## 📂 File Structure

```text
├── index.html   # Main markup scaffolding containing background and foreground structures
└── styles.css   # Main design sheet defining color variables, layer alignments, and gradients
