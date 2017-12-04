# 2. mixins

## grd-container
```scss
@include grd-container();
```
*wrapper mixin* - needs to be include in any wrapper that contain grid elements

**possible arguments:**
- grd-units
- grd-direction
- grd-mode
- grd-margin
- grd-margin-b

-

## grd-item
```scss
@include grd-item();
```
*grid element mixin* - declare a element as a grid item and defines the number of columns it should span.

**required arguments:**
- grd-width

**possible arguments:**
- grd-units
- grd-margin
- grd-margin-b

-

## grd-last
```scss
@include grd-last();
```
*“end of line“ reset mixin* - resets the margin of the item it’s given to. In `grd-mode: grid` needs to be included to the last item of each row.

**possible arguments:**
- grd-last