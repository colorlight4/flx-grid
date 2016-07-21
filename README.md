# flx-grid-scss
A small flexbox based grid system.

[![Code Climate](https://codeclimate.com/github/colorlight4/flx-grid.scss/badges/gpa.svg)](https://codeclimate.com/github/colorlight4/flx-grid.scss) [![GitHub release](https://img.shields.io/github/release/colorlight4/flx-grid.scss.svg)](https://github.com/colorlight4/flx-grid.scss) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/colorlight4/flx-grid.scss/master/LICENSE)

- **[Quick Start](https://github.com/colorlight4/flx-grid.scss/#user-content-quick-start)**
- **[Documentation](https://github.com/colorlight4/flx-grid.scss/#user-content-documentation)**

## Features:

- grid mode (classical grid calculator, read the **[Quick Start](https://github.com/colorlight4/flx-grid.scss/#user-content-quick-start-guide)**)
- experimental mode (*caution: safety not guaranteed* - supports relative, fix & flexible item widths)
- "fancy" arguments
- nested grids
- variable flow directions
- scalable number of gird columns
- scalable gutter margins (vertical & horizontal)

## Install
```sh
bower install flx-grid-scss
# or 
npm install flx-grid-scss
```

## Requirements
- Sass 3.4 +
- [flexbox support](http://caniuse.com/#search=flex)
- [calc() support](http://caniuse.com/#search=calc)

## Quick Start

##### Default values:
- 12 columns per container
- 10px margin between each column

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
  box-sizing: border-box;
  direction: ltr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  margin:          0px;
  margin-right:   10px;
  margin-bottom:  10px;
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

## Documentation
1. values
	- methodical 
		- flx-mode
		- flx-direction
	- mathematic
		- flx-units
		- flx-width
		- flx-margin
		- flx-margin-b
		- flx-last
2. mixins
	- flx-container
	- flx-item
	- flx-last
3. the *fancy* arguments concept
4. seperation
5. prefixes

- - -

### 1. values

- 

#### methodical

#### flx-mode
*type:* keyword <br>
*default:* grid

**grid** - classical grid calculator <br>
**experimental** - supports relative, fix & flexible item widths, but might be buggy

-

#### flx-direction
*type:* keyword <br>
*default:* row

Defines the direction and axis of the grid flow.
Is equal to the flex-direction property (- fixed to ltr).

-

### mathematic

### flx-units
*type:* number <br>
*default:* 12

Defines the number of columns (or rows) within the grid.

-

### flx-width
*type:* number, length & percentage or keyword <br>
*default:* undefined (have to be defined as argument)

Defines the number of columns a item spans.

*grid mode:* only numbers are valid

*experimental mode:* number, length & percentage or „flex“ as keyword works. „Flex“ set an item to a self sizing flexbox. Notice that in *experimental mode* the *flx-width* must be the first argument given (to a flx-item mixin).

-

#### flx-margin
*type:* length & percentage <br>
*default:* 10px

Defines the margin between two grid items, in direction of grid flow (direction). All valid margin values works.

*Notice that in „column“ and „column-reverse“ percentages break the grid*

-

#### flx-margin-b
*type:* length & percentage <br>
*default:* undefined ( - equals flx-margin if undefined)

Defines the margin between two grid items, parallel to direction of grid flow (direction). All valid margin values works.

-

##### flx-last
*type:* number & keyword <br>
*default:* undefined

Can be given to set a :nth-child() pseudo-class to the flx-last mixin. All valid :nth-child() values works.

- - -

#### 2. mixins

##### flx-container
```scss
@include flx-container();
```
*wrapper mixin* - needs to be include in any wrapper that contain grid elements

**possible arguments:**
- flx-units
- flx-direction
- flx-mode
- flx-margin
- flx-margin-b

-

##### flx-item
```scss
@include flx-item();
```
*grid element mixin* - declare a element as a grid item and defines the number of columns it should span.

**required arguments:**
- flx-width

**possible arguments:**
- flx-units
- flx-margin
- flx-margin-b

-

##### flx-last
```scss
@include flx-last();
```
*“end of line“ reset mixin* - resets the margin of the item it’s given to. In `flx-mode: grid` needs to be included to the last item of each row.

**possible arguments:**
- flx-last

- - -

### 3. the fancy arguments concept
This means the order in wich the arguments have to be given to the mixin only depends on the order of values with the same type and that arguments can be left out if they needn’t to be adjust.

Examples:
```scss
@include flx-container(14 column 20px);
// 14 = flx-units, column = flx-direction, 20px = flx-margin

@include flx-container(20px column 12 experimental);
// 20px = flx-margin, column = flx-direction, 12 = flx-units, experimental = flx-mode

// (both perfectly valid)
```

```scss
@include flx-item(20px 1 14);
// 20px = flx-margin, 1 = flx-width, 14 = flx-units
// (valid)

@include flx-item(14 1);
// 14 = flx-width, 1 = flx-units
// (breaks because 14 becomes fix-width)
```

-

### 4. seperation
Because of the fancy arguments concept arguments may not be separated with a comma. 

Example:
```scss
@include flx-container(14 column);
// (valid)

@include flx-container(12, experimental);
// (invalid)
```

- - -

#### 5. Prefixes
flx-gird-scss dosen’t provides prefixes (e.g. `-ms-` or `-webkit-`) as it’s developed with modern sass/front-end workflows (using something like [autoprefixer](https://github.com/postcss/autoprefixer)) in mind.
