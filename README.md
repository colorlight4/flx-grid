# flx-grid
> A small flexbox based grid system.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/colorlight4/flx-grid/master/LICENSE)

- [Quick Start Guide](#user-content-quick-start-guide)
- [Documentation](docs/readme.md)

## Features:

- grid mode (classical grid calculator, read the **[Quick Start](https://github.com/colorlight4/flx-grid/#user-content-quick-start-guide)**)
- experimental mode (*caution: safety not guaranteed* - supports relative, fix & flexible item widths)
- "fancy" arguments
- nested grids
- variable flow directions
- scalable number of gird columns
- scalable gutter margins (vertical & horizontal)

## Install
```sh
bower install flx-grid
# or 
npm install flx-grid
```

## Requirements
- Sass 3.4 +
- [flexbox support](http://caniuse.com/#search=flex)
- [calc() support](http://caniuse.com/#search=calc)

## Quick Start Guide

### Default values:
- 12 columns per container
- 10px margin between each column

### Container
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
  box-sizing: border-box;
  direction: ltr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

### Item
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
  margin:          0px;
  margin-right:   10px;
  margin-bottom:  10px;
}
```

### Last
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
