# 3. the fancy arguments concept
This means the order in wich the arguments have to be given to the mixin only depends on the order of values with the same type and that arguments can be left out if they needn’t to be adjust.

Examples:
```scss
@include grd-container(14 column 20px);
// 14 = grd-units, column = grd-direction, 20px = grd-margin

@include grd-container(20px column 12 experimental);
// 20px = grd-margin, column = grd-direction, 12 = grd-units, experimental = grd-mode

// (both perfectly valid)
```

```scss
@include grd-item(20px 1 14);
// 20px = grd-margin, 1 = grd-width, 14 = grd-units
// (valid)

@include grd-item(14 1);
// 14 = grd-width, 1 = grd-units
// (breaks because 14 becomes fix-width)
```