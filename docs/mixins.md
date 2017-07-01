# 2. mixins

## flx-container
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

## flx-item
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

## flx-last
```scss
@include flx-last();
```
*“end of line“ reset mixin* - resets the margin of the item it’s given to. In `flx-mode: grid` needs to be included to the last item of each row.

**possible arguments:**
- flx-last