# flx-grid.scss
A small flexbox based grid system.

- **[Quick Start Guide](https://github.com/colorlight4/flx-grid.scss/#user-content-quick-start-guide)**

## Features:

- grid mode (classical grid calculator, read the **[Quick Start Guide](https://github.com/colorlight4/flx-grid.scss/#user-content-quick-start-guide)**)
- free mode (*experimental* - supports relative, fix & flexible item widths)
- nested grids
- variable flow directions
- scalable number of gird columns
- scalable gutter margins (vertical & horizontal)

## Requirements
- Sass 3.4 +

## Quick Start Guide

#####Default values:
- 12 comluns per container
- 10px margin

#### Container
Include the `flx-container` mixin to your container element.
Notice that, because of the nature of flexbox, every element that shall contain grid-elements, requires `flx-container`.

```scss
.container {
	@include flx-container;
}
```
Compiled CSS:
```css
.container {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: row;
  direction: ltr;
}
```
#### Item
Add `flx-item` to any element to define the number of columns it should span.

```scss
.item {
	@include flx-item(3);
}
```

Compiled CSS:
```css
.item {
  flex-basis: calc(25% - 7.5px);
  margin: 0 10px 10px 0;
}
```
#### Last
The last item in each row needs `flx-last` to reset the spacing margin.

```scss
.item.last {
	@include flx-last;
}
```

Compiled CSS:
```css
.item.last {
  margin-right: 0;
}
```
