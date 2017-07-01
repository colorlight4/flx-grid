# 3. the fancy arguments concept
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